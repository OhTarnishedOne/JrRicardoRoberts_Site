'use client'

import { useReveal } from '@/hooks/useReveal'

const stats = [
  { label: 'Target',    value: '$750K – $1M' },
  { label: 'Structure', value: 'SAFE' },
  { label: 'Stage',     value: 'Pre-seed' },
  { label: 'Traction',  value: 'Live in production' },
]

export default function Raise() {
  const ref = useReveal()

  return (
    <section id="raise" ref={ref} className="reveal px-10 py-14" style={{ background: 'var(--ink)' }}>
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        {/* Left */}
        <div className="max-w-lg">
          <p
            className="text-[10px] font-medium uppercase tracking-[0.12em] mb-3"
            style={{ color: 'rgba(247,244,239,0.35)' }}
          >
            Pre-seed raise · Open now
          </p>
          <h2
            className="font-display text-[30px] leading-[1.15] font-normal mb-4"
            style={{ color: 'var(--paper)' }}
          >
            The investing world has data.<br />
            <em className="italic" style={{ color: 'rgba(247,244,239,0.45)' }}>
              No one is scoring the thinking.
            </em>
          </h2>
          <p
            className="text-[14px] leading-[1.7] font-light mb-6"
            style={{ color: 'rgba(247,244,239,0.45)' }}
          >
            Individual investors are the acquisition channel — institutions are the revenue
            engine. 83% onboarding completion, 102+ validated respondents, 69% rated it
            "very valuable." The calibration skill gap is real, felt, and unsolved.
          </p>
          <a
            href="mailto:rico@lcsengine.com?subject=LCS Engine — investor brief request"
            className="inline-flex items-center gap-2 text-[13px] font-medium px-6 py-3 rounded-full transition-opacity hover:opacity-88"
            style={{ background: 'var(--paper)', color: 'var(--ink)' }}
          >
            Request the brief →
          </a>
        </div>

        {/* Right — stats */}
        <div className="flex flex-col gap-3 min-w-[200px]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex justify-between items-baseline text-[13px] pb-3"
              style={{
                borderBottom: i < stats.length - 1 ? '1px solid rgba(247,244,239,0.1)' : 'none',
              }}
            >
              <span style={{ color: 'rgba(247,244,239,0.35)' }}>{s.label}</span>
              <span className="font-medium" style={{ color: 'var(--paper)' }}>{s.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
