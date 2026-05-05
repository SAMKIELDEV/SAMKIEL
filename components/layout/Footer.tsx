import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="border-t border-[#27272A] bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 lg:px-20">
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}
            >
              SAMKIEL
            </Link>
            <p className="mt-3 text-sm text-[#A1A1AA]">Software With Intention</p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href="mailto:hello@samkiel.tech"
                className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              >
                hello@samkiel.tech
              </a>
              <a
                href="https://github.com/SAMKIELDEV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              >
                github.com/SAMKIELDEV
              </a>
              <a
                href="https://www.linkedin.com/company/samkiell/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              >
                linkedin.com/company/samkiell
              </a>
            </div>
          </div>

          {/* Products column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
              Products
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/studio/kiv"
                className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              >
                Kiv
              </Link>
            </div>
          </div>

          {/* Company column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
              Company
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/#about"
                className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              >
                About
              </a>
              <a
                href="/#agency"
                className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              >
                Agency
              </a>
            </div>
          </div>

          {/* Legal column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/terms"
                className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 border-t border-[#27272A] pt-8">
          <p className="text-xs text-[#52525B]">
            © {new Date().getFullYear()} SAMKIEL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
