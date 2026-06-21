# 产品边界（明确不做）

给 Agent 与协作者：避免 scope 膨胀。

---

## 不做

| 项 | 原因 |
|----|------|
| 长策略报告 | 用户要短诊断 + 策略模拟优先一行，不要啰嗦 PDF 式报告 |
| 浏览器内实时调 LLM | 裸 HTML 无法稳定持 Key；策略模拟优先/诊断走离线预设或构建期生成 |
| 自建 HTTP 算分服务 | 用户选择 A 轨本地 + 可选用户自带 Agent（B 轨） |
| 把 Googo 说成评分来源 | IP 是向导，三轴来自内容协议 |
| 向用户暴露内部 rubric / 证据链 | 见 `insight_builder`、prompt 约束 |
| 平台未授权爬取 / 批量抓评论 | BYOD；工具不提供抓取能力 |
| 飞书 OAuth 全链路 | 已 deferred，除非用户明确要求 |

---

## 做（P0）

- **单条内容**算分 + 短洞察（`prompts/score_content.system.md`）
- 本地 pipeline → 单文件 HTML demo
- 策略模拟：滑块改分 → 场域预览；策略模拟优先查 `sim_roi_presets` 表（`roi_hint`）
- 叙事三层可开关：结构带 / 沉积场 / 共振流

## v1 用户输入暂不做

| 项 | 说明 |
|----|------|
| 一次输入多条帖 | 每条独立一组 XYZ；一致靠同一 rubric，不靠合并平均 |
| 多点洞察 / 叙事切换 | 渲染器暂绑 `points[0]`；多点见 `assets/cases/` **展示** |

---

## A 轨 / B 轨

| 轨 | 含义 |
|----|------|
| **A** | 本仓库脚本 + 嵌入 JSON 的静态 HTML，可离线打开 |
| **B** | 用户用自己的 Cursor/Agent 读 `prompts/`，产出 analysis.json 再接 A 轨渲染 |

---

## 相关

- 轴语义：`docs/PRODUCT_AXES.md`
- 品牌/IP：`docs/BRAND.md`（非用户内容文案）
- 公开仓范围：`release/github/MANIFEST.md`
