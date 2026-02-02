"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config";

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? siteConfig.screenshots.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === siteConfig.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="screenshots" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See CiviPortal in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A quick tour of the citizen experience and the admin workflow.
          </p>
        </div>

        {/* Screenshot Display */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              aria-label="Previous screenshot"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Screenshot Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50">
              <Image
                src={siteConfig.screenshots[activeIndex].src}
                alt={siteConfig.screenshots[activeIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              aria-label="Next screenshot"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 text-center text-sm text-slate-500">
            {activeIndex + 1} of {siteConfig.screenshots.length}
          </div>

          {/* Screenshot Navigation Thumbnails */}
          <div className="mt-6 flex justify-center">
            <div className="flex gap-3 overflow-x-auto pb-4">
              {siteConfig.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 relative w-40 h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === activeIndex
                      ? "ring-2 ring-accent-500 ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View screenshot: ${screenshot.title}`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Current Screenshot Title */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900">
              {siteConfig.screenshots[activeIndex].title}
            </h3>
            <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
              {siteConfig.screenshots[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}