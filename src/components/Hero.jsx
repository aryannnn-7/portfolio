import { useEffect, useRef, useState } from 'react'

const ROLES = [
  'full-stack apps.',
  'cloud-native systems.',
  'ML pipelines.',
  'things that actually work.',
]

function useTyping(words) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const speed = deleting ? 45 : 80

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1400)
        }
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(ease * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return [count, ref]
}

function StatBlock({ num, suffix = '', label, compact = false }) {
  const [count, ref] = useCountUp(num)
  return (
    <div ref={ref}>
      <div style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: compact ? '1.6rem' : '3.5rem',
        fontWeight: 800,
        color: compact ? 'var(--coral)' : 'var(--ink)',
        lineHeight: 1,
        letterSpacing: compact ? '-1px' : '-2px',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontSize: '0.72rem', color: 'var(--muted)',
        fontWeight: 500, textTransform: 'uppercase',
        letterSpacing: '0.08em', marginTop: '0.25rem'
      }}>
        {label}
      </div>
    </div>
  )
}

function Hero() {
  const typed = useTyping(ROLES)

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      padding: '7rem 2.5rem 4rem',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Big background name */}
      <div style={{
        position: 'absolute',
        fontFamily: 'Syne, sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(120px, 18vw, 220px)',
        color: 'transparent',
        WebkitTextStroke: '1.5px rgba(232,82,26,0.07)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        letterSpacing: '-8px',
        userSelect: 'none',
        zIndex: 0
      }}>
        ARYAN
      </div>

      <div style={{
        maxWidth: '1100px', margin: '0 auto', width: '100%',
        position: 'relative', zIndex: 1
      }}>

        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontSize: '0.78rem', fontWeight: 500,
          color: 'var(--green)', background: 'var(--green-light)',
          border: '1px solid rgba(29,107,74,0.2)',
          padding: '0.35rem 0.9rem', borderRadius: '100px',
          marginBottom: '1.75rem',
          fontFamily: 'Syne, sans-serif'
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'var(--green)', display: 'inline-block',
            animation: 'pulse-dot 2s ease-in-out infinite'
          }} />
          Available for internships &amp; freelance
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800, letterSpacing: '-3px',
          lineHeight: 0.95, marginBottom: '1.25rem',
          color: 'var(--ink)'
        }}>
          Aryan
          <span style={{ color: 'var(--coral)', display: 'block' }}>Rane.</span>
        </h1>

        {/* Subtitle + typing */}
        <p style={{
          fontSize: '1.05rem', color: 'var(--ink2)',
          maxWidth: '520px', lineHeight: 1.75,
          marginBottom: '2rem'
        }}>
          <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
            Aspiring Software Engineer
          </strong>{' '}· Full Stack Developer · ML Enthusiast<br />
          Building{' '}
          <span style={{ color: 'var(--coral)', fontWeight: 600 }}>{typed}</span>
          <span style={{
            display: 'inline-block', width: '2px', height: '1em',
            background: 'var(--coral)', marginLeft: '2px',
            verticalAlign: 'middle', borderRadius: '2px',
            animation: 'blink-cursor 1s step-end infinite'
          }} />
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#work" className="btn-primary" style={{
            padding: '0.75rem 1.75rem', background: 'var(--coral)',
            color: '#fff', fontWeight: 600, textDecoration: 'none',
            borderRadius: '100px', fontFamily: 'Syne, sans-serif',
            fontSize: '0.88rem', display: 'inline-block'
          }}>See my work →</a>

          <a href="https://github.com/aryannnn-7" target="_blank" rel="noopener noreferrer"
            className="btn-ghost" style={{
              padding: '0.75rem 1.5rem', background: 'transparent',
              color: 'var(--ink2)', fontWeight: 500, textDecoration: 'none',
              borderRadius: '100px', border: '1px solid var(--border-strong)',
              fontSize: '0.88rem', display: 'inline-block'
            }}>GitHub</a>

          <a href="https://linkedin.com/in/aryan-rane-5260a2415" target="_blank" rel="noopener noreferrer"
            className="btn-ghost" style={{
              padding: '0.75rem 1.5rem', background: 'transparent',
              color: 'var(--ink2)', fontWeight: 500, textDecoration: 'none',
              borderRadius: '100px', border: '1px solid var(--border-strong)',
              fontSize: '0.88rem', display: 'inline-block'
            }}>LinkedIn</a>
        </div>

        {/* ── Stat bar ── */}
        <div style={{
          display: 'flex', alignItems: 'stretch',
          gap: '0', marginBottom: '2.5rem',
          border: '1px solid var(--border)',
          borderRadius: '14px', overflow: 'hidden',
          maxWidth: '480px',
          background: 'var(--cream2)',
        }}>
          {[
            { num: 10, suffix: '+', label: 'Projects built' },
            { num: 8,  suffix: '.0+', label: 'CGPA / 10' },
            { num: 6,  suffix: '',   label: 'Certifications' },
          ].map((s, i, arr) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <StatBlock num={s.num} suffix={s.suffix} label={s.label} compact />
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {['React.js', 'Node.js', 'AWS', 'Docker', 'Python', 'MongoDB', 'scikit-learn', 'Power BI'].map(tag => (
            <span key={tag} style={{
              fontSize: '0.75rem', padding: '0.3rem 0.75rem',
              borderRadius: '100px',
              background: 'rgba(250,247,242,0.85)',
              border: '1px solid var(--border)',
              color: 'var(--ink2)', fontWeight: 500,
              transition: 'all 0.18s', cursor: 'default'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--coral-light)'
              e.currentTarget.style.color = 'var(--coral)'
              e.currentTarget.style.borderColor = 'rgba(232,82,26,0.2)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(250,247,242,0.85)'
              e.currentTarget.style.color = 'var(--ink2)'
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero