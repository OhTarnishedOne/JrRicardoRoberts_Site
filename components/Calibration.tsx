'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const questions = [
  { id: 'hold',  label: 'Will the Fed hold rates at the next meeting?',      actual: 65 },
  { id: 'cpi',   label: 'Will CPI come in above consensus?',                 actual: 40 },
  { id: 'tech',  label: 'Will tech earnings beat estimates this quarter?',    actual: 80 },
]

const history = [
  { label: 'Fed holds rates',      pct: '65%', status: 'calibrated', type: 'cal' },
  { label: 'CPI above consensus',  pct: '40%', status: 'missed',     type: 'miss' },
  { label: 'Tech earnings beat',   pct: '80%', status: 'calibrated', type: 'cal' },
]

const badgeStyle: Record<string, React.CSSProperties> = {
  cal:  { background: 'rgba(45,106,79,0.12)',  color: '#1a5c3a' },
  miss: { background: 'rgba(200,98,42,0.12)',  color: '#a3400e' },
}

function getFeedback(confidence: number, actual: number) {
  const diff = Math.abs(confidence - actual)
  if (diff <= 15) return {
    style: { background: 'rgba(45,106,79,0.1)', color: '#1a5c3a' },
    text: `Well calibrated — actual outcome aligned at ${actual}%. Your confidence is in range.`,
  }
  if (confidence > actual + 15) return {
    style: { background: 'rgba(200,98,42,0.1)', color: '#a3400e' },
    text: `Overconfident — actual was ${actual}%. Try anchoring lower and see if your score improves.`,
  }
  return {
    style: { background: 'rgba(26,25,23,0.06)', color: 'rgba(26,25,23,0.55)' },
    text: `Underconfident — actual was ${actual}%. Your read was closer than you thought.`,
  }
}

export default function Calibration() {
  const [activeQ, setActiveQ]       = useState(questions[0])
  const [confidence, setConfidence] = useState(50)

  const leftRef  = useReveal()
  const rightRef = useReveal()

  const feedback    = getFeedback(confidence, activeQ.actual)
  const confColor   = confidence > 70 ? '#1a5c3a' : confidence < 35 ? '#a3400e' : 'var(--ink)'

  return (
    <section
      id="calibration"
      className="border-b"
      style={{ borderColor: 'var(--faint)' }}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2">

        {/* Left */}
        <div
          ref={leftRef}
          className="reveal px-10 py-[72px] border-b md:border-b-0"
          style={{ borderRight: '1px solid var(--faint)' }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] mb-5" style={{ color: 'rgba(26,25,23,0.3)' }}>
            The product
          </p>
          <h2 className="font-display text-[32px] leading-[1.15] font-normal mb-4" style={{ color: 'var(--ink)' }}>
            Try the calibration loop
          </h2>
          <p className="text-[14px] leading-[1.75] font-light mb-4" style={{ color: 'var(--soft)' }}>
            Pick an investing question, set your confidence level, and see how your call
            scores against the outcome. Real investors are often overconfident in bull markets
            and underconfident after a loss — LCS Engine surfaces those patterns so you can
            fix them.
          </p>
          <p className="text-[14px] leading-[1.75] font-light mb-8" style={{ color: 'var(--soft)' }}>
            The full platform compounds this across hundreds of calls — with AI tutoring,
            paper trading, and a Probability Lab that turns investing practice into
            measurable skill.
          </p>
          <a
            href="https://www.lcsengine.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium px-7 py-3 rounded-full transition-transform hover:scale-[1.03]"
            style={{ background: 'var(--ink)', color: 'var(--paper)' }}
          >
            Open the full platform →
          </a>
        </div>

        {/* Right — widget */}
        <div ref={rightRef} className="reveal reveal-delay-1 px-10 py-[72px]">
          <div
            className="rounded-xl p-7 border"
            style={{ background: '#fff', borderColor: 'var(--faint)' }}
          >
            {/* Question picker */}
            <div className="flex flex-col gap-2 mb-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] mb-1" style={{ color: 'rgba(26,25,23,0.3)' }}>
                Pick a question
              </p>
              {questions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => { setActiveQ(q); setConfidence(50) }}
                  className="text-left px-[14px] py-[10px] rounded-lg border text-[13px] transition-all"
                  style={{
                    borderColor: activeQ.id === q.id ? 'var(--accent)' : 'var(--faint)',
                    background:  activeQ.id === q.id ? 'var(--accent-light)' : 'var(--paper)',
                    color:       activeQ.id === q.id ? 'var(--ink)' : 'var(--soft)',
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Confidence display */}
            <div className="flex justify-between items-baseline mb-3">
              <div>
                <div
                  className="font-display text-[40px] font-normal transition-colors duration-300"
                  style={{ color: confColor }}
                >
                  {confidence}%
                </div>
                <div className="text-[11px] uppercase tracking-[0.06em]" style={{ color: 'rgba(26,25,23,0.3)' }}>
                  your confidence
                </div>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={confidence}
              onChange={(e) => setConfidence(Number(e.target.value))}
              className="cal-slider"
            />

            {/* Feedback */}
            <div
              className="mt-4 px-4 py-3 rounded-lg text-[13px] transition-opacity duration-300"
              style={feedback.style}
            >
              {feedback.text}
            </div>

            {/* History */}
            <div className="mt-5">
              <p className="text-[10px] uppercase tracking-[0.1em] mb-3" style={{ color: 'rgba(26,25,23,0.3)' }}>
                Past calls
              </p>
              {history.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center justify-between py-2 border-b last:border-b-0 text-[12px]"
                  style={{ borderColor: 'var(--faint)' }}
                >
                  <span style={{ color: 'var(--soft)' }}>{h.label}</span>
                  <div className="flex items-center gap-2">
                    <span style={{ color: 'rgba(26,25,23,0.3)' }}>{h.pct}</span>
                    <span
                      className="text-[10px] font-medium px-[7px] py-[2px] rounded-full"
                      style={badgeStyle[h.type]}
                    >
                      {h.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
