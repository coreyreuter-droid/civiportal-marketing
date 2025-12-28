import { siteConfig } from "@/config";
import { Button } from "./Button";

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-accent-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Government&apos;s Financial Transparency?
        </h2>
        <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
          Join the growing number of governments using CiviPortal to build
          trust with their citizens through open financial data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/demo-request"
            variant="secondary"
            size="lg"
            className="bg-white text-accent-600 hover:bg-slate-100"
          >
            Schedule a Demo
          </Button>
          <Button
            href={siteConfig.demoUrl}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-accent-700"
          >
            View Sample Site
          </Button>
        </div>
      </div>
    </section>
  );
}
