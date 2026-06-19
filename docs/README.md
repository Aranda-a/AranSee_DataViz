# 文档索引

> 产品对外轴语义与字段契约以 **`DATA_CONTRACT.md`** 为准。根目录 `test_data.json` 等旧标签文件见 **`LEGACY_INTERNAL.md`**（保留、不删）。

## 对外 / Agent 可读

| 文件 | 用途 |
|------|------|
| [DATA_CONTRACT.md](./DATA_CONTRACT.md) | `analysis.json` / `sandbox.json` / `meta` 字段与 Y商业·Z情感 轴语义 |
| [PRODUCT_AXES.md](./PRODUCT_AXES.md) | 三轴定义、信号来源、与视觉层对应 |
| [PRODUCT_BOUNDARIES.md](./PRODUCT_BOUNDARIES.md) | 产品明确「不做」清单 |
| [DATA_COMPLIANCE.md](./DATA_COMPLIANCE.md) | 数据、版权与展示案例声明 |
| [BRAND.md](./BRAND.md) | AranSee 产品身份 + Googo IP 边界（**非**用户内容诊断文案） |
| [VISUAL_ARCHITECTURE.md](./VISUAL_ARCHITECTURE.md) | 叙事层、椭球场、启动页与氛围 |
| [MOBILE_LAYOUT.md](./MOBILE_LAYOUT.md) | 移动端三 Tab 布局（`assets/mobile/`） |
| [SPLASH_BACKGROUND.md](./SPLASH_BACKGROUND.md) | 启动页背景分层与 `GATE_RIPPLE` 参数 |
| [DATA_FLOW.md](./DATA_FLOW.md) | 路径 1 / 路径 2 数据流概览 |
| [LEGACY_INTERNAL.md](./LEGACY_INTERNAL.md) | 根目录旧标签、对内思维稿与产品真值的区分 |

## 仓库入口

| 路径 | 用途 |
|------|------|
| `../SKILL.md` | Agent 管道命令 |
| `../AGENTS.md` | Cursor 短入口 |
| `../prompts/README.md` | 用户内容 → 诊断 JSON 协议索引 |
| `../release/github/demos/` | Pages 镜像 + 截图 |
| [demos/](./demos/) | **GitHub Pages** 预烘焙沙盘（主 demo：系列双锚） |
| `../assets/cases/README.md` | 案例包结构与渲染命令 |

烘焙命令：`python scripts/bake_github_demos.py --render`

## 内部（不进公开仓库）

`docs/internal/` — 评分内核、编辑护栏、本地案例真名档等。**整目录已列入 `.gitignore`，勿提交。**  
公开 Skill 交付范围见 `release/github/MANIFEST.md`。
