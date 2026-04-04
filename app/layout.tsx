import type { Metadata } from 'next'
import { Syne, Figtree } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'SAMKIEL — Digitalizing The World',
  description:
    'SAMKIEL is a software company building digital products and client solutions from Lagos, Nigeria.',
  metadataBase: new URL('https://samkiel.online'),
  openGraph: {
    title: 'SAMKIEL',
    description: 'Digitalizing The World',
    url: 'https://samkiel.online',
    siteName: 'SAMKIEL',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMKIEL',
    description: 'Digitalizing The World',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
