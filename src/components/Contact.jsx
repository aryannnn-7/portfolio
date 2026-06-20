function CB(props) {
  return (
    <a href={props.href} style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.8rem 1.5rem',
      borderRadius: '100px',
      color: props.primary ? '#fff' : 'rgba(250,247,242,0.75)',
      textDecoration: 'none',
      fontSize: '0.88rem',
      fontWeight: 500,
      border: props.primary ? '1px solid #E8521A' : '1px solid rgba(250,247,242,0.15)',
      background: props.primary ? '#E8521A' : 'rgba(250,247,242,0.05)',
    }}>
      {props.label}
    </a>
  )
}

function Contact() {
  return (
    <>
      <section id="contact" style={{ background: '#1A1208', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '4rem',
            fontWeight: 800,
            letterSpacing: '-2px',
            color: '#FAF7F2',
            marginBottom: '0.5rem',
            lineHeight: 1
          }}>
            Lets build something
            <span style={{ color: '#E8521A' }}>.</span>
          </div>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(250,247,242,0.5)',
            marginBottom: '2.5rem',
            maxWidth: '420px',
            lineHeight: 1.7
          }}>
            Open to internships, freelance work, hackathon collabs,
            and conversations about interesting tech problems.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <CB label="aryanrane2006@gmail.com" href="mailto:aryanrane2006@gmail.com" primary={true} />
            <CB label="+91 87794 96837" href="tel:+918779496837" primary={false} />
            <CB label="LinkedIn" href="https://linkedin.com/in/aryan-rane-5260a2415" primary={false} />
            <CB label="GitHub" href="https://github.com/aryannnn-7" primary={false} />
            <CB label="Resume" href="/Aryan_rane.pdf" primary={false} />
          </div>
        </div>
      </section>
      <footer style={{
        background: '#1A1208',
        textAlign: 'center',
        padding: '1.5rem',
        borderTop: '1px solid rgba(250,247,242,0.08)',
        fontSize: '0.78rem',
        color: 'rgba(250,247,242,0.3)',
        fontFamily: 'Syne, sans-serif',
        letterSpacing: '0.05em'
      }}>
        Aryan Rane · Mumbai, India · Built with React and Vite
      </footer>
    </>
  )
}

export default Contact