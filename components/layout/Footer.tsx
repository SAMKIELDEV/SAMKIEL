const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const Footer = () => {
  return (
    <footer className="border-t border-[#1F1F1F] bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-12 lg:px-20">
        {/* Wordmark */}
        <a
          href="#hero"
          className="text-lg font-extrabold tracking-tight text-white"
          style={{ fontFamily: 'var(--font-display), sans-serif' }}
        >
          SAMKIEL
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {footerLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              <a
                href={link.href}
                className="text-sm text-[#888888] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
              {i < footerLinks.length - 1 && (
                <span className="text-[#1F1F1F]">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#888888]">
          © 2026 SAMKIEL. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
