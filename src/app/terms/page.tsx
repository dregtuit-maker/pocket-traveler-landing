import Link from "next/link";
import type { Metadata } from "next";
import { getLocale } from "@/i18n/locale";
import { copy } from "@/i18n/copy";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pockettraveler.app";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = copy[locale].terms.title;
  return {
    title,
    description:
      locale === "nl"
        ? "De algemene gebruiksvoorwaarden van Pocket Traveler."
        : "Terms of service for Pocket Traveler.",
    alternates: {
      canonical: `${SITE}/terms`,
      languages: { en: `${SITE}/terms`, nl: `${SITE}/terms?lang=nl`, "x-default": `${SITE}/terms` },
    },
    robots: { index: false, follow: false },
  };
}

export default async function TermsPage() {
  const locale = await getLocale();
  const t = copy[locale].terms;

  return (
    <div style={{ background: "var(--color-brand-bg)", minHeight: "100vh" }}>
      <nav className="sticky top-0 z-50" style={{ background: "rgba(245,240,235,.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-brand-border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link href="/" className="font-extrabold text-lg tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            Pocket <span style={{ color: "var(--color-brand-coral)" }}>Traveler</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <span className="section-label">{t.label}</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            {t.title}
          </h1>
          <p className="mt-3 text-sm" style={{ color: "var(--color-brand-muted)" }}>
            {t.updated}
          </p>
        </div>

        <div className="space-y-10">
          {t.sections.map((s, i) => (
            <section key={i} className="space-y-3">
              <h2 className="text-xl font-bold" style={{ color: "var(--color-brand-navy)" }}>{s.heading}</h2>
              <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--color-brand-muted)" }}>
                {s.paras.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-6" style={{ borderTop: "1px solid var(--color-brand-border)" }}>
          <Link href="/" className="text-sm font-medium underline" style={{ color: "var(--color-brand-coral)" }}>
            {t.back}
          </Link>
        </div>
      </main>
    </div>
  );
}
