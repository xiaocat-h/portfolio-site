Published portfolio
Repository: https://github.com/xiaocat-h/portfolio-site
Website: https://xiaocat-h.github.io/portfolio-site/
Publishing source: main branch, repository root.

Portfolio — GitHub 发布与维护

这些文件是可直接发布的静态网站，index.html 已位于根目录。
无需安装软件依赖或编译。网站不包含 WordPress 后台。

新建独立仓库（网页方式）
1. 在自己的 GitHub 账户新建公开仓库，例如 portfolio-site。
2. 解压代码包，将此目录中的所有文件和子目录上传到仓库根目录。
   根目录必须直接看到 index.html、style.css、app.js、content.js、assets 和 demos。
   不要把 ZIP 文件本身上传后当作已部署网站。
3. 提交文件后，仓库 Settings → Pages → Deploy from a branch。
4. 选择 main 和 /(root)，保存。使用 Pages 返回的实际网址。
5. .nojekyll 是空文件，应一并上传；如果上传工具隐藏它，可以在 GitHub 创建该文件。

使用 GitHub Desktop
1. File → New repository，在新的空文件夹中建立 portfolio-site。
2. 把本代码包的文件复制到该仓库文件夹；不要复制旧项目的 .git 文件夹。
3. 在 Desktop 写提交说明并 Commit to main。
4. Publish repository 到自己的账户。免费 Pages 方案使用公开仓库。
5. 按上面的 Settings → Pages 步骤发布。

日常维护
- content.js：姓名、简介、联系方式、项目、证书、学历和机器学习项目。
- assets/：截图与图片；替换图片时同步 content.js 中的路径。
- index.html：页面固定文字与区块。
- style.css：紫色配色、字号与布局。
- demos/tiptoe/：TipToe Soles 静态 Demo。
每次修改后提交并 Push origin；Pages 会按仓库发布设置重新部署。
GitHub 上的修改不会自动同步到当前 ChatGPT Sites 网站。两者是独立发布目标。

使用相对路径：此代码包兼容仓库子路径，Demo 不依赖当前 ChatGPT Sites 域名。
演示页面保留原项目前端行为，购物与结账不处理真实交易。

博客与 WordPress
此版本没有可视化文章编辑器、分类、草稿与发布后台。
GitHub Pages 只运行静态网页，不运行 WordPress 所需的 PHP 和数据库。
想像 WordPress 一样维护文章：
A. 保留这个 Portfolio，另建 WordPress 博客，然后加入 Blog 导航链接。
B. 把整个 Portfolio 重建为 WordPress 的页面、文章和主题结构。
   这份 HTML/JS 压缩包不是可直接安装的 WordPress 主题。
WordPress.com 免费方案可写博客，但有广告，且不允许上传自定义主题或安装插件。
若需要更完整地保留目前布局和交互，需选择支持自定义主题的方案或自托管 WordPress。

官方资料（核查日期：2026-10-20）
GitHub Pages 发布：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
Pages 类型：https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
WordPress 写文章：https://wordpress.com/support/posts/
WordPress 主题上传：https://wordpress.com/support/themes/uploading-setting-up-custom-themes/
