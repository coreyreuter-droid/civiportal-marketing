import Link from "next/link";
import { siteConfig } from "@/config";

const highlightItems = [
  {
    title: "Accessible by design",
    description:
      "Targeting WCAG 2.1 AA with keyboard navigation and screen reader-friendly structure.",
    href: "/accessibility",
    cta: "Read accessibility statement",
  },
  {
    title: "Admin controls that fit finance workflows",
    description:
      "Replace-year uploads, module toggles, and guardrails designed for non-technical staff.",
    href: "/#how-it-works",
    cta: "See how it works",
  },
  {
    title: "Security-minded architecture",
    description:
      "Designed for role-based access, auditability, and responsible handling of public financial data.",
    href: "/security",
    cta: "Security & data overview",
  },
  {
    title: "Implementation without custom dev",
    description:
      "Export → upload → publish. Keep your portal current without standing up a bespoke website.",
    href: "/contact",
    cta: "Book a demo",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What this helps you do
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Practical outcomes for finance teams, leadership, and the public—
            without marketing fluff.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {siteConfig.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights (replaces the old fake stats) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col"
            >
              <p className="font-semibold text-slate-900 mb-2">{item.title}</p>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 text-sm font-medium text-accent-700 hover:text-accent-800"
              >
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
