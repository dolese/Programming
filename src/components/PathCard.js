'use client'
import { useState } from 'react'

export default function PathCard({ path }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${path.color}0e` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? path.color + '44' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 16,
        padding: '1.4rem',
        transition: 'all .3s',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? `0 12px 30px ${path.color}14` : 'none',
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 10 }}>{path.emoji}</div>
      <h3 style={{
        margin: '0 0 6px', fontSize: 16, fontWeight: 800,
        color: '#fff', fontFamily: "'Playfair Display', Georgia, serif",
      }}>{path.name}</h3>
      <p style={{
        margin: '0 0 14px', fontSize: 12.5,
        color: 'rgba(255,255,255,0.45)', lineHeight: 1.5,
      }}>{path.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {path.steps.map((s, i) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{
              background: `${path.color}18`, color: path.color,
              border: `1px solid ${path.color}33`,
              borderRadius: 5, padding: '2px 9px', fontSize: 11, fontWeight: 600,
            }}>{s}</span>
            {i < path.steps.length - 1 && (
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>›</span>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 12 }}>⏱</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{path.duration}</span>
      </div>
    </div>
  )
}
