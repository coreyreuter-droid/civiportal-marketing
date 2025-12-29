import Link from "next/link";
import { siteConfig } from "@/config";

const steps = [
  {
    title: "Export from your finance system",
    description:
      "Start with the same files you already produce—budgets, actuals, revenues, and/or transactions. (CSV templates can be mapped to common exports.)",
  },
  {
    title: "Upload or replace a fiscal year",
    description:
      "Admins can upload new data or replace a specific year cleanly, keeping the portal accurate without technical work.",
  },
  {
    title: "Publish the modules you choose",
    description:
      "Enable only what you want public today (Budget, Transactions, Departments, Revenues) and expand over time.",
  },
  {
    title: "Keep it current",
    description:
      "Update the portal when your data updates—no custom development, no one-off reports, no fragile spreadsheets on the public website.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A workflow designed for government finance teams: export → upload →
            publish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-xl border border-slate-200 p-6 bg-slate-50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent-600 text-white flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 p-8 bg-white">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              What you can publish
            </h3>
            <p className="text-slate-600 mb-6">
              Start with one module and add more when you&apos;re ready. The goal
              is clarity for residents and lower maintenance for staff.
            </p>

            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2">
                <span className="text-accent-700 font-semibold">•</span> Budget
                summaries and drill-downs
              </li>
              <li className="flex gap-2">
                <span className="text-accent-700 font-semibold">•</span> Actuals
                (where available) and comparisons
              </li>
              <li className="flex gap-2">
                <span className="text-accent-700 font-semibold">•</span> Searchable
                transactions with filters
              </li>
              <li className="flex gap-2">
                <span className="text-accent-700 font-semibold">•</span> Revenues
                by source and trends
              </li>
              <li className="flex gap-2">
                <span className="text-accent-700 font-semibold">•</span> Department
                views for context
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.demoUrl}
                className="inline-flex justify-center items-center rounded-lg px-4 py-2 border border-slate-300 text-slate-900 hover:bg-slate-50 transition-colors"
              >
                View sample portal
              </Link>
              <Link
                href="/demo-request"
                className="inline-flex justify-center items-center rounded-lg px-4 py-2 bg-accent-600 text-white hover:bg-accent-700 transition-colors"
              >
                Book a demo
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Note: Exact module availability depends on the data you choose to
              publish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
