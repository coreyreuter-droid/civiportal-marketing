import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

const EFFECTIVE_DATE = "December 28, 2025";
const LAST_UPDATED = "December 28, 2025";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 mb-8">
            Effective Date: {EFFECTIVE_DATE} | Last Updated: {LAST_UPDATED}
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-slate-600 mb-4">
                These Terms of Service (&quot;Terms&quot;) form a legally binding agreement between you
                and CiviPortal LLC (&quot;CiviPortal,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your use of
                the CiviPortal website and platform.
              </p>
              <p className="text-slate-600">
                If you are entering into these Terms on behalf of a government entity, you represent
                that you have authority to bind that entity.
              </p>
              <p className="text-slate-600 mt-4">
                <strong>Important:</strong> Government subscriptions are typically governed by an Order
                Form and/or separate service agreement. If there is a conflict between those documents
                and these Terms, the service agreement controls for the subscribed service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-slate-600 mb-3">
                CiviPortal provides a municipal financial transparency platform designed to enable
                government entities to publish public financial information in an accessible format.
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Upload and manage public financial data</li>
                <li>Display budgets, revenues, and transactions (and other modules where available)</li>
                <li>Provide citizens with accessible, searchable financial information</li>
                <li>Configure basic portal branding and presentation</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Some functionality may be released iteratively and may evolve over time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. User Accounts
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                3.1 Government Administrator Accounts
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Government clients may create administrator accounts for authorized personnel</li>
                <li>Administrators are responsible for maintaining account security</li>
                <li>Accounts must not be shared with unauthorized individuals</li>
                <li>Clients must promptly notify us of suspected unauthorized access</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                3.2 Account Responsibilities
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>All activity that occurs under your account</li>
                <li>Maintaining the confidentiality of login credentials</li>
                <li>Ensuring uploaded data is accurate and authorized for publication</li>
                <li>Compliance with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Acceptable Use
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.1 You May:
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Upload public financial data you have authority to publish</li>
                <li>Configure your portal’s branding and modules (as available)</li>
                <li>Grant access to authorized administrators</li>
                <li>Use the platform for legitimate government transparency purposes</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.2 You May Not:
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Upload false, misleading, or unauthorized data</li>
                <li>Attempt to access other clients’ data or systems</li>
                <li>Reverse engineer, decompile, or disassemble the platform</li>
                <li>Use the platform for unlawful purposes</li>
                <li>Interfere with or disrupt platform operations</li>
                <li>Upload malicious code or files</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Data Ownership and Licensing
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                5.1 Your Data
              </h3>
              <p className="text-slate-600 mb-4">
                You retain ownership of data you upload. By uploading data, you grant CiviPortal a limited
                license to host, display, and process that data solely for the purpose of providing the service.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                5.2 Public Financial Data
              </h3>
              <p className="text-slate-600 mb-2">You represent and warrant that:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>You have authority to publish the financial data you upload</li>
                <li>The data does not violate applicable laws or third-party rights</li>
                <li>The data is accurate to the best of your knowledge at time of publication</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                5.3 Platform Content
              </h3>
              <p className="text-slate-600">
                CiviPortal retains ownership of the platform (software, design, and documentation).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Service Availability
              </h2>
              <p className="text-slate-600">
                We aim to provide a reliable service, but we do not guarantee uninterrupted availability.
                The service may be impacted by maintenance, upgrades, or third-party infrastructure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Fees and Payment
              </h2>
              <p className="text-slate-600">
                Fees (if any) are set out in an Order Form or service agreement. Pricing and terms may change
                subject to the terms of that agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Warranties and Disclaimers
              </h2>
              <p className="text-slate-600">
                Except as expressly stated in a separate service agreement, the service is provided “as is”
                and “as available.” CiviPortal does not warrant that the service will be error-free or uninterrupted.
              </p>
              <p className="text-slate-600 mt-4">
                Government clients are responsible for the accuracy and legal authority of published data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-slate-600">
                To the maximum extent permitted by law, CiviPortal will not be liable for indirect, incidental,
                special, consequential, or punitive damages. Any liability limitations applicable to a government
                client subscription will be set forth in the service agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                10. Term and Termination
              </h2>
              <p className="text-slate-600">
                These Terms remain effective until terminated. Subscription term, termination rights, and data
                export provisions (if any) are typically defined in the service agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                11. General Provisions
              </h2>
              <p className="text-slate-600">
                These Terms are governed by applicable law as determined by the parties’ circumstances and any
                service agreement. If you need specific governing law / dispute resolution terms for procurement,
                we handle that via the contracting process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                12. Contact Us
              </h2>
              <p className="text-slate-600">
                <strong>CiviPortal LLC</strong>
                <br />
                Email:{" "}
                <a
                  className="text-accent-700 hover:text-accent-800"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
                <br />
                Website: https://civiportal.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
