import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid – Pocket Traveler",
  description: "Hoe Pocket Traveler omgaat met jouw persoonsgegevens conform de AVG.",
};

const CONTACT = "privacy@pockettraveler.app";
const UPDATED = "24 maart 2025";

type SectionProps = { title: string; children: React.ReactNode };
function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold" style={{ color: "var(--color-brand-navy)" }}>{title}</h2>
      <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--color-brand-muted)" }}>
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--color-brand-bg)", minHeight: "100vh" }}>
      <nav
        className="sticky top-0 z-50"
        style={{ background: "rgba(245,240,235,.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-brand-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link href="/" className="font-extrabold text-lg tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            Pocket <span style={{ color: "var(--color-brand-coral)" }}>Traveler</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <span className="section-label">Juridisch</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight" style={{ color: "var(--color-brand-navy)" }}>
            Privacybeleid
          </h1>
          <p className="mt-3 text-sm" style={{ color: "var(--color-brand-muted)" }}>
            Laatst bijgewerkt: {UPDATED}
          </p>
        </div>

        <div className="space-y-10">
          <Section title="1. Wie zijn wij?">
            <p>
              Pocket Traveler is een digitale dienst voor AI-geleide GPS-wandelroutes.
              Wij zijn verwerkingsverantwoordelijke in de zin van de AVG/GDPR.
              Vragen? Mail naar{" "}
              <a href={`mailto:${CONTACT}`} style={{ color: "var(--color-brand-coral)" }} className="underline">{CONTACT}</a>.
            </p>
          </Section>

          <Section title="2. Welke gegevens verwerken wij?">
            <p>Via de wachtlijst verwerken wij:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li><strong style={{ color: "var(--color-brand-navy)" }}>E-mailadres</strong> – verplicht, voor lanceringscommunicatie.</li>
              <li><strong style={{ color: "var(--color-brand-navy)" }}>Stad / bestemming</strong> – optioneel, voor productontwikkeling.</li>
              <li><strong style={{ color: "var(--color-brand-navy)" }}>Reisdoel</strong> – optioneel, voor productontwikkeling.</li>
              <li><strong style={{ color: "var(--color-brand-navy)" }}>Marketingtoestemming</strong> – of je nieuwsbrieven wilt ontvangen.</li>
              <li><strong style={{ color: "var(--color-brand-navy)" }}>UTM-parameters / referral</strong> – herkomstdata uit de URL, geen profiling.</li>
              <li>
                <strong style={{ color: "var(--color-brand-navy)" }}>IP-hash</strong> – je IP wordt <em>nooit</em> in leesbare vorm opgeslagen.
                Wij slaan uitsluitend een SHA-256 hash op (gesalt) voor fraudepreventie en rate-limiting.
              </li>
              <li><strong style={{ color: "var(--color-brand-navy)" }}>User-agent</strong> – browser/apparaat-string voor technische ondersteuning en bot-detectie.</li>
            </ul>
          </Section>

          <Section title="3. Rechtsgrondslag">
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li><strong style={{ color: "var(--color-brand-navy)" }}>Toestemming (art. 6 lid 1 sub a AVG)</strong> – voor wachtlijst en optionele marketing.</li>
              <li><strong style={{ color: "var(--color-brand-navy)" }}>Gerechtvaardigd belang (art. 6 lid 1 sub f AVG)</strong> – voor fraudepreventie via IP-hash en user-agent.</li>
            </ul>
          </Section>

          <Section title="4. Bewaartermijn">
            <p>
              Wachtlijstgegevens bewaren wij totdat je je uitschrijft, of totdat de dienst gelanceerd is
              en je account overgezet is. Uiterlijk 12 maanden na sluiting van de wachtlijst worden
              niet-overgezette gegevens verwijderd.
            </p>
          </Section>

          <Section title="5. Delen met derden">
            <p>
              Wij verkopen of verhuren jouw gegevens nooit. Wij maken gebruik van{" "}
              <strong style={{ color: "var(--color-brand-navy)" }}>Supabase</strong> (EU-dataopslag, AVG-conform)
              als enige verwerker. Geen andere ontvangers.
            </p>
          </Section>

          <Section title="6. Cookies en tracking">
            <p>
              Pocket Traveler plaatst <strong style={{ color: "var(--color-brand-navy)" }}>geen tracking cookies</strong> en
              laadt geen externe analytics-scripts (geen Google Analytics, geen Meta Pixel, etc.).
              Er worden uitsluitend functionele, sessie-gebonden cookies gebruikt die strikt noodzakelijk
              zijn voor de werking van de website.
            </p>
          </Section>

          <Section title="7. Jouw AVG-rechten">
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>Recht op inzage</li>
              <li>Recht op rectificatie</li>
              <li>Recht op verwijdering (&ldquo;recht om vergeten te worden&rdquo;)</li>
              <li>Recht op beperking van verwerking</li>
              <li>Recht op gegevensoverdraagbaarheid</li>
              <li>Recht om bezwaar te maken</li>
              <li>Recht om toestemming in te trekken</li>
            </ul>
            <p>
              Stuur een verzoek naar{" "}
              <a href={`mailto:${CONTACT}`} style={{ color: "var(--color-brand-coral)" }} className="underline">{CONTACT}</a>.
              Wij reageren binnen 30 dagen. Je kunt ook een klacht indienen bij de{" "}
              <strong style={{ color: "var(--color-brand-navy)" }}>Autoriteit Persoonsgegevens</strong>{" "}
              (autoriteitpersoonsgegevens.nl).
            </p>
          </Section>

          <Section title="8. Beveiliging">
            <p>
              Wij passen passende technische maatregelen toe: versleutelde verbindingen (TLS),
              gehashte IP-adressen, toegangsbeperking op databaseniveau, en server-side-only
              gebruik van API-sleutels.
            </p>
          </Section>

          <Section title="9. Wijzigingen">
            <p>
              Bij wezenlijke wijzigingen informeren wij je via e-mail. De datum bovenaan geeft
              de meest recente versie aan.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              Vragen of verzoeken:{" "}
              <a href={`mailto:${CONTACT}`} style={{ color: "var(--color-brand-coral)" }} className="underline">{CONTACT}</a>.
            </p>
          </Section>
        </div>

        <div className="mt-12 pt-6" style={{ borderTop: "1px solid var(--color-brand-border)" }}>
          <Link href="/" className="text-sm font-medium underline" style={{ color: "var(--color-brand-coral)" }}>
            ← Terug naar home
          </Link>
        </div>
      </main>
    </div>
  );
}
