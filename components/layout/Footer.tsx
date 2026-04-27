import Link from 'next/link'

const footerLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Studio', href: '/#studio' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/samkiell/' },
]

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export const Footer = () => {
  return (
    <footer className="border-t border-[#1F1F1F] bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 px-6 py-12 md:px-12 lg:px-20">
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            SAMKIEL
          </Link>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#888888] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-[#1F1F1F] pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-xs text-[#666666]">
            © 2026 SAMKIEL. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#666666] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
