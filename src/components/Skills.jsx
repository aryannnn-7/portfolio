const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', hot: true },
      { name: 'Tailwind CSS', hot: true },
      { name: 'Vite', hot: false },
      { name: 'Javascript', hot: false },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', hot: true },
      { name: 'Express.js', hot: true },
      { name: 'MongoDB', hot: true },
      { name: 'MySQL', hot: false },
      { name: 'JWT Auth', hot: false },
      { name: 'REST APIs', hot: false },
    ]
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS Lambda', hot: true },
      { name: 'S3', hot: false },
      { name: 'API Gateway', hot: false },
      { name: 'Docker', hot: true },
      { name: 'Jenkins', hot: false },
      { name: 'Prometheus', hot: false },
      { name: 'Grafana', hot: false },
      { name: 'Vercel', hot: false },
    ]
  },
  {
    name: 'ML & Data',
    skills: [
      { name: 'Python', hot: true },
      { name: 'scikit-learn', hot: false },
      { name: 'Pandas', hot: false },
      { name: 'NumPy', hot: false },
      { name: 'TF-IDF', hot: false },
      { name: 'Power BI', hot: true },
      { name: 'Streamlit', hot: false },
    ]
  },
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', hot: true },
      { name: 'Python', hot: true },
      { name: 'C++', hot: false },
      { name: 'C', hot: false },
    ]
  },
  {
    name: 'Security & Tools',
    skills: [
      { name: 'AES-256', hot: false },
      { name: 'Cryptography', hot: false },
      { name: 'Selenium', hot: false },
      { name: 'Jira', hot: false },
      { name: 'Git', hot: false },
    ]
  },
]

function SkillTag({ name, hot }) {
  const baseStyle = {
    fontSize: '0.78rem',
    padding: '0.3rem 0.65rem',
    borderRadius: '6px',
    cursor: 'default',
    display: 'inline-block',
    fontWeight: 500,
    transition: 'all 0.18s cubic-bezier(0.4,0,0.2,1)',
    background: hot ? 'var(--indigo-light)' : 'var(--cream2)',
    border: hot ? '1px solid rgba(45,42,143,0.2)' : '1px solid var(--border)',
    color: hot ? 'var(--indigo)' : 'var(--ink2)',
  }

  return (
    <span
      style={baseStyle}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.background = hot ? 'var(--indigo)' : 'var(--ink)'
        e.currentTarget.style.color = '#fff'
        e.currentTarget.style.borderColor = hot ? 'var(--indigo)' : 'var(--ink)'
        e.currentTarget.style.boxShadow = hot
          ? '0 6px 16px rgba(45,42,143,0.22)'
          : '0 6px 16px rgba(26,18,8,0.14)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.background = hot ? 'var(--indigo-light)' : 'var(--cream2)'
        e.currentTarget.style.color = hot ? 'var(--indigo)' : 'var(--ink2)'
        e.currentTarget.style.borderColor = hot ? 'rgba(45,42,143,0.2)' : 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {name}
    </span>
  )
}

function CategoryCard({ name, skills }) {
  return (
    <div
      style={{
        background: 'var(--cream)',
        padding: '1.5rem',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--cream2)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--cream)'
      }}
    >
      <div style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: '0.72rem', fontWeight: 700,
        color: 'var(--muted)',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        marginBottom: '0.9rem'
      }}>
        {name}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {skills.map(skill => (
          <SkillTag key={skill.name} name={skill.name} hot={skill.hot} />
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div id="skills" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2.5rem' }}>

        {/* Section Header */}
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
          }}>02</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 800, letterSpacing: '-1px',
            color: 'var(--ink)'
          }}>Technical skills</h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1px',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'var(--border)'
        }}>
          {skillCategories.map(cat => (
            <CategoryCard key={cat.name} name={cat.name} skills={cat.skills} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills