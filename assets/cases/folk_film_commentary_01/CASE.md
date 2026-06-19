# 案例 01 · 公开视频页评论场域分析

> 本案例数据来自**用户自行访问的公开视频页**，评论经**手动抽样与脱敏**后用于 AranSee 演示。  
> 不涉及任何平台未授权爬取；**不包含视频文件与可复原链接**。  
> 算分由路径 1（Agent + `prompts/score_content.system.md`）完成，展示轴为结构稳定性 / 商业转化重力 / 情感共鸣活性。

## 案例概要

| 项 | 说明 |
|----|------|
| 案例 ID | `folk_film_commentary_01` |
| 内容类型 | 恐怖 / 民俗题材电影**深度解说**（系列上集） |
| 创作者人设（抽象） | 有典籍与理论背景的解说型 UP，正片标注参考文献，多线串讲剧情 |
| 发布背景（抽象） | 上期爆款后受众**长期催更**，本期发布即高播放、高互动 |
| 全站评论量级 | 约 **2.9 万**（用户快照；公开包不含全量） |
| 公开样本 | **10 条**（见 `SAMPLING.md`） |
| 抽样声明 | 公开样本**代表评论场域类型分布**，不等同于全量统计结论 |

## 三层输入（对应产品 Layer 0 → 路径 1）

| 文件 | 用途 | 是否喂给 Agent |
|------|------|----------------|
| `raw/video_summary_redacted.md` | 视频与置顶说明的**压缩摘要**（代替视频文件） | **是** |
| `raw/comments_sample.json` | 脱敏评论样本（含层级、点赞） | **是** |
| `raw/engagement_meta.json` | 播放/互动区间（叙事与可信度） | 可选（省 token 可省略） |
| 本文件 `CASE.md` | 人类读的案例说明 | **否**（不进算分 prompt） |

## 路径 1 结果（已生成）

| 文件 | 说明 |
|------|------|
| `output/analysis.json` | 路径 1 算分结果 |
| `output/aransee_sandbox.html` | 沙盘（浏览器打开） |
| `output/tabular_replay.json` | 路径 2 可复跑包 |
| `output/sandbox.json` | 中枢协议 |

**本案例三轴（路径 1）：** X 76 · Y 81 · Z 84（整帖单点，基于 raw 样本与摘要综合）

## 路径 1 → 出图（推荐命令）

```bash
cd AranSee-v3
# 1. Agent 读 prompts/score_content.system.md + raw 下两文件 → 保存 analysis.json
# 2. 渲染
python scripts/pipeline.py json --input ./assets/cases/folk_film_commentary_01/output/analysis.json --output-dir ./assets/cases/folk_film_commentary_01/output
```

自动生成：`output/tabular_replay.json`（路径 2 仅在同一份已算分数据上复跑 HTML 时用）。

## 场域特征（供阅读案例者理解）

- **结构向**：置顶创作说明含多版文案路线；高热评论含剧情逻辑追问与编号长评（见历史抽样档）。
- **共鸣向**：UP 赞过的高热梗评、铁粉「不敢看恐怖但追完全部」、大量催更。
- **争议向**：部分观众认为「流水账」「神学框架突兀」「不如同类作品细腻」——用于避免分数一边倒。

## 版权与隐私

- 公开仓库**不含**创作者真名、账号名、BV 链接、用户原昵称、可搜片单组合。  
- 真名与源链接仅保存在本机 `docs/internal/`（不进 Git）。  
- 本案例为**脱敏展示样例**，不代表创作者授权或合作。详见 [`docs/DATA_COMPLIANCE.md`](../../../docs/DATA_COMPLIANCE.md)。
