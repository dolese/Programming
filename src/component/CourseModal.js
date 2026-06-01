'use client'
import { useState, useEffect } from 'react'
import RoadmapStep from './RoadmapStep'
import CodeBlock from './CodeBlock'

const difficultyColor = {
  Easy: '#4CAF50',
  Medium: '#FF9800',
  Hard: '#F44336',
  Fun: '#9C27B0',
}

export default function CourseModal({ course, onClose }) {
  const [tab, setTab] = useState('roadmap')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  const tabs = [
    { id: 'roadmap', label: '📍 Roadmap' },
    { id: 'resources', label: '📚 Resources' },
    { id: 'projects', label: '🚀 Projects' },
    { id: 'code', label: '💻 Code' },
  ]

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#111827',
          border: `1px solid ${course.color}44`,
          borderRadius: 20,
          width: '100%', maxWidth: 780,
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          boxShadow: `0 0 60px ${course.color}22`,
        }}
      >
        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${course.color}22, ${course.accent}11)`,
          borderBottom: `1px solid ${course.color}33`,
          padding: '1.5rem 2rem',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: `${course.color}22`,
              border: `2px solid ${course.color}66`,
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 26,
            }}>{course.icon}</div>
            <div>
              <h2 style={{
                margin: 0, fontSize: 22, fontWeight: 800,
                color: '#fff', fontFamily: "'Playfair Display', Georgia, serif",
              }}>{course.title}</h2>
              <p style={{ margin: '3px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                {course.description}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.08)', border: 'none',
              borderRadius: 8, color: '#fff', width: 34, height: 34,
              cursor: 'pointer', fontSize: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, fontFamily: 'inherit',
            }}
          >✕</button>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.02)',
        }}>
          {[
            { label: 'Duration', val: course.duration, icon: '⏱' },
            { label: 'Projects', val: course.projects, icon: '🚀' },
            { label: 'Students', val: course.students, icon: '👥' },
            { label: 'Level', val: course.level, icon: '📊' },
          ].map((s, i) => (
            <div key={s.label} style={{
              flex: 1, padding: '0.8rem', textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <div style={{ fontSize: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: course.color }}>{s.val}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1, padding: '0.8rem',
                background: tab === t.id ? `${course.color}18` : 'transparent',
                border: 'none',
                borderBottom: `2px solid ${tab === t.id ? course.color : 'transparent'}`,
                color: tab === t.id ? course.color : 'rgba(255,255,255,0.4)',
                cursor: 'pointer', fontSize: 12.5,
                fontWeight: tab === t.id ? 700 : 400,
                transition: 'all .2s', fontFamily: 'inherit',
              }}
            >{t.label}</button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem 2rem' }}>

          {/* Roadmap */}
          {tab === 'roadmap' && (
            <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 0, marginBottom: '1rem' }}>
                Click each week to expand topics. ✓ = completed.
              </p>
              {course.roadmap.map(step => (
                <RoadmapStep key={step.week} step={step} color={course.color} />
              ))}
            </div>
          )}

          {/* Resources */}
          {tab === 'resources' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 12,
            }}>
              {course.resources.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${course.color}33`,
                    borderRadius: 12, padding: '1rem 1.2rem',
                    textDecoration: 'none', transition: 'all .2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = `${course.color}14`}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                >
                  <span style={{ fontSize: 26 }}>{r.icon}</span>
                  <div>
                    <div style={{
                      fontSize: 10, color: course.color,
                      fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.06em', marginBottom: 2,
                    }}>{r.type}</div>
                    <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{r.title}</div>
                  </div>
                  <span style={{
                    marginLeft: 'auto', color: 'rgba(255,255,255,0.3)', fontSize: 12,
                  }}>↗</span>
                </a>
              ))}
            </div>
          )}

          {/* Projects */}
          {tab === 'projects' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {course.projects_list.map((p, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12, padding: '1rem 1.2rem',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 12,
                }}>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                      🚀 {p.name}
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {p.tags.map(tag => (
                        <span key={tag} style={{
                          background: `${course.color}18`, color: course.color,
                          border: `1px solid ${course.color}44`,
                          borderRadius: 5, padding: '2px 8px', fontSize: 11,
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span style={{
                    background: `${difficultyColor[p.difficulty]}22`,
                    color: difficultyColor[p.difficulty],
                    border: `1px solid ${difficultyColor[p.difficulty]}44`,
                    borderRadius: 6, padding: '4px 10px',
                    fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
                  }}>{p.difficulty}</span>
                </div>
              ))}
            </div>
          )}

          {/* Code */}
          {tab === 'code' && (
            <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 0, marginBottom: '0.5rem' }}>
                Real-world code example for <strong style={{ color: course.color }}>{course.title}</strong>
              </p>
              <CodeBlock code={course.snippet} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
