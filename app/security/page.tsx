import { Header, Footer, Button } from "@/components";

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Enterprise-Grade Security
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Security & Trust
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              CiviPortal is built with security and compliance as foundational principles,
              leveraging enterprise-grade infrastructure to protect your data.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">SOC 2</div>
              <div className="text-sm text-slate-600">Type II Certified Infrastructure</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">TLS 1.2+</div>
              <div className="text-sm text-slate-600">Encryption in Transit</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">AES-256</div>
              <div className="text-sm text-slate-600">Encryption at Rest</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">99.9%</div>
              <div className="text-sm text-slate-600">Uptime Target</div>
            </div>
          </div>

          {/* Infrastructure Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Infrastructure Security
            </h2>
            <p className="text-slate-600 mb-6">
              Our infrastructure is built on certified, enterprise-grade providers who maintain
              rigorous security certifications:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Component</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Provider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Purpose</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Certifications</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Application Hosting</td>
                    <td className="px-6 py-4">Vercel</td>
                    <td className="px-6 py-4">Web hosting & CDN</td>
                    <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">SOC 2 Type II</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Database</td>
                    <td className="px-6 py-4">Supabase</td>
                    <td className="px-6 py-4">Data storage & auth</td>
                    <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">SOC 2 Type II</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">DNS & Security</td>
                    <td className="px-6 py-4">Cloudflare</td>
                    <td className="px-6 py-4">DNS & DDoS protection</td>
                    <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">SOC 2, ISO 27001</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Email</td>
                    <td className="px-6 py-4">Google Workspace</td>
                    <td className="px-6 py-4">Business email</td>
                    <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">SOC 2, FedRAMP</span></td>
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
                  <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Encryption
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>In Transit:</strong> TLS 1.2+ encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>At Rest:</strong> AES-256 encryption for stored data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Backups:</strong> Encrypted daily backups with 30-day retention</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Data Isolation
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Multi-tenant:</strong> Logically isolated client data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Row-Level Security:</strong> Database-enforced access controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>API Security:</strong> All requests require authentication</span>
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
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Authentication</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Magic Link:</strong> Passwordless, email-based login</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Session Management:</strong> Secure, time-limited sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>No Passwords:</strong> Eliminates password vulnerabilities</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Role-Based Access (RBAC)</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Owner:</strong> Full administrative access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Admin:</strong> Configuration and data management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-accent-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Least Privilege:</strong> Minimum necessary permissions</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Compliance Status
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Framework</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b">
                    <td className="px-6 py-4">SOC 2 Type II (via infrastructure providers)</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center gap-1 text-green-700"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Infrastructure certified</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">HTTPS/TLS Encryption</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center gap-1 text-green-700"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Enforced</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">Data Encryption (at rest & in transit)</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center gap-1 text-green-700"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Implemented</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Role-Based Access Controls</td>
                    <td className="px-6 py-4"><span className="inline-flex items-center gap-1 text-green-700"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Implemented</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Incident Response */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Incident Response
            </h2>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-600 mb-4">
                In the event of a security incident affecting client data, CiviPortal will:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="bg-accent-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                  <span>Notify affected clients within 72 hours of becoming aware</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-accent-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                  <span>Provide details of the incident and affected data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-accent-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                  <span>Take reasonable steps to mitigate harm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-accent-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                  <span>Cooperate with client investigation and reporting obligations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-accent-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Security Questions?
            </h2>
            <p className="text-slate-600 mb-6">
              For security inquiries or to request additional compliance documentation,
              contact our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:info@civiportal.com" variant="primary">
                Contact Security Team
              </Button>
              <Button href="/demo-request" variant="outline">
                Request Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Email: info@civiportal.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
