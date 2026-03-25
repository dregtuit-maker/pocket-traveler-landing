import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Persoonlijk op maat",
    desc: "Vertel de AI wat je boeit – architectuur, eten, musea of bruine kroegen – en krijg een tour die écht bij jou past.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "GPS-geleide navigatie",
    desc: "Realtime kaart + stap-voor-stap routing. De app volgt jou, niet andersom – ook volledig offline.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 13l4.553 2.276A1 1 0 0021 21.382V10.618a1 1 0 00-.553-.894L15 7m0 13V7m0 0L9 4" />
      </svg>
    ),
    title: "Interactieve in-app kaart",
    desc: "Alle stops visueel op één kaart. Sla favorieten op en deel je route direct met reisgenoten.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Local secrets & hidden gems",
    desc: "Geen standaard toeristen-gids. Pocket Traveler kent de plekken die locals kennen: het steegje, het café, de markt.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Jouw tempo, jouw tijd",
    desc: "Heb je 2 uur of een hele dag? Stel de tijdsduur in en de AI bouwt een haalbare route – met timing per stop.",
  },
];

const steps = [
  {
    n: "1",
    title: "Vertel je voorkeuren",
    desc: "Kies je stad, vul je interesses in (eten, kunst, natuur…) en geef aan hoeveel tijd je hebt.",
  },
  {
    n: "2",
    title: "AI bouwt je route",
    desc: "In seconden genereert onze AI een gepersonaliseerde wandelroute met de beste stops voor jou.",
  },
  {
    n: "3",
    title: "Navigeer & ontdek",
    desc: "Volg de GPS live op de kaart. Pauzeer wanneer je wilt, ga verder op jouw moment.",
  },
];

const faqs = [
  {
    q: "Wanneer is Pocket Traveler beschikbaar?",
    a: "We lanceren later in 2025. Wachtlijst-leden worden als eerste uitgenodigd en krijgen exclusieve vroege toegang.",
  },
  {
    q: "Voor welke steden werkt de app?",
    a: "Bij de lancering starten we met een selecte set Europese steden. Jouw stadskeuze in het aanmeldformulier helpt ons prioriteren.",
  },
  {
    q: "Werkt de app ook offline?",
    a: "Ja. Na het genereren worden kaart en stops gecached – navigeren werkt ook zonder internet.",
  },
  {
    q: "Is Pocket Traveler gratis?",
    a: "Er komt een gratis laag met een beperkt aantal tours per maand. Wachtlijst-leden ontvangen een speciale introductiekorting op premium.",
  },
  {
    q: "Wat doen jullie met mijn e-mailadres?",
    a: "Uitsluitend communiceren over de lancering. We verkopen of delen je data nooit met derden. Zie ons privacybeleid.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ background: "var(--color-brand-bg)", minHeight: "100vh" }}>

      {/* ── Sticky nav ─────────────────────────────────────────────────────── */}
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
          <span className="font-extrabold text-lg tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            Pocket{" "}
            <span style={{ color: "var(--color-brand-coral)" }}>Traveler</span>
          </span>
          <a href="#waitlist" className="btn-primary text-sm" style={{ padding: ".5rem 1.125rem" }}>
            Vroege toegang
          </a>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1E3A5F 0%, #2B5280 55%, #1E3A5F 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 15% 60%, rgba(224,120,80,.18) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(43,82,128,.4) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-7"
              style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.8)" }}
            >
              Binnenkort beschikbaar
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
              style={{ color: "#fff" }}
            >
              Je AI-gids voor{" "}
              <span style={{ color: "var(--color-brand-coral)" }}>
                elke stadsroute
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: "rgba(255,255,255,.72)" }}
            >
              Pocket Traveler genereert in seconden een persoonlijke GPS-wandelroute –
              afgestemd op jouw interesses, beschikbare tijd en reisdoel.
              Geen gidsboek. Geen planning. Gewoon gaan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#waitlist"
                className="btn-primary text-base"
                style={{ padding: "1rem 2rem", fontSize: "1rem" }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Meld je gratis aan
              </a>
              <a
                href="#how-it-works"
                className="btn-ghost text-base"
                style={{ padding: "1rem 2rem", fontSize: "1rem" }}
              >
                Hoe het werkt
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="mt-16 flex justify-center">
            <div style={{ position: "relative", width: "280px" }}>
              {/* Frame */}
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
                  {/* App header */}
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

                  {/* Map area */}
                  <div style={{ position: "relative", background: "linear-gradient(145deg,#e8edf4,#d8e0ec)", aspectRatio: "1", overflow: "hidden" }}>
                    {/* Route dots */}
                    {[
                      { top: "20%", left: "28%" }, { top: "38%", left: "48%" },
                      { top: "55%", left: "32%" }, { top: "68%", left: "58%" },
                    ].map((pos, i) => (
                      <div key={i} style={{
                        position: "absolute", top: pos.top, left: pos.left,
                        width: 22, height: 22, borderRadius: "50%",
                        background: i === 0 ? "var(--color-brand-coral)" : "var(--color-brand-navy)",
                        border: "2.5px solid white",
                        boxShadow: "0 2px 6px rgba(0,0,0,.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, fontWeight: 700, color: "white",
                      }}>
                        {i + 1}
                      </div>
                    ))}
                    {/* Dashed route line (approximate) */}
                    <svg
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                      fill="none" viewBox="0 0 100 100" preserveAspectRatio="none"
                    >
                      <polyline
                        points="35,22 55,40 39,57 65,70"
                        stroke="var(--color-brand-coral)" strokeWidth="1.5"
                        strokeDasharray="4 3" strokeLinecap="round"
                        opacity=".7"
                      />
                    </svg>
                  </div>

                  {/* Tour info */}
                  <div style={{ padding: "12px 14px 8px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: 4 }}>
                      Amsterdam&apos;s Hidden Gems
                    </div>
                    <div style={{ fontSize: 10, color: "var(--color-brand-muted)", marginBottom: 10 }}>
                      3 uur · 4.2 km · 6 stops
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
                      Start navigatie
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div style={{
                position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)",
                width: "160px", height: "40px",
                background: "rgba(224,120,80,.35)", borderRadius: "50%", filter: "blur(20px)",
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--color-brand-border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { stat: "AI-powered", label: "Tour generator" },
            { stat: "GPS-geleid", label: "Realtime navigatie" },
            { stat: "100% persoonlijk", label: "Op jouw maat" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p className="font-extrabold text-lg sm:text-xl" style={{ color: "var(--color-brand-navy)" }}>{stat}</p>
              <p className="text-xs" style={{ color: "var(--color-brand-muted)" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <span className="section-label">Functies</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            Alles voor de perfecte stadsontdekking
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--color-brand-muted)" }}>
            Pocket Traveler combineert AI, GPS en lokale kennis in één vloeiende reiservaring.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="card card-hover group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{
                  background: "rgba(224,120,80,.1)",
                  color: "var(--color-brand-coral)",
                }}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-brand-navy)" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-muted)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        style={{ background: "#fff", borderTop: "1px solid var(--color-brand-border)", borderBottom: "1px solid var(--color-brand-border)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label">Hoe het werkt</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
              Van idee naar route in 3 stappen
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 relative">
            {/* Connector line */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute"
              style={{
                top: "2rem", left: "calc(16.67% + 1rem)", right: "calc(16.67% + 1rem)",
                height: "1px", background: "var(--color-brand-border)",
              }}
            />
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="text-center relative">
                <div
                  className="w-16 h-16 rounded-full text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-5 relative z-10"
                  style={{ background: "var(--color-brand-navy)" }}
                >
                  {n}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-brand-navy)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-brand-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Pocket Traveler ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="section-label">Voordelen</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            Waarom Pocket Traveler?
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            "Geen gidsboek, geen research – gewoon de bestemming invoeren.",
            "Elke route is uniek en past bij jouw interesses en reisstijl.",
            "Volledig offline na het genereren – ook zonder roaming.",
            "Verborgen plekken die de standaard gids niet kent.",
            "Aanpasbare tijdsduur: van snelle lunch-tour tot dagvullend avontuur.",
            "Veilig: geen trackers, geen ads, geen derde partijen.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex gap-3 items-start"
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                style={{ background: "rgba(224,120,80,.15)" }}
              >
                <svg className="w-3.5 h-3.5" style={{ color: "var(--color-brand-coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm leading-relaxed" style={{ color: "var(--color-brand-navy)" }}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Social proof (placeholder) ──────────────────────────────────────── */}
      <section
        style={{ background: "#fff", borderTop: "1px solid var(--color-brand-border)", borderBottom: "1px solid var(--color-brand-border)" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label">Beta-gebruikers</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
              Wat beta-testers zeggen
            </h2>
            <p className="mt-4" style={{ color: "var(--color-brand-muted)" }}>
              Reviews volgen binnenkort – wees er als eerste bij.
            </p>
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
            Reviews verschijnen na de publieke lancering. Meld je aan via de wachtlijst.
          </p>
        </div>
      </section>

      {/* ── Privacy highlight ────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div
          className="card text-center"
          style={{ background: "rgba(30,58,95,.04)", border: "1px solid var(--color-brand-border)" }}
        >
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 mx-auto"
            style={{ background: "rgba(224,120,80,.1)" }}
          >
            <svg className="w-6 h-6" style={{ color: "var(--color-brand-coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-brand-navy)" }}>
            Privacy by design
          </h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto mb-4" style={{ color: "var(--color-brand-muted)" }}>
            We slaan geen tracking cookies op en laden geen analytics-scripts van derden.
            Je IP-adres wordt nooit leesbaar opgeslagen – alleen een SHA-256 hash voor fraudepreventie.
            Volledig AVG-conform.
          </p>
          <Link
            href="/privacy"
            className="text-sm font-medium underline"
            style={{ color: "var(--color-brand-coral)" }}
          >
            Lees ons privacybeleid →
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
              Wachtlijst
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#fff" }}>
              Wees er als eerste bij
            </h2>
            <p style={{ color: "rgba(255,255,255,.7)" }} className="leading-relaxed">
              Meld je aan voor vroege toegang en ontvang een exclusieve introductiekorting bij de lancering.
            </p>
          </div>
          <div
            style={{ background: "#fff", borderRadius: "1.25rem", padding: "2rem", boxShadow: "0 24px 64px rgba(0,0,0,.3)" }}
          >
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            Veelgestelde vragen
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <details
              key={i}
              className="card"
              style={{ cursor: "pointer" }}
            >
              <summary
                className="flex items-center justify-between gap-4 font-semibold"
                style={{ color: "var(--color-brand-navy)", listStyle: "none" }}
              >
                <span>{q}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--color-brand-muted)", transition: "transform .3s" }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p
                className="text-sm leading-relaxed mt-4 pt-4"
                style={{ color: "var(--color-brand-muted)", borderTop: "1px solid var(--color-brand-border)" }}
              >
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
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,.45)" }}>
                AI-geleide stadstours voor nieuwsgierige reizigers.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center" style={{ color: "rgba(255,255,255,.55)" }}>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Gebruiksvoorwaarden</Link>
              <a href="mailto:hallo@pockettraveler.app" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          <div
            className="mt-8 pt-6 text-xs text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,.08)", color: "rgba(255,255,255,.25)" }}
          >
            © {new Date().getFullYear()} Pocket Traveler. Alle rechten voorbehouden. · Geen tracking cookies · AVG-conform.
          </div>
        </div>
      </footer>
    </div>
  );
}
