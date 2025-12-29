import { Header, Footer, Button } from "@/components";
import { siteConfig } from "@/config";

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Security-minded by design
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Security &amp; Trust
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              CiviPortal is designed for public-sector transparency workflows, with a focus on
              protecting administrative access, separating tenant data, and using reputable infrastructure providers.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">HTTPS</div>
              <div className="text-sm text-slate-600">TLS encryption in transit</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">RBAC</div>
              <div className="text-sm text-slate-600">Role-based admin access</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">Isolation</div>
              <div className="text-sm text-slate-600">Tenant-scoped data access</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">Auditability</div>
              <div className="text-sm text-slate-600">Admin actions can be logged</div>
            </div>
          </div>

          {/* Infrastructure Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Infrastructure &amp; Subprocessors
            </h2>
            <p className="text-slate-600 mb-6">
              We rely on established providers for core infrastructure. Many of these providers publish
              third-party audit reports (for example, SOC 2) and security documentation. We can share a current
              subprocessors list upon request.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Component</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Provider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Purpose</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Application Hosting</td>
                    <td className="px-6 py-4">Vercel</td>
                    <td className="px-6 py-4">Web hosting &amp; delivery</td>
                    <td className="px-6 py-4">Provider security/compliance documentation available</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Database &amp; Auth</td>
                    <td className="px-6 py-4">Supabase</td>
                    <td className="px-6 py-4">Data storage and authentication services</td>
                    <td className="px-6 py-4">Provider security/compliance documentation available</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">DNS / Edge Security</td>
                    <td className="px-6 py-4">Cloudflare</td>
                    <td className="px-6 py-4">DNS, caching, and protective controls</td>
                    <td className="px-6 py-4">Provider security/compliance documentation available</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Email</td>
                    <td className="px-6 py-4">Google Workspace</td>
                    <td className="px-6 py-4">Business email</td>
                    <td className="px-6 py-4">Provider security/compliance documentation available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Data Protection Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Data Protection
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Encryption
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>In transit:</strong> HTTPS/TLS for traffic between users and the service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>At rest:</strong> encrypted storage provided by managed infrastructure/database services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Backups:</strong> backup strategy depends on plan/configuration; details available upon request</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Tenant isolation
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Tenant-scoped access:</strong> requests are scoped to the correct organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Database controls:</strong> row-level policies may be used where configured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Public vs admin:</strong> public pages are accessible by design; admin actions require authorization</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Access Control Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Access Control
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Authentication
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Administrative access requires authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Session controls are designed to reduce unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exact authentication mechanisms may vary by deployment configuration</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Role-Based Access (RBAC)
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Roles control access to administrative actions (uploads, configuration, user management)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Least privilege design: grant only what staff need</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Incident Response */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Incident Response
            </h2>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-600 mb-4">
                We maintain an incident response process. If we become aware of a security incident
                that impacts a client’s non-public operational data (such as administrative access or portal configuration),
                we aim to notify affected clients promptly and provide relevant details as they are confirmed.
              </p>
              <p className="text-slate-600">
                Notification timing may depend on applicable law and contractual requirements.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-accent-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Security Questions?
            </h2>
            <p className="text-slate-600 mb-6">
              If your IT team has a security questionnaire or procurement requirements,
              email us and we’ll respond with the most current documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`mailto:${siteConfig.contactEmail}`} variant="primary">
                Contact
              </Button>
              <Button href="/demo-request" variant="outline">
                Book demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Email: {siteConfig.contactEmail}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
