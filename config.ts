export const siteConfig = {
  name: "CiviPortal",
  tagline: "Government Financial Transparency Platform",
  description:
    "Empower citizens with access to your budget, spending, and financial data. Built for transparency, designed for clarity.",
  demoUrl: "https://sample-gov.civiportal.com/portal",
  contactEmail: "info@civiportal.com",
  features: [
    {
      title: "Budget Visualization",
      description:
        "Interactive charts and graphs that make complex budget data easy to understand for every citizen.",
      icon: "chart",
    },
    {
      title: "Transaction Tracking",
      description:
        "Access to local expenditures with powerful search and filtering capabilities.",
      icon: "search",
    },
    {
      title: "Department Breakdowns",
      description:
        "Explore spending by department with drill-down capabilities and historical comparisons.",
      icon: "building",
    },
    {
      title: "Revenue Analysis",
      description:
        "Understand where city/county funds come from with detailed revenue source breakdowns.",
      icon: "dollar",
    },
    {
      title: "Multi-Year Comparison",
      description:
        "Track fiscal trends over time with side-by-side year comparisons and growth metrics.",
      icon: "calendar",
    },
    {
      title: "Easy Data Upload",
      description:
        "Simple admin tools let you and your staff upload and manage financial data without technical expertise.",
      icon: "upload",
    },
  ],
  benefits: [
    {
      title: "Build Public Trust",
      description:
        "Transparency builds confidence. Give citizens direct access to see how their tax dollars are spent.",
    },
    {
      title: "Reduce FOIA Requests",
      description:
        "Self-service access to financial data means fewer formal requests and faster answers for everyone.",
    },
    {
      title: "Meet Compliance Goals",
      description:
        "Stay ahead of transparency mandates with a platform designed for public financial disclosure.",
    },
    {
      title: "Engage Your Community",
      description:
        "Informed citizens are engaged citizens. Foster meaningful participation in budget discussions.",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/overview.png",
      alt: "CiviPortal Overview Dashboard",
      title: "Overview Dashboard",
    },
    {
      src: "/screenshots/budget.png",
      alt: "Budget Breakdown View",
      title: "Budget Analysis",
    },
    {
      src: "/screenshots/revenues.png",
      alt: "Revenue Sources Chart",
      title: "Revenue Tracking",
    },
    {
      src: "/screenshots/transactions.png",
      alt: "Transaction Search Interface",
      title: "Transaction Search",
    },
    {
      src: "/screenshots/departments.png",
      alt: "Department Spending View",
      title: "Department View",
    },
    {
      src: "/screenshots/admin-upload.png",
      alt: "Admin Data Upload Interface",
      title: "Easy Admin Tools",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
