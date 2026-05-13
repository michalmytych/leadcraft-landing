import type { Metadata } from "next";
import { nohemi, switzer } from "@/assets/fonts/fonts";
import "@/app/globals.css";

const siteUrl = "https://leadcraft-landing.vercel.app"; // docelowo podmień na własną domenę

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "LeadCraft B2B Marketing Agency",
    template: "%s | LeadCraft",
  },

  description:
    "LeadCraft is a B2B marketing agency focused on generating high-quality leads for SaaS and technology companies.",

  applicationName: "LeadCraft",
  manifest: "/site.webmanifest",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "LeadCraft",
    title: "LeadCraft B2B Marketing",
    description:
      "LeadCraft to agencja marketingowa nastawiona na generację realnych lead-ów sprzedażowych.",
    locale: "pl_PL",
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "LeadCraft B2B Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LeadCraft B2B Marketing Agency",
    description:
      "LeadCraft is a B2B marketing agency focused on generating high-quality leads for SaaS and technology companies.",
    images: ["/images/og/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${nohemi.variable} ${switzer.variable}`}
      lang="pl"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
