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
              How Apex GT collects, uses, and protects your information.
            </p>
            <p className="mt-4 text-sm text-white/50">
              Last Updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Information We Collect
              </h2>
              <p className="text-white/60">
                We collect information you provide directly, such as name, email,
                phone number when you contact us or schedule a test drive.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                How We Use Your Information
              </h2>
              <p className="text-white/60">
                To process inquiries, schedule test drives, provide updates about
                our vehicles, and improve our services.
              </p>
            </div>

            {/* Information Sharing */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Information Sharing
              </h2>
              <p className="text-white/60">
                We do not sell your personal information. We may share data with
                trusted partners who assist in our operations.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Data Security
              </h2>
              <p className="text-white/60">
                We implement appropriate security measures to protect your
                personal information.
              </p>
            </div>

            {/* Cookies & Tracking */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Cookies &amp; Tracking
              </h2>
              <p className="text-white/60">
                We use cookies and similar technologies to enhance your browsing
                experience.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Your Rights
              </h2>
              <p className="text-white/60">
                You have the right to access, correct, or delete your personal
                information.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Contact Us
              </h2>
              <p className="text-white/60">
                For privacy inquiries, contact us at{" "}
                <a
                  href="mailto:experience@apexgt.com"
                  className="text-white transition-colors hover:text-white/80"
                >
                  experience@apexgt.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

