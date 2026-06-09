const EXPLORE_TAGS = ['AWS Architecture', 'LLM Integration', 'MLOps', 'System Design', 'Open Source']

function About() {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div id="about" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2.5rem' }}>

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
          }}>01</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 800, letterSpacing: '-1px',
            color: 'var(--ink)'
          }}>About me</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '5rem', alignItems: 'start'
        }}>

          {/* Left — text */}
          <div>
            {[
              <>I'm a third-year <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Information Technology student</strong> at Shah & Anchor Kutchhi Engineering College, Mumbai. I like building real things — full-stack web apps, cloud-native serverless systems, and ML pipelines that solve actual problems.</>,
              <>My recent work ranges from an <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>AI-powered network intrusion dashboard</strong> (Isolation Forest + NLP, no external APIs) to a <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>fully serverless image pipeline</strong> on AWS Lambda, and a <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>sentiment analysis model</strong> trained on 50,000 tweets.</>,
              <>I've also authored a <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>research paper</strong> on Digital Legal Rights Awareness and competed in hackathons. Currently exploring AWS Solutions Architecture, LLM integration, and open-source contributions.</>
            ].map((text, i) => (
              <p key={i} style={{
                color: 'var(--ink2)', lineHeight: 1.85,
                fontSize: '0.95rem', marginBottom: '1rem'
              }}>
                {text}
              </p>
            ))}
          </div>

          {/* Right */}
          <div>
            {/* Education box */}
            <div
              style={{
                background: 'var(--cream2)',
                border: '1px solid var(--border)',
                borderRadius: '16px', padding: '1.75rem',
                transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.borderColor = 'rgba(232,82,26,0.25)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,82,26,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--cream2)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontSize: '0.7rem', fontWeight: 700,
                color: 'var(--muted)', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '1rem',
                fontFamily: 'Syne, sans-serif'
              }}>Education</div>

              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: '1rem',
                fontWeight: 700, color: 'var(--ink)', marginBottom: '0.25rem'
              }}>
                Shah & Anchor Kutchhi Engineering College
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                BTech – Information Technology · Mumbai · Expected 2027
              </div>

              <div style={{
                display: 'flex', alignItems: 'baseline', gap: '0.5rem',
                paddingTop: '1rem', borderTop: '1px solid var(--border)'
              }}>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: '2.2rem',
                  fontWeight: 800, color: 'var(--coral)', letterSpacing: '-1px'
                }}>8.0+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>GPA out of 10</div>
              </div>
            </div>

            {/* Currently exploring tags */}
            <div style={{ marginTop: '1.25rem' }}>
              <div style={{
                fontSize: '0.72rem', fontWeight: 700, color: 'var(--muted)',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                fontFamily: 'Syne, sans-serif', marginBottom: '0.6rem'
              }}>
                Currently exploring
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {EXPLORE_TAGS.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.75rem', padding: '0.3rem 0.75rem',
                      borderRadius: '100px',
                      background: 'var(--coral-light)',
                      color: 'var(--coral)',
                      border: '1px solid rgba(232,82,26,0.2)',
                      fontWeight: 500,
                      cursor: 'default',
                      transition: 'all 0.18s',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--coral)'
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'var(--coral-light)'
                      e.currentTarget.style.color = 'var(--coral)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About