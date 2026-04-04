import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Agency } from '@/components/sections/Agency'
import { Studio } from '@/components/sections/Studio'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Agency />
      <Studio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
