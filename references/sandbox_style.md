# 2.5D沙盘视觉规范

## 目录
- [设计原则](#设计原则)
- [材质系统](#材质系统)
- [配色方案](#配色方案)
- [动效规范](#动效规范)
- [交互反馈](#交互反馈)
- [性能优化](#性能优化)

## 设计原则

### 核心美学
- **有机动态**: 模拟自然界的物理特性，避免僵硬的几何形态
- **玻璃态材质**: 半透明、折射、边缘光晕效果
- **深度层次**: 通过透明度、模糊、阴影建立空间层次

### 视觉关键词
```
有机 | 流动 | 呼吸 | 透明 | 发光 | 轻盈 | 智能
```

## 材质系统

### 玻璃态材质参数

```javascript
{
    metalness: 0.1,           // 金属度（低金属感）
    roughness: 0.2,            // 粗糙度（光滑）
    transmission: 0.7,         // 透光率
    thickness: 0.5,            // 厚度（影响折射）
    envMapIntensity: 1.0,      // 环境贴图强度
    clearcoat: 1.0,            // 清漆层（高光）
    clearcoatRoughness: 0.1,  // 清漆粗糙度
    transparent: true,         // 启用透明
    opacity: 0.9              // 不透明度
}
```

### 边缘光晕效果

```javascript
// 外发光球体
const glowMaterial = new THREE.MeshBasicMaterial({
    color: baseColor,
    transparent: true,
    opacity: 0.15  // 低透明度产生光晕
});
```

### 材质层级

| 层级 | 用途 | 透明度 |
|-----|-----|-------|
| 核心球体 | 数据点本体 | 0.7-0.9 |
| 光晕层 | 边缘光效果 | 0.1-0.2 |
| 聚类标记 | 中心指示 | 0.5-0.6 |

## 配色方案

### 玻璃态主题 (Glass)

```css
:root {
    --primary: #667eea;           /* 主色调：渐变紫 */
    --secondary: #764ba2;         /* 辅助色：深紫 */
    --accent: #f093fb;            /* 强调色：粉紫 */
    --bg-gradient: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-border: rgba(255, 255, 255, 0.15);
}
```

### 水晶主题 (Crystal)

```css
:root {
    --primary: #00d9ff;            /* 主色调：青蓝 */
    --secondary: #0099ff;         /* 辅助色：电光蓝 */
    --accent: #00ffcc;            /* 强调色：青绿 */
    --bg-gradient: linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%);
    --glass-bg: rgba(0, 217, 255, 0.1);
    --glass-border: rgba(0, 217, 255, 0.25);
}
```

### 极简主题 (Minimal)

```css
:root {
    --primary: #ffffff;           /* 主色调：纯白 */
    --secondary: #cccccc;         /* 辅助色：浅灰 */
    --accent: #888888;            /* 强调色：中灰 */
    --bg-gradient: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
}
```

### 象限配色

| 象限 | 色值 | 语义 |
|-----|------|-----|
| Q1 (社交+修复) | #4ecdc4 | 绿松石：积极正向 |
| Q2 (隐私+修复) | #95e1d3 | 薄荷绿：稳定安心 |
| Q3 (隐私+焦虑) | #ff6b6b | 珊瑚红：风险警示 |
| Q4 (社交+焦虑) | #ffe66d | 明黄色：机会信号 |

### 异常点配色

```javascript
const anomalyColors = {
    low: 0x95e1d3,    // 异常度 0-0.3：薄荷绿
    medium: 0xffe66d,  // 异常度 0.3-0.7：明黄色
    high: 0xff6b6b,   // 异常度 0.7-1.0：珊瑚红
    critical: 0xff4757 // 异常度 >0.9：警示红
};
```

## 动效规范

### 浮动动画

```javascript
// 基础浮动
const floatAnimation = {
    duration: 3000,  // 周期 3秒
    amplitude: 0.05,  // 振幅 0.05 单位
    easing: 'sine'    // 正弦缓动
};

// 位置计算
mesh.position.y = originalY + Math.sin(time + index * 0.5) * amplitude;
```

### 重力模拟

```javascript
const gravitySimulation = {
    strength: 0.3,       // 重力强度 0-1
    damping: 0.05,       // 阻尼系数
    threshold: 0.001     // 停止阈值
};

// 插值更新
mesh.position.y += (targetY - mesh.position.y) * gravityStrength * damping;
```

### 粒子运动

```javascript
const particleConfig = {
    count: 500,           // 粒子数量
    speed: 0.05,          // 旋转速度
    orbitRadius: 3-8,     // 轨道半径范围
    blending: 'additive'  // 混合模式：叠加
};

// 旋转动画
particleSystem.rotation.y = time * speed;
particleSystem.rotation.x = Math.sin(time * 0.1) * 0.1;
```

### 时间参数

| 动画类型 | 周期 | 建议用途 |
|---------|------|---------|
| 微浮动 | 1-2s | 数据点呼吸感 |
| 慢浮动 | 3-5s | 环境氛围 |
| 粒子旋转 | 20s+ | 背景动态 |
| 聚类脉动 | 2s | 焦点引导 |

## 交互反馈

### 悬停效果

```javascript
// 鼠标悬停
mesh.material.emissive = new THREE.Color(0x333333);  // 发光增强
mesh.scale.set(1.2, 1.2, 1.2);  // 放大

// 过渡时间
transition: 0.2s ease-out;
```

### 点击反馈

```javascript
// 选中状态
mesh.material.emissive = new THREE.Color(0x666666);
mesh.material.emissiveIntensity = 0.5;

// 高亮环
const highlightRing = new THREE.Mesh(
    new THREE.RingGeometry(0.25, 0.35, 32),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
);
mesh.add(highlightRing);
```

### 工具提示

```javascript
const tooltipConfig = {
    offsetX: 15,       // X轴偏移
    offsetY: 15,       // Y轴偏移
    fadeIn: 0.2,       // 淡入时间
    maxWidth: 300     // 最大宽度
};
```

## 性能优化

### 几何体复用

```javascript
// 共享几何体
const sharedGeometry = new THREE.SphereGeometry(0.15, 32, 32);

// 材质独立（颜色不同）
dataPoints.forEach(data => {
    const material = new THREE.MeshPhysicalMaterial({
        color: data.color
        // ... 其他参数
    });
    const mesh = new THREE.Mesh(sharedGeometry, material);
});
```

### 实例化渲染

```javascript
// InstancedMesh 用于大量相似物体
const instancedMesh = new THREE.InstancedMesh(
    geometry,
    material,
    dataPoints.length
);

// 更新矩阵
const matrix = new THREE.Matrix4();
dataPoints.forEach((data, i) => {
    matrix.setPosition(data.x, data.y, data.z);
    instancedMesh.setMatrixAt(i, matrix);
});
```

### LOD分级

```javascript
const lod = new THREE.LOD();

// 不同细节层级
lod.addLevel(highDetailMesh, 0);    // 近距离
lod.addLevel(mediumDetailMesh, 5);  // 中距离
lod.addLevel(lowDetailMesh, 10);    // 远距离
```

### 渲染优化参数

```javascript
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));  // 像素比限制
renderer.toneMapping = THREE.ACESFilmicToneMapping;              // 色调映射
renderer.toneMappingExposure = 1.2;                              // 曝光调整
```

### 性能建议

| 场景 | 建议 |
|-----|-----|
| <100点 | 标准渲染，性能无压力 |
| 100-500点 | 考虑InstancedMesh |
| 500-1000点 | 启用LOD，降低粒子数 |
| >1000点 | 数据聚合或分页加载 |
