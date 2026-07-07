import { FooterSection } from "@/components/FooterSection";

export const metadata = {
  title: "Privacy Policy | Apex GT",
  description: "Learn how Apex GT collects, uses, and protects your personal information.",
};

export default function PrivacyPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Legal
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/60">
              Your privacy is important to us. This policy explains how Apex GT collects,
              uses, and safeguards your personal information.
            </p>
            <p className="mt-4 text-sm text-white/50">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Information We Collect
            </h2>
            <p className="mb-4 text-white/60">
              We collect information you provide directly to us when you express interest in
              our vehicles, schedule a test drive, or contact our team. This may include your
              name, email address, phone number, and any details you share in your message.
            </p>
            <p className="mb-4 text-white/60">
              We also automatically collect certain information when you visit our website,
              including your IP address, browser type, device information, and usage data such
              as the pages you view and the actions you take on our site.
            </p>
            <p className="text-white/60">
              When you use our car configurator, we may collect your configuration preferences
              and saved vehicle setups to enhance your experience and provide personalized
              recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-white/60">
              We use the information we collect to respond to your inquiries, schedule test
              drives, and provide you with the services and information you request. Your
              contact details allow us to communicate with you about your interest in Apex GT
              vehicles.
            </p>
            <p className="mb-4 text-white/60">
              We may use your information to improve our website, products, and services, to
              analyze user behavior and trends, and to develop new features that enhance your
              experience with the Apex GT brand.
            </p>
            <p className="text-white/60">
              With your consent, we may also send you marketing communications about new
              vehicle launches, exclusive events, and special offers. You can opt out of these
              communications at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Information Sharing and Disclosure */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Information Sharing and Disclosure
            </h2>
            <p className="mb-4 text-white/60">
              We do not sell, trade, or rent your personal information to third parties. We
              may share your information with trusted partners and service providers who assist
              us in operating our website, conducting business, or servicing you, provided they
              agree to keep your information confidential.
            </p>
            <p className="mb-4 text-white/60">
              We may disclose your information when required by law, court order, or other
              legal process, or when we believe in good faith that disclosure is necessary to
              protect our rights, your safety, or the safety of others.
            </p>
            <p className="text-white/60">
              In the event of a merger, acquisition, or sale of assets, your information may be
              transferred as part of that transaction. We will notify you of any such change in
              ownership or control of your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Data Security
            </h2>
            <p className="mb-4 text-white/60">
              We implement industry-standard security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or destruction.
              These measures include encryption, secure server infrastructure, and access
              controls.
            </p>
            <p className="text-white/60">
              While we strive to protect your information, no method of transmission over the
              internet or electronic storage is completely secure. We cannot guarantee absolute
              security, but we are committed to continuously improving our safeguards to
              protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Your Privacy Rights */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Your Privacy Rights
            </h2>
            <p className="mb-4 text-white/60">
              You have the right to access, correct, or delete the personal information we hold
              about you. You may also request that we restrict or object to the processing of
              your data, or request that we transfer your data to another service provider.
            </p>
            <p className="mb-4 text-white/60">
              If you have provided consent for certain processing activities, you have the
              right to withdraw that consent at any time. Withdrawing consent will not affect
              the lawfulness of processing based on consent before its withdrawal.
            </p>
            <p className="text-white/60">
              To exercise any of these rights, please contact us using the information provided
              in the Contact Us section below. We will respond to your request within a
              reasonable timeframe.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking Technologies */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Cookies and Tracking Technologies
            </h2>
            <p className="mb-4 text-white/60">
              We use cookies and similar tracking technologies to enhance your browsing
              experience, analyze website traffic, and understand how visitors interact with
              our site. Cookies are small data files stored on your device that help us
              remember your preferences and improve site performance.
            </p>
            <p className="mb-4 text-white/60">
              You can control and manage cookies through your browser settings. Disabling
              cookies may affect certain features of our website, such as the ability to save
              your vehicle configurations or access personalized content.
            </p>
            <p className="text-white/60">
              We may also use third-party analytics tools, such as Google Analytics, to collect
              and analyze usage data. These tools have their own privacy policies governing how
              they use the information they collect.
            </p>
          </div>
        </div>
      </section>

      {/* Changes to This Privacy Policy */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4 text-white/60">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, legal requirements, or operational needs. When we make material
              changes, we will update the &quot;Last Updated&quot; date at the top of this page.
            </p>
            <p className="text-white/60">
              We encourage you to review this policy periodically to stay informed about how we
              protect your information. Your continued use of our website after any changes
              constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Contact Us
            </h2>
            <p className="mb-4 text-white/60">
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              the handling of your personal information, please do not hesitate to reach out to
              us.
            </p>
            <p className="mb-4 text-white/60">
              You can contact our privacy team by email at privacy@apexgt.com, by phone at
              +1 (800) APEX-GT1, or by mail at 123 Luxury Lane, Beverly Hills, CA 90210.
            </p>
            <p className="text-white/60">
              We are committed to addressing your inquiries promptly and ensuring that your
              privacy concerns are resolved to your satisfaction.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

