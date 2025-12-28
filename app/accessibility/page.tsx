import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Accessibility Statement
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              {siteConfig.name} is committed to ensuring digital accessibility
              for people with disabilities.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-slate-600 mb-4">
                We are continually improving the user experience for everyone
                and applying relevant accessibility standards. Our goal is to
                conform to WCAG 2.1 Level AA standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Accessibility Features
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Semantic HTML structure for screen reader compatibility</li>
                <li>Keyboard navigation support throughout the site</li>
                <li>Sufficient color contrast ratios</li>
                <li>Clear and consistent navigation</li>
                <li>Alternative text for images</li>
                <li>Resizable text without loss of functionality</li>
                <li>Focus indicators for interactive elements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Feedback
              </h2>
              <p className="text-slate-600">
                We welcome your feedback on the accessibility of {siteConfig.name}.
                Please let us know if you encounter accessibility barriers at{" "}
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
