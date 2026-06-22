# aibb — GitHub Pages 个人博客

场景: 为个人/团队博客搭建独立站点，托管于 GitHub Pages
路径: 新 repo `coder-zzh/aibb`（尚未创建）
决策:
  - **技术栈**: Vite + React，手动搭建（非模板）
  - **内容管理**: 本地 `.md` 文件，用 `import.meta.glob` 加载 + `react-markdown` 渲染
  - **路由**: `react-router-dom`，`BrowserRouter basename="/aibb"`
  - **风格**: 明亮干净主题（白底 #fff，蓝链接 #2563eb，max-width 720px）
  - **部署**: GitHub Actions → `vite build` → push `dist/` 到 `gh-pages` 分支
  - **GitHub Pages 设置**: Source = gh-pages branch, / (root)
  - **base 配置**: `vite.config.js` 中设 `base: '/aibb/'`
状态: ❌ 未执行（已暂停，下次继续）

待办:
  - [ ] `gh repo create coder-zzh/aibb --public`
  - [ ] `npm create vite@latest aibb -- --template react`
  - [ ] `npm install react-router-dom react-markdown remark-gfm`
  - [ ] 实现 Nav / Footer / BlogCard 组件
  - [ ] 实现 Home / Blog / Post 页面
  - [ ] 配置 vite.config.js (base)
  - [ ] 写第一篇示例文章
  - [ ] 创建 `.github/workflows/deploy.yml`
  - [ ] GitHub Settings 中开启 Pages
