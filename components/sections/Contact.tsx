'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Github, Mail } from 'lucide-react'
import { useScrollReveal } from '@/components/hooks/useScrollReveal'

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
  const formRef = useScrollReveal()
  const infoRef = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // TODO: wire to Resend / Formspree / EmailJS
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Message sent. We'll be in touch.")
      setForm({ name: '', email: '', message: '' })
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
                  href="mailto:contact@samkiel.online"
                  className="flex items-center gap-3 text-sm text-[#D4D4D4] transition-colors duration-200 hover:text-white"
                >
                  <Mail size={16} className="text-[#E8FF47]" />
                  contact@samkiel.online
                </a>
                <a
                  href="https://github.com/SAMKIELDEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#D4D4D4] transition-colors duration-200 hover:text-white"
                >
                  <Github size={16} className="text-[#E8FF47]" />
                  github.com/SAMKIELDEV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
