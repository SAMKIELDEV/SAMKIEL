import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { KivContent } from './content'

export const metadata: Metadata = {
  title: 'Kiv — Daily Check-In App | SAMKIEL Studio',
  description:
    'Kiv is a micro-journaling and daily check-in app by SAMKIEL Studio. Reflect each day with simplicity and intention.',
}

export default function KivPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <KivContent />
      <Footer />
    </main>
  )
}
