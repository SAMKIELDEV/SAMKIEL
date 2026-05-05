import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="mb-12">
          <Link 
            href="/"
            className="text-sm font-medium text-[#A1A1AA] hover:text-[#E8FF47] transition-colors flex items-center gap-2 mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-[#A1A1AA] text-lg">Effective Date: April 2026</p>
        </div>

        <div className="max-w-none space-y-8 text-[#A1A1AA] leading-relaxed">
          <section>
            <p>
              Welcome to <strong className="text-white">SAMKIEL</strong>. By accessing or using our website at <Link href="https://samkiel.tech" className="text-[#E8FF47] hover:underline">samkiel.tech</Link>, or any of our studio products (including BreezrChat and SKDL), you agree to be bound by these Terms of Service. Please read them carefully before using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. About SAMKIEL</h2>
            <p>
              SAMKIEL is a software company operating under two arms: an <strong className="text-white">Agency</strong> that builds digital products for clients, and a <strong className="text-white">Studio</strong> that builds and operates internally owned products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Acceptance of Terms</h2>
            <p>
              By accessing samkiel.tech or any SAMKIEL product, you confirm that you are at least 18 years of age, that you have read and understood these Terms, and that you agree to be bound by them. If you do not agree, you must stop using our services immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Use of Our Website and Products</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">3.1 Permitted Use</h3>
              <p>You may use samkiel.tech and SAMKIEL products for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our services in any way that violates applicable Nigerian or international law.</li>
                <li>Attempt to gain unauthorised access to any part of our systems or infrastructure.</li>
                <li>Transmit any harmful, offensive, or unlawful content through our platforms.</li>
                <li>Reverse engineer, copy, or reproduce any part of our products without written permission.</li>
                <li>Use automated tools, bots, or scrapers on our platforms without prior written consent.</li>
              </ul>
            </div>
            <div className="space-y-4 mt-6">
              <h3 className="text-xl font-medium text-white">3.2 Availability</h3>
              <p>
                SAMKIEL does not guarantee uninterrupted or error-free access to our website or products. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Client Services (Agency)</h2>
            <p>
              If you engage SAMKIEL for software development or digital services, your engagement is governed by a separate Service Agreement and Proposal document signed between you and SAMKIEL. These Terms apply in addition to, not in place of, that agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Studio Products</h2>
            <p>
              SAMKIEL&apos;s studio products — including BreezrChat and SKDL — are provided on an &quot;as-is&quot; basis. By using any SAMKIEL studio product, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the product only for its intended lawful purpose.</li>
              <li>Not attempt to exploit, hack, or disrupt the product or its infrastructure.</li>
              <li>Not use the product to store, transmit, or distribute illegal or harmful content.</li>
            </ul>
            <p className="mt-4">
              SAMKIEL reserves the right to suspend or terminate your access to any studio product at any time if you violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              All content on samkiel.tech — including but not limited to text, graphics, logos, product names, and code — is the intellectual property of SAMKIEL and is protected under applicable law. You may not reproduce, distribute, or create derivative works from any SAMKIEL content without prior written permission.
            </p>
            <p>
              SAMKIEL&apos;s studio products are owned and operated by SAMKIEL. Use of a product does not transfer any intellectual property rights to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Disclaimer of Warranties</h2>
            <p>
              SAMKIEL&apos;s website and studio products are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. To the fullest extent permitted by law, SAMKIEL disclaims all warranties including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, SAMKIEL shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our website or products. SAMKIEL&apos;s total liability for any claim shall not exceed the amount you paid SAMKIEL in the twelve months preceding the claim, or NGN 10,000 — whichever is greater.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall first be subject to good-faith negotiation, followed by mediation or arbitration in Nigeria, before any court proceedings are initiated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-[#111111] p-6 rounded-xl border border-[#27272A] mt-4">
              <p><strong className="text-white">Email:</strong> <a href="mailto:hello@samkiel.tech" className="text-[#E8FF47] hover:underline">hello@samkiel.tech</a></p>
              <p><strong className="text-white">Website:</strong> <Link href="https://samkiel.tech" className="text-[#E8FF47] hover:underline">samkiel.tech</Link></p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
