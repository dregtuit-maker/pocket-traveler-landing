import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocale } from "@/i18n/locale";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pocket Traveler – AI-Powered City Tours in Your Pocket",
  description:
    "Pocket Traveler creates personalised, GPS-guided walking tours powered by AI. Discover hidden gems, iconic landmarks and local secrets – at your own pace.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://pockettraveler.app"
  ),
  openGraph: {
    title: "Pocket Traveler – AI-Powered City Tours in Your Pocket",
    description: "Personalised GPS walking tours powered by AI. Join the waitlist.",
    type: "website",
  },
  robots: { index: true, follow: true },
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
