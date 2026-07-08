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
              The terms and conditions governing your use of the Apex GT website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <p className="mb-12 text-sm text-white/40">
              Last updated: January 2025
            </p>

            {/* Acceptance of Terms */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Acceptance of Terms
              </h2>
              <p className="mb-4 text-white/60">
                By accessing or using the Apex GT website, you agree to be bound by these Terms
                of Service and all applicable laws and regulations. If you do not agree with any
                part of these terms, please do not use our website or services.
              </p>
              <p className="text-white/60">
                Your continued use of the Apex GT website constitutes your acceptance of any
                updates or modifications to these terms.
              </p>
            </div>

            {/* Use of the Website */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Use of the Website
              </h2>
              <p className="mb-4 text-white/60">
                You agree to use the Apex GT website only for lawful purposes and in accordance
                with these Terms of Service. You are responsible for ensuring that your use of
                the site complies with all applicable local, state, national, and international
                laws.
              </p>
              <p className="mb-4 text-white/60">
                The following activities are strictly prohibited:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Using the site in any way that violates applicable laws or regulations</li>
                <li>Attempting to gain unauthorized access to Apex GT&apos;s systems, data, or networks</li>
                <li>Interfering with or disrupting the site&apos;s servers, security features, or functionality</li>
                <li>Scraping, copying, or redistributing content without express written permission</li>
                <li>Submitting false, misleading, or fraudulent information through any form or booking</li>
                <li>Using the site to transmit viruses, malware, or any other malicious code</li>
              </ul>
              <p className="text-white/60">
                Apex GT reserves the right to suspend or terminate access for any user who
                violates these terms.
              </p>
            </div>

            {/* Bookings and Test Drives */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Bookings and Test Drives
              </h2>
              <p className="mb-4 text-white/60">
                Bookings for test drives, vehicle viewings, and other services offered through
                the Apex GT website are subject to availability. We will make every reasonable
                effort to honor confirmed bookings, but Apex GT reserves the right to reschedule
                or cancel any booking at its sole discretion.
              </p>
              <p className="mb-4 text-white/60">
                When making a booking, you must provide accurate, current, and complete
                information. This includes:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Your full legal name and valid contact information</li>
                <li>A valid driver&apos;s license for any test drive request</li>
                <li>Accurate vehicle or model preferences</li>
                <li>Any other information reasonably required to process your booking</li>
              </ul>
              <p className="text-white/60">
                Apex GT is not liable for any losses or inconveniences arising from inaccurate
                or incomplete information provided by you during the booking process.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Intellectual Property
              </h2>
              <p className="mb-4 text-white/60">
                All content on the Apex GT website, including but not limited to text, graphics,
                logos, images, vehicle designs, software, and multimedia, is the exclusive
                property of Apex GT or its licensors and is protected by copyright, trademark,
                and other intellectual property laws.
              </p>
              <p className="mb-4 text-white/60">
                You may not reproduce, distribute, modify, transmit, reuse, or otherwise use
                any of Apex GT&apos;s content for commercial purposes without prior written
                consent from Apex GT.
              </p>
              <p className="text-white/60">
                Unauthorized use of any Apex GT trademark, logo, or branding is strictly
                prohibited and may result in legal action.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Limitation of Liability
              </h2>
              <p className="mb-4 text-white/60">
                The Apex GT website and all content are provided on an &quot;as is&quot; and
                &quot;as available&quot; basis without warranties of any kind, either express or
                implied. Apex GT does not warrant that the site will be uninterrupted, error-free,
                or free of harmful components.
              </p>
              <p className="mb-4 text-white/60">
                To the fullest extent permitted by law, Apex GT, its officers, directors,
                employees, and affiliates shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Your use of or inability to use the website</li>
                <li>Any booking cancellation, rescheduling, or modification</li>
                <li>Any information, content, or materials displayed on the site</li>
                <li>Unauthorized access to or alteration of your data</li>
              </ul>
              <p className="text-white/60">
                Your use of the Apex GT website is at your sole risk.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Indemnification
              </h2>
              <p className="mb-4 text-white/60">
                You agree to indemnify, defend, and hold harmless Apex GT, its officers,
                directors, employees, agents, and affiliates from and against any and all claims,
                damages, losses, liabilities, costs, and expenses, including reasonable
                attorney&apos;s fees, arising out of or in connection with:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Your use of the Apex GT website or services</li>
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any third-party rights, including intellectual property rights</li>
                <li>Any false or misleading information you submit through the site</li>
              </ul>
              <p className="text-white/60">
                This indemnification obligation will survive the termination of your use of the
                Apex GT website.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Changes to Terms
              </h2>
              <p className="mb-4 text-white/60">
                Apex GT reserves the right to update or modify these Terms of Service at any
                time without prior notice. Any changes will be effective immediately upon posting
                to this page, and the &quot;Last updated&quot; date will be revised accordingly.
              </p>
              <p className="text-white/60">
                Your continued use of the Apex GT website following the posting of updated terms
                constitutes your acceptance of the revised Terms of Service. We encourage you to
                review this page periodically to stay informed of any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Contact Us
              </h2>
              <p className="mb-4 text-white/60">
                If you have any questions, concerns, or requests regarding these Terms of
                Service, please do not hesitate to reach out to us.
              </p>
              <p className="text-white/60">
                Email us at{" "}
                <a
                  href="mailto:experience@apexgt.com"
                  className="text-white underline transition-colors hover:text-white/80"
                >
                  experience@apexgt.com
                </a>{" "}
                and a member of our team will be happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

