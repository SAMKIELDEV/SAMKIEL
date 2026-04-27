'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Mail } from 'lucide-react'
import { useScrollReveal } from '@/components/hooks/useScrollReveal'

import { sendEmail } from '@/app/actions'

interface FormData {
  name: string
  email: string
  message: string
}

export const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const headerRef = useScrollReveal()
  const formRef = useScrollReveal<HTMLFormElement>()
  const infoRef = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await sendEmail(form)
      
      if (result.success) {
        toast.success("Message sent. We'll be in touch.")
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error(result.error || 'Something went wrong. Try again.')
      }
    } catch {
      toast.error('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-[#1F1F1F] bg-[#111111] px-4 py-3 text-sm text-white placeholder-[#888888] outline-none transition-all duration-200 focus:border-[#E8FF47]/50 focus:ring-1 focus:ring-[#E8FF47]/20'

  return (
    <section id="contact" className="border-t border-[#1F1F1F] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={headerRef} className="fade-up mb-12">
          <span className="section-label">Contact</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 text-base text-[#888888]">
            Tell us what you&apos;re working on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="fade-up space-y-5 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
                id="contact-name"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
                id="contact-email"
              />
            </div>
            <textarea
              placeholder="What are you building?"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClasses} resize-none`}
              id="contact-message"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-[#E8FF47] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
              id="contact-submit"
            >
              {loading ? 'Sending...' : 'Send It →'}
            </button>
          </form>

          {/* Direct contact info */}
          <div
            ref={infoRef}
            className="fade-up flex flex-col justify-center gap-6 lg:col-span-2"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#888888]">
                Direct contact
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:hello@samkiel.tech"
                  className="flex items-center gap-3 text-sm text-[#D4D4D4] transition-colors duration-200 hover:text-white"
                >
                  <Mail size={16} className="text-[#E8FF47]" />
                  hello@samkiel.tech
                </a>
                <a
                  href="https://github.com/SAMKIELDEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#D4D4D4] transition-colors duration-200 hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E8FF47]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  github.com/SAMKIELDEV
                </a>
                <a
                  href="https://www.linkedin.com/company/samkiell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#D4D4D4] transition-colors duration-200 hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E8FF47]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  linkedin.com/samkiell
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
