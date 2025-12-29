import { Header, Footer } from "@/components";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 mb-8">
            Effective Date: December 28, 2024 | Last Updated: December 28, 2024
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-600 mb-4">
                CiviPortal LLC (&quot;CiviPortal,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
                protecting the privacy of our users and the citizens who access
                public financial data through our platform. This Privacy Policy
                explains how we collect, use, disclose, and safeguard information
                when you use our municipal financial transparency platform.
              </p>
              <p className="text-slate-600">
                <strong>Contact:</strong> info@civiportal.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                2.1 Information Provided by Government Clients
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Municipal financial data (budgets, expenditures, revenues, transactions)</li>
                <li>Department and vendor information</li>
                <li>City/county descriptions and branding assets (logos, images)</li>
                <li>Administrator account information (names, email addresses)</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Log data (IP addresses, browser type, access times)</li>
                <li>Usage analytics (pages viewed, features accessed)</li>
                <li>Device information (operating system, device type)</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                2.3 Information from Citizens (Public Users)
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>We do <strong>NOT</strong> require citizens to create accounts to view public financial data</li>
                <li>We do <strong>NOT</strong> collect personal information from public users beyond standard web analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. How We Use Information
              </h2>
              <p className="text-slate-600 mb-3">We use collected information to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide and maintain the CiviPortal platform</li>
                <li>Enable government clients to publish financial transparency data</li>
                <li>Authenticate and authorize administrative users</li>
                <li>Improve platform performance and user experience</li>
                <li>Respond to support requests and inquiries</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Data Sharing and Disclosure
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.1 We Do NOT Sell Personal Data
              </h3>
              <p className="text-slate-600 mb-4">
                CiviPortal does not sell, rent, or trade personal information to third parties.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.2 Service Providers
              </h3>
              <p className="text-slate-600 mb-4">
                We share data with trusted service providers who assist in operating our platform:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b">Provider</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b">Compliance</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b">
                      <td className="px-4 py-3">Vercel</td>
                      <td className="px-4 py-3">Application hosting</td>
                      <td className="px-4 py-3">SOC 2 Type II</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Supabase</td>
                      <td className="px-4 py-3">Database and authentication</td>
                      <td className="px-4 py-3">SOC 2 Type II</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Cloudflare</td>
                      <td className="px-4 py-3">DNS and security</td>
                      <td className="px-4 py-3">SOC 2 Type II</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Google Workspace</td>
                      <td className="px-4 py-3">Business email</td>
                      <td className="px-4 py-3">SOC 2 Type II</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.3 Legal Requirements
              </h3>
              <p className="text-slate-600">
                We may disclose information if required by law, court order, or government request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-slate-600 mb-3">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>Encryption in Transit:</strong> All data transmitted via TLS 1.2+</li>
                <li><strong>Encryption at Rest:</strong> Database encryption via Supabase (AES-256)</li>
                <li><strong>Access Controls:</strong> Role-based access for administrative users</li>
                <li><strong>Authentication:</strong> Secure magic link and email-based authentication</li>
                <li><strong>Infrastructure Security:</strong> Enterprise-grade hosting via Vercel and Supabase</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Data Retention
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>Government Client Data:</strong> Retained for the duration of the service agreement plus 30 days after termination</li>
                <li><strong>User Account Data:</strong> Retained until account deletion is requested</li>
                <li><strong>Log Data:</strong> Retained for 90 days for security and troubleshooting purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Government Client Responsibilities
              </h2>
              <p className="text-slate-600 mb-3">
                Government clients using CiviPortal are responsible for:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Ensuring they have authority to publish financial data</li>
                <li>Accuracy of uploaded financial information</li>
                <li>Managing their administrative user accounts</li>
                <li>Compliance with applicable public records laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Public Data Notice
              </h2>
              <p className="text-slate-600">
                Financial data displayed on CiviPortal is <strong>public information</strong> provided
                by government clients for the purpose of civic transparency. This data is intended
                for public viewing and does not contain personally identifiable information of
                private citizens.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Your Rights
              </h2>
              <p className="text-slate-600 mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of certain data processing</li>
              </ul>
              <p className="text-slate-600 mt-3">
                To exercise these rights, contact us at info@civiportal.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. We will notify government
                clients of material changes via email. Continued use of the platform after
                changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-slate-600 mb-2">
                For questions about this Privacy Policy or our data practices:
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
