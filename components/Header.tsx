"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config";
import { Button } from "./Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/logo.png"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="h-22 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#benefits"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="/#screenshots"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Screenshots
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button href={siteConfig.demoUrl} variant="outline" size="sm">
              View Sample Site
            </Button>
            <Button href="/demo-request" size="sm">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-slate-600 hover:text-slate-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#benefits"
                className="text-slate-600 hover:text-slate-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                href="#screenshots"
                className="text-slate-600 hover:text-slate-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Screenshots
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-slate-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button href={siteConfig.demoUrl} variant="outline" size="sm">
                  View Sample Site
                </Button>
                <Button href="/demo-request" size="sm">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
