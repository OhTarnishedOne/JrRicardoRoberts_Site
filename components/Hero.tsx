'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const glow = glowRef.current
    if (!hero || !glow) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      glow.style.left = `${e.clientX - rect.left}px`
      glow.style.top  = `${e.clientY - rect.top}px`
    }
    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 80px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(26,25,23,0.15) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        zIndex: 0,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 65% 55% at 68% 38%, transparent 30%, rgba(247,244,239,0.97) 100%)',
        }} />
      </div>

      {/* Cursor glow */}
      <div ref={glowRef} style={{
        position: 'absolute',
        width: '380px', height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,106,79,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        left: '60%', top: '40%',
        transition: 'left 0.4s ease, top 0.4s ease',
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1152px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '680px' }}>

          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(26,25,23,0.45)', fontWeight: 500, marginBottom: '28px',
            opacity: 0, animation: 'slideIn 0.6s ease forwards 0.2s',
          }}>
            <span style={{
              display: 'inline-block', width: '6px', height: '6px',
              borderRadius: '50%', background: '#2d6a4f',
              animation: 'pulseDot 2s ease-in-out infinite',
            }} />
            Founder · Decision intelligence · Brooklyn
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(42px, 6vw, 68px)',
            lineHeight: 1.05, fontWeight: 400,
            margin: '0 0 28px 0',
            opacity: 0, animation: 'slideIn 0.7s ease forwards 0.35s',
          }}>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'inline-block', animation: 'wordUp 0.6s ease forwards 0.35s', transform: 'translateY(100%)' }}>
                Are you a good
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'inline-block', animation: 'wordUp 0.6s ease forwards 0.48s', transform: 'translateY(100%)', fontStyle: 'italic', color: 'rgba(26,25,23,0.45)' }}>
                investing
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span style={{ display: 'inline-block', animation: 'wordUp 0.6s ease forwards 0.58s', transform: 'translateY(100%)', color: '#2d6a4f' }}>
                decision-maker?
              </span>
            </span>
          </h1>

          {/* Subhead */}
          <p style={{
            fontSize: '17px', lineHeight: 1.75,
            color: 'rgba(26,25,23,0.55)', fontWeight: 300,
            maxWidth: '520px', margin: '0 0 36px 0',
            opacity: 0, animation: 'slideIn 0.6s ease forwards 0.75s',
          }}>
            Most investors consume endless content but never actually know if their
            thinking is sound. LCS Engine is the first decision intelligence platform
            that scores your investing judgment, trains it, and builds a skill set that
            transfers to every high-stakes call you make.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '20px',
            opacity: 0, animation: 'slideIn 0.6s ease forwards 0.9s',
          }}>
            <a
              href="https://www.lcsengine.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '14px', fontWeight: 500,
                padding: '13px 28px',
                background: '#1a1917', color: '#f7f4ef',
                borderRadius: '100px', textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Open LCS Engine →
            </a>
            <a
              href="#story"
              style={{
                fontSize: '13px', color: 'rgba(26,25,23,0.45)',
                textDecoration: 'none', transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a1917')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(26,25,23,0.45)')}
            >
              Who I am ↓
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            marginTop: '48px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(26,25,23,0.18)',
            opacity: 0, animation: 'slideIn 0.6s ease forwards 1.1s',
          }}>
            {[
              { num: '83%',  desc: 'onboarding completion' },
              { num: '102+', desc: 'validated respondents' },
              { num: '69%',  desc: 'rated "very valuable"' },
            ].map(({ num, desc }, i) => (
              <div key={num} style={{
                flex: 1,
                paddingRight: i < 2 ? '32px' : 0,
                borderRight: i < 2 ? '1px solid rgba(26,25,23,0.18)' : 'none',
                marginRight: i < 2 ? '32px' : 0,
              }}>
                <div style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '28px', fontWeight: 400, color: '#1a1917' }}>
                  {num}
                </div>
                <div style={{ fontSize: '12px', marginTop: '4px', color: 'rgba(26,25,23,0.45)' }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
