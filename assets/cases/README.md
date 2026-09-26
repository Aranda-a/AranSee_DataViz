# 案例包（assets/cases）

## 目录

| 案例 | 场景 | 三轴特征 | 点数 |
|------|------|----------|------|
| `nature_cloud_photo_01` | 夏日云朵 · **外部拍摄账号 Skill 样例**（仅 `analysis.json`） | X69 Y24 Z88 高 Z 极低 Y | 1 |
| `market_festival_edu_01` | 端午市场科普 · **Skill 样例**（仅 `analysis.json`） | X71 Y36 Z82 高 Z 低 Y | 1 |
| `folk_film_commentary_01` | 深度解说 + 评论场 | X76 Y81 Z84 均衡偏热 | 1 |
| `folk_film_commentary_02` | 同系列下集收官 · 置顶带货 | X72 Y90 Z81 商业加重 | 1 |
| `folk_daoxi_series_01` | 民俗恐怖双锚（引用 A+B）**展示** | 漂移对比 | 2 |
| `beauty_live_clip_02` | 直播切片 · 情绪主导 | 高 Z（89） | 1 |
| `listicle_hooks_03` | 清单干货 · 结构主导 | 高 X（86） | 1 |
| `account_compare_04` | 同号三帖对比 **展示** | 轴型分散 | 3 |

> **终端用户 v1：只走「点数 = 1」**。多点行仅供求职演示；新建用户案例请输出**单个** `analysis.json` 对象。

每个案例目录建议结构：

```
folk_film_commentary_01/          # 完整展示包（含沙盘）
  raw/
  output/
    analysis.json                 # Skill 交付
    sandbox.json                  # bridge + presets
    aransee_sandbox.html
    ...

nature_cloud_photo_01/            # Skill-only · 外部拍摄账号
market_festival_edu_01/           # Skill-only 包（公开 Skill 真实交付范围）
  raw/
  output/
    analysis.json                 # 仅此文件为 Skill 承诺输出
  CASE.md
  SAMPLING.md
```

生产 SOP：`docs/SOP_CONTENT_LOOP.md` · 交付物边界：`docs/DELIVERABLES.md`

## 新建 / 渲染案例

1. 准备**一条**帖文/评论 → Agent + `prompts/score_content.system.md` → `output/analysis.json`（**单对象**；数组仅展示用 merge）
2. 一键渲染：

```bash
python scripts/render_case.py --case assets/cases/<case_id>
```

或分步：

```bash
python scripts/sandbox_bridge.py --input .../analysis.json --output .../sandbox.json
python scripts/sim_roi_presets.py --sandbox .../sandbox.json --inplace
python scripts/sandbox_renderer.py --data .../sandbox.json --output .../aransee_sandbox.html
```

## 注意

- 标题抽象化，避免未授权真名
- `fusion_notes` 若存在，展示案例里注明「推断字段」
