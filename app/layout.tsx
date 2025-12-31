import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/brand/logo-mark.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/brand/logo-mark.png", type: "image/png" }],
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "https://www.civiportal.com",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}