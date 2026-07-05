import { FooterSection } from "@/components/FooterSection";

export const metadata = {
  title: "Terms of Service | Apex GT",
  description: "The terms and conditions governing your use of the Apex GT website and services.",
};

export default function TermsPage(): JSX.Element {
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
              Terms of Service
            </h1>
            <p className="text-lg text-white/60">
              The terms and conditions governing your use of Apex GT.
            </p>
            <p className="mt-4 text-sm text-white/50">
              Last Updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Acceptance of Terms
              </h2>
              <p className="text-white/60">
                By accessing and using the Apex GT website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            {/* Use of Our Services */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Use of Our Services
              </h2>
              <p className="text-white/60">
                You may use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the Apex GT website complies with all applicable laws and regulations.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Intellectual Property
              </h2>
              <p className="text-white/60">
                All content on this site, including text, graphics, logos, and images, is the property of Apex GT. You may not reproduce, distribute, or otherwise use any content without our prior written consent.
              </p>
            </div>

            {/* Vehicle Configurations & Pricing */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Vehicle Configurations &amp; Pricing
              </h2>
              <p className="text-white/60">
                Configurations and pricing are subject to change. Final specifications confirmed at point of sale. The Apex GT configurator is provided for informational purposes and does not constitute a binding offer.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Limitation of Liability
              </h2>
              <p className="text-white/60">
                Apex GT shall not be liable for any indirect or consequential damages arising from your use of our website or services. Our total liability shall not exceed the amount you have paid us, if any.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Governing Law
              </h2>
              <p className="text-white/60">
                These terms shall be governed by the laws of the State of California. Any disputes arising from these Terms shall be resolved in the courts located in Los Angeles County, California.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12 border-t border-white/10 pt-12">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Changes to Terms
              </h2>
              <p className="text-white/60">
                We reserve the right to modify these terms at any time. Any changes will be posted on this page with an updated revision date. Your continued use of the website constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

