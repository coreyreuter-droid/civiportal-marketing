import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

const LAST_UPDATED = "December 28, 2025";

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Accessibility Statement
          </h1>
          <p className="text-slate-600 mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="prose prose-slate max-w-none">
            <p>
              {siteConfig.name} is committed to digital accessibility. Our goal
              is to provide a public transparency portal that is usable for as
              many people as possible, including people who use assistive
              technology.
            </p>

            <h2>Conformance target</h2>
            <p>
              We are targeting conformance with{" "}
              <strong>WCAG 2.1 Level AA</strong>. Accessibility is treated as a
              core requirement—especially for public-facing government content.
            </p>

            <h2>Accessibility practices</h2>
            <ul>
              <li>Keyboard navigable interfaces</li>
              <li>Screen reader-friendly structure and labels</li>
              <li>Color contrast and readable typography</li>
              <li>Responsive layouts for mobile and desktop</li>
            </ul>

            <h2>Testing approach</h2>
            <p>
              We test critical user flows (navigation, filters, charts/tables)
              using keyboard-only interaction and screen-reader checks during
              development. We continue to improve as the product evolves.
            </p>

            <h2>Known limitations</h2>
            <p>
              If you encounter an accessibility issue, we want to fix it. Some
              complex data visualizations can present unique challenges; we work
              to ensure equivalent access through labels, summaries, and
              structured data wherever possible.
            </p>

            <h2>Contact</h2>
            <p>
              For accessibility feedback or requests, email{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-accent-600 hover:text-accent-700"
              >
                {siteConfig.contactEmail}
              </a>{" "}
              and include the page URL and a brief description of the issue. We
              aim to respond promptly.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
