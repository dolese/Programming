'use client'

import { useState, useEffect } from 'react'
import CourseCard from './CourseCard'
import CourseModal from './CourseModal'
import PathCard from './PathCard'
import ResourceCard from './ResourceCard'
import { resourceCategoryColor } from '../app/data'

export default function HomePage({ courses, learningPaths, resources = [], tips }) {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [filter, setFilter] = useState('All')
  const [resFilter, setResFilter] = useState('All')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']
  const filtered = filter === 'All'
    ? courses
    : courses.filter(c => c.level.includes(filter))

  const resourceCategories = ['All', ...new Set(resources.map(r => r.category))]
  const filteredResources = resFilter === 'All'
    ? resources
    : resources.filter(r => r.category === resFilter)

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(9,13,20,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        padding: '1rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all .3s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #61DAFB, #FF6B35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 900, color: '#fff',
          }}>{'</>'}</div>
          <span style={{ fontWeight: 800, fontSize: 16, fontFamily: "'Playfair Display', serif" }}>
            CodePath
          </span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['Courses', 'Paths', 'Resources', 'Tips'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'rgba(255,255,255,0.55)', fontSize: 13,
                padding: '6px 14px', borderRadius: 8,
                transition: 'all .2s', cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.target.style.color = '#fff'
                e.target.style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={e => {
                e.target.style.color = 'rgba(255,255,255,0.55)'
                e.target.style.background = 'transparent'
              }}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        padding: '8rem 2rem 5rem', textAlign: 'center',
      }}>
        {[
          { c: '#61DAFB', x: '15%', y: '20%', s: 420 },
          { c: '#FF6B35', x: '78%', y: '55%', s: 360 },
          { c: '#3776AB', x: '50%', y: '85%', s: 300 },
        ].map((orb, i) => (
          <div key={i} style={{
            position: 'absolute', left: orb.x, top: orb.y,
            width: orb.s, height: orb.s, borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.c}18 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)', pointerEvents: 'none',
          }} />
        ))}

        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(97,218,251,0.1)',
            border: '1px solid rgba(97,218,251,0.25)',
            borderRadius: 20, padding: '5px 16px',
            fontSize: 12, color: '#61DAFB', fontWeight: 600,
            marginBottom: '1.5rem', letterSpacing: '0.04em',
          }}>
            ✦ YOUR PROGRAMMING JOURNEY STARTS HERE
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
            fontWeight: 900,
            fontFamily: "'Playfair Display', Georgia, serif",
            margin: '0 0 1.2rem',
            lineHeight: 1.15,
            maxWidth: 720, marginLeft: 'auto', marginRight: 'auto',
          }}>
            Learn to Code with{' '}
            <span style={{
              background: 'linear-gradient(135deg, #61DAFB, #FF6B35)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Clear Roadmaps</span>
            {' '}& {' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B35, #FFD43B)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Real Projects</span>
          </h1>

          <p style={{
            fontSize: 17, color: 'rgba(255,255,255,0.5)',
            maxWidth: 540, margin: '0 auto 2.5rem', lineHeight: 1.7,
          }}>
            Step-by-step paths, curated resources, visual roadmaps, and real-world
            projects — everything you need to go from zero to hired.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: '6 Courses', icon: '📚', c: '#61DAFB' },
              { label: '40+ Projects', icon: '🚀', c: '#FF6B35' },
              { label: '4 Learning Paths', icon: '🗺', c: '#68A063' },
              { label: `${resources.length}+ Free Resources`, icon: '🎁', c: '#FFD43B' },
            ].map(b => (
              <div key={b.label} style={{
                background: `${b.c}12`, border: `1px solid ${b.c}33`,
                borderRadius: 10, padding: '8px 16px',
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 13, fontWeight: 600, color: '#fff',
              }}>
                <span>{b.icon}</span><span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Learning Paths ── */}
      <section id="paths" style={{ padding: '2rem 2rem 5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#61DAFB', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
            📍 Learning Paths
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, fontFamily: "'Playfair Display', serif", margin: 0 }}>
            Choose Your Direction
          </h2>
          <p style={{ margin: '0.5rem 0 0', color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
            Curated sequences designed to get you job-ready efficiently.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
        }}>
          {learningPaths.map(path => <PathCard key={path.name} path={path} />)}
        </div>
      </section>

      {/* ── Courses ── */}
      <section id="courses" style={{ padding: '0 2rem 5rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          marginBottom: '2rem', flexWrap: 'wrap', gap: 12,
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF6B35', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
              📚 Courses
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, fontFamily: "'Playfair Display', serif", margin: 0 }}>
              Explore All Courses
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {levels.map(l => (
              <button
                key={l}
                onClick={() => setFilter(l)}
                style={{
                  padding: '6px 14px',
                  background: filter === l ? 'rgba(255,255,255,0.12)' : 'transparent',
                  border: `1px solid ${filter === l ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 8,
                  color: filter === l ? '#fff' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer', fontSize: 12,
                  fontWeight: filter === l ? 600 : 400,
                  transition: 'all .2s',
                }}
              >{l}</button>
            ))}
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: 16,
        }}>
          {filtered.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      </section>

      {/* ── Resources ── */}
      {resources.length > 0 && (
        <section id="resources" style={{ padding: '0 2rem 5rem', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: '2rem', flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#FFD43B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
                🎁 Free Resources
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, fontFamily: "'Playfair Display', serif", margin: 0 }}>
                The Coding Resource Hub
              </h2>
              <p style={{ margin: '0.5rem 0 0', color: 'rgba(255,255,255,0.45)', fontSize: 14 }}>
                Hand-picked docs, practice sites, videos, tools, books & communities — all free.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {resourceCategories.map(cat => {
                const active = resFilter === cat
                const c = cat === 'All' ? '#FFD43B' : resourceCategoryColor[cat]
                return (
                  <button
                    key={cat}
                    onClick={() => setResFilter(cat)}
                    style={{
                      padding: '6px 14px',
                      background: active ? `${c}1f` : 'transparent',
                      border: `1px solid ${active ? c + '66' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: 8,
                      color: active ? c : 'rgba(255,255,255,0.4)',
                      cursor: 'pointer', fontSize: 12,
                      fontWeight: active ? 600 : 400,
                      transition: 'all .2s', fontFamily: 'inherit',
                    }}
                  >{cat}</button>
                )
              })}
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 14,
          }}>
            {filteredResources.map(r => (
              <ResourceCard
                key={r.title}
                resource={r}
                color={resourceCategoryColor[r.category] || '#61DAFB'}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── Tips ── */}
      <section id="tips" style={{
        padding: '4rem 2rem',
        background: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#68A063', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
              💡 Developer Wisdom
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, fontFamily: "'Playfair Display', serif", margin: 0 }}>
              Habits That Accelerate Growth
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 14,
          }}>
            {tips.map((tip, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14, padding: '1.3rem',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{tip.icon}</div>
                <h4 style={{ margin: '0 0 6px', fontSize: 14, fontWeight: 700, color: '#fff' }}>{tip.title}</h4>
                <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: 'linear-gradient(135deg, #61DAFB, #FF6B35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 900, color: '#fff',
          }}>{'</>'}</div>
          <span style={{ fontWeight: 800, fontSize: 15, fontFamily: "'Playfair Display', serif" }}>CodePath</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, margin: 0 }}>
          Built with ♥ to help developers grow — from first line to first job.
        </p>
      </footer>

      {/* ── Modal ── */}
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  )
}
