'use client'
import { useState } from 'react'

export default function ResourceCard({ resource, color }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${color}10` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? color + '55' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 14, padding: '1.2rem 1.3rem',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all .3s cubic-bezier(.4,0,.2,1)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? `0 12px 30px ${color}18` : 'none',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 42, height: 42, borderRadius: 11,
          background: `${color}20`,
          border: `2px solid ${color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 21, transition: 'transform .3s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}>{resource.icon}</div>
        <span style={{
          background: `${color}18`, color: color,
          border: `1px solid ${color}33`,
          borderRadius: 6, padding: '3px 10px', fontSize: 10,
          fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>{resource.category}</span>
      </div>

      <div>
        <h3 style={{
          margin: '0 0 5px', fontSize: 15, fontWeight: 700,
          color: '#fff', display: 'flex', alignItems: 'center', gap: 6,
        }}>
          {resource.title}
          <span style={{
            color, fontSize: 12,
            transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            transition: 'transform .2s',
          }}>↗</span>
        </h3>
        <p style={{ margin: 0, fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
          {resource.desc}
        </p>
      </div>

      {resource.free && (
        <span style={{
          alignSelf: 'flex-start', marginTop: 2,
          fontSize: 11, fontWeight: 600, color: '#4CAF50',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <span style={{ fontSize: 9 }}>●</span> Free
        </span>
      )}
    </a>
  )
}
