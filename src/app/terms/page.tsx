import { FooterSection } from "@/components/FooterSection";

export const metadata = {
  title: "Terms & Conditions | Apex GT",
  description:
    "Read the Terms & Conditions governing the use of the Apex GT website, including usage policies, intellectual property, purchases, and liability.",
};

export default function TermsPage(): JSX.Element {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-lg text-white/60">
              Last updated: January 1, 2025. Please read these terms carefully
              before using the Apex GT website.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Acceptance of Terms
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  By accessing and using the Apex GT website (the
                  &ldquo;Site&rdquo;), you agree to be bound by these Terms
                  &amp; Conditions (&ldquo;Terms&rdquo;) and all applicable laws
                  and regulations. If you do not agree with any part of these
                  Terms, please do not use the Site.
                </p>
                <p className="text-white/60">
                  These Terms constitute a legally binding agreement between you
                  (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or
                  &ldquo;your&rdquo;) and Apex GT (&ldquo;Company,&rdquo;
                  &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                  governing your access to and use of the Site.
                </p>
              </div>
            </div>

            {/* Use of the Website */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Use of the Website
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  You agree to use the Site only for lawful purposes and in
                  accordance with these Terms. You are responsible for
                  maintaining the confidentiality of any account information and
                  for all activities that occur under your account.
                </p>
                <p className="text-white/60">
                  You agree not to use the Site in any way that could:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-white/60">
                  <li>
                    Damage, disable, overburden, or impair the Site or interfere
                    with any other party&apos;s use of the Site.
                  </li>
                  <li>
                    Use any robot, spider, or other automatic device, process, or
                    means to access the Site for any purpose, including
                    monitoring or copying any of the material on the Site.
                  </li>
                  <li>
                    Introduce or attempt to introduce any viruses, trojan
                    horses, worms, or other malicious code.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any portion of the
                    Site, other accounts, or computer systems connected to the
                    Site.
                  </li>
                  <li>
                    Collect or harvest personal information of other users
                    without their consent.
                  </li>
                  <li>
                    Use the Site to engage in any fraudulent, illegal, or
                    deceptive activity.
                  </li>
                </ul>
                <p className="text-white/60">
                  You are solely responsible for all content you submit, post, or
                  transmit through the Site. Apex GT reserves the right to
                  suspend or terminate access for any violation of these Terms.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Intellectual Property
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  All content on the Site, including but not limited to text,
                  graphics, logos, images, vehicle designs, software, and
                  audiovisual materials, is the property of Apex GT or its
                  licensors and is protected by United States and international
                  copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-white/60">
                  The Apex GT name, logo, and all related marks are trademarks of
                  Apex GT. You may not use, reproduce, distribute, or create
                  derivative works from any content on the Site without prior
                  written authorization from Apex GT.
                </p>
                <p className="text-white/60">
                  Unauthorized use of any content on the Site may violate
                  copyright, trademark, and other applicable laws and could
                  result in civil and criminal penalties.
                </p>
              </div>
            </div>

            {/* Product Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Product Information
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  The Site displays information about Apex GT vehicles,
                  including specifications, features, pricing, and availability.
                  We strive to ensure that all information is accurate and
                  up-to-date; however, we do not warrant that all information is
                  error-free or complete.
                </p>
                <p className="text-white/60">
                  Vehicle specifications, features, and options may vary by model
                  and configuration. Images shown on the Site are for
                  illustration purposes only and may not reflect the exact
                  appearance, color, or features of the actual vehicle.
                </p>
                <p className="text-white/60">
                  Pricing and availability are subject to change without notice.
                  All prices are displayed in U.S. dollars unless otherwise
                  stated and do not include taxes, title, registration, license,
                  or dealer fees, which may vary by location.
                </p>
              </div>
            </div>

            {/* Test Drives and Inquiries */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Test Drives and Inquiries
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  Through the Site, you may request to schedule a test drive or
                  submit inquiries regarding Apex GT vehicles. All test drive
                  bookings are subject to availability and may be rescheduled or
                  cancelled at the discretion of Apex GT.
                </p>
                <p className="text-white/60">
                  To participate in a test drive, you must:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-white/60">
                  <li>
                    Be at least 21 years of age and hold a valid
                    driver&apos;s license.
                  </li>
                  <li>
                    Provide proof of valid automotive insurance coverage.
                  </li>
                  <li>
                    Agree to follow all instructions provided by Apex GT
                    representatives.
                  </li>
                  <li>
                    Comply with all applicable traffic laws and safety
                    regulations during the test drive.
                  </li>
                </ul>
                <p className="text-white/60">
                  Apex GT reserves the right to refuse or terminate a test drive
                  at any time for any reason, including but not limited to safety
                  concerns or failure to meet qualification requirements.
                </p>
              </div>
            </div>

            {/* Purchases and Transactions */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Purchases and Transactions
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  Any purchase of an Apex GT vehicle is subject to a separate
                  sales agreement executed between you and an authorized Apex GT
                  dealer. The Terms on this Site do not constitute an offer to
                  sell or a commitment to purchase any vehicle.
                </p>
                <p className="text-white/60">
                  Deposits placed through the Site or with an authorized dealer
                  are subject to the terms of the applicable deposit agreement.
                  Deposit amounts, refundability, and applicable deadlines will
                  be specified at the time of the transaction.
                </p>
                <p className="text-white/60">
                  Financing options, if available, are provided by third-party
                  financial institutions and are subject to credit approval,
                  terms, and conditions set forth by the respective lender. Apex
                  GT does not guarantee financing approval or any specific
                  interest rate.
                </p>
                <p className="text-white/60">
                  All transactions are subject to applicable taxes, fees, and
                  regulatory requirements. Apex GT is not responsible for errors
                  in pricing or information displayed on the Site that may affect
                  a transaction.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Limitation of Liability
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  The Site and all content are provided on an &ldquo;as is&rdquo;
                  and &ldquo;as available&rdquo; basis. To the fullest extent
                  permitted by applicable law, Apex GT disclaims all warranties,
                  express or implied, including but not limited to implied
                  warranties of merchantability, fitness for a particular
                  purpose, and non-infringement.
                </p>
                <p className="text-white/60">
                  You use the Site at your own risk. In no event shall Apex GT,
                  its officers, directors, employees, or affiliates be liable for
                  any direct, indirect, incidental, consequential, special, or
                  exemplary damages arising from your use of or inability to use
                  the Site, including but not limited to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-white/60">
                  <li>Loss of profits, data, or business opportunities.</li>
                  <li>Business interruption or system failure.</li>
                  <li>
                    Errors, omissions, or inaccuracies in content on the Site.
                  </li>
                  <li>
                    Unauthorized access to or alteration of your data or
                    transmissions.
                  </li>
                  <li>
                    Any third-party conduct or content on or accessible through
                    the Site.
                  </li>
                </ul>
                <p className="text-white/60">
                  Some jurisdictions do not allow the exclusion or limitation of
                  certain damages, so some of the above limitations may not apply
                  to you.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Indemnification
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  You agree to indemnify, defend, and hold harmless Apex GT, its
                  officers, directors, employees, agents, and affiliates from and
                  against any and all claims, damages, losses, liabilities,
                  costs, and expenses, including reasonable attorney&apos;s fees,
                  arising out of or related to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-white/60">
                  <li>Your use of or inability to use the Site.</li>
                  <li>
                    Your violation of these Terms or any applicable law or
                    regulation.
                  </li>
                  <li>
                    Your violation of any rights of a third party, including
                    intellectual property rights.
                  </li>
                  <li>
                    Any content you submit, post, or transmit through the Site.
                  </li>
                </ul>
                <p className="text-white/60">
                  Apex GT reserves the right to assume the exclusive defense and
                  control of any matter subject to indemnification by you, in
                  which case you will cooperate with Apex GT in asserting any
                  available defenses.
                </p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Third-Party Links
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  The Site may contain links to third-party websites, services,
                  or resources that are not owned or controlled by Apex GT. We
                  have no control over and assume no responsibility for the
                  content, privacy policies, or practices of any third-party
                  sites or services.
                </p>
                <p className="text-white/60">
                  Apex GT does not endorse and is not responsible or liable for
                  any content, advertising, products, or other materials on or
                  available from third-party sites. You acknowledge and agree
                  that Apex GT shall not be responsible or liable, directly or
                  indirectly, for any damage or loss caused or alleged to be
                  caused by or in connection with your use of any such
                  third-party site or service.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Changes to Terms
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  Apex GT reserves the right to modify or update these Terms at
                  any time at its sole discretion. Any changes will be effective
                  immediately upon posting the revised Terms on the Site, with an
                  updated &ldquo;Last updated&rdquo; date at the top of this
                  page.
                </p>
                <p className="text-white/60">
                  It is your responsibility to review these Terms periodically for
                  changes. Your continued use of the Site following the posting
                  of any changes constitutes your acceptance of the revised
                  Terms. If you do not agree to the updated Terms, you must
                  discontinue use of the Site.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Governing Law
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of California, without regard to its
                  conflict of law provisions. Any dispute arising out of or
                  relating to these Terms or your use of the Site shall be
                  resolved exclusively in the state or federal courts located in
                  Beverly Hills, California.
                </p>
                <p className="text-white/60">
                  You hereby consent to the personal jurisdiction of such courts
                  and waive any objections to venue or inconvenient forum. If any
                  provision of these Terms is found to be unenforceable or
                  invalid, that provision shall be limited or eliminated to the
                  minimum extent necessary, and the remaining provisions shall
                  remain in full force and effect.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Contact Us
              </h2>
              <div className="space-y-4">
                <p className="text-white/60">
                  If you have any questions, concerns, or requests regarding
                  these Terms &amp; Conditions, please contact us using the
                  information below:
                </p>
                <div className="space-y-2 text-white/60">
                  <p>
                    <span className="font-medium text-white/80">Email:</span>{" "}
                    experience@apexgt.com
                  </p>
                  <p>
                    <span className="font-medium text-white/80">Phone:</span> +1
                    (800) APEX-GT1
                  </p>
                  <p>
                    <span className="font-medium text-white/80">Address:</span>{" "}
                    123 Luxury Lane, Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

