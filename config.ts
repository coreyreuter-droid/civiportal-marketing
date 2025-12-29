export const siteConfig = {
  name: "CiviPortal",
  tagline: "Financial Transparency Portal for Government",
  description:
    "CiviPortal turns budgets, actuals, revenues, and transactions into a clear, searchable public portal—built with accessibility, privacy, and ease of administration in mind.",
  demoUrl: "https://sample-gov.civiportal.com/portal",
  schedulingUrl: "mailto:hello@civiportal.com?subject=CiviPortal%20Demo%20Request",
  contactEmail: "hello@civiportal.com",
  features: [
    {
      title: "Budget Visualization",
      description:
        "Turn budget line items into charts residents can explore by department, category, and year—without needing a finance background.",
      icon: "chart",
    },
    {
      title: "Transaction Search",
      description:
        "Publish searchable expenditures with filters (vendor, department, amount, date) so answers are self-serve instead of manual.",
      icon: "search",
    },
    {
      title: "Department Breakdowns",
      description:
        "Give clear department-level context with drill-down views, comparisons, and consistent totals across the portal.",
      icon: "building",
    },
    {
      title: "Revenue Analysis",
      description:
        "Show where funds come from with revenue source breakdowns and trends over time.",
      icon: "dollar",
    },
    {
      title: "Multi-Year Comparison",
      description:
        "Track fiscal trends year-over-year with side-by-side views designed for clarity, not spreadsheets.",
      icon: "calendar",
    },
    {
      title: "Admin Upload & Replace-Year",
      description:
        "Upload new files or replace a fiscal year cleanly—keeping the portal current without custom development.",
      icon: "upload",
    },
  ],
  benefits: [
    {
      title: "Build trust with clarity",
      description:
        "Provide a single place for residents to understand budgets and spending—organized, searchable, and consistent year to year.",
    },
    {
      title: "Reduce repetitive requests",
      description:
        "Designed to reduce back-and-forth emails and repetitive records requests by making common answers self-serve.",
    },
    {
      title: "Meet transparency expectations",
      description:
        "Built for public disclosure workflows: export → upload → publish, with accessibility and usability as first-class requirements.",
    },
    {
      title: "Support better conversations",
      description:
        "Help residents show up to budget conversations informed—without forcing them to interpret raw financial documents.",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/overview.png",
      alt: "Overview dashboard showing high-level financial transparency metrics",
      title: "Citizen Overview",
      description:
        "A simple starting point for residents to explore budgets, spending, and revenue with clear navigation.",
    },
    {
      src: "/screenshots/budget.png",
      alt: "Budget analysis charts and graphs for municipal finances",
      title: "Budget Explorer",
      description:
        "Interactive charts that put context around budget totals and allow comparisons across years and categories.",
    },
    {
      src: "/screenshots/transactions.png",
      alt: "Searchable transaction tracking interface with filters and data table",
      title: "Transaction Search",
      description:
        "Powerful search and filters so residents can find spending details without submitting requests.",
    },
    {
      src: "/screenshots/departments.png",
      alt: "Department spending breakdown view with drill-down analysis",
      title: "Department Drill-Down",
      description:
        "Department totals and trends in a format that’s easy to follow—and easy to explain.",
    },
    {
      src: "/screenshots/revenues.png",
      alt: "Revenue analysis dashboard showing sources and trends",
      title: "Revenue Trends",
      description:
        "Revenue breakdowns that make funding sources and changes over time understandable at a glance.",
    },
    {
      src: "/screenshots/admin-upload.png",
      alt: "Admin data upload interface for managing financial records",
      title: "Admin Upload Tools",
      description:
        "Upload and replace-year controls designed for finance teams—not developers.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
