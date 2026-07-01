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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex flex-col justify-center overflow-hidden px-10 pt-40 pb-20"
      style={{ minHeight: '88vh' }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid dot-grid-fade opacity-0 animate-[fadeIn_1.2s_ease_forwards_0.3s]" />

      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" style={{ left: '60%', top: '40%' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-[680px]">

          {/* Eyebrow tag */}
          <div className="slide-in-1 flex items-center gap-2 mb-7">
            <span
              className="pulse-dot inline-block w-[6px] h-[6px] rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            <span
              className="text-[11px] font-medium uppercase tracking-[0.1em]"
              style={{ color: 'var(--soft)' }}
            >
              Founder · Decision intelligence · Brooklyn
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-normal mb-0"
            style={{
              fontSize: 'clamp(42px, 7vw, 72px)',
              lineHeight: 1.05,
              opacity: 0,
              animation: 'slideIn 0.7s ease forwards 0.35s',
            }}
          >
            <span className="block overflow-hidden">
              <span className="word-reveal word-reveal-1">Are you a good</span>
            </span>
            <span className="block overflow-hidden">
              <span className="word-reveal word-reveal-2" style={{ color: 'var(--soft)', fontStyle: 'italic' }}>
                investing
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="word-reveal word-reveal-3"
                style={{ color: 'var(--accent)' }}
              >
                decision-maker?
              </span>
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="slide-in-3 text-[17px] leading-[1.75] max-w-[520px] mt-7 font-light"
            style={{ color: 'var(--soft)' }}
          >
            Most investors consume endless content but never actually know if their
            thinking is sound. LCS Engine is the first decision intelligence platform
            that scores your investing judgment, trains it, and builds a skill set that
            transfers to every high-stakes call you make.
          </p>

          {/* Actions */}
          <div className="slide-in-4 flex items-center gap-5 mt-9">
            <a
              href="https://www.lcsengine.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-medium px-7 py-3 rounded-full transition-transform hover:scale-[1.03]"
              style={{ background: 'var(--ink)', color: 'var(--paper)' }}
            >
              Open LCS Engine <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <button
              onClick={() => scrollTo('story')}
              className="text-[13px] font-normal transition-colors hover:opacity-100"
              style={{ color: 'var(--soft)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Who I am ↓
            </button>
          </div>

          {/* Proof stats */}
          <div
            className="flex gap-0 mt-12 pt-10 border-t"
            style={{ borderColor: 'var(--faint)', opacity: 0, animation: 'slideIn 0.6s ease forwards 1.1s' }}
          >
            {[
              { num: '83%', desc: 'onboarding completion' },
              { num: '102+', desc: 'validated respondents' },
              { num: '69%', desc: 'rated "very valuable"' },
            ].map(({ num, desc }, i) => (
              <div
                key={num}
                className="flex-1"
                style={{
                  paddingRight: i < 2 ? '32px' : 0,
                  borderRight: i < 2 ? `1px solid var(--faint)` : 'none',
                  marginRight: i < 2 ? '32px' : 0,
                }}
              >
                <div
                  className="font-display text-[28px] font-normal"
                  style={{ color: 'var(--ink)' }}
                >
                  {num}
                </div>
                <div className="text-[12px] mt-1" style={{ color: 'var(--soft)' }}>
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
