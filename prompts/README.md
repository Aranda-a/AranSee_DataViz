# Prompts 索引

**作用**：告诉 Agent「读用户输入后，输出什么 JSON」。  
**不是**：产品品牌文案（见 `docs/BRAND.md`）。

| 文件 | 何时用 | 输出 |
|------|--------|------|
| `score_content.system.md` | 用户贴**帖文 + 评论** | `analysis.json`（三轴 + insight 总分总） |
| `score_table.system.md` | 用户贴**表格/CSV 行** | 同上，或多行数组 |
| `sim_delta.system.md` | **离线**批量生成策略模拟 ROI 文案 | 每条 preset 的 `roi_hint` 等 |
| `credibility_card.system.md` | **离线**生成左下 i 短提示（可选） | `credibility_card` 两行 |

## 流程关系（大白话）

1. **score_content**：「这条内容结构/商业/情感怎么样？」→ 诊断卡原料  
2. **sim_delta**：「如果分数这样变，ROI 优先改啥？」→ 滑块拖动时查表  
3. **credibility_card**：「使用时要注意啥？」→ i 按钮两行说明（不动分数）

构建期：`sim_roi_presets.py` 读 `sim_delta` 逻辑；`insight_card` / `credibility_card` 由同脚本 `fallback_local` 或 LLM 写入 `sandbox.json`。

运行时：HTML **只读** meta，不再调 LLM。

## 约束共性

- 展示轴：Y 商业 / Z 情感（勿写反）
- 口语、短句；禁止向用户暴露内部 rubric
- 完成后：`python scripts/pipeline.py json --input ...`
