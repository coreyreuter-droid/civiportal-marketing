import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700"
        aria-hidden="true"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.42 0l-3.2-3.2a1 1 0 011.42-1.42l2.49 2.49 6.49-6.49a1 1 0 011.42 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

export default function AccessibilityPage() {
  return (
    <>
      <Header />

      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span aria-hidden="true">♿</span>
              Accessibility-first for public portals
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Accessibility Statement
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {siteConfig.name} is committed to digital accessibility. Our goal is to provide a
              public transparency portal that is usable for as many people as possible,
              including people who use assistive technology.
            </p>
          </div>

          {/* Badge grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">WCAG 2.1</div>
              <div className="text-sm text-slate-600">AA conformance target</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">Keyboard</div>
              <div className="text-sm text-slate-600">Navigation supported</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">Screen readers</div>
              <div className="text-sm text-slate-600">Semantic structure + labels</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">Support</div>
              <div className="text-sm text-slate-600">Feedback channel available</div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2 space-y-8">
              <section className="rounded-xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Conformance target
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We are targeting conformance with <strong>WCAG 2.1 Level AA</strong>.
                  Accessibility is treated as a core requirement, especially for public-facing
                  government content.
                </p>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Accessibility practices
                </h2>
                <ul className="space-y-3">
                  <CheckItem>Keyboard navigable interfaces</CheckItem>
                  <CheckItem>Screen reader-friendly structure and labels</CheckItem>
                  <CheckItem>Color contrast and readable typography</CheckItem>
                  <CheckItem>Responsive layouts for mobile and desktop</CheckItem>
                </ul>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Testing approach
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We test critical user flows (navigation, filters, charts/tables) using
                  keyboard-only interaction and screen reader checks during development.
                  We continue to improve as the product evolves.
                </p>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Known limitations
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  If you encounter an accessibility issue, we want to fix it. Some complex data
                  visualizations can present unique challenges; we work to ensure equivalent access
                  through labels, summaries, and structured data wherever possible.
                </p>
              </section>
            </div>

            {/* Right */}
            <aside className="space-y-8">
              <section className="bg-accent-50 rounded-xl p-8 border border-accent-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  Accessibility feedback
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If something isn’t working for you, tell us. We’ll take it seriously and use
                  your feedback to improve accessibility.
                </p>

                <div className="rounded-lg bg-white/80 border border-accent-200 p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Email</p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-accent-700 hover:text-accent-800 font-semibold"
                  >
                    {siteConfig.contactEmail}
                  </a>

                  <p className="mt-3 text-sm text-slate-700">
                    Include the page URL and a brief description of the issue.
                  </p>

                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
