const ticks = [
  { label: 'Fed holds rates',            status: 'calibrated', pct: '65%', type: 'cal' },
  { label: 'CPI above consensus',        status: 'missed',     pct: '40%', type: 'miss' },
  { label: 'Tech earnings beat',         status: 'calibrated', pct: '80%', type: 'cal' },
  { label: 'Rate cut in Q3',             status: 'pending',    pct: '',    type: 'pend' },
  { label: 'S&P holds 5500',            status: 'calibrated', pct: '72%', type: 'cal' },
  { label: 'Inflation above 3%',         status: 'missed',     pct: '55%', type: 'miss' },
  { label: 'Dollar strengthens vs yen',  status: 'calibrated', pct: '61%', type: 'cal' },
  { label: 'VC deals up Q2',             status: 'pending',    pct: '',    type: 'pend' },
]

const badgeStyles: Record<string, React.CSSProperties> = {
  cal:  { background: 'rgba(45,106,79,0.12)',  color: '#1a5c3a' },
  miss: { background: 'rgba(200,98,42,0.12)',  color: '#a3400e' },
  pend: { background: 'rgba(26,25,23,0.07)',   color: 'rgba(26,25,23,0.45)' },
}

export default function Ticker() {
  const doubled = [...ticks, ...ticks]

  return (
    <div
      className="overflow-hidden py-[10px] border-t border-b"
      style={{ borderColor: 'var(--faint)', background: 'var(--paper)' }}
    >
      <div className="ticker-scroll flex gap-12 w-max">
        {doubled.map((tick, i) => (
          <span
            key={i}
            className="flex items-center gap-[10px] text-[12px] whitespace-nowrap"
            style={{ color: 'var(--soft)' }}
          >
            {tick.label}
            <span
              className="text-[11px] font-medium px-[9px] py-[2px] rounded-full"
              style={badgeStyles[tick.type]}
            >
              {tick.status}{tick.pct ? ` ${tick.pct}` : ''}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
