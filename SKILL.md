---
name: aransee
description: AI内容三轴诊断产品；Skill分发；2.5D沙盘可视化
---

> Cursor 入口：`AGENTS.md` · 轴与字段：`docs/DATA_CONTRACT.md` · 品牌/IP：`docs/BRAND.md` · 边界：`docs/PRODUCT_BOUNDARIES.md`

# AranSee Skill

**AI 内容诊断产品**（Skill 分发）：将**用户提供的单条**帖文/评论/表格 → **三轴分数 + 短诊断**（`analysis.json`）。  
完整 **2.5D 沙盘**见仓库预烘焙展示 HTML；AI 负责读懂与打分，沙盘负责呈现与模拟。

> **v1：一条内容 = 一个锚点 = 一组 XYZ（各 0–100）。** 多点系列见 `assets/cases/`，仅供**展示**，终端用户请分次评帖。

**诊断文案来源**：用户输入 + `prompts/score_*.system.md`（不是 `docs/BRAND.md`）。  
**BRAND.md**：AranSee / Googo 产品身份与 IP 边界。

---

## 三轴（全项目统一）

| 轴 | 展示名 | 分数键 | 叙事层（展示沙盘内） |
|----|--------|--------|----------------------|
| X | 结构稳定性 | xScore | 结构带 |
| Y | 商业转化重力 | yScore | 沉积场 |
| Z | 情感共鸣活性 | zScore | 共振流 |

内部简称：命(X) / 钱(Y) / 名(Z)。

---

## 怎么用（推荐）

1. 读 `prompts/score_content.system.md`（文字）或 `score_table.system.md`（表格）
2. 根据**用户粘贴的内容**输出 **单个** `analysis.json` 对象
3. 将 JSON 交给用户；字段须符合 `docs/DATA_CONTRACT.md`

**先看展示效果**（无需算分）：

```
assets/cases/folk_film_commentary_01/output/aransee_sandbox.html
```

**完整本地渲染**（仅完整开发仓，未随公开 Skill 包发布）：

```bash
python scripts/render_case.py --case assets/cases/folk_film_commentary_01
```

公开仓范围见 `release/github/MANIFEST.md`。

---

## 输入路由

```
文字（帖+评论）→ Agent + score_content → analysis.json
表格（原始行）  → Agent + score_table   → analysis.json
```

检测（完整开发仓）：`python scripts/input_router.py --input FILE`

---

## 输出契约要点

- 单对象，含 `xScore` / `yScore` / `zScore`（0–100）与 `insight`
- 口语短句；不向用户暴露内部 rubric 名称或加权公式
- 详见 `docs/DATA_CONTRACT.md`

---

## 不做（详见 PRODUCT_BOUNDARIES.md）

长报告 · 浏览器实时 LLM · 未授权爬取他人内容 · Googo 替用户下结论

---

## 深度参考

| 文档 | 内容 |
|------|------|
| `docs/DATA_CONTRACT.md` | JSON 字段契约 |
| `docs/README.md` | 文档索引 |
| `assets/cases/README.md` | 展示案例 |
| `docs/PRODUCT_AXES.md` | 三轴与信号说明 |
| `docs/VISUAL_ARCHITECTURE.md` | 叙事层（完整开发仓） |
| `prompts/README.md` | 各 prompt 何时用 |

Googo IP 详见 `docs/BRAND.md`。
