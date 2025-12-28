import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-slate-600 mb-4">
                When you request a demo or contact us, we collect:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Name and contact information</li>
                <li>Organization name and your role</li>
                <li>Any additional information you provide in your message</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-slate-600 mb-4">We use this information to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Respond to your demo requests and inquiries</li>
                <li>Provide information about our services</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Data Security
              </h2>
              <p className="text-slate-600">
                We implement appropriate security measures to protect your
                personal information. We do not sell your information to third
                parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Contact Us
              </h2>
              <p className="text-slate-600">
                If you have questions about this privacy policy, please contact
                us at{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-accent-600 hover:text-accent-700"
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
