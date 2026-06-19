# 数据契约（analysis → sandbox → HTML）

面向 Agent 与脚本：字段叫什么、落在哪、谁消费。

---

## 三轴定稿（全项目统一）

| 展示轴 | 内部键 | 分数键 | Three.js | 叙事视觉层 |
|--------|--------|--------|----------|------------|
| X 结构稳定性 | vitality / X | `xScore` | X | X 结构带 `threads` |
| Y 商业转化重力 | commercial / Y | `yScore` | Y（竖） | Y 沉积场 `zDeposit` |
| Z 情感共鸣活性 | resonance / Z | `zScore` | Z（深） | Z 共振流 `particles` |

内部简称：命(X) / 钱(Y) / 名(Z) — **仅内部注释，对用户只说展示轴名。**

---

## analysis.json（算分输出）

由 Agent + `prompts/score_content.system.md` 或 `content_parser` 规则引擎产出。

**v1 用户输入：必须是单个对象（一条帖）。** 不要输出 JSON 数组。仓库内案例包的多点数组仅用于展示 merge。

### 度量一致（0–100）

- 每条内容 **独立** 产出 `coordinates.X/Y/Z.score`，整数 **0–100**
- **不存在**把 A 帖与 B 帖 XYZ「相加、平均、合并」成一组用户分数的规范
- 一致性的含义：**同一套展示轴定义 + 同一 prompt rubric** 评不同帖，使 76 与 72 可比较
- 系列/多点沙盘：各锚点 **各保留自己的三分**；空间位置由 `scores_to_position` 映射，叙事层默认只跟 `points[0]`

```json
{
  "status": "success",
  "analysis_meta": { "title": "...", "vibe_tag": "..." },
  "coordinates": {
    "X": { "score": 0, "visual": "...", "label": "结构稳定性" },
    "Y": { "score": 0, "visual": "...", "label": "商业转化重力" },
    "Z": { "score": 0, "visual": "...", "label": "情感共鸣活性" }
  },
  "render_params": { "material": "...", "lighting": "...", "deformation_scale": 1.0 },
  "insight": {
    "headline": "内容空间诊断",
    "summary": "总述",
    "points": ["分点1", "分点2", "分点3"],
    "conclusion": "收束",
    "next_step": "下一步 1–2 句",
    "implication": "兼容旧字段",
    "insight_brief": "简版摘要"
  }
}
```

---

## sandbox.json（`aransee.sandbox.v1`）

`sandbox_bridge.py` 将 analysis 转为 `points[]` + `meta`。

### meta 常用字段

| 字段 | 来源 | 用途 |
|------|------|------|
| `display_axes` | bridge | 图例文案 |
| `insight_card` | `sim_roi_presets.py` 或 Agent | 右侧内容诊断卡（总分总） |
| `credibility_card` | `sim_roi_presets.py` | 左下 i 提示（短句） |
| `sim_roi_presets` | `sim_roi_presets.py` | 策略滑块就近匹配 ROI |

离线缓存文件（同目录，便于 diff）：

- `insight_card.json`
- `credibility_card.json`
- `sim_roi_presets.json`

---

## 管道命令（folk 案例）

```bash
python scripts/sandbox_bridge.py --input .../analysis.json --output .../sandbox.json
python scripts/sim_roi_presets.py --sandbox .../sandbox.json --inplace
python scripts/sandbox_renderer.py --data .../sandbox.json --output .../aransee_sandbox.html
```

或一键：`python scripts/pipeline.py json --input .../analysis.json`

---

## 视觉参数

分数 → 运动学由 `sandbox_renderer.py` 内 `DATA_NARRATIVE` / `compute*Kinematics` 驱动，**不经过 LLM**。  
详见 `docs/VISUAL_ARCHITECTURE.md`。
