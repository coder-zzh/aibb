import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/?section=community', label: '社区', section: 'community' },
  { to: '/?section=projects', label: '项目', section: 'projects' },
  { to: '/?section=features', label: '生态', section: 'features' },
  { to: '/about', label: '关于' },
]

export default function Nav() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  function handleSearch(e) {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/blog?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
    }
  }

  function handleSectionClick(section, e) {
    const path = location.pathname.replace(/\/+$/, '').replace('/aibb', '')
    if (path === '') {
      e.preventDefault()
      const params = new URLSearchParams(location.search)
      if (params.get('section') !== section) {
        window.history.replaceState(null, '', `?section=${section}`)
      }
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function toggleDark() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 h-14">
        <Link to="/" className="shrink-0 group">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold tracking-tight text-[var(--fg)]">OPC</span>
            <span className="hidden sm:inline text-xs font-medium text-[var(--muted-foreground)] tracking-wider">·</span>
            <span className="text-xs font-medium text-[var(--muted-foreground)] group-hover:text-[var(--fg)] transition-colors">ASIA中国社区</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(l =>
            l.section ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => handleSectionClick(l.section, e)}
                className="text-[var(--muted-foreground)] hover:text-[var(--fg)] transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                end
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'text-[var(--fg)]' : 'text-[var(--muted-foreground)] hover:text-[var(--fg)]'}`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <form onSubmit={handleSearch} className="hidden sm:block">
            <Input
              type="search"
              placeholder="搜索文章..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="h-8 w-36 lg:w-48 text-xs"
            />
          </form>

          <button
            onClick={toggleDark}
            className="h-8 w-8 rounded-md border border-[var(--border)] text-xs text-[var(--muted-foreground)] hover:text-[var(--fg)] hover:border-[var(--fg)] transition-colors cursor-pointer"
            aria-label="切换暗色模式"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 mx-auto">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-4 py-2 md:hidden">
        <div className="flex gap-4 text-xs text-[var(--muted-foreground)]">
          {navLinks.map(l =>
            l.section ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => handleSectionClick(l.section, e)}
                className="hover:text-[var(--fg)] transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                end
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'text-[var(--fg)]' : 'hover:text-[var(--fg)]'}`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </div>
      </div>
    </header>
  )
}
