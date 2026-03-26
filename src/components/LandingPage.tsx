"use client";

import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import { useLocale } from "@/i18n/useLocale";
import { copy } from "@/i18n/copy";
import type { Locale } from "@/i18n/locale";


// ─── Feature icons (order matches copy.features.cards) ────────────────────────

const FEATURE_ICONS = [
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 13l4.553 2.276A1 1 0 0021 21.382V10.618a1 1 0 00-.553-.894L15 7m0 13V7m0 0L9 4" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function LandingPage({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useLocale(initialLocale);
  const c = copy[locale];
  const locales: Locale[] = ["en", "nl"];

  return (
    <div style={{ background: "var(--color-brand-bg)", minHeight: "100vh" }}>

      {/* ── Sticky nav ───────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "rgba(245,240,235,.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-brand-border)",
        }}
      >
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between"
          style={{ height: "4rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image
              src="/branding/6CD30BDD-8658-40EF-AF08-9B06B5CDD1E0.png"
              alt="Pocket Traveler logo"
              width={36}
              height={36}
              style={{ objectFit: "contain" }}
              priority
            />
            <span className="font-extrabold text-lg tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
              Pocket{" "}
              <span style={{ color: "var(--color-brand-coral)" }}>Traveler</span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                aria-pressed={locale === l}
                style={{
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid",
                  borderColor: locale === l ? "var(--color-brand-navy)" : "var(--color-brand-border)",
                  background: locale === l ? "var(--color-brand-navy)" : "transparent",
                  color: locale === l ? "#fff" : "var(--color-brand-muted)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all .15s",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
            <a href="#waitlist" className="btn-primary text-sm" style={{ padding: ".5rem 1.125rem", marginLeft: "4px" }}>
              {c.nav.cta}
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1E3A5F 0%, #2B5280 55%, #1E3A5F 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 15% 60%, rgba(224,120,80,.18) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(43,82,128,.4) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-7"
              style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.8)" }}
            >
              {c.hero.badge}
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ color: "#fff" }}
            >
              {c.hero.titleA}{" "}
              <span style={{ color: "var(--color-brand-coral)" }}>{c.hero.titleB}</span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,.72)" }}
            >
              {c.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#waitlist" className="btn-primary text-base" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {c.hero.primaryCta}
              </a>
              <a href="#how-it-works" className="btn-ghost text-base" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
                {c.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="mt-16 flex justify-center">
            <div style={{ position: "relative", width: "280px" }}>
              <div
                style={{
                  background: "#0F2140",
                  borderRadius: "2.25rem",
                  padding: "12px",
                  boxShadow: "0 32px 64px rgba(0,0,0,.45)",
                  border: "3px solid rgba(255,255,255,.08)",
                }}
              >
                <div
                  style={{
                    background: "var(--color-brand-bg)",
                    borderRadius: "1.75rem",
                    overflow: "hidden",
                    aspectRatio: "9/19",
                  }}
                >
                  <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid var(--color-brand-border)", display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--color-brand-navy)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg style={{ width: 16, height: 16, color: "#fff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 13l4.553 2.276A1 1 0 0021 21.382V10.618a1 1 0 00-.553-.894L15 7m0 13V7m0 0L9 4" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-brand-navy)", lineHeight: 1.2 }}>Pocket Traveler</div>
                      <div style={{ fontSize: 10, color: "var(--color-brand-muted)" }}>AI City Guide</div>
                    </div>
                  </div>
                  <div style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}>
                    <Image
                      src="/branding/IMG_7964.PNG"
                      alt="Pocket Traveler – personalise your tour"
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      sizes="230px"
                      priority
                    />
                  </div>
                  <div style={{ padding: "12px 14px 8px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: 4 }}>
                      Amsterdam&apos;s Hidden Gems
                    </div>
                    <div style={{ fontSize: 10, color: "var(--color-brand-muted)", marginBottom: 10 }}>
                      3 hrs · 4.2 km · 6 stops
                    </div>
                    <div style={{
                      background: "var(--color-brand-coral)",
                      borderRadius: 8, padding: "7px 0",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      gap: 5, color: "white", fontSize: 11, fontWeight: 600,
                    }}>
                      <svg style={{ width: 12, height: 12 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 13l4.553 2.276A1 1 0 0021 21.382V10.618a1 1 0 00-.553-.894L15 7m0 13V7m0 0L9 4" />
                      </svg>
                      Start navigation
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)",
                width: "160px", height: "40px",
                background: "rgba(224,120,80,.35)", borderRadius: "50%", filter: "blur(20px)",
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--color-brand-border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-3 gap-4 text-center">
          {c.stats.map(({ k, v }) => (
            <div key={k}>
              <p className="font-extrabold text-lg sm:text-xl" style={{ color: "var(--color-brand-navy)" }}>{k}</p>
              <p className="text-xs" style={{ color: "var(--color-brand-muted)" }}>{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────────── */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <span className="section-label">{c.features.label}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            {c.features.title}
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--color-brand-muted)" }}>
            {c.features.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.features.cards.map((card, i) => (
            <div key={i} className="card card-hover group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(224,120,80,.1)", color: "var(--color-brand-coral)" }}
              >
                {FEATURE_ICONS[i]}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-brand-navy)" }}>{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-muted)" }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        style={{ background: "#fff", borderTop: "1px solid var(--color-brand-border)", borderBottom: "1px solid var(--color-brand-border)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label">{c.how.label}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
              {c.how.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 relative">
            <div
              aria-hidden="true"
              className="hidden sm:block absolute"
              style={{
                top: "2rem", left: "calc(16.67% + 1rem)", right: "calc(16.67% + 1rem)",
                height: "1px", background: "var(--color-brand-border)",
              }}
            />
            {c.how.steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-5 relative z-10"
                  style={{ background: "var(--color-brand-navy)" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-brand-navy)" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-muted)" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="section-label">{c.benefits.label}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            {c.benefits.title}
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {c.benefits.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: "rgba(224,120,80,.15)" }}>
                <svg className="w-3.5 h-3.5" style={{ color: "var(--color-brand-coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm leading-relaxed" style={{ color: "var(--color-brand-navy)" }}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Social proof ─────────────────────────────────────────────────────── */}
      <section
        style={{ background: "#fff", borderTop: "1px solid var(--color-brand-border)", borderBottom: "1px solid var(--color-brand-border)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label">{c.socialProof.label}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
              {c.socialProof.title}
            </h2>
            <p className="mt-4" style={{ color: "var(--color-brand-muted)" }}>{c.socialProof.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="card flex flex-col gap-4">
                <div className="flex gap-1">
                  {[0,1,2,3,4].map((s) => (
                    <div key={s} className="w-4 h-4 rounded-sm" style={{ background: "var(--color-brand-border)" }} />
                  ))}
                </div>
                <div className="space-y-2">
                  {[1, 5/6, 4/6].map((w, j) => (
                    <div key={j} className="h-3 rounded" style={{ background: "var(--color-brand-border)", width: `${w * 100}%` }} />
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-auto pt-3" style={{ borderTop: "1px solid var(--color-brand-border)" }}>
                  <div className="w-9 h-9 rounded-full" style={{ background: "var(--color-brand-border)" }} />
                  <div>
                    <div className="h-3 rounded mb-1.5" style={{ background: "var(--color-brand-border)", width: "6rem" }} />
                    <div className="h-2.5 rounded" style={{ background: "var(--color-brand-border)", width: "4rem" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-6" style={{ color: "var(--color-brand-muted)" }}>
            {c.socialProof.footnote}
          </p>
        </div>
      </section>

      {/* ── Privacy highlight ────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="card text-center" style={{ background: "rgba(30,58,95,.04)", border: "1px solid var(--color-brand-border)" }}>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 mx-auto" style={{ background: "rgba(224,120,80,.1)" }}>
            <svg className="w-6 h-6" style={{ color: "var(--color-brand-coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-brand-navy)" }}>
            {c.privacyHighlight.title}
          </h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto mb-4" style={{ color: "var(--color-brand-muted)" }}>
            {c.privacyHighlight.text}
          </p>
          <Link href="/privacy" className="text-sm font-medium underline" style={{ color: "var(--color-brand-coral)" }}>
            {c.privacyHighlight.link}
          </Link>
        </div>
      </section>

      {/* ── Waitlist ─────────────────────────────────────────────────────────── */}
      <section
        id="waitlist"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2B5280 55%, #1E3A5F 100%)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.8)" }}
            >
              {c.waitlist.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#fff" }}>
              {c.waitlist.title}
            </h2>
            <p style={{ color: "rgba(255,255,255,.7)" }} className="leading-relaxed">
              {c.waitlist.subtitle}
            </p>
          </div>
          <div style={{ background: "#fff", borderRadius: "1.25rem", padding: "2rem", boxShadow: "0 24px 64px rgba(0,0,0,.3)" }}>
            <WaitlistForm c={c.waitlist} />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="section-label">{c.faq.label}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            {c.faq.title}
          </h2>
        </div>
        <div className="space-y-3">
          {c.faq.items.map(({ q, a }, i) => (
            <details key={i} className="card" style={{ cursor: "pointer" }}>
              <summary className="flex items-center justify-between gap-4 font-semibold" style={{ color: "var(--color-brand-navy)", listStyle: "none" }}>
                <span>{q}</span>
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-brand-muted)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p className="text-sm leading-relaxed mt-4 pt-4" style={{ color: "var(--color-brand-muted)", borderTop: "1px solid var(--color-brand-border)" }}>
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: "var(--color-brand-navy)", borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-extrabold text-lg tracking-tight" style={{ color: "#fff" }}>
                Pocket <span style={{ color: "var(--color-brand-coral)" }}>Traveler</span>
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,.45)" }}>{c.footer.tagline}</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center" style={{ color: "rgba(255,255,255,.55)" }}>
              <Link href="/privacy" className="hover:text-white transition-colors">{c.footer.privacy}</Link>
              <Link href="/terms" className="hover:text-white transition-colors">{c.footer.terms}</Link>
              <a href="mailto:hallo@pockettraveler.app" className="hover:text-white transition-colors">{c.footer.contact}</a>
            </nav>
          </div>
          <div className="mt-8 pt-6 text-xs text-center" style={{ borderTop: "1px solid rgba(255,255,255,.08)", color: "rgba(255,255,255,.25)" }}>
            {c.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
