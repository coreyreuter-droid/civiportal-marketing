export function Personas() {
  return (
    <section id="who-its-for" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Clear, Accessible, Easy to Manage
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
A citizen-friendly portal for budgets and spending, with an admin experience your team can manage in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Finance Director / Budget Team
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Publish without building one-off reports</li>
              <li>• Replace and append uploads to keep data clean</li>
              <li>• Reduce repetitive “can you pull…” requests</li>
              <li>• Clear module toggles and guardrails</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Executive Leadership
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>• A single public place for financial context</li>
              <li>• Better-informed budget conversations</li>
              <li>• Fewer misinformation cycles</li>
              <li>• A modern portal that builds credibility</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              IT Director / Security Review
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>• No custom dev to keep the portal current</li>
              <li>• Role-based admin access</li>
              <li>• Security-focused data handling approach</li>
              <li>• Clear documentation for procurement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
