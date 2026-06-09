const certs = [
  { icon: '☁️', iconBg: 'var(--amber-light)', title: 'AWS Academy Cloud Foundations', by: 'Amazon Web Services · 20 hours', date: 'April 2026' },
  { icon: '🐍', iconBg: 'var(--green-light)', title: 'Python Essentials 1', by: 'Cisco / OpenEDG Python Institute', date: 'April 2025' },
  { icon: '🌐', iconBg: 'var(--indigo-light)', title: 'Networking Basics', by: 'Cisco Networking Academy', date: 'December 2024' },
  { icon: '🔐', iconBg: 'var(--coral-light)', title: 'Introduction to Cybersecurity', by: 'Cisco Networking Academy', date: 'July 2024' },
  { icon: '⚙️', iconBg: 'var(--cream2)', title: 'Programming Essentials in C (CLA)', by: 'Cisco Networking Academy', date: 'April 2024' },
  { icon: '🎮', iconBg: 'var(--green-light)', title: 'Game Development Using AI', by: 'CogniScience Club, CSI-SAKEC & SAKEC-ACM', date: 'March 2025' },
]

function CertCard({ cert }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'flex-start', gap: '1rem',
        padding: '1.25rem',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        background: 'var(--cream)',
        cursor: 'default',
        transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'rgba(232,82,26,0.3)'
        e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,82,26,0.10)'
        e.currentTarget.style.background = '#fff'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.background = 'var(--cream)'
      }}
    >
      <div style={{
        width: '40px', height: '40px', flexShrink: 0,
        borderRadius: '10px',
        background: cert.iconBg,
        display: 'flex', alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.1rem',
        transition: 'transform 0.2s',
      }}>
        {cert.icon}
      </div>
      <div>
        <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '0.2rem' }}>
          {cert.title}
        </div>
        <div style={{ fontSize: '0.77rem', color: 'var(--muted)' }}>
          {cert.by}
        </div>
        <div style={{
          fontSize: '0.72rem', color: 'var(--coral)',
          marginTop: '0.35rem',
          fontFamily: 'Syne, sans-serif', fontWeight: 700,
          letterSpacing: '0.05em'
        }}>
          {cert.date}
        </div>
      </div>
    </div>
  )
}

function Certifications() {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div id="certs" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2.5rem' }}>

        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '1rem',
          marginBottom: '3rem',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '1rem'
        }}>
          <span style={{
            fontFamily: 'Syne, sans-serif', fontSize: '0.72rem',
            fontWeight: 700, color: 'var(--coral)',
            letterSpacing: '0.15em', textTransform: 'uppercase'
          }}>04</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 800, letterSpacing: '-1px',
            color: 'var(--ink)'
          }}>Certifications</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem'
        }}>
          {certs.map(cert => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Certifications