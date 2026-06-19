# 表格数据评分（Agent）

用户粘贴表格行、CSV 片段或飞书多维表摘要。**默认由你理解列义与行义**，输出与文字路径相同的 analysis JSON。

## 为什么表格也优先 Agent

表头里的「X / 互动 / 得分」不一定是 AranSee 的 **结构稳定性 / 商业转化重力 / 情感共鸣活性**。须先语义对齐，再交给脚本做坐标与渲染。

## 推荐流程

1. **列语义**：判断每列是否直接对应 X/Y/Z，或需从多列推断  
2. **行评分**：每行输出 `coordinates` 0–100 及简短 `insight`  
3. **渲染（脚本）**：`python scripts/pipeline.py json --input rows_analysis.json`

可选：若只需列对照，可只输出 `{ "column_map": { "X": "列名", "Y": "...", "Z": "..." } }`，再让人执行 `data_mapper --axis-x ...` 或 `pipeline map`（机械层，不再做语义）。

## 何时可用 `pipeline map`（不经你评分行）

- 用户已用你确认过 `column_map`，或列名明确为 AranSee 三轴（如 `X得分/Y得分/Z得分`）  
- 同一表第二次分析（复用已清洗的列义，省 token）

## 输出

与 `score_content.system.md` 相同字段；多条时输出 JSON **数组**。

## 约束

- 禁止把实验自变量（压力、序号等）直接当 Z 商业轴  
- 不输出内部原则名与依据链  
- 代理/推断在 `fusion_notes` 标注（仅 dev 可见）
