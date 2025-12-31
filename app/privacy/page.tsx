import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

const EFFECTIVE_DATE = "December 28, 2025";
const LAST_UPDATED = "December 28, 2025";

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
            Effective Date: {EFFECTIVE_DATE} | Last Updated: {LAST_UPDATED}
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-600 mb-4">
                CiviPortal LLC (&quot;CiviPortal,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                is committed to protecting privacy for (a) government users who
                administer a portal and (b) members of the public who browse public
                financial information. This Privacy Policy explains how we collect,
                use, disclose, and safeguard information when you use our website
                and platform.
              </p>
              <p className="text-slate-600">
                <strong>Contact:</strong>{" "}
                <a
                  className="text-accent-700 hover:text-accent-800"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
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
                <li>Public financial data you choose to publish (budgets, revenues, transactions, actuals)</li>
                <li>Department and vendor information (as part of published data)</li>
                <li>Portal configuration and branding assets (logos, images, copy)</li>
                <li>Administrator account info (name, email address, role)</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Log data (IP address, user agent, timestamp, requested pages)</li>
                <li>Basic usage analytics (pages viewed, aggregate feature usage)</li>
                <li>Device and browser information (OS, device type, browser type)</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                2.3 Information from Citizens (Public Users)
              </h3>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  We do <strong>not</strong> require citizens to create accounts to view
                  public financial data.
                </li>
                <li>
                  We do <strong>not</strong> intentionally collect personal information from
                  public users beyond standard web logs/analytics used for security and performance.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. How We Use Information
              </h2>
              <p className="text-slate-600 mb-3">We use information to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide and maintain the CiviPortal platform</li>
                <li>Enable government clients to publish financial transparency data</li>
                <li>Authenticate and authorize administrative users</li>
                <li>Operate support, troubleshooting, and platform improvements</li>
                <li>Detect, prevent, and respond to security incidents or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Data Sharing and Disclosure
              </h2>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.1 We Do Not Sell Personal Data
              </h3>
              <p className="text-slate-600 mb-4">
                CiviPortal does not sell, rent, or trade personal information.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.2 Service Providers (Subprocessors)
              </h3>
              <p className="text-slate-600 mb-4">
                We use trusted vendors to host and operate the service. These providers
                may process limited information on our behalf solely to provide infrastructure
                and operational support.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b">
                        Provider
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b">
                        Security/Compliance (Provider-level)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b">
                      <td className="px-4 py-3">Vercel</td>
                      <td className="px-4 py-3">Application hosting & delivery</td>
                      <td className="px-4 py-3">
                        Provider publishes third-party security/compliance reports
                        (e.g., SOC 2) where applicable.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Supabase</td>
                      <td className="px-4 py-3">Database and authentication services</td>
                      <td className="px-4 py-3">
                        Provider publishes third-party security/compliance reports
                        (e.g., SOC 2) where applicable.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Cloudflare</td>
                      <td className="px-4 py-3">DNS, caching, and security services</td>
                      <td className="px-4 py-3">
                        Provider publishes third-party security/compliance reports
                        (e.g., SOC 2 / ISO) where applicable.
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <p className="text-slate-600 mb-4">
                We can provide an up-to-date subprocessors list upon request.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-3">
                4.3 Legal Requirements
              </h3>
              <p className="text-slate-600">
                We may disclose information if required by law, court order, or
                valid government request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-slate-600 mb-3">
                We implement security measures designed to protect information,
                including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  <strong>Encryption in transit:</strong> HTTPS/TLS for web traffic.
                </li>
                <li>
                  <strong>Encryption at rest:</strong> encrypted storage as provided by
                  managed infrastructure and database services.
                </li>
                <li>
                  <strong>Access controls:</strong> role-based administrative permissions
                  and least-privilege design.
                </li>
                <li>
                  <strong>Authentication:</strong> secure sign-in flows for administrative
                  users (exact methods may vary by deployment configuration).
                </li>
                <li>
                  <strong>Operational monitoring:</strong> logging and monitoring to help detect
                  abuse and troubleshoot issues.
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                No system can be guaranteed 100% secure. We work continuously to improve
                protections as the product evolves.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-slate-600 mb-3">
                Retention periods may vary by contract and operational needs. Typical
                retention patterns may include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  <strong>Government client data:</strong> retained for the duration of the
                  service agreement, plus a limited period after termination to support export
                  or transition (if applicable).
                </li>
                <li>
                  <strong>Administrator account data:</strong> retained while accounts remain active,
                  or until deletion is requested (subject to legal/contract requirements).
                </li>
                <li>
                  <strong>Log data:</strong> retained for a limited period for security and
                  troubleshooting purposes.
                </li>
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
                <li>Ensuring they have authority to publish the data they upload</li>
                <li>Accuracy and timeliness of uploaded information</li>
                <li>Managing admin accounts and role assignments</li>
                <li>Compliance with applicable public records and disclosure laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Public Data Notice
              </h2>
              <p className="text-slate-600">
                Financial data displayed on CiviPortal is public information provided by
                government clients for civic transparency. Government clients should avoid
                uploading data that contains private citizen personally identifiable information
                unless legally required and intentionally disclosed.
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
                <li>Object to or restrict certain processing</li>
              </ul>
              <p className="text-slate-600 mt-3">
                To exercise these rights, contact{" "}
                <a
                  className="text-accent-700 hover:text-accent-800"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. If changes are
                material, we will update the “Last Updated” date above and may notify
                government clients through reasonable channels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                11. Contact Us
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
