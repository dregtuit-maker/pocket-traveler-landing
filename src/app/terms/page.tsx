import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gebruiksvoorwaarden – Pocket Traveler",
  description: "De algemene gebruiksvoorwaarden van Pocket Traveler.",
};

const CONTACT = "hallo@pockettraveler.app";
const UPDATED  = "24 maart 2025";

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

export default function TermsPage() {
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
            Gebruiksvoorwaarden
          </h1>
          <p className="mt-3 text-sm" style={{ color: "var(--color-brand-muted)" }}>
            Laatst bijgewerkt: {UPDATED}
          </p>
        </div>

        <div className="space-y-10">
          <Section title="1. Acceptatie">
            <p>
              Door je aan te melden voor de wachtlijst of gebruik te maken van de diensten van
              Pocket Traveler ga je akkoord met deze voorwaarden. Ga je niet akkoord, gebruik
              dan geen gebruik van onze diensten.
            </p>
          </Section>

          <Section title="2. Beschrijving van de dienst">
            <p>
              Pocket Traveler is een applicatie die via kunstmatige intelligentie gepersonaliseerde
              GPS-wandelroutes genereert. De dienst bevindt zich in pre-lancering fase.
              Inschrijving op de wachtlijst geeft geen recht op toegang of vergoeding.
            </p>
          </Section>

          <Section title="3. Wachtlijst">
            <p>
              Aanmelding geeft geen garantie op toegang. Wij bepalen de volgorde van uitnodigingen
              en de beschikbaarheid van de dienst.
            </p>
          </Section>

          <Section title="4. Gebruiksregels">
            <p>Je verbindt je ertoe:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>Geen onjuiste of misleidende informatie te verstrekken.</li>
              <li>De dienst niet te misbruiken of voor onwettige doeleinden te gebruiken.</li>
              <li>Geen geautomatiseerde systemen in te zetten om de dienst te benaderen.</li>
              <li>Intellectuele eigendomsrechten te respecteren.</li>
            </ul>
          </Section>

          <Section title="5. Intellectueel eigendom">
            <p>
              Alle content, vormgeving, logo&apos;s, teksten en technologie zijn eigendom van
              Pocket Traveler of haar licentiegevers. Kopiëren, distribueren of wijzigen zonder
              schriftelijke toestemming is niet toegestaan.
            </p>
          </Section>

          <Section title="6. Aansprakelijkheidsbeperking">
            <p>
              Pocket Traveler is niet aansprakelijk voor schade die voortvloeit uit het gebruik van
              AI-gegenereerde routes. Reisroutes zijn informatief; de gebruiker blijft zelf
              verantwoordelijk voor zijn/haar veiligheid. De dienst wordt aangeboden{" "}
              &ldquo;as is&rdquo; zonder garanties.
            </p>
          </Section>

          <Section title="7. Privacy">
            <p>
              Onze verwerking van persoonsgegevens is beschreven in ons{" "}
              <Link href="/privacy" className="underline" style={{ color: "var(--color-brand-coral)" }}>
                privacybeleid
              </Link>
              , dat integraal deel uitmaakt van deze voorwaarden.
            </p>
          </Section>

          <Section title="8. Wijzigingen">
            <p>
              Wij behouden het recht deze voorwaarden te wijzigen. Wezenlijke wijzigingen worden
              gecommuniceerd via e-mail. Voortgezet gebruik na kennisgeving geldt als acceptatie.
            </p>
          </Section>

          <Section title="9. Toepasselijk recht">
            <p>
              Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd
              aan de bevoegde rechter in Nederland.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              Vragen?{" "}
              <a href={`mailto:${CONTACT}`} style={{ color: "var(--color-brand-coral)" }} className="underline">
                {CONTACT}
              </a>
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
