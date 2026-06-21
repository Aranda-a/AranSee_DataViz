# AranSee_DataViz

<div align="right"><strong>中文</strong> · <a href="README.en.md">English</a></div>

<div align="center">
  <img src=".github/assets/googo_ip.svg" width="132" alt="Googo" />
  <br/>
  <sub><a href="https://aranda-a.github.io/AranSee_DataViz/brand/ip-mark.html">点击交互（Googo）</a></sub>
</div>

**AranSee** 是面向创作者的 **AI 内容诊断产品**：帖文与评论场 → **X/Y/Z 三轴判断**，可交互 **2.5D 沙盘**让落位一眼能看见。  
在 Cursor / Claude Code **打开本仓库（项目内 Skill 指令）**——**AI 读懂打分**；**交互沙盘与策略模拟**见下方[在线试玩](#在线试玩)（预烘焙展示）。不是 Chat 长报告，也不是 Agent 型插件。

帮创作者针对**单条帖文 + 评论场**，完成结构 / 商业 / 情感落位与短洞察（Skill 输出 `analysis.json`）；**策略滑块与 ROI 提示**见在线试玩中的预烘焙沙盘。

**AI 内容诊断** | **兼容 Cursor · Claude Code Skill** | **不是 Chat 长报告** | **分数驱动场域 · 可反复对照改稿**

<table align="center">
  <tr>
    <td align="center"><img src="release/github/demos/screenshots/gate_dark.png" alt="暗色主题" width="400" height="222" style="display:block" /></td>
    <td align="center"><img src="release/github/demos/screenshots/gate_light.png" alt="亮色主题" width="400" height="222" style="display:block" /></td>
  </tr>
</table>

---

## 在线试玩

| 展示 | 链接 |
|------|------|
| **系列双锚（推荐）** | [立即探索](https://aranda-a.github.io/AranSee_DataViz/demos/folk_daoxi_series_01/aransee_sandbox.html) |
| 入口导航 | [对比数据系列探索](https://aranda-a.github.io/AranSee_DataViz/demos/) |

---

## 与其他 AI 分析工具有何不同

AranSee 针对的是：**复杂叙事 + 真实评论场**难以及时对齐判断——材料杂、口头讨论耗时间。它把帖文与你粘贴的评论样本收成**可比较的三轴坐标**（`analysis.json`），完整产品形态再驱动可视化对照；不是 Chat 长报告，**也不预测爆款或保证涨粉**。

1. **别读小作文** — 常见做法是 Chat 输出几千字「全面分析」；AranSee 只给 **X 结构 / Y 商业 / Z 情感** 三分 + 几句能直接改稿的洞察  
2. **别只看互动数** — 后台告诉你热不热；AranSee 读**评论在干什么**——追问、玩梗、想买，还是纯感谢  
3. **别只有一个总分** — 结构、商业、情感分开落位，才知道该改叙事还是改转化，而不是笼统「内容不错」  
4. **改稿能对照** — 同一条帖改一版再评，看分数有没有往目标偏（Skill 出 JSON；场子长什么样见[在线试玩](#在线试玩) demo）

**公开 GitHub 仓**覆盖**结构化诊断**（Skill → JSON）；**场域呈现、策略滑块与 ROI 模拟**见[在线试玩](#在线试玩)预烘焙 demo，用于理解完整产品长什么样。

---

## 适用人群

做自媒体的小团队——**帖发了却不知道下一刀改哪里**——AranSee 帮你对齐判断，不是替你做增长预测：

| 你现在的卡点 | 典型内容 | 帮你看清什么 | 公开 Skill 给到哪 |
|-------------|---------|-------------|------------------|
| 互动不错，但说不清该改标题还是改带货 | 清单干货、直播切片 | Y 商业 vs Z 情感谁拖后腿 | 三轴 + `next_step` |
| 评论都在夸，担心结构或信息还有坑 | 科普、日常种草 | X 结构 + 评论是追问还是纯感谢 | 同上 |
| 长解说/系列帖，评论区既玩梗也在吵逻辑 | 深度解说、影评 | X 结构 + 评论场分裂类型 | 同上 |
| 要给客户/同事讲诊断，不能只有聊天记录 | 任意单帖 | 三轴落位，一句话对齐 | JSON 存档；**可视化**见 demo |

**举例（公开展示案例类型，已脱敏）：** 民俗恐怖**深度解说**——评论里既有高热玩梗，也有逻辑追问，光看正文容易高估结构口碑。**端午市场科普帖**——评论刷屏「太有用了」，Z 容易偏高，但 Y 可能仍轻，别误判成带货帖。

> v1：**目前版本一次只处理一条帖**（每组 X/Y/Z 各 0–100）。公开展示含**系列双锚样例**（同系列两篇帖），仅作场层对比演示，**不代表 Skill 已开放系列批量诊断**；正式能力仍以单帖为主。展示案例取自**公开自媒体作品**（脱敏抽样）。**公开 Skill 交付诊断 JSON**；系列对比、沙盘与滑块见 demo 形态。

---

## 场域一览

<table align="center">
  <tr>
    <td align="center"><img src="release/github/demos/screenshots/field_dark_roi.png" alt="暗色 · 诊断与 ROI" width="400" height="222" style="display:block" /></td>
    <td align="center"><img src="release/github/demos/screenshots/field_dark_series_ab.png?v=2" alt="暗色 · 系列双锚" width="400" height="222" style="display:block" /></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><sub>暗色 · 三轴场 + 洞察卡 + 模拟 ROI · 系列锚点 A/B 切换</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="release/github/demos/screenshots/field_light_read_a.png" alt="亮色 · 近距读数" width="400" height="222" style="display:block" /></td>
    <td align="center"><img src="release/github/demos/screenshots/field_light_series_ab.png" alt="亮色 · 系列对比" width="400" height="222" style="display:block" /></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><sub>亮色 · 近距读数 · 系列对比（收官锚点 B）</sub></td>
  </tr>
</table>

---

## 安装

### Cursor

克隆本仓库并在 Cursor 中打开；Agent 会读取 `AGENTS.md` 与 `SKILL.md`。

### Claude Code

```bash
cd ~/.claude/skills
git clone https://github.com/Aranda-a/AranSee_DataViz.git
```

其他支持 Skill 的工具：将本文件夹放到对应 skills 目录，保留 `prompts/` 与 `references/`。

---

## 使用

在对话中说明要复盘一条内容，粘贴帖文与评论摘要。Skill 按协议输出 `analysis.json`（三轴分数 + 短洞察 + 下一步）。

```
帮我用 AranSee 复盘这条解说：结构、商业、情感各落在哪？
【粘贴：视频摘要 + 代表性评论】
```

字段契约：[`docs/DATA_CONTRACT.md`](docs/DATA_CONTRACT.md)

> **公开仓 v1 能力边界：** 安装 Skill 后，你得到的是符合契约的 **`analysis.json`**（三轴分数 + 短洞察 + 下一步）。本页截图与[在线试玩](#在线试玩)中的 **2.5D 场域、策略滑块、ROI 模拟** 来自**预烘焙展示 HTML**，用于理解产品形态；**不会**在你粘贴内容后自动生成可交互沙盘。将你自己的 JSON 渲染为沙盘需完整开发仓（渲染管道未随公开 Skill 发布）。详见 [`release/github/MANIFEST.md`](release/github/MANIFEST.md)。

> **评论抽样说明：** 诊断依据你粘贴的**代表性评论小样本**（建议 8–15 条，尽量含热评、作者回复、追问、玩梗或质疑等类型），**不是**平台全量评论统计。只贴表扬易让 Z 偏高，漏掉质疑易让 X 虚高；换一批样本，分数可能变化。公开展示案例的抽样口径见各案例 `SAMPLING.md`（若仓库含该文件）。

---

## 数据与合规

自备数据（BYOD）；展示案例为脱敏样本，不含可复原链接与创作者真名。详见 [`docs/DATA_COMPLIANCE.md`](docs/DATA_COMPLIANCE.md)。

---

## 文档

| 路径 | 说明 |
|------|------|
| [`SKILL.md`](SKILL.md) | Skill 协议与三轴说明 |
| [`docs/BRAND.md`](docs/BRAND.md) | AranSee + Googo |
| [`docs/PRODUCT_AXES.md`](docs/PRODUCT_AXES.md) | 三轴定义 |
| [`release/github/MANIFEST.md`](release/github/MANIFEST.md) | 公开仓范围 |

---

## License

- **代码与 Skill 文档**：MIT — [`LICENSE`](LICENSE)
- **Googo 视觉资产**：© AranSee — 见 [`NOTICE.md`](NOTICE.md)
