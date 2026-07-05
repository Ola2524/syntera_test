import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service | Apex GT",
  description:
    "Read the Terms of Service for the Apex GT luxury car configurator, including usage rights, intellectual property, purchases, and liability terms.",
};

/**
 * TermsPage renders the Terms of Service for the Apex GT website.
 *
 * @returns {JSX.Element} The terms of service page.
 */
export default function TermsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-32 sm:px-12 lg:px-24">
        {/* Page Heading */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-white/60">
            Please read these terms carefully before using the Apex GT website
            and vehicle configurator.
          </p>
          <p className="mt-2 text-sm text-white/40">Last updated: January 1, 2025</p>
        </header>

        {/* Terms Card */}
        <Card className="glass border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-white">
              Apex GT Terms of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 space-y-6">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Acceptance of Terms
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                By accessing or using the Apex GT website, vehicle configurator,
                and any related services (collectively, the &quot;Services&quot;),
                you agree to be bound by these Terms of Service and all applicable
                laws and regulations. If you do not agree with any part of these
                terms, you must not use our Services. Your continued use of the
                Services constitutes your acceptance of any updated or revised
                terms.
              </p>
            </section>

            {/* Use of the Website / Vehicle Configurator */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Use of the Website and Vehicle Configurator
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                You may use the Apex GT vehicle configurator to explore, customize,
                and visualize vehicle options. You agree to use the Services only
                for lawful purposes and in a manner that does not infringe the
                rights of others. Specifically, you agree not to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/60">
                <li>
                  Use the configurator or website in any way that violates
                  applicable local, national, or international law.
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the Services,
                  other systems, or networks connected to the Services.
                </li>
                <li>
                  Introduce viruses, trojans, worms, or any other malicious code
                  to the website.
                </li>
                <li>
                  Scrape, copy, or republish configurator data, images, or content
                  without express written permission.
                </li>
                <li>
                  Use automated scripts, bots, or crawlers to interact with the
                  Services without prior authorization.
                </li>
              </ul>
            </section>

            {/* Intellectual Property Rights */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                3. Intellectual Property Rights
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                All content on the Apex GT website, including but not limited to
                text, graphics, logos, vehicle images, configurator interfaces,
                software, and design elements, is the exclusive property of Apex GT
                or its licensors and is protected by copyright, trademark, and other
                intellectual property laws. You may not reproduce, distribute,
                modify, or create derivative works from any content without prior
                written consent from Apex GT.
              </p>
              <p className="mt-4 text-white/60">
                The Apex GT name, logo, and all related marks are trademarks of
                Apex GT. Unauthorized use of any trademark is strictly prohibited.
              </p>
            </section>

            {/* Purchases and Orders */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                4. Purchases and Orders
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                Configurations created using the vehicle configurator are for
                illustrative and estimation purposes only. A configuration does not
                constitute a binding order or a guarantee of availability, pricing,
                or delivery. To place an order, you must complete a purchase
                agreement with an authorized Apex GT representative.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/60">
                <li>
                  All prices displayed are subject to change without notice and may
                  vary based on location, taxes, and applicable fees.
                </li>
                <li>
                  Vehicle specifications, features, and availability may differ from
                  the configurator output at the time of actual purchase.
                </li>
                <li>
                  Apex GT reserves the right to refuse or cancel any order at its
                  sole discretion, including orders due to pricing errors or
                  inventory limitations.
                </li>
                <li>
                  Deposits, if required, are subject to the terms outlined in your
                  purchase agreement and may be non-refundable unless otherwise
                  stated.
                </li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Limitation of Liability
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                To the fullest extent permitted by applicable law, Apex GT and its
                affiliates, officers, employees, and licensors shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages arising out of or related to your use of the Services. This
                includes, without limitation, damages for loss of profits, data, or
                other intangible losses, even if Apex GT has been advised of the
                possibility of such damages.
              </p>
              <p className="mt-4 text-white/60">
                The Services are provided on an &quot;as is&quot; and &quot;as
                available&quot; basis without warranties of any kind, whether express
                or implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                6. Indemnification
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                You agree to indemnify, defend, and hold harmless Apex GT and its
                affiliates, officers, directors, employees, and agents from and
                against any and all claims, liabilities, damages, losses, and
                expenses, including reasonable attorney&apos;s fees, arising out of
                or in any way connected with your access to or use of the Services,
                your violation of these Terms, or your violation of any rights of
                another party.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                7. Governing Law
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                These Terms shall be governed by and construed in accordance with
                the laws of the State of California, United States of America,
                without regard to its conflict of law provisions. Any disputes
                arising under or in connection with these Terms shall be subject to
                the exclusive jurisdiction of the state and federal courts located
                in Los Angeles County, California.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                8. Changes to Terms
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                Apex GT reserves the right to modify or update these Terms of
                Service at any time. Any changes will be effective immediately upon
                posting the revised Terms on this page. The &quot;Last updated&quot;
                date at the top of this page will reflect the most recent revision.
                It is your responsibility to review these Terms periodically. Your
                continued use of the Services after any changes constitutes your
                acceptance of the revised Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-white">
                9. Contact Information
              </h2>
              <Separator className="my-4 bg-white/10" />
              <p className="text-white/60">
                If you have any questions, concerns, or requests regarding these
                Terms of Service, please contact us using the information below:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/60">
                <li>
                  <strong className="text-white/80">Address:</strong> 123 Luxury
                  Lane, Beverly Hills, CA 90210
                </li>
                <li>
                  <strong className="text-white/80">Phone:</strong> +1 (800)
                  APEX-GT1
                </li>
                <li>
                  <strong className="text-white/80">Email:</strong>{" "}
                  legal@apexgt.com
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

