import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AgencyContent } from './content'

export const metadata: Metadata = {
  title: 'Agency — Custom Software Delivery | SAMKIEL',
  description:
    'SAMKIEL Agency is our client-facing arm. We design, build, and ship custom software — web, mobile, APIs, and the infrastructure behind them.',
}

export default function AgencyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <AgencyContent />
      <Footer />
    </main>
  )
}
