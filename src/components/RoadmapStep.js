'use client'
import { useState } from 'react'

export default function RoadmapStep({ step, color }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={`Week ${step.week}: ${step.title}${step.done ? ' (completed)' : ''}`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setOpen(!open)
        }
      }}
      style={{
        background: open ? `${color}12` : 'rgba(255,255,255,0.04)',
        border: `1px solid ${open ? color + '44' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 10,
        padding: '0.9rem 1.1rem',
        cursor: 'pointer',
        transition: 'all .25s',
        marginBottom: 8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: step.done ? color : 'rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, color: '#fff', fontWeight: 700, flexShrink: 0,
          border: `2px solid ${step.done ? color : 'rgba(255,255,255,0.2)'}`,
        }}>
          {step.done ? '✓' : step.week}
        </div>
        <span style={{ color: '#fff', fontWeight: 600, fontSize: 14, flex: 1 }}>
          Week {step.week}: {step.title}
        </span>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>
          {open ? '▲' : '▼'}
        </span>
      </div>

      {open && (
        <div style={{ paddingTop: '0.75rem', paddingLeft: 38 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {step.topics.map(t => (
              <span key={t} style={{
                background: `${color}22`, color: color,
                borderRadius: 6, padding: '3px 10px', fontSize: 12,
                border: `1px solid ${color}44`,
              }}>{t}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
