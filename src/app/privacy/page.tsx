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
              Your privacy is important to us. Learn how we collect, use, and protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <p className="mb-12 text-sm text-white/40">
              Last updated: January 2025
            </p>

            {/* Information We Collect */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Information We Collect
              </h2>
              <p className="mb-4 text-white/60">
                We collect information that you provide directly to us when you use our website
                and services. This includes personal information such as your name, email address,
                and phone number, which you may submit through our contact and booking forms.
              </p>
              <p className="mb-4 text-white/60">
                We also automatically collect certain usage data when you visit our website,
                including:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>IP address and approximate location</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website and search terms</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                How We Use Your Information
              </h2>
              <p className="mb-4 text-white/60">
                We use the information we collect to provide, maintain, and improve our services.
                Specifically, we use your information to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Process bookings and schedule test drives</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website, services, and user experience</li>
                <li>Send marketing communications about new models, offers, and events (you may opt out at any time)</li>
                <li>Monitor and analyze usage trends to enhance our offerings</li>
                <li>Prevent fraud and ensure the security of our platform</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Information Sharing
              </h2>
              <p className="mb-4 text-white/60">
                We do not sell, rent, or trade your personal information to third parties. We may
                share your information with trusted service providers who assist us in operating
                our website and conducting our business, such as payment processors, hosting
                providers, and analytics services.
              </p>
              <p className="mb-4 text-white/60">
                These service providers are bound by confidentiality obligations and are only
                permitted to use your information as necessary to provide services to us. We may
                also disclose your information when required by law or to protect our rights,
                property, or safety.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Data Security
              </h2>
              <p className="mb-4 text-white/60">
                We implement reasonable technical, administrative, and physical safeguards designed
                to protect your personal information against unauthorized access, alteration,
                disclosure, or destruction. These measures include encryption, secure server
                infrastructure, and access controls.
              </p>
              <p className="text-white/60">
                However, no method of transmission over the internet or electronic storage is
                completely secure. While we strive to protect your information, we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Cookies and Tracking
              </h2>
              <p className="mb-4 text-white/60">
                We use cookies and similar tracking technologies to enhance your browsing
                experience, analyze site traffic, and understand how visitors interact with our
                website. Cookies are small data files stored on your device that help us remember
                your preferences and improve site functionality.
              </p>
              <p className="mb-4 text-white/60">
                You can control and manage cookies through your browser settings. Please note that
                disabling cookies may affect certain features of our website.
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Essential cookies — required for the website to function properly</li>
                <li>Analytics cookies — help us understand how visitors use our site</li>
                <li>Marketing cookies — used to deliver relevant advertisements and content</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Your Rights
              </h2>
              <p className="mb-4 text-white/60">
                Depending on your location, you may have certain rights regarding your personal
                information. These rights may include:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Access — request a copy of the personal information we hold about you</li>
                <li>Correct — request that we correct inaccurate or incomplete information</li>
                <li>Delete — request that we delete your personal information</li>
                <li>Opt out — unsubscribe from marketing communications at any time</li>
                <li>Restrict — request that we limit how we use your information</li>
                <li>Data portability — request your information in a structured, machine-readable format</li>
              </ul>
              <p className="text-white/60">
                To exercise any of these rights, please contact us using the information provided
                below.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Changes to This Policy
              </h2>
              <p className="mb-4 text-white/60">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technology, or legal requirements. When we make changes, we will update
                the &quot;Last updated&quot; date at the top of this page.
              </p>
              <p className="text-white/60">
                We encourage you to review this policy periodically to stay informed about how we
                protect your information. Continued use of our website after any changes indicates
                your acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Contact Us
              </h2>
              <p className="mb-4 text-white/60">
                If you have any questions, concerns, or requests regarding this Privacy Policy or
                how we handle your personal information, please don&apos;t hesitate to reach out to
                us.
              </p>
              <p className="text-white/60">
                Email us at{" "}
                <a
                  href="mailto:experience@apexgt.com"
                  className="text-white underline underline-offset-4 hover:text-white/80"
                >
                  experience@apexgt.com
                </a>{" "}
                and our team will be happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

