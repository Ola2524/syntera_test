import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex GT",
  description:
    "Learn how Apex GT collects, uses, and protects your personal information. Read our full privacy policy to understand your rights and our commitments.",
};

/**
 * PrivacyPage renders the Apex GT privacy policy.
 *
 * This server component displays the full privacy policy using the
 * site's dark luxury theme, including sections on data collection,
 * usage, sharing, security, cookies, user rights, and contact info.
 *
 * @returns {JSX.Element} The privacy policy page.
 */
export default function PrivacyPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-32 sm:px-12 lg:px-24">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/60">
            Your privacy is important to us. This policy explains how Apex GT
            collects, uses, and safeguards your personal information.
          </p>
          <p className="mt-2 text-sm text-white/40">Last updated: January 1, 2025</p>
        </header>

        {/* Policy Content */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-white">
              Apex GT Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 space-y-6">
            {/* Introduction / Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                Information We Collect
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                At Apex GT, we collect information you provide directly to us,
                such as when you create an account, schedule a test drive,
                configure a vehicle, or contact our customer support team. This
                may include your name, email address, phone number, mailing
                address, and any preferences you share regarding our vehicles
                and services.
              </p>
              <p className="mt-4 text-white/60">
                We also automatically collect certain technical data when you
                visit our website, including your IP address, browser type,
                device information, pages visited, and the dates and times of
                your visits. This data helps us optimize your browsing
                experience and improve our digital services.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                How We Use Your Information
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                We use the information we collect for a variety of purposes,
                including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/60">
                <li>Processing and fulfilling your vehicle configuration and test drive requests.</li>
                <li>Communicating with you about products, services, promotions, and events.</li>
                <li>Providing personalized content and recommendations based on your preferences.</li>
                <li>Improving our website, services, and overall customer experience.</li>
                <li>Detecting, preventing, and addressing technical issues, fraud, or security concerns.</li>
                <li>Complying with legal obligations and protecting our rights and property.</li>
              </ul>
            </section>

            {/* Information Sharing and Disclosure */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                Information Sharing and Disclosure
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                limited circumstances:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/60">
                <li>
                  <strong className="text-white/80">Service Providers:</strong> We
                  may share information with trusted partners who assist us in
                  operating our website, conducting business, or servicing you,
                  provided they agree to keep this information confidential.
                </li>
                <li>
                  <strong className="text-white/80">Legal Requirements:</strong> We
                  may disclose your information if required by law, court order,
                  or government regulation, or to protect the rights, property,
                  or safety of Apex GT, our customers, or others.
                </li>
                <li>
                  <strong className="text-white/80">Business Transfers:</strong> In
                  the event of a merger, acquisition, or asset sale, your
                  information may be transferred as part of that transaction,
                  subject to the protections described in this policy.
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-white">Data Security</h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. These measures include encrypted
                data transmission (SSL/TLS), secure server infrastructure,
                access controls, and regular security audits.
              </p>
              <p className="mt-4 text-white/60">
                While we strive to protect your information, no method of
                transmission over the internet or electronic storage is
                completely secure. We cannot guarantee absolute security, but
                we are committed to continuously reviewing and enhancing our
                security practices.
              </p>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                Cookies and Tracking Technologies
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                Our website uses cookies and similar tracking technologies
                (such as web beacons and pixel tags) to enhance your browsing
                experience, analyze site traffic, and understand how visitors
                interact with our content. Cookies are small text files stored
                on your device that help us remember your preferences and
                settings.
              </p>
              <p className="mt-4 text-white/60">
                You can control and manage cookies through your browser
                settings. Disabling cookies may affect certain features of our
                website, such as saved configurations and personalized
                recommendations. We use both session cookies (which expire when
                you close your browser) and persistent cookies (which remain
                until deleted or expired).
              </p>
            </section>

            {/* Your Rights and Choices */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                Your Rights and Choices
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/60">
                <li>The right to access the personal information we hold about you.</li>
                <li>The right to request correction of inaccurate or incomplete data.</li>
                <li>The right to request deletion of your personal information, subject to legal exceptions.</li>
                <li>The right to opt out of marketing communications at any time.</li>
                <li>The right to restrict or object to certain processing of your data.</li>
                <li>The right to data portability, where applicable.</li>
              </ul>
              <p className="mt-4 text-white/60">
                To exercise any of these rights, please contact us using the
                information provided in the Contact Us section below.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                Changes to This Privacy Policy
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, legal requirements, or operational
                needs. When we make material changes, we will revise the
                &ldquo;Last updated&rdquo; date at the top of this page and, where
                appropriate, provide a more prominent notice.
              </p>
              <p className="mt-4 text-white/60">
                We encourage you to review this policy periodically to stay
                informed about how we protect your information. Your continued
                use of our website after any changes constitutes acceptance of
                the updated policy.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-xl font-semibold text-white">Contact Us</h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please reach out to us:
              </p>
              <ul className="mt-4 space-y-2 text-white/60">
                <li>
                  <strong className="text-white/80">Email:</strong>{" "}
                  privacy@apexgt.com
                </li>
                <li>
                  <strong className="text-white/80">Phone:</strong> +1 (800) APEX-GT1
                </li>
                <li>
                  <strong className="text-white/80">Address:</strong> 123 Luxury
                  Lane, Beverly Hills, CA 90210
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-white/60 transition-colors hover:text-white"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

