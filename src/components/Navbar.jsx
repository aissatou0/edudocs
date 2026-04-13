import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const navStyle = {
    background: '#1a365d',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
  }

  const logoStyle = {
    color: 'white',
    fontSize: '1.4rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#63b3ed' : 'rgba(255,255,255,0.75)',
    fontWeight: location.pathname === path ? '600' : '400',
    fontSize: '0.95rem',
    padding: '6px 14px',
    borderRadius: '6px',
    background: location.pathname === path ? 'rgba(255,255,255,0.1)' : 'transparent',
    transition: 'all 0.2s'
  })

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        <span>🎓</span> EduDocs
      </Link>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Link to="/" style={linkStyle('/')}>📂 Documents</Link>
        <Link to="/checklist" style={linkStyle('/checklist')}>✅ Ma Checklist</Link>
      </div>
    </nav>
  )
}