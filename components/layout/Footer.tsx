import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'

const footerNav = [
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#studio' },
  { label: 'Agency', href: '/#agency' },
  { label: 'Contact', href: '/contact' },
]

const legalNav = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
]

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const socials = [
  {
    label: 'Email',
    href: 'mailto:hello@samkiel.tech',
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SAMKIELDEV',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/samkiell/',
    external: true,
  },
]

const socialIcons: Record<string, React.ReactNode> = {
  Email: <Mail size={16} />,
  GitHub: <GithubIcon />,
  LinkedIn: <LinkedinIcon />,
}

export const Footer = () => {
  return (
    <footer className="border-t border-[#27272A] bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-12 lg:px-20">
        {/* Top row — logo + nav + socials */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/SAMKIEL_LOGO.png"
                alt="SAMKIEL"
                width={140}
                height={36}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-[#52525B]">Software With Intention</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerNav.map((link) =>
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#27272A] text-[#A1A1AA] transition-all duration-200 hover:border-[#E8FF47]/40 hover:text-[#E8FF47]"
              >
                {socialIcons[social.label]}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row — legal + copyright */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#27272A] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[#3F3F46]">
            © {new Date().getFullYear()} SAMKIEL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#3F3F46] transition-colors duration-200 hover:text-[#A1A1AA]"
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
