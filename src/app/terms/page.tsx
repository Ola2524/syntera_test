import { FooterSection } from "@/components/FooterSection";

export const metadata = {
  title: "Terms of Service | Apex GT",
  description: "Read the Terms of Service governing your use of the Apex GT website and services.",
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
              The terms and conditions that govern your use of the Apex GT website and services.
            </p>
            <p className="mt-4 text-sm text-white/50">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Acceptance of Terms */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Acceptance of Terms
            </h2>
            <p className="mb-4 text-white/60">
              By accessing and using the Apex GT website, you accept and agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use our website
              or services.
            </p>
            <p className="text-white/60">
              These terms apply to all visitors, users, and others who access or use our platform.
              Your continued use of the Apex GT website constitutes your acceptance of any updates
              or modifications to these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Use of Our Services */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Use of Our Services
            </h2>
            <p className="mb-4 text-white/60">
              Apex GT grants you a limited, non-exclusive, non-transferable license to access and
              use our website for personal, non-commercial purposes. You may use our vehicle
              configurator, browse our content, and contact us through the provided channels.
            </p>
            <p className="text-white/60">
              You agree not to use our services for any unlawful purpose, to interfere with or
              disrupt the website&apos;s operation, or to attempt to gain unauthorized access to
              any portion of our systems.
            </p>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Intellectual Property
            </h2>
            <p className="mb-4 text-white/60">
              All content on the Apex GT website, including but not limited to text, graphics,
              logos, images, vehicle designs, and software, is the property of Apex GT or its
              licensors and is protected by intellectual property laws.
            </p>
            <p className="text-white/60">
              You may not reproduce, distribute, modify, or otherwise use any content from this
              website without prior written consent from Apex GT. Unauthorized use of our
              intellectual property is strictly prohibited.
            </p>
          </div>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              User Responsibilities
            </h2>
            <p className="mb-4 text-white/60">
              You are responsible for maintaining the confidentiality of any information you
              provide to Apex GT and for all activities that occur under your account. You agree
              to provide accurate and complete information when using our contact forms or
              scheduling services.
            </p>
            <p className="text-white/60">
              You agree not to engage in any conduct that could damage, disable, or impair the
              Apex GT website, including introducing viruses, spam, or harmful code. Any violation
              of these responsibilities may result in termination of your access to our services.
            </p>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Limitation of Liability
            </h2>
            <p className="mb-4 text-white/60">
              Apex GT and its affiliates shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages arising from your use of or inability to use our
              website or services. This includes, but is not limited to, damages for loss of
              profits, data, or other intangible losses.
            </p>
            <p className="text-white/60">
              Our website and services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, whether express or implied.
              We do not guarantee that our website will be uninterrupted, secure, or error-free.
            </p>
          </div>
        </div>
      </section>

      {/* Changes to These Terms */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Changes to These Terms
            </h2>
            <p className="mb-4 text-white/60">
              Apex GT reserves the right to modify or update these Terms of Service at any time.
              Any changes will be posted on this page with an updated revision date. We encourage
              you to review these terms periodically to stay informed of any updates.
            </p>
            <p className="text-white/60">
              Your continued use of the Apex GT website following the posting of changes
              constitutes your acceptance of the revised terms. If you do not agree to the
              updated terms, you should discontinue use of our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Contact Information
            </h2>
            <p className="mb-4 text-white/60">
              If you have any questions, concerns, or requests regarding these Terms of Service,
              please do not hesitate to reach out to us. Our team is dedicated to addressing your
              inquiries promptly and professionally.
            </p>
            <p className="text-white/60">
              You may contact Apex GT at 123 Luxury Lane, Beverly Hills, CA 90210, by phone at
              +1 (800) APEX-GT1, or by email at experience@apexgt.com. We are committed to
              ensuring transparency and clarity in all our communications.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

