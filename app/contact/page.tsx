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
              Contact
            </h1>
            <p className="text-lg text-slate-600">
              Questions, procurement requirements, or a security questionnaire—send it over.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Email us
                </h2>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-accent-600 hover:text-accent-700 text-lg font-medium"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>

              <div className="border-t border-slate-200 pt-6 text-center">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Want a walkthrough?
                </h2>
                <p className="text-slate-600 mb-4">
                  We&apos;ll show the live sample portal and the admin workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button href={siteConfig.demoUrl} variant="outline">
                    View sample portal
                  </Button>
                  <Button
                    href="/demo-request"
                    variant="secondary"
                    className="bg-white text-accent-600 hover:bg-slate-100"
                  >
                    Book a demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
