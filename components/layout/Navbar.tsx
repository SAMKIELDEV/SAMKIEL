'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const products = [
  { label: 'Kiv', description: 'Daily check-in & micro-journaling', href: '/studio/kiv' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const handleNavClick = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled && !menuOpen
          ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#27272A]'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        {/* Icon logo */}
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/assets/favicon.png"
            alt="SAMKIEL"
            width={32}
            height={32}
            className="h-8 w-8"
            priority  
          />
          <span className="text-lg font-bold text-white">SAMKIEL</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#about"
            className="text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-white"
          >
            About
          </a>

          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              id="products-dropdown-toggle"
            >
              Products
              <ChevronDown
                size={14}
                className={cn(
                  'transition-transform duration-200',
                  dropdownOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-xl border border-[#27272A] bg-[#111111] p-2 shadow-2xl transition-all duration-200',
                dropdownOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0'
              )}
            >
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={() => setDropdownOpen(false)}
                  className="group flex flex-col gap-0.5 rounded-lg px-4 py-3 transition-colors duration-150 hover:bg-[#1A1A1A]"
                >
                  <span className="text-sm font-semibold text-white">{product.label}</span>
                  <span className="text-xs text-[#A1A1AA]">{product.description}</span>
                </Link>
              ))}
            </div>
          </div>

          <a
            href="/#agency"
            className="text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-white"
          >
            Agency
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden rounded-full bg-[#E8FF47] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] md:inline-flex"
        >
          Start a Project →
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center text-white md:hidden"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-40 flex flex-col bg-[#0A0A0A] transition-all duration-300 md:hidden',
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" onClick={handleNavClick} className="inline-flex items-center gap-2.5">
            <Image
              src="/assets/favicon.png"
              alt="SAMKIEL"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="text-lg font-bold tracking-tight text-white">SAMKIEL</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-6 pt-8 pb-12">
          <nav className="flex flex-col border-t border-[#27272A]/30">
            <a
              href="/#about"
              onClick={handleNavClick}
              className="flex items-center justify-between border-b border-[#27272A]/30 py-6 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#E8FF47]"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}
            >
              About
            </a>
            <div className="flex flex-col border-b border-[#27272A]/30">
              <button
                className="flex items-center justify-between py-6 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#E8FF47]"
                style={{ fontFamily: 'var(--font-display), sans-serif' }}
              >
                Products
                <ChevronDown size={20} className="text-[#52525B]" />
              </button>
              <div className="flex flex-col gap-4 pb-6 pl-4">
                <Link
                  href="/studio/kiv"
                  onClick={handleNavClick}
                  className="text-lg text-[#A1A1AA] hover:text-[#E8FF47]"
                >
                  Kiv — Daily check-in
                </Link>
              </div>
            </div>
            <a
              href="/#agency"
              onClick={handleNavClick}
              className="flex items-center justify-between border-b border-[#27272A]/30 py-6 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#E8FF47]"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}
            >
              Agency
            </a>
            <Link
              href="/work"
              onClick={handleNavClick}
              className="flex items-center justify-between border-b border-[#27272A]/30 py-6 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#E8FF47]"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}
            >
              Work
            </Link>
          </nav>

          <div className="mt-auto flex flex-col gap-4 pt-12">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="inline-flex h-14 items-center justify-center rounded-xl bg-[#E8FF47] text-base font-semibold text-[#0A0A0A] transition-all hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.2)]"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              onClick={handleNavClick}
              className="inline-flex h-14 items-center justify-center rounded-xl border border-[#27272A] bg-transparent text-base font-semibold text-white transition-all hover:bg-white/5"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
