'use client'

import { useReveal } from '@/hooks/useReveal'

const cards = [
  {
    icon: '⚙',
    title: 'Solo builder',
    desc: '18 months from CLI prototype to full-stack production platform. FastAPI, Next.js, PostgreSQL, Anthropic API — shipped alone, tested with real users.',
    tag: '135 passing tests',
  },
  {
    icon: '◎',
    title: 'Decision theorist',
    desc: "Columbia EMBA. Tufts IR. VU Venture Partners fellow who sourced Esusu pre-unicorn. EIR at LaunchNY. The decision intelligence thesis didn't come from a whiteboard — it came from watching smart investors blow confident calls.",
    tag: 'Operator background',
  },
  {
    icon: '▲',
    title: 'Competitor by nature',
    desc: "Master rank in Street Fighter 6. Blue belt in BJJ. Salsa dancer. Every discipline teaches the same thing: information alone doesn't win. How well you read uncertainty and act on it does. That's what LCS Engine trains.",
    tag: 'Ryu main',
  },
]

export default function Persona() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="reveal"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        borderBottom: '1px solid rgba(26,25,23,0.18)',
      }}
    >
      {cards.map((card, i) => (
        <div
          key={card.title}
          style={{
            padding: '48px 36px',
            borderRight: i < 2 ? '1px solid rgba(26,25,23,0.18)' : 'none',
            background: '#f7f4ef',
            transition: 'background 0.2s ease',
            cursor: 'default',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#e5e1d9')}
          onMouseLeave={e => (e.currentTarget.style.background = '#f7f4ef')}
        >
          <span style={{ display: 'block', fontSize: '28px', marginBottom: '20px', fontFamily: 'sans-serif' }}>
            {card.icon}
          </span>
          <h3 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: '22px',
            fontWeight: 400,
            color: '#1a1917',
            marginBottom: '10px',
          }}>
            {card.title}
          </h3>
          <p style={{
            fontSize: '13px',
            lineHeight: 1.75,
            color: 'rgba(26,25,23,0.45)',
            fontWeight: 300,
          }}>
            {card.desc}
          </p>
          <span style={{
            display: 'inline-block',
            marginTop: '16px',
            fontSize: '11px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'rgba(26,25,23,0.3)',
            fontWeight: 500,
          }}>
            {card.tag}
          </span>
        </div>
      ))}
    </section>
  )
}
