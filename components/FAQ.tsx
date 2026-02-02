"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do we have to maintain two websites?",
    answer:
      "No. CiviPortal is a separate transparency portal you link to from your existing city website. Your primary website stays the same.",
  },
  {
    question: "How often do we need to upload data?",
    answer:
      "There is no required schedule. Many cities publish annual or quarterly updates. You can update monthly if desired.",
  },
  {
    question: "Can we start without transactions and vendor detail?",
    answer:
      "Yes. You can begin with budgets and actuals only and enable additional modules later.",
  },
  {
    question: "Can projects link to existing pages instead of duplicating updates?",
    answer:
      "Yes. Projects can link to your existing project pages. If you prefer, projects can also be hosted in CiviPortal.",
  },
  {
    question: "What does IT typically need for review?",
    answer:
      "Typically a security overview and documentation on hosting, administrative access controls, and data handling. We can provide this on request.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Common questions from cities evaluating CiviPortal.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-white">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
