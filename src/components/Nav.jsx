import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">aibb</Link>
      <div className="nav-links">
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end={l.to === '/'}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
