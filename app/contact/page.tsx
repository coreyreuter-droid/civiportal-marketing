import { Header, Footer, Button } from "@/components";
import { siteConfig } from "@/config";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-slate-600">
              Have questions about CiviPortal? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-accent-600 hover:text-accent-700"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Response Time</h3>
                    <p className="text-slate-600">
                      We typically respond within 1-2 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo CTA */}
            <div className="bg-accent-600 rounded-xl shadow-sm p-8 text-white">
              <h2 className="text-xl font-semibold mb-4">
                Ready to See CiviPortal in Action?
              </h2>
              <p className="text-accent-100 mb-6">
                Schedule a personalized demo and see how CiviPortal can help
                your government achieve financial transparency.
              </p>
              <Button
                href="/demo-request"
                variant="secondary"
                className="bg-white text-accent-600 hover:bg-slate-100"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
