---
name: aransee
description: >
  AranSee content diagnosis Skill: paste one post + comments (or a table),
  get a single analysis.json with X structure / Y commercial / Z resonance scores
  and a short next_step. Use when the user asks to 拆解爆款, score content axes,
  or produce AranSee analysis.json. Do not render the 3D sandbox in the Skill path.
---

> 入口：`AGENTS.md` · 契约：`docs/DATA_CONTRACT.md` · 交付物：`docs/DELIVERABLES.md` · SOP：`docs/SOP_CONTENT_LOOP.md` · 边界：`docs/PRODUCT_BOUNDARIES.md`

# AranSee Skill

将**用户提供的单条**帖文/评论/表格 → **三轴分数 + 短诊断**。

## 交付物（必读）

| 承诺 | 不承诺 |
|------|--------|
| **单个 `analysis.json` 对象**（可复制分享） | 2.5D 沙盘 HTML / WebGL 渲染 |
| 字段符合 `docs/DATA_CONTRACT.md` | 长报告、未授权爬取、替用户拍板选题 |
| 一句可执行 `insight.next_step` | 自动发帖、自动出图 |

完整沙盘体验见公开仓 **GitHub Pages** 预烘焙 demo（非本 Skill 运行时产物）。

---

## 三轴

| 轴 | 展示名 | 叙事层（仅展示沙盘） |
|----|--------|----------------------|
| X | 结构稳定性 | 结构带（丝带） |
| Y | 商业转化重力 | 沉积场（球） |
| Z | 情感共鸣活性 | 共振流（粒子） |

---

## 怎么用

1. 读 `prompts/score_content.system.md`（文字）或 `score_table.system.md`（表格）
2. 根据用户粘贴内容输出 **单个** `analysis.json`
3. 交给用户复制；需要空间化时再打开 Pages demo（可选）

**生产回路（拆解→修文→追更）：** `docs/SOP_CONTENT_LOOP.md`

### Skill 样例（JSON only）

| 案例 | 轴型 | 路径 |
|------|------|------|
| 外部拍摄账号 · 云朵帖 | X69 Y24 Z88 | `assets/cases/nature_cloud_photo_01/` |
| 档期科普 · 端午市场 | X71 Y36 Z82 | `assets/cases/market_festival_edu_01/` |

### 展示沙盘（非 Skill 输出）

```
docs/demos/folk_daoxi_series_01/aransee_sandbox.html
```

---

## 输入路由

```
文字（帖+评论）→ Agent + score_content → analysis.json
表格（原始行）  → Agent + score_table   → analysis.json
```

---

## 不做

长报告 · 浏览器实时 LLM · 未授权爬取 · Googo 替用户下结论 · 在 Skill 路径调用渲染管道

公开仓范围：`release/github/MANIFEST.md`。
