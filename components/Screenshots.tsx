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
            A quick tour of the citizen experience and the admin workflow.
          </p>
        </div>

        {/* Screenshot Display */}
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50">
            <Image
              src={siteConfig.screenshots[activeIndex].src}
              alt={siteConfig.screenshots[activeIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Screenshot Navigation */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-3 overflow-x-auto pb-4">
              {siteConfig.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 relative w-32 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
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
