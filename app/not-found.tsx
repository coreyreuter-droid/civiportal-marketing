import Link from "next/link";
import { Header, Footer, Button } from "@/components";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl font-bold text-slate-300 mb-4">404</div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Page not found
          </h1>

          <p className="text-lg text-slate-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
