import type { Metadata } from "next";
import { getLocale } from "@/i18n/locale";
import { copy } from "@/i18n/copy";
import LandingPage from "@/components/LandingPage";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pockettraveler.app";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isNl = locale === "nl";

  return {
    title: isNl
      ? "Pocket Traveler – AI Stadswandelingen op Maat"
      : "Pocket Traveler – AI City Walking Tours",
    description: isNl
      ? "Pocket Traveler genereert in seconden een persoonlijke GPS-wandelroute op maat — afgestemd op jouw interesses, beschikbare tijd en reisdoel. Geen voorbereiding nodig."
      : "Create your perfect city walking tour in seconds. Pocket Traveler uses AI to build personalised GPS routes based on your interests — offline-ready, no planning needed.",
    alternates: {
      canonical: SITE,
      languages: {
        en: SITE,
        nl: `${SITE}?lang=nl`,
        "x-default": SITE,
      },
    },
  };
}

export default async function Page() {
  const locale = await getLocale();
  const c = copy[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Pocket Traveler",
        description: "AI-powered personalised city walking tours",
        inLanguage: locale === "nl" ? "nl-NL" : "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Pocket Traveler",
        url: SITE,
        logo: {
          "@type": "ImageObject",
          url: `${SITE}/branding/6CD30BDD-8658-40EF-AF08-9B06B5CDD1E0.png`,
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "hallo@pockettraveler.app",
          contactType: "customer service",
          availableLanguage: ["English", "Dutch"],
        },
        sameAs: [],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE}/#app`,
        name: "Pocket Traveler",
        applicationCategory: "TravelApplication",
        operatingSystem: "iOS, Android",
        description:
          "AI-powered GPS walking tour generator. Get a personalised city route in seconds based on your interests, available time and travel style.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          description: "Free tier with limited tours. Premium subscription available.",
        },
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: c.faq.items.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage initialLocale={locale} />
    </>
  );
}
