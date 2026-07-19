import { FooterSection } from "@/components/FooterSection";

export const metadata = {
  title: "Terms & Conditions | Apex GT",
  description: "Read the Apex GT Terms & Conditions to understand the terms governing your use of our website and services.",
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
              Terms &amp; Conditions
            </h1>
            <p className="text-lg text-white/60">
              Last updated: January 2025. Please read these terms carefully before using our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction / Acceptance of Terms Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Introduction &amp; Acceptance of Terms
            </h2>
            <p className="mb-4 text-white/60">
              Welcome to Apex GT (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing and
              using the Apex GT website, you agree to be bound by these Terms &amp; Conditions
              and our Privacy Policy. If you do not agree to these terms, please do not use our
              website or services.
            </p>
            <p className="text-white/60">
              These Terms &amp; Conditions constitute a legally binding agreement between you and
              Apex GT governing your use of our website, showroom services, and any related
              offerings. If you have any questions about these terms, please contact us at
              experience@apexgt.com or visit us at 123 Luxury Lane, Beverly Hills, CA 90210.
            </p>
          </div>
        </div>
      </section>

      {/* Use of Our Website Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Use of Our Website
            </h2>
            <p className="mb-6 text-white/60">
              By using the Apex GT website, you agree to the following conditions:
            </p>
            <ul className="mb-6 list-disc space-y-2 text-white/60 ml-6">
              <li>You must be at least 18 years old to book a test drive through our website.</li>
              <li>You agree to provide accurate, current, and complete information when submitting forms or booking appointments.</li>
              <li>You will not use the site for any unlawful, fraudulent, or prohibited purpose.</li>
              <li>You will not attempt to disrupt, hack, or compromise the security of the website or its systems.</li>
              <li>All content on this website is intended for personal, non-commercial use only.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Test Drive Bookings Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Test Drive Bookings
            </h2>
            <p className="mb-4 text-white/60">
              Test drive bookings are subject to vehicle and showroom availability. Apex GT
              reserves the right to cancel or reschedule any booking at its discretion, and we
              will make every effort to notify you in advance and offer alternative dates.
            </p>
            <p className="text-white/60">
              Users must hold a valid driver&apos;s license and present it at the time of the test
              drive. Bookings are non-transferable and may only be used by the individual who
              submitted the request.
            </p>
          </div>
        </div>
      </section>

      {/* Intellectual Property Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Intellectual Property
            </h2>
            <p className="mb-4 text-white/60">
              All content on this website, including but not limited to logos, text, graphics,
              images, vehicle designs, and software, is the property of Apex GT and is protected
              by applicable intellectual property laws.
            </p>
            <p className="text-white/60">
              No part of this website may be reproduced, distributed, or transmitted in any form
              or by any means without the prior written permission of Apex GT. Unauthorized use
              of any content may violate copyright, trademark, and other applicable laws.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Information Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Vehicle Information
            </h2>
            <p className="mb-4 text-white/60">
              Vehicle specifications, pricing, and availability displayed on this website are
              subject to change without prior notice. We strive to ensure that all information is
              accurate and up to date, but errors may occasionally occur.
            </p>
            <p className="text-white/60">
              Images shown may not reflect the exact models, configurations, or features
              available. For the most current and accurate details, please contact an Apex GT
              showroom directly.
            </p>
          </div>
        </div>
      </section>

      {/* Limitation of Liability Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Limitation of Liability
            </h2>
            <p className="mb-4 text-white/60">
              To the fullest extent permitted by law, Apex GT shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of,
              or inability to use, this website or our services.
            </p>
            <p className="text-white/60">
              This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
              warranties of any kind, whether express or implied, including but not limited to
              warranties of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
          </div>
        </div>
      </section>

      {/* Third-Party Links Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Third-Party Links
            </h2>
            <p className="text-white/60">
              This website may contain links to third-party websites or services that are not
              owned or controlled by Apex GT. We are not responsible for the content, privacy
              practices, or accuracy of any third-party sites. You access these links at your own
              risk and should review the terms and policies of any third-party sites you visit.
            </p>
          </div>
        </div>
      </section>

      {/* Changes to These Terms Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Changes to These Terms
            </h2>
            <p className="text-white/60">
              Apex GT may update these Terms &amp; Conditions at any time at its sole discretion.
              When we make changes, we will revise the &ldquo;Last updated&rdquo; date at the top of this
              page. Your continued use of the website following the posting of updated terms
              constitutes your acceptance of the revised Terms &amp; Conditions. We encourage you
              to review this page periodically to stay informed of any changes.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Law Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Governing Law
            </h2>
            <p className="text-white/60">
              These Terms &amp; Conditions are governed by and construed in accordance with the
              laws of the State of California, without regard to its conflict of law provisions.
              Any disputes arising out of or relating to these terms shall be resolved
              exclusively in the courts located in Beverly Hills, California.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Contact Us
            </h2>
            <p className="mb-6 text-white/60">
              If you have any questions, concerns, or requests regarding these Terms &amp;
              Conditions, please do not hesitate to reach out to us:
            </p>
            <div className="space-y-3 text-white/60">
              <p>
                <span className="font-medium text-white/80">Email:</span>{" "}
                experience@apexgt.com
              </p>
              <p>
                <span className="font-medium text-white/80">Phone:</span>{" "}
                +1 (800) APEX-GT1
              </p>
              <p>
                <span className="font-medium text-white/80">Address:</span>{" "}
                123 Luxury Lane, Beverly Hills, CA 90210
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

