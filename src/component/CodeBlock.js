'use client'
import { useState } from 'react'

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ position: 'relative', marginTop: '1rem' }}>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute', top: 10, right: 10, zIndex: 2,
          background: copied ? '#4CAF50' : 'rgba(255,255,255,0.1)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 6, padding: '4px 10px', fontSize: 12,
          cursor: 'pointer', transition: 'all .2s', fontFamily: 'inherit',
        }}
      >
        {copied ? '✓ Copied!' : 'Copy'}
      </button>
      <pre style={{
        background: '#0d1117',
        color: '#e6edf3',
        borderRadius: 12,
        padding: '1.5rem 1.5rem 1.5rem 1.2rem',
        fontSize: 12.5,
        lineHeight: 1.7,
        overflow: 'auto',
        border: '1px solid rgba(255,255,255,0.08)',
        maxHeight: 320,
        margin: 0,
      }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
