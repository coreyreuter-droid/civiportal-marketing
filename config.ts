export const siteConfig = {
  name: "CiviPortal",
  tagline: "Public Transparency Portal For Financal Data And Capital Projects",
  description:
    "CiviPortal provides a clear way for residents to view financial information and understand project progress alongside your existing city website.",
  demoUrl: "https://sample-gov.civiportal.com/portal",
  contactEmail: "hello@civiportal.com",
  features: [
    {
      title: "Budget And Actuals Views",
      description:
        "Present budgets and actuals by department, fund, and category in a consistent public format.",
      icon: "chart",
    },
    {
      title: "Spending Detail",
      description:
        "Publish vendor and transaction detail when and if you choose, with filters for common questions.",
      icon: "search",
    },
    {
      title: "Revenue Summaries",
      description:
        "Show revenue sources and trends over time in a resident friendly format.",
      icon: "dollar",
    },
    {
      title: "Project Transparency",
      description:
        "Share project status, narrative updates, and photos, or link out to existing project pages.",
      icon: "building",
    },
    {
      title: "Publishing Controls",
      description:
        "Enable only the modules you want public today and expand over time.",
      icon: "calendar",
    },
    {
      title: "Administrative Uploads",
      description:
        "Export, upload, publish. Designed for repeatable updates without custom development.",
      icon: "upload",
    },
  ],
  benefits: [
    {
      title: "Build Trust With Clear Information",
      description:
        "Present budgets, spending, and project progress in a consistent public format that citizens can navigate.",
    },
    {
      title: "Keep Residents In The Know",
      description:
        "Provide a single destination for financial and project updates, linked from your city website.",
    },
    {
      title: "Reduce Repetitive Requests",
      description:
        "Help residents find answers without staff time spent responding to common questions.",
    },
    {
      title: "Support Better Budget Conversations",
      description:
        "Make budget information easier to understand for the public.",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/home.png",
      alt: "Citizen portal home page showing navigation and overview content",
      title: "Portal Home",
      description:
        "The resident landing page with clear navigation into budgets, spending, departments, revenue, and projects.",
    },
    {
      src: "/screenshots/overview.png",
      alt: "Overview dashboard showing high-level financial transparency metrics",
      title: "Citizen Overview",
      description:
        "A starting point for residents to explore budgets, spending, revenue, and project updates.",
    },
    {
      src: "/screenshots/budget.png",
      alt: "Budget analysis charts and graphs for municipal finances",
      title: "Budget Explorer",
      description:
        "Interactive charts that provide context around budget totals and allow comparisons across years and categories.",
    },
    {
      src: "/screenshots/transactions.png",
      alt: "Searchable transaction tracking interface with filters and data table",
      title: "Transaction Search",
      description:
        "Search and filters so residents can find spending details without submitting requests.",
    },
    {
      src: "/screenshots/departments.png",
      alt: "Department spending breakdown view with drill-down analysis",
      title: "Department Drill Down",
      description:
        "Department totals and trends in a format that is easy to follow and easy to explain.",
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
        "Upload and replace data controls designed for finance teams, not developers.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
