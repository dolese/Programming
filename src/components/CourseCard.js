'use client'
import { useState } from 'react'

export default function CourseCard({ course, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`${course.title} course — ${course.level}. Open roadmap and materials.`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        background: hovered ? `${course.color}10` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? course.color + '55' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 18, padding: '1.6rem',
        cursor: 'pointer',
        transition: 'all .3s cubic-bezier(.4,0,.2,1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 40px ${course.color}18` : 'none',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: `${course.color}20`,
          border: `2px solid ${course.color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24, transition: 'transform .3s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}>{course.icon}</div>
        <span style={{
          background: `${course.color}18`, color: course.color,
          border: `1px solid ${course.color}33`,
          borderRadius: 6, padding: '3px 10px', fontSize: 11, fontWeight: 600,
        }}>{course.level}</span>
      </div>

      <div>
        <h3 style={{
          margin: '0 0 6px', fontSize: 18, fontWeight: 800,
          color: '#fff', fontFamily: "'Playfair Display', Georgia, serif",
        }}>{course.title}</h3>
        <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
          {course.description}
        </p>
      </div>

      <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
        {[
          { icon: '⏱', val: course.duration },
          { icon: '🚀', val: `${course.projects} projects` },
          { icon: '👥', val: course.students },
        ].map(s => (
          <div key={s.val} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 12 }}>{s.icon}</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{s.val}</span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 4, padding: '0.7rem 1rem',
        background: `${course.color}15`,
        border: `1px solid ${course.color}33`,
        borderRadius: 10, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: 13, color: course.color, fontWeight: 600 }}>
          View Roadmap & Materials
        </span>
        <span style={{
          fontSize: 12, color: course.color,
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform .2s',
        }}>→</span>
      </div>
    </div>
  )
}
