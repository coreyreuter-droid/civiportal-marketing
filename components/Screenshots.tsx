"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config";

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="screenshots" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See CiviPortal in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore the intuitive interface that makes financial data accessible
            to everyone.
          </p>
        </div>

        {/* Screenshot Display */}
        <div className="space-y-8">
          {/* Main Image */}
          <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={siteConfig.screenshots[activeIndex].src}
              alt={siteConfig.screenshots[activeIndex].alt}
              fill
              className="object-cover"
              priority={activeIndex === 0}
            />
            {/* Fallback for missing images */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-500 to-accent-700 text-white">
              <div className="text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-lg font-medium">
                  {siteConfig.screenshots[activeIndex].title}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {siteConfig.screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 relative w-32 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === activeIndex
                    ? "ring-2 ring-accent-500 ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                />
                {/* Fallback thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                  <span className="text-white text-xs font-medium text-center px-2">
                    {screenshot.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Current Screenshot Title */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900">
              {siteConfig.screenshots[activeIndex].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
