export function Personas() {
  return (
    <section id="who-its-for" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Clear, Accessible, Easy To Maintain
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A resident friendly portal for budgets, spending, and projects, with an admin experience your team can manage in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Finance Director And Budget Team
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Publish without building one off reports</li>
              <li>• Replace and append uploads to keep data clean</li>
              <li>• Reduce repetitive records requests</li>
              <li>• CSV mapping for easy repeat file uploads</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              City Manager And Executive Leadership
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>• A single public place for financials and project progress</li>
              <li>• Affordable for all cities and counties</li>
              <li>• Better informed citizens</li>
              <li>• Modern portal that builds public credibility</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              IT And Security Review
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>• No custom development or hosting</li>
              <li>• Role based administrative access</li>
              <li>• Security focused data handling approach</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
