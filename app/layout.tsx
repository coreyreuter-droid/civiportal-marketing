import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
