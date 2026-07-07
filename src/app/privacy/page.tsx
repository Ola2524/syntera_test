import { FooterSection } from "@/components/FooterSection";

export const metadata = {
  title: "Privacy Policy | Apex GT",
  description:
    "Read the Apex GT Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 pt-32 sm:py-32 sm:pt-40">
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
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <p className="text-white/60">
              At Apex GT, we are committed to protecting your privacy and
              safeguarding the personal information you share with us. This
              Privacy Policy explains how we collect, use, disclose, and
              protect your information when you visit our website, interact
              with our digital platforms, or engage with our dealership
              services. By using our website and services, you consent to the
              practices described in this policy.
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <p className="text-white/60">
                We collect various types of information to provide and improve
                our services. The categories of information we may collect
                include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-white/60">
                <li>
                  <span className="text-white/80">Personal Information:</span>{" "}
                  When you fill out a contact form, request a test drive, or
                  subscribe to our newsletter, we may collect your name, email
                  address, phone number, and any additional details you choose
                  to provide.
                </li>
                <li>
                  <span className="text-white/80">Usage Data:</span> We
                  automatically collect certain information about how you
                  interact with our website, including your IP address,
                  browser type, device information, pages visited, time spent
                  on pages, and referring website addresses.
                </li>
                <li>
                  <span className="text-white/80">
                    Cookies and Tracking Technologies:
                  </span>{" "}
                  We use cookies, web beacons, and similar technologies to
                  track your activity on our website and store certain
                  information about your preferences and browsing behavior.
                </li>
                <li>
                  <span className="text-white/80">
                    Vehicle Inquiry Information:
                  </span>{" "}
                  When you express interest in a specific vehicle or
                  configuration, we may collect details about your preferences,
                  budget range, and intended use to better assist you.
                </li>
              </ul>
            </div>
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
            <div className="space-y-4">
              <p className="text-white/60">
                We use the information we collect for a variety of purposes,
                including:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-white/60">
                <li>
                  Responding to your inquiries, questions, and requests for
                  information about our vehicles and services.
                </li>
                <li>
                  Scheduling and managing test drive bookings and showroom
                  appointments.
                </li>
                <li>
                  Sending marketing and promotional communications, including
                  newsletters, event invitations, and special offers, with your
                  consent. You may opt out at any time.
                </li>
                <li>
                  Improving our website, services, and customer experience
                  based on your feedback and usage patterns.
                </li>
                <li>
                  Processing transactions and managing customer accounts when
                  applicable.
                </li>
                <li>
                  Detecting, preventing, and addressing technical issues,
                  fraud, or other security concerns.
                </li>
                <li>
                  Complying with our legal obligations and protecting our
                  rights and property.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Information Sharing */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Information Sharing
            </h2>
            <div className="space-y-4">
              <p className="text-white/60">
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information in the
                following circumstances:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-white/60">
                <li>
                  <span className="text-white/80">Service Providers:</span> We
                  may share your information with trusted third-party service
                  providers who assist us in operating our website, conducting
                  our business, or servicing you, such as hosting providers,
                  analytics platforms, and marketing partners. These providers
                  are contractually obligated to protect your information and
                  are prohibited from using it for any other purpose.
                </li>
                <li>
                  <span className="text-white/80">Legal Compliance:</span> We
                  may disclose your information when required by law, court
                  order, or government regulation, or when we believe in good
                  faith that such disclosure is necessary to protect our
                  rights, your safety, or the safety of others.
                </li>
                <li>
                  <span className="text-white/80">
                    Business Transfers:
                  </span>{" "}
                  In the event of a merger, acquisition, or sale of assets,
                  your information may be transferred as part of that
                  transaction. We will notify you before your information is
                  transferred and becomes subject to a different privacy
                  policy.
                </li>
              </ul>
            </div>
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
            <div className="space-y-4">
              <p className="text-white/60">
                We implement reasonable technical, administrative, and physical
                security measures designed to protect your personal
                information from unauthorized access, alteration, disclosure,
                or destruction. These measures include encryption, secure
                server infrastructure, access controls, and regular security
                assessments.
              </p>
              <p className="text-white/60">
                However, no method of transmission over the internet or
                electronic storage is completely secure. While we strive to
                protect your information using commercially acceptable means,
                we cannot guarantee absolute security, and you acknowledge that
                you provide your information at your own risk.
              </p>
            </div>
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
            <div className="space-y-4">
              <p className="text-white/60">
                We use cookies and similar tracking technologies to enhance
                your browsing experience, analyze website traffic, remember
                your preferences, and serve relevant content. Cookies are small
                data files stored on your device that help us recognize you on
                subsequent visits.
              </p>
              <p className="text-white/60">
                The types of cookies we use include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-white/60">
                <li>
                  <span className="text-white/80">Essential Cookies:</span>{" "}
                  Necessary for the website to function properly and cannot be
                  disabled.
                </li>
                <li>
                  <span className="text-white/80">
                    Analytics Cookies:
                  </span>{" "}
                  Help us understand how visitors interact with our website so
                  we can improve its performance and content.
                </li>
                <li>
                  <span className="text-white/80">
                    Preference Cookies:
                  </span>{" "}
                  Remember your settings and preferences, such as language or
                  region, for a more personalized experience.
                </li>
                <li>
                  <span className="text-white/80">
                    Marketing Cookies:
                  </span>{" "}
                  Used to deliver advertisements and promotional content that
                  is relevant to your interests.
                </li>
              </ul>
              <p className="text-white/60">
                You can control and manage cookies through your browser
                settings. Most browsers allow you to refuse cookies or alert
                you when cookies are being sent. Please note that if you
                disable cookies, some features of our website may not function
                properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Your Rights
            </h2>
            <div className="space-y-4">
              <p className="text-white/60">
                Depending on your location, you may have certain rights
                regarding your personal information. These rights may include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-white/60">
                <li>
                  <span className="text-white/80">Access:</span> The right to
                  request a copy of the personal information we hold about you.
                </li>
                <li>
                  <span className="text-white/80">Correction:</span> The right
                  to request that we correct any inaccurate or incomplete
                  personal information.
                </li>
                <li>
                  <span className="text-white/80">Deletion:</span> The right to
                  request that we delete your personal information, subject to
                  certain legal exceptions.
                </li>
                <li>
                  <span className="text-white/80">Opt-Out:</span> The right to
                  opt out of receiving marketing communications from us at any
                  time by using the unsubscribe link in our emails or
                  contacting us directly.
                </li>
                <li>
                  <span className="text-white/80">
                    Restriction of Processing:
                  </span>{" "}
                  The right to request that we limit the processing of your
                  personal information under certain circumstances.
                </li>
                <li>
                  <span className="text-white/80">
                    Data Portability:
                  </span>{" "}
                  The right to receive your personal information in a
                  structured, machine-readable format and to transmit it to
                  another party.
                </li>
              </ul>
              <p className="text-white/60">
                To exercise any of these rights, please contact us using the
                information provided in the &quot;Contact Us&quot; section
                below. We will respond to your request within a reasonable
                timeframe and in accordance with applicable law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Data Retention
            </h2>
            <div className="space-y-4">
              <p className="text-white/60">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, comply
                with our legal obligations, resolve disputes, and enforce our
                agreements. The retention period may vary depending on the type
                of information and the purpose for which it was collected.
              </p>
              <p className="text-white/60">
                When your personal information is no longer needed, we will
                securely delete or anonymize it in accordance with our data
                retention policies and applicable legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Links */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Third-Party Links
            </h2>
            <div className="space-y-4">
              <p className="text-white/60">
                Our website may contain links to third-party websites or
                services that are not owned or controlled by Apex GT. We have
                no control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party sites or
                services.
              </p>
              <p className="text-white/60">
                We strongly encourage you to review the privacy policies of any
                third-party websites you visit. We are not liable for any
                actions or practices of third-party sites and cannot be held
                responsible for how they handle your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to This Policy */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Changes to This Policy
            </h2>
            <div className="space-y-4">
              <p className="text-white/60">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal requirements, or operational
                needs. When we make changes, we will revise the &quot;Last
                updated&quot; date at the top of this page.
              </p>
              <p className="text-white/60">
                We encourage you to review this policy periodically to stay
                informed about how we protect your information. If we make
                material changes to this policy, we will provide a more
                prominent notice, such as on our homepage or via email if we
                have your contact information.
              </p>
              <p className="text-white/60">
                Your continued use of our website and services after any
                changes to this Privacy Policy constitutes your acceptance of
                the updated terms.
              </p>
            </div>
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
            <div className="space-y-4">
              <p className="text-white/60">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or the handling of your personal information,
                please do not hesitate to contact us:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-white/60">
                <li>
                  <span className="text-white/80">Email:</span>{" "}
                  experience@apexgt.com
                </li>
                <li>
                  <span className="text-white/80">Phone:</span> +1 (800)
                  APEX-GT1
                </li>
                <li>
                  <span className="text-white/80">Address:</span> 123 Luxury
                  Lane, Beverly Hills, CA 90210
                </li>
              </ul>
              <p className="text-white/60">
                Our dedicated team is available to assist you and will make
                every effort to address your inquiry promptly and thoroughly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

