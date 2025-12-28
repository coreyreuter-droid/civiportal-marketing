import { siteConfig } from "@/config";

export function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose CiviPortal?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join forward-thinking governments that are leading the way in
            financial transparency.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">100%</div>
            <div className="text-slate-600">Data Transparency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">24/7</div>
            <div className="text-slate-600">Public Access</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">Easy</div>
            <div className="text-slate-600">Setup Process</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">
              Secure
            </div>
            <div className="text-slate-600">Data Handling</div>
          </div>
        </div>
      </div>
    </section>
  );
}
