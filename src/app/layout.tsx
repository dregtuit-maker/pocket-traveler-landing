import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocale } from "@/i18n/locale";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pockettraveler.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Pocket Traveler – AI City Walking Tours",
    template: "%s | Pocket Traveler",
  },
  description:
    "Create your perfect city walking tour in seconds. Pocket Traveler uses AI to build personalised GPS walking routes based on your interests — offline-ready, no planning needed.",
  keywords: [
    "AI travel guide",
    "city walking tour",
    "personalised travel itinerary",
    "GPS walking route",
    "travel planning app",
    "city trip planner",
    "AI city tour",
    "offline travel app",
  ],
  authors: [{ name: "Pocket Traveler", url: SITE }],
  creator: "Pocket Traveler",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "nl_NL",
    url: SITE,
    siteName: "Pocket Traveler",
    title: "Pocket Traveler – AI City Walking Tours",
    description:
      "Personalised GPS walking tours powered by AI. Tell us what you love and get a route in seconds.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pocket Traveler – AI-Powered City Walking Tours" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocket Traveler – AI City Walking Tours",
    description: "Personalised GPS walking tours powered by AI. Join the waitlist.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE,
    languages: {
      "en": SITE,
      "nl": `${SITE}?lang=nl`,
      "x-default": SITE,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: { referrer: "no-referrer-when-downgrade" },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
