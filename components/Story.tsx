'use client'

import { useReveal } from '@/hooks/useReveal'

const timeline = [
  { year: "'96",   title: 'Tufts University',                    desc: 'BA, International Relations' },
  { year: '+10yr', title: 'Comcast → A+E Networks',              desc: 'Ad ops, integration, product management' },
  { year: "'17",   title: 'Columbia EMBA',                       desc: 'Executive MBA' },
  { year: 'VC',    title: 'VU Venture Partners',                 desc: 'Fellow — sourced Esusu pre-unicorn' },
  { year: 'EIR',   title: 'LaunchNY — Startup Advisor & EIR',   desc: 'Advised early-stage companies on strategic direction', companies: ['Vivendi', 'Go Arbol'] },
  { year: 'Now',   title: 'LCS Engine',                          desc: 'Solo founder · Pre-seed · ARC Family Office' },
]

export default function Story() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section
      id="story"
      style={{
        borderBottom: '1px solid rgba(26,25,23,0.18)',
        borderTop: '1px solid rgba(26,25,23,0.18)',
      }}
    >
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}>

        {/* Left */}
        <div
          ref={leftRef}
          className="reveal"
          style={{
            padding: '72px 40px',
            borderRight: '1px solid rgba(26,25,23,0.18)',
          }}
        >
          <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(26,25,23,0.3)', marginBottom: '20px' }}>
            The founder story
          </p>
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: '34px',
            lineHeight: 1.15,
            fontWeight: 400,
            color: '#1a1917',
            marginBottom: '20px',
          }}>
            A non-linear path to{' '}
            <em style={{ fontStyle: 'italic', color: 'rgba(26,25,23,0.45)' }}>one clear thesis.</em>
          </h2>
          <p style={{ fontSize: '14px', lineHeight: 1.85, fontWeight: 300, color: 'rgba(26,25,23,0.55)', marginBottom: '16px' }}>
            At VU Venture Partners I watched sharp investors — people with real access, real
            data, real pattern recognition — make confident calls that were wrong. Not because
            they lacked information. Because{' '}
            <strong style={{ fontWeight: 500, color: '#1a1917' }}>no one had ever measured the quality of their thinking.</strong>{' '}
            They didn't know if they were overconfident, underconfident, or systematically off
            in a specific domain.
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.85, fontWeight: 300, color: 'rgba(26,25,23,0.55)', marginBottom: '16px' }}>
            LCS Engine is the tool that didn't exist. It scores your investing judgment in
            real time — how well your confidence aligns with outcomes — then diagnoses where
            you drift and builds the skill through deliberate practice. The investing domain
            is the entry point.{' '}
            <strong style={{ fontWeight: 500, color: '#1a1917' }}>The calibration skill transfers everywhere.</strong>
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.85, fontWeight: 300, color: 'rgba(26,25,23,0.55)' }}>
            Named for my kids —{' '}
            <strong style={{ fontWeight: 500, color: '#1a1917' }}>Lilli, Cameron, Samantha</strong>{' '}
            — and for what the platform does:{' '}
            <strong style={{ fontWeight: 500, color: '#1a1917' }}>Learn, Choose, Strategize</strong>.
            Both meanings are the thesis.
          </p>
        </div>

        {/* Right */}
        <div
          ref={rightRef}
          className="reveal reveal-delay-1"
          style={{ padding: '72px 40px', background: '#ece8e0' }}
        >
          <p style={{ fontSize: '10px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(26,25,23,0.3)', marginBottom: '24px' }}>
            Career arc
          </p>
          <div>
            {timeline.map((item, i) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '14px 0',
                  borderBottom: i < timeline.length - 1 ? '1px solid rgba(26,25,23,0.18)' : 'none',
                  transition: 'padding-left 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = '6px')}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0px')}
              >
                <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(26,25,23,0.28)', minWidth: '40px', paddingTop: '2px', letterSpacing: '0.04em' }}>
                  {item.year}
                </span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#1a1917' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', marginTop: '2px', fontWeight: 300, color: 'rgba(26,25,23,0.55)' }}>{item.desc}</div>
                  {item.companies && (
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
                      {item.companies.map(co => (
                        <span key={co} style={{
                          fontSize: '10px', fontWeight: 500, padding: '2px 8px',
                          borderRadius: '20px', background: 'rgba(26,25,23,0.07)', color: 'rgba(26,25,23,0.45)',
                        }}>
                          {co}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
