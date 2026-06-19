# 展示用沙盘（GitHub Pages）

**主推荐 demo**：`folk_daoxi_series_01` 系列双锚（与你本地烘焙源一致）。

## 路径

| 用途 | 目录 |
|------|------|
| **GitHub Pages 发布** | `docs/demos/`（Settings → Pages → `/docs`） |
| 截图 | `release/github/demos/screenshots/` |
| 开发仓原始输出 | `assets/cases/*/output/aransee_sandbox.html` |

## 更新烘焙

```bash
# 仅系列双锚
python scripts/bake_github_demos.py --render --primary-only

# 系列 + 单点
python scripts/bake_github_demos.py --render
```

会重渲案例并复制到 `docs/demos/` 与 `release/github/demos/`。

## 在线 URL 形态

```
https://<user>.github.io/<repo>/demos/folk_daoxi_series_01/aransee_sandbox.html
```

只读静态页；数据已内嵌，不依赖 Python 管道。
