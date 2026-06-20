import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'About',   href: '#about'  },
  { label: 'Skills',  href: '#skills' },
  { label: 'Work',    href: '#work'   },
  { label: 'Certs',   href: '#certs'  },
  { label: 'Contact', href: '#contact'},
]

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection]   = useState('')

  useEffect(() => {
    const onScroll = () => {
      const scrollTop    = window.scrollY
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)

      const sectionIds = NAV_ITEMS.map(n => n.href.replace('#', ''))
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sectionIds[i]); return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: '2.5px', background: 'transparent',
        pointerEvents: 'none',
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'var(--coral)',
          transition: 'width 0.08s linear',
          borderRadius: '0 2px 2px 0',
        }} />
      </div>

      <nav style={{
        position: 'fixed', top: '2.5px', left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.1rem 2.5rem',
        background: 'rgba(250,247,242,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <a href="#hero" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: '1.05rem', color: 'var(--ink)', textDecoration: 'none',
        }}>
          Aryan<span style={{ color: 'var(--coral)' }}>.</span>
        </a>

        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {NAV_ITEMS.map(({ label, href }) => {
            const sectionId = href.replace('#', '')
            const isActive  = activeSection === sectionId
            return (
              <li key={label}>
                <a
                  href={href}
                  style={{
                    color: isActive ? 'var(--coral)' : 'var(--muted)',
                    textDecoration: 'none',
                    fontSize: '0.83rem', fontWeight: 500,
                    letterSpacing: '0.03em', textTransform: 'uppercase',
                    position: 'relative', display: 'inline-block',
                    paddingBottom: '3px',
                    transition: 'color 0.2s',
                  }}
                  className="nav-link"
                >
                  {label}
                  <span style={{
                    position: 'absolute', bottom: 0, left: 0,
                    height: '2px', borderRadius: '2px',
                    background: 'var(--coral)',
                    width: isActive ? '100%' : '0%',
                    transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)',
                  }} className="nav-underline" />
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="/Aryan rane.pdf"
          download
          style={{
            padding: '0.5rem 1.2rem',
            background: 'var(--coral)',
            color: '#fff', fontSize: '0.82rem', fontWeight: 600,
            textDecoration: 'none', borderRadius: '100px',
            fontFamily: 'Syne, sans-serif',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            display: 'inline-block',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,82,26,0.35)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Resume ↓
        </a>
      </nav>
    </>
  )
}

export default Navbar