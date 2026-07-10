import { Link } from 'react-router-dom'

const columns = [
  {
    title: '产品',
    links: [
      { label: '社区', to: '/?section=community' },
      { label: '项目', to: '/?section=projects' },
      { label: '生态', to: '/?section=features' },
    ],
  },
  {
    title: '关于',
    links: [
      { label: '关于我们', to: '/about' },
      { label: '博客', to: '/blog' },
    ],
  },
  {
    title: '关注',
    links: [
      { label: 'GitHub', to: 'https://github.com/coder-zzh/aibb' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pb-6">
      <div className="mx-auto max-w-5xl px-4 pt-12 pb-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-6 border-t border-[var(--border)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--muted-foreground)]">
          <span>© 2026 aibb. All rights reserved.</span>
          <span className="uppercase tracking-widest text-[var(--muted-foreground)] opacity-40">
            从零开始，构建你的创业蓝图
          </span>
        </div>
      </div>
    </footer>
  )
}
