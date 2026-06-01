'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

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

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const WhatsappIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const socials = [
  { label: 'Email', href: 'mailto:hello@samkiel.tech', icon: <Mail size={16} />, external: false },
  { label: 'GitHub', href: 'https://github.com/SAMKIELDEV', icon: <GithubIcon />, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/samkiell/', icon: <LinkedinIcon />, external: true },
  { label: 'X', href: 'https://x.com/samkiel_', icon: <XIcon />, external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/samkiel_', icon: <InstagramIcon />, external: true },
  { label: 'WhatsApp', href: 'https://whatsapp.com/channel/0029VbCuacC8kyyDI9XopD1G', icon: <WhatsappIcon />, external: true },
]

const productLinks = [
  { label: 'Kiv', href: '/studio/kiv' },
  { label: 'SAMKIEL ID', href: 'https://account.samkiel.tech' },
]

const companyLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Agency', href: '/#agency' },
  { label: 'Careers', href: '/careers' },
  { label: 'Work', href: '/work' },
]

const legalLinks = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
]

export const Footer = () => {
  return (
    <motion.footer
      className="relative bg-[#0A0A0A]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {/* Top border with accent gradient fade */}
      <div className="relative h-px w-full bg-[#27272A]">
        <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#E8FF47]/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pb-12 pt-20 md:px-12 lg:px-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/SAMKIEL_LOGO.png"
                alt="SAMKIEL"
                width={160}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>
            <p className="mt-2 text-sm text-[#52525B]">
              Software With Intention
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-[#3F3F46]">
              Building software that matters, from Nigeria to the world.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272A] bg-transparent text-[#52525B] transition-all duration-200 hover:border-[#E8FF47]/30 hover:bg-[#E8FF47]/5 hover:text-[#E8FF47]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns — 3 across on all sizes */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 lg:gap-24">

            {/* Products column */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E8FF47]">
                Products
              </p>
              <ul className="flex flex-col gap-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#E8FF47]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#E8FF47]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E8FF47]">
                Company
              </p>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#E8FF47]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#E8FF47]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal column */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E8FF47]">
                Legal
              </p>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#E8FF47]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-[#27272A] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
            <div className="text-center sm:text-left">
              <p className="text-[13px] text-[#52525B]">
                © {new Date().getFullYear()} SAMKIEL Technologies Limited. All rights reserved.
              </p>
              <p className="mt-1 text-[11px] text-[#888888]">
                RC 9540139
              </p>
            </div>
            <a
              href="mailto:hello@samkiel.tech"
              className="hidden text-[13px] text-[#52525B] transition-colors duration-200 hover:text-[#E8FF47] sm:block"
            >
              hello@samkiel.tech
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
