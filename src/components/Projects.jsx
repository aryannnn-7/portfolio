import { useState } from 'react'
import React from 'react'

const projects = [
  {
    num: '01',
    name: 'Legal Rights Awareness Portal',
    badge: 'Full Stack',
    badgeStyle: { background: 'var(--indigo-light)', color: 'var(--indigo)', border: '1px solid rgba(45,42,143,0.2)' },
    sideLabel: 'DevOps + Web',
    desc: 'Full-stack legal education platform covering cybercrime, data protection, and student rights — live on Vercel with a production CI/CD DevOps pipeline.',
    points: [
      'Docker + Jenkins CI/CD + Selenium automated testing',
      'Prometheus + Grafana monitoring, sprint management via Jira',
      'Interactive flashcard games, scenario-based quizzes, JWT auth',
      'Research paper authored — submitted for publication',
    ],
    stack: ['React 18', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'Prometheus'],
    github: 'https://github.com/aryanrane7206',
    live: '#',
  },
  {
    num: '02',
    name: 'AegisNet AI',
    badge: 'Flagship',
    badgeStyle: { background: 'var(--coral-light)', color: 'var(--coral)', border: '1px solid rgba(232,82,26,0.2)' },
    sideLabel: 'Security + ML',
    desc: 'Enterprise-grade network intrusion detection dashboard powered by Isolation Forest ML. Runs entirely browser-native — no external API calls. Includes a Chrome Extension for live traffic capture.',
    points: [
      'Isolation Forest ML model scores every network packet in real time',
      'NLP threat classification — TF-IDF + Naive Bayes + semantic SOC chatbot',
      'MITRE ATT&CK mapping, CVE references, attack replay for 7 attack types',
      'Chrome Extension (MV3) + one-click firewall mitigation',
    ],
    stack: ['React 18', 'TypeScript', 'D3.js', 'Isolation Forest', 'TF-IDF', 'Supabase', 'Chrome MV3'],
    github: 'https://github.com/aryanrane7206',
    live: null,
  },
  {
    num: '03',
    name: 'CloudFrame',
    badge: 'AWS · Serverless',
    badgeStyle: { background: 'var(--amber-light)', color: 'var(--amber)', border: '1px solid rgba(184,106,10,0.2)' },
    sideLabel: 'Cloud Infra',
    desc: 'Fully serverless, event-driven image processing pipeline on AWS — uploads via pre-signed S3 URLs trigger Lambda functions that auto-resize and generate WebP thumbnails.',
    points: [
      '100% pass rate across all 8 test scenarios',
      'Warm Lambda invocations averaged 2.1 seconds',
      'Least-privilege IAM + 5-min pre-signed URL TTL + 7-day S3 lifecycle expiry',
    ],
    stack: ['AWS Lambda', 'Amazon S3', 'API Gateway', 'IAM', 'Node.js'],
    github: 'https://github.com/aryanrane7206',
    live: null,
  },
  {
    num: '04',
    name: 'SentiScope',
    badge: 'ML · NLP',
    badgeStyle: { background: 'var(--green-light)', color: 'var(--green)', border: '1px solid rgba(29,107,74,0.2)' },
    sideLabel: 'NLP + Flask',
    desc: 'Twitter sentiment analysis — Logistic Regression + TF-IDF pipeline trained on 50,000 tweets, deployed as a Flask app with real-time confidence score visualization.',
    points: [
      'Trained on Sentiment140 — bigram features + L2 regularisation',
      'Custom tweet-cleaning for URLs, mentions, hashtags',
      'Per-class confidence scores visualised via Chart.js',
    ],
    stack: ['Python', 'Flask', 'scikit-learn', 'TF-IDF', 'Chart.js'],
    github: 'https://github.com/aryanrane7206',
    live: null,
  },
  {
    num: '05',
    name: 'Air Quality Forecasting',
    badge: 'Data Science',
    badgeStyle: { background: 'var(--cream2)', color: 'var(--muted)', border: '1px solid var(--border)' },
    sideLabel: 'Streamlit + ML',
    desc: 'Streamlit dashboard merging synthetic air quality data and real Mumbai weather — EDA, correlation analysis, and ML-based pollutant trend forecasting.',
    points: [
      'Linear Regression + Random Forest for pollutant prediction',
      'Correlation analysis: wind speed, humidity vs PM2.5/PM10/NO2',
    ],
    stack: ['Python', 'Streamlit', 'Pandas', 'scikit-learn', 'Plotly'],
    github: 'https://github.com/aryanrane7206',
    live: null,
  },
  {
    num: '06',
    name: 'FlavourMap',
    badge: 'EDA · Power BI',
    badgeStyle: { background: 'var(--cream2)', color: 'var(--muted)', border: '1px solid var(--border)' },
    sideLabel: 'Analytics',
    desc: 'Full EDA on 6,871 Indian recipes — custom data cleaning, 6 Python visualizations, and an interactive Power BI dashboard exploring cuisine patterns across India.',
    points: [],
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI'],
    github: 'https://github.com/aryanrane7206',
    live: null,
  },
]

function LinkButton({ href, primary, children }) {
  const [hov, setHov] = useState(false)
  return React.createElement(
    'a',
    {
      href: href,
      target: '_blank',
      rel: 'noreferrer',
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: primary
        ? {
            fontSize: '0.8rem', fontWeight: 600,
            color: '#fff', textDecoration: 'none',
            fontFamily: 'Syne, sans-serif',
            background: 'var(--coral)',
            padding: '0.3rem 0.85rem',
            borderRadius: '100px',
            transition: 'opacity 0.2s',
            opacity: hov ? 0.85 : 1,
          }
        : {
            fontSize: '0.8rem', fontWeight: 600,
            textDecoration: 'none',
            fontFamily: 'Syne, sans-serif',
            padding: '0.3rem 0.85rem',
            borderRadius: '100px',
            border: '1px solid rgba(232,82,26,0.3)',
            transition: 'all 0.2s',
            background: hov ? 'var(--coral)' : 'transparent',
            color: hov ? '#fff' : 'var(--coral)',
          },
    },
    children
  )
}

function ProjectRow({ proj, index }) {
  const [hovered, setHovered] = useState(false)
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2.5rem 1rem',
        borderBottom: '1px solid var(--border)',
        borderTop: index === 0 ? '1px solid var(--border)' : 'none',
        borderRadius: '8px',
        background: hovered ? 'rgba(250,247,242,0.7)' : 'transparent',
        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
        cursor: 'default',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        gap: '2rem',
        alignItems: 'start',
      }}>

        {/* Number */}
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '0.7rem', fontWeight: 700,
          color: hovered ? 'var(--coral)' : 'var(--muted)',
          letterSpacing: '0.1em', paddingTop: '0.25rem',
          transition: 'color 0.2s',
        }}>
          {proj.num} —
        </div>

        {/* Main content */}
        <div>

          {/* Name + Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '1.35rem', fontWeight: 800,
              letterSpacing: '-0.5px', color: 'var(--ink)',
            }}>
              {proj.name}
            </span>
            <span style={{
              fontSize: '0.68rem', fontWeight: 700,
              padding: '0.25rem 0.65rem', borderRadius: '100px',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              fontFamily: 'Syne, sans-serif',
              ...proj.badgeStyle
            }}>
              {proj.badge}
            </span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '0.88rem', color: 'var(--ink2)',
            lineHeight: 1.7, marginBottom: '0.85rem',
            maxWidth: '560px'
          }}>
            {proj.desc}
          </p>

          {/* Expandable bullet points */}
          {proj.points.length > 0 && (
            <>
              <div style={{
                maxHeight: expanded ? '300px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}>
                <ul style={{ listStyle: 'none', marginBottom: '1rem' }}>
                  {proj.points.map((point, i) => (
                    <li key={i} style={{
                      fontSize: '0.82rem', color: 'var(--muted)',
                      padding: '0.18rem 0 0.18rem 1rem',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute', left: 0,
                        color: 'var(--coral-mid)', fontSize: '0.7rem',
                      }}>—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setExpanded(prev => !prev)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.78rem', fontWeight: 600,
                  color: 'var(--coral)', fontFamily: 'Syne, sans-serif',
                  padding: '0', marginBottom: '0.85rem',
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                <span style={{
                  display: 'inline-block',
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s',
                }}>↓</span>
                {expanded ? 'Show less' : 'Show details'}
              </button>
            </>
          )}

          {/* Tech stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
            {proj.stack.map(tech => (
              <span
                key={tech}
                style={{
                  fontSize: '0.71rem', padding: '0.2rem 0.55rem',
                  borderRadius: '4px', background: 'transparent',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--muted)', fontWeight: 500,
                  transition: 'all 0.15s', cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--ink)'
                  e.currentTarget.style.color = '#FAF7F2'
                  e.currentTarget.style.borderColor = 'var(--ink)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.borderColor = 'var(--border-strong)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {proj.live && (
              <LinkButton href={proj.live} primary={true}>Live Demo ↗</LinkButton>
            )}
            <LinkButton href={proj.github} primary={false}>GitHub ↗</LinkButton>
          </div>

        </div>

        {/* Side label */}
        <div style={{ paddingTop: '0.5rem' }}>
          <span style={{
            fontSize: '0.7rem', fontWeight: 700,
            padding: '0.25rem 0.65rem', borderRadius: '100px',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            fontFamily: 'Syne, sans-serif',
            ...proj.badgeStyle
          }}>
            {proj.sideLabel}
          </span>
        </div>

      </div>
    </div>
  )
}

function Projects() {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <div id="work" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2.5rem' }}>

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
          }}>03</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 800, letterSpacing: '-1px',
            color: 'var(--ink)'
          }}>Selected work</h2>
        </div>

        <div>
          {projects.map((proj, index) => (
            <ProjectRow key={proj.num} proj={proj} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects