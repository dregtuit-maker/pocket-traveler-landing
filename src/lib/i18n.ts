export type Lang = "en" | "nl";

export interface Translations {
  nav:  { cta: string };
  hero: {
    badge: string; h1: string; h1Accent: string; subtitle: string;
    ctaPrimary: string; ctaSecondary: string;
    mockupTour: string; mockupMeta: string; mockupStart: string;
  };
}

// ─── Variant A – short & strong ───────────────────────────────────────────────

const en: Translations = {
  nav: {
    cta: "Get early access",
  },
  hero: {
    badge:        "Now in early access",
    h1:           "Your city. Your tour.",
    h1Accent:     "Powered by AI.",
    subtitle:
      "Tell us what you love. Get a GPS walking tour built for you in seconds — offline-ready, no planning needed.",
    ctaPrimary:   "Get early access",
    ctaSecondary: "How it works",
    mockupTour:   "Amsterdam's Hidden Gems",
    mockupMeta:   "3 hrs · 4.2 km · 6 stops",
    mockupStart:  "Start navigation",
  },
};

const nl: Translations = {
  nav: {
    cta: "Claim vroege toegang",
  },
  hero: {
    badge:        "Nu in early access",
    h1:           "Jouw stad. Jouw tour.",
    h1Accent:     "Aangedreven door AI.",
    subtitle:
      "Vertel wat je interesseert. Ontvang in seconden een GPS-wandelroute op maat — offline beschikbaar, geen voorbereiding nodig.",
    ctaPrimary:   "Claim vroege toegang",
    ctaSecondary: "Zo werkt het",
    mockupTour:   "Amsterdam's Hidden Gems",
    mockupMeta:   "3 uur · 4.2 km · 6 stops",
    mockupStart:  "Start navigatie",
  },
};

export const i18n: Record<Lang, Translations> = { en, nl };
