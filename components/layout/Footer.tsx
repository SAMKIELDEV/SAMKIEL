import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

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

const socials = [
  {
    label: 'Email',
    href: 'mailto:hello@samkiel.tech',
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SAMKIELDEV',
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/samkiell/',
    icon: Linkedin,
    external: true,
  },
]

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
                className="h-8 w-auto brightness-100 invert-0"
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
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#27272A] text-[#A1A1AA] transition-all duration-200 hover:border-[#E8FF47]/40 hover:text-[#E8FF47]"
                >
                  <Icon size={16} />
                </a>
              )
            })}
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
