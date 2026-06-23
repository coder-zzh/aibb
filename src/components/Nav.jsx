import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: '首页', anchor: true },
  { to: '/?section=community', label: '社区', hash: '#community' },
  { to: '/?section=projects', label: '项目', hash: '#projects' },
  { to: '/?section=features', label: '生态', hash: '#features' },
  { to: '/about', label: '关于', anchor: false },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/blog?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
    }
  }

  function handleClick(hash, e) {
    const onHome = window.location.pathname.replace(/\/+$/, '') === '/aibb' || window.location.pathname === '/aibb/'
    if (hash && onHome) {
      e.preventDefault()
      scrollToSection(hash.replace('#', ''))
    }
  }

  function toggleDark() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 h-14">
        <Link to="/" className="font-bold text-lg tracking-tight text-[var(--fg)] shrink-0">
          aibb
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(l => (
            l.anchor || l.hash ? (
              <a
                key={l.label}
                href={l.hash || '/'}
                onClick={(e) => handleClick(l.hash, e)}
                className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'text-[var(--fg)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'}`
                }
              >
                {l.label}
              </NavLink>
            )
          ))}
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
            className="h-8 w-8 rounded-md border border-[var(--border)] text-xs text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--fg)] transition-colors cursor-pointer"
            aria-label="切换暗色模式"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 mx-auto">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-4 py-2 md:hidden">
        <div className="flex gap-4 text-xs text-[var(--muted)]">
          {navLinks.map(l => (
            l.anchor || l.hash ? (
              <a
                key={l.label}
                href={l.hash || '/'}
                onClick={(e) => handleClick(l.hash, e)}
                className="hover:text-[var(--fg)] transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <NavLink key={l.label} to={l.to} className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-[var(--fg)]' : 'hover:text-[var(--fg)]'}`
              }>{l.label}</NavLink>
            )
          ))}
        </div>
      </div>
    </header>
  )
}
