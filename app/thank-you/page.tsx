import Link from "next/link";
import { Header, Footer, Button } from "@/components";
import { siteConfig } from "@/config";

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Thank You!
          </h1>

          <p className="text-lg text-slate-600 mb-8">
            We&apos;ve received your request and will be in touch within 1-2
            business days.
          </p>

          <p className="text-slate-500 mb-8">
            In the meantime, feel free to explore our sample dashboard to see
            CiviPortal in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={siteConfig.demoUrl} variant="primary">
              View Sample Dashboard
            </Button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Questions? Contact us at{" "}
            <Link
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-accent-600 hover:text-accent-700 hover:underline"
            >
              {siteConfig.contactEmail}
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
