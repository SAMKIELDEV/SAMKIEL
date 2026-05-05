import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Arms } from '@/components/sections/Arms'
import { Studio } from '@/components/sections/Studio'
import { SamkielID } from '@/components/sections/SamkielID'
import { Agency } from '@/components/sections/Agency'
import { About } from '@/components/sections/About'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Arms />
      <SamkielID />
      <Studio />
      <Agency />
      <About />
      <ContactCTA />
      <Footer />
    </main>
  )
}
