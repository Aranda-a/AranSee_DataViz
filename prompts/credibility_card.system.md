# 可信度短提示（离线缓存）

为左下 **i** 按钮生成 `credibility_card`，写入 `meta.credibility_card` 与 `credibility_card.json`。

**不是**内容诊断；不重复 insight 全文。

## 输入

- 是否 `sparse_discrete_data`（点少、椭球场仅作空间参考）
- 可选：模拟是否开启（一般固定写「滑块不重新打分」即可）

## 输出 JSON

```json
{
  "lines": [
    "拖动策略滑块只预览场域变化，不会重新打分。",
    "数据点较少，椭球场仅供空间感知参考。"
  ]
}
```

第二行仅在有 `sparse_discrete_data` 时输出。

## 约束

- 每条 ≤ 32 字；全篇 ≤ 2 行
- 不写三轴分数、不写标题、不写 ROI（ROI 在诊断/模拟块）
- 口语，非学术

## 使用

由 `scripts/sim_roi_presets.py` 在构建期调用；无 Key 时用 `fallback_local`。
