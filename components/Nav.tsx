'use client'

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(26,25,23,0.18)',
        background: 'rgba(247,244,239,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <nav style={{
        maxWidth: '1152px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 40px',
      }}>
        <span
          onClick={() => scrollTo('hero')}
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: '#1a1917',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.color = '#2d6a4f'
            ;(e.target as HTMLElement).style.fontWeight = '600'
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.color = '#1a1917'
            ;(e.target as HTMLElement).style.fontWeight = '500'
          }}
        >
          Ricardo Roberts
        </span>

        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {[
            { label: 'Story', id: 'story' },
            { label: 'The product', id: 'calibration' },
            { label: 'Investing', id: 'raise' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontSize: '13px',
                color: 'rgba(26,25,23,0.45)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0 0 2px 0',
                position: 'relative',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a1917')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(26,25,23,0.45)')}
            >
              {label}
            </button>
          ))}
        </div>

        <a
          href="https://www.lcsengine.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '12px',
            fontWeight: 500,
            padding: '8px 18px',
            background: '#1a1917',
            color: '#f7f4ef',
            borderRadius: '100px',
            textDecoration: 'none',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Try LCS Engine →
        </a>
      </nav>
    </header>
  )
}
