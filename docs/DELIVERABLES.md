# AranSee 交付物说明（Skill vs 产品）

## Skill 唯一承诺交付物

**`analysis.json`（单个 JSON 对象）**

- 来源：用户提供的**一条**帖文 + 评论（或表格行）+ Agent 读 `prompts/score_*.system.md`
- 必含：`coordinates.X/Y/Z`（0–100）+ `insight`（含可执行 `next_step`）
- 契约：`docs/DATA_CONTRACT.md`
- **不含**：沙盘 HTML、渲染脚本、长报告、图片文件

用户可直接复制分享该 JSON（见外部样例 `assets/cases/nature_cloud_photo_01/output/analysis.json`）。

---

## 非 Skill 交付（完整产品 / 展示）

| 物 | 说明 |
|----|------|
| GitHub Pages 沙盘 | `docs/demos/` 预烘焙 HTML |
| 策略模拟 / 锚点切换 | 展示层；不改变路径 1 真分 |
| 本地 `pipeline.py` 渲染 | **仅完整开发仓**；公开 Skill 包不含 |

---

## 公开 Skill 包应含路径（摘要）

见 `release/github/MANIFEST.md`：`SKILL.md`、`AGENTS.md`、`prompts/`、契约文档、Skill 样例案例（JSON only）、SOP。
