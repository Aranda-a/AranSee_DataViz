import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

/**
 * 方案 A（物理直觉流）轴语义：
 * - X: Structure（左右）
 * - Y: Gravity（上下，数值越低 -> 越下沉）
 * - Z: Resonance（景深前后，越强扩散越大）
 *
 * 关键设计目标：
 * 1) 计算逻辑与渲染彻底解耦
 * 2) 节点外观可替换（SphereGeometry 只是占位）
 */

/** 原始数据结构：统一 0~100 */
export type AxisRecord = {
  id: string;
  name: string;
  structure: number; // 结构强度: X
  gravity: number; // 引力强度: Y（强引力 = 更下沉）
  resonance: number; // 共振强度: Z
};

/** 计算输出：位置 + 运动参数（纯数学结果） */
export type NodeKinematics = {
  id: string;
  name: string;
  basePosition: THREE.Vector3;
  floatAmplitude: number;
  floatSpeed: number;
  phase: number;
  resonanceRadius: number;
  resonanceSpeed: number;
};

/** 可配置的映射参数 */
export type MappingConfig = {
  xSpread: number;
  yCeiling: number;
  yFloor: number;
  zDepth: number;
};

const DEFAULT_MAPPING: MappingConfig = {
  xSpread: 8, // X 轴左右展开范围
  yCeiling: 3, // 弱引力上浮上限
  yFloor: -4.5, // 强引力下沉下限
  zDepth: 9, // 共振景深扩散尺度
};

/** 安全归一化到 [0,1] */
function norm01(value: number): number {
  return THREE.MathUtils.clamp(value / 100, 0, 1);
}

/**
 * 纯逻辑函数：根据数据计算节点位置/运动轨迹参数
 * 注意：这里不涉及任何 Mesh/Material/Geometry。
 */
export function computeNodePosition(
  record: AxisRecord,
  index: number,
  cfg: MappingConfig = DEFAULT_MAPPING
): NodeKinematics {
  const s = norm01(record.structure);
  const g = norm01(record.gravity);
  const r = norm01(record.resonance);

  // X: 结构 -> 左右分布（-xSpread ~ +xSpread）
  const x = (s * 2 - 1) * cfg.xSpread;

  // Y: 引力 -> 下沉（引力越强，Y 越小）
  // g=0 => yCeiling, g=1 => yFloor
  const y = THREE.MathUtils.lerp(cfg.yCeiling, cfg.yFloor, g);

  // Z: 共振 -> 景深（可在前后扩散）
  const z = (r * 2 - 1) * cfg.zDepth;

  // 上下浮沉动画参数：引力强时仍可有微浮动，但振幅更小
  const floatAmplitude = THREE.MathUtils.lerp(0.5, 0.16, g);
  const floatSpeed = THREE.MathUtils.lerp(0.6, 1.4, 1 - g);

  // 共振会影响轨道半径和速度，用于粒子/线条动态
  const resonanceRadius = THREE.MathUtils.lerp(0.45, 1.8, r);
  const resonanceSpeed = THREE.MathUtils.lerp(0.6, 2.0, r);

  // 固定相位：确保每个节点运动不同步且可复现
  const phase = index * 0.77 + r * Math.PI;

  return {
    id: record.id,
    name: record.name,
    basePosition: new THREE.Vector3(x, y, z),
    floatAmplitude,
    floatSpeed,
    phase,
    resonanceRadius,
    resonanceSpeed,
  };
}

/**
 * 纯渲染函数（占位版本）：
 * - 目前用 SphereGeometry
 * - 未来替换成自定义模型时，仅改这里，不改 computeNodePosition
 */
export function renderNodeMesh(color: string = "#8BCF6A"): React.ReactNode {
  return (
    <mesh>
      {/* 占位几何体：后续可替换 GLTF/自定义几何，动画逻辑不受影响 */}
      <sphereGeometry args={[0.22, 24, 24]} />
      <meshStandardMaterial color={color} metalness={0.12} roughness={0.28} />
    </mesh>
  );
}

type NodeActorProps = {
  kinematics: NodeKinematics;
  color?: string;
};

/** 节点演员：只消费“计算结果”，不关心映射来源 */
function NodeActor({ kinematics, color }: NodeActorProps) {
  const groupRef = useRef<THREE.Group>(null);
  const orbitParticleRef = useRef<THREE.Points>(null);

  // 一条简化共振线（沿 Z 方向），长度受 resonanceRadius 影响
  const resonanceLine = useMemo(() => {
    const len = kinematics.resonanceRadius * 2.4;
    const pts = [
      new THREE.Vector3(0, 0, -len * 0.5),
      new THREE.Vector3(0, 0, len * 0.5),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [kinematics.resonanceRadius]);

  // 单粒子占位（可扩展为 Instanced/Buffer 大粒子系统）
  const particleGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute([0, 0, 0], 3)
    );
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const k = kinematics;

    if (groupRef.current) {
      // 节点上下浮沉：仅在渲染层应用“运动参数”，不改原始 basePosition
      const yOffset = Math.sin(t * k.floatSpeed + k.phase) * k.floatAmplitude;
      groupRef.current.position.set(
        k.basePosition.x,
        k.basePosition.y + yOffset,
        k.basePosition.z
      );
    }

    if (orbitParticleRef.current) {
      // 粒子围绕节点在 XZ 平面公转，共振越强半径/速度越高
      const angle = t * k.resonanceSpeed + k.phase;
      const px = Math.cos(angle) * k.resonanceRadius;
      const pz = Math.sin(angle) * k.resonanceRadius;
      const attr = orbitParticleRef.current.geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      attr.setXYZ(0, px, 0, pz);
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {renderNodeMesh(color)}

      {/* 共振线：与 Z 轴（景深）绑定 */}
      <line geometry={resonanceLine}>
        <lineBasicMaterial color={color ?? "#8BCF6A"} transparent opacity={0.6} />
      </line>

      {/* 动态粒子：占位版本（后续可替换复杂粒子系统） */}
      <points ref={orbitParticleRef} geometry={particleGeo}>
        <pointsMaterial
          color={color ?? "#B8E986"}
          size={0.08}
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export type PhysicalIntuitionSceneProps = {
  data: AxisRecord[];
  mapping?: Partial<MappingConfig>;
};

/** 场景组件：外部传入数据，内部先计算后渲染 */
export function PhysicalIntuitionScene({
  data,
  mapping,
}: PhysicalIntuitionSceneProps) {
  const cfg = useMemo<MappingConfig>(
    () => ({ ...DEFAULT_MAPPING, ...(mapping ?? {}) }),
    [mapping]
  );

  // 第一步：纯数学计算
  const kinematics = useMemo(
    () => data.map((d, i) => computeNodePosition(d, i, cfg)),
    [data, cfg]
  );

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight intensity={0.75} position={[4, 6, 3]} />
      <gridHelper args={[24, 24, "#2D4F36", "#1A2218"]} position={[0, -5, 0]} />

      {kinematics.map((k, i) => (
        <NodeActor
          key={k.id}
          kinematics={k}
          color={i % 2 === 0 ? "#8BCF6A" : "#6B8F71"}
        />
      ))}
    </>
  );
}

/**
 * 完整可运行工作台（React + R3F）
 * 你只需要替换 sampleData，或把该组件接到你的状态管理层即可。
 */
export default function PhysicalIntuitionWorkbench() {
  const sampleData: AxisRecord[] = [
    { id: "n1", name: "A", structure: 82, gravity: 78, resonance: 65 },
    { id: "n2", name: "B", structure: 45, gravity: 25, resonance: 84 },
    { id: "n3", name: "C", structure: 63, gravity: 58, resonance: 40 },
  ];

  return (
    <Canvas camera={{ position: [10, 7, 11], fov: 50 }}>
      <color attach="background" args={["#0F1410"]} />
      <fog attach="fog" args={["#0F1410", 16, 38]} />
      <PhysicalIntuitionScene
        data={sampleData}
        mapping={{
          // 这些参数可作为你后续调参与 A/B 测试入口
          xSpread: 9,
          yCeiling: 3.2,
          yFloor: -4.8,
          zDepth: 10,
        }}
      />
    </Canvas>
  );
}

