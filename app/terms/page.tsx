import { Header, Footer } from "@/components";

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
            Effective Date: December 28, 2024 | Last Updated: December 28, 2024
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-slate-600 mb-4">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement
                between you and CiviPortal LLC (&quot;CiviPortal,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                governing your use of the CiviPortal platform and services.
              </p>
              <p className="text-slate-600">
                By accessing or using CiviPortal, you agree to be bound by these Terms.
                If you are entering into these Terms on behalf of a government entity,
                you represent that you have the authority to bind that entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-slate-600 mb-3">
                CiviPortal provides a municipal financial transparency platform that enables
                government entities to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Upload and manage public financial data</li>
                <li>Display budgets, expenditures, revenues, and transactions</li>
                <li>Provide citizens with accessible financial information</li>
                <li>Customize branding and presentation of financial data</li>
              </ul>
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
                <li>Account credentials must not be shared with unauthorized individuals</li>
                <li>Clients must promptly notify us of any unauthorized account access</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                3.2 Account Responsibilities
              </h3>
              <p className="text-slate-600 mb-2">You are responsible for:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>All activities that occur under your account</li>
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
                <li>Upload accurate public financial data</li>
                <li>Customize your portal&apos;s branding and appearance</li>
                <li>Grant access to authorized administrators</li>
                <li>Use the platform for legitimate government transparency purposes</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.2 You May NOT:
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Upload false, misleading, or unauthorized data</li>
                <li>Attempt to access other clients&apos; data or systems</li>
                <li>Reverse engineer, decompile, or disassemble the platform</li>
                <li>Use the platform for any unlawful purpose</li>
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
                You retain all ownership rights to data you upload to CiviPortal. By uploading
                data, you grant CiviPortal a limited license to host, display, and process that
                data solely for the purpose of providing the service.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                5.2 Public Financial Data
              </h3>
              <p className="text-slate-600 mb-2">You represent and warrant that:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>You have authority to publish the financial data you upload</li>
                <li>The data does not violate any laws or third-party rights</li>
                <li>The data is accurate to the best of your knowledge</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                5.3 Platform Content
              </h3>
              <p className="text-slate-600">
                CiviPortal retains ownership of the platform, including all software, design,
                and documentation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Service Availability
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                6.1 Uptime
              </h3>
              <p className="text-slate-600 mb-4">
                We strive to maintain high availability but do not guarantee uninterrupted
                service. Scheduled maintenance will be communicated in advance when possible.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                6.2 Modifications
              </h3>
              <p className="text-slate-600">
                We reserve the right to modify, suspend, or discontinue any aspect of the
                service with reasonable notice to clients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Fees and Payment
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                7.1 Pricing
              </h3>
              <p className="text-slate-600 mb-4">
                Service fees are outlined in your service agreement or order form. Fees are
                subject to change with 30 days&apos; notice.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                7.2 Payment Terms
              </h3>
              <p className="text-slate-600">
                Unless otherwise agreed, payment is due within 30 days of invoice. Late
                payments may result in service suspension.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Warranties and Disclaimers
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                8.1 Our Warranties
              </h3>
              <p className="text-slate-600 mb-2">CiviPortal warrants that:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>The platform will perform substantially as described</li>
                <li>We will use commercially reasonable security measures</li>
                <li>We will comply with applicable laws in providing the service</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                8.2 Disclaimers
              </h3>
              <p className="text-slate-600 uppercase text-sm">
                EXCEPT AS EXPRESSLY PROVIDED, THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT
                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-slate-600 uppercase text-sm mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CIVIPORTAL SHALL NOT BE LIABLE FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                REGARDLESS OF CAUSE.
              </p>
              <p className="text-slate-600 uppercase text-sm">
                CIVIPORTAL&apos;S TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOU IN THE
                TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                10. Term and Termination
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                10.1 Term
              </h3>
              <p className="text-slate-600 mb-4">
                These Terms are effective until terminated by either party.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                10.2 Termination
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Either party may terminate with 30 days&apos; written notice</li>
                <li>We may terminate immediately for material breach</li>
                <li>Upon termination, your access will be revoked</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                10.3 Data Export
              </h3>
              <p className="text-slate-600">
                Upon request made within 30 days of termination, we will provide an export
                of your data in a standard format.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                11. General Provisions
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>Governing Law:</strong> These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.</li>
                <li><strong>Dispute Resolution:</strong> Any disputes shall be resolved through good faith negotiation. If unresolved, disputes shall be submitted to binding arbitration.</li>
                <li><strong>Entire Agreement:</strong> These Terms, together with any service agreement, constitute the entire agreement between the parties.</li>
                <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions shall continue in effect.</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our consent. We may assign our rights to a successor entity.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                12. Contact Us
              </h2>
              <p className="text-slate-600 mb-2">
                For questions about these Terms:
              </p>
              <p className="text-slate-600">
                <strong>CiviPortal LLC</strong><br />
                Email: info@civiportal.com<br />
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
