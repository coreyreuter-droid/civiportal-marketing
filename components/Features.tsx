import { siteConfig } from "@/config";

const iconMap: Record<string, React.ReactNode> = {
  chart: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  search: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  building: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m4 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4m6 0h2"
      />
    </svg>
  ),
  dollar: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  calendar: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  upload: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
      />
    </svg>
  ),
};

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Product
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Financial transparency in a format the
            public can navigate.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200 border border-slate-200"
            >
              <div className="w-12 h-12 bg-accent-600 text-white rounded-lg flex items-center justify-center mb-6">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Flexibility Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center bg-accent-50 rounded-xl p-8 mt-8 border border-accent-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Start small. Expand when ready.
            </h3>
            <p className="text-slate-700 max-w-3xl mx-auto">
              Not every organization is ready to publish everything on day one.
              CiviPortal lets you enable only the modules you want. Expand
              over time as your transparency program matures.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              <div className="bg-white/80 rounded-lg p-5 border border-accent-100">
                <p className="font-semibold text-slate-900 mb-1">
                  Starter Portal
                </p>
                <p className="text-slate-700 text-sm">
                  Budget + Departments (add Transactions later)
                </p>
              </div>
              <div className="bg-white/80 rounded-lg p-5 border border-accent-100">
                <p className="font-semibold text-slate-900 mb-1">
                  Full Transparency Portal
                </p>
                <p className="text-slate-700 text-sm">
                  Budget + Actuals + Transactions + Revenues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
