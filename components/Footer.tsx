import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/brand/logo-white.png"
                alt={siteConfig.name}
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 max-w-md">{siteConfig.description}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#benefits"
                  className="hover:text-white transition-colors"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/#screenshots"
                  className="hover:text-white transition-colors"
                >
                  Screenshots
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.demoUrl}
                  className="hover:text-white transition-colors"
                >
                  Live Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
  <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
    Privacy Policy
  </Link>
  <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
    Terms of Service
  </Link>
  <Link href="/security" className="text-sm text-slate-400 hover:text-white transition-colors">
    Security
  </Link>
  <Link href="/accessibility" className="text-sm text-slate-400 hover:text-white transition-colors">
    Accessibility
  </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
