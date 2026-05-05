import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from './form'

export const metadata: Metadata = {
  title: 'Contact | SAMKIEL',
  description:
    'Start a project with SAMKIEL. Tell us what you\'re building and we\'ll take it from there.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  )
}
