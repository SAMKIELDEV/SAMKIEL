import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-[#A1A1AA] text-lg">Effective Date: April 2026</p>
        </div>

        <div className="max-w-none space-y-8 text-[#A1A1AA] leading-relaxed">
          <section>
            <p>
              Welcome to <strong className="text-white">SAMKIEL</strong>. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website at <Link href="https://samkiel.tech" className="text-[#E8FF47] hover:underline">samkiel.tech</Link> or use any of our studio products.
            </p>
            <p>
              At SAMKIEL, we are committed to protecting your privacy in accordance with the <strong className="text-white">Nigeria Data Protection Regulation (NDPR)</strong> and other applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>We may collect personal data from you in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Contact Information:</strong> Name, email address, and phone number when you fill out a form.</li>
              <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and device information.</li>
              <li><strong className="text-white">Client Data:</strong> Information provided to us for the purpose of executing software development projects.</li>
              <li><strong className="text-white">Product Data:</strong> Data generated or provided when using our studio products (e.g., BreezrChat, SKDL).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services and products.</li>
              <li>To communicate with you regarding inquiries, projects, or updates.</li>
              <li>To improve our website functionality and user experience.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Sharing</h2>
            <p>We do not sell your personal data. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in our operations (e.g., hosting providers, email services).</li>
              <li>Law enforcement or regulatory bodies when required by law.</li>
              <li>In connection with a business transfer or acquisition, where your data would remain subject to this Privacy Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Contact form submissions are retained for up to 24 months. Client project data is retained for the duration of the project and up to 3 years thereafter for legal and accounting purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Data Security</h2>
            <p>
              SAMKIEL takes the security of your data seriously. We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Your Rights</h2>
            <p>Under the NDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Right to access:</strong> you can request a copy of the personal data we hold about you.</li>
              <li><strong className="text-white">Right to rectification:</strong> you can request correction of inaccurate or incomplete data.</li>
              <li><strong className="text-white">Right to erasure:</strong> you can request deletion of your personal data, subject to legal obligations.</li>
              <li><strong className="text-white">Right to object:</strong> you can object to processing of your data in certain circumstances.</li>
              <li><strong className="text-white">Right to data portability:</strong> you can request your data in a portable format.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at <a href="mailto:hello@samkiel.tech" className="text-[#E8FF47] hover:underline">hello@samkiel.tech</a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Cookies</h2>
            <p>
              samkiel.tech may use cookies and similar tracking TECHNOLOGIES to improve your browsing experience and analyse site traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of some parts of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Children&apos;s Privacy</h2>
            <p>
              SAMKIEL&apos;s website and products are not directed at children under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a minor, please contact us immediately at <a href="mailto:hello@samkiel.tech" className="text-[#E8FF47] hover:underline">hello@samkiel.tech</a> and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Contact &amp; Complaints</h2>
            <p>
              If you have questions, concerns, or complaints about how we handle your personal data, please contact us:
            </p>
            <div className="bg-[#111111] p-6 rounded-xl border border-[#27272A] mt-4">
              <p><strong className="text-white">Email:</strong> hello@samkiel.tech</p>
            </div>
            <p className="mt-4 text-sm italic">
              If you are not satisfied with our response, you have the right to lodge a complaint with the Nigeria Data Protection Bureau (NDPB) at ndpb.gov.ng.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
