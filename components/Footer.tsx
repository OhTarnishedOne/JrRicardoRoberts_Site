export default function Footer() {
  return (
    <footer
      className="px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
      style={{ borderColor: 'var(--faint)' }}
    >
      <span className="text-[12px]" style={{ color: 'rgba(26,25,23,0.3)' }}>
        © {new Date().getFullYear()} Ricardo Roberts · ARC Family Office LLC
      </span>
      <div className="flex gap-5">
        {[
          { label: 'lcsengine.com',  href: 'https://www.lcsengine.com' },
          { label: 'rico@lcsengine.com', href: 'mailto:rico@lcsengine.com' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardorobertsjr/' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-[12px] transition-colors hover:opacity-100"
            style={{ color: 'rgba(26,25,23,0.35)', textDecoration: 'none' }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
