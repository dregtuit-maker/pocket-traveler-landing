export type Locale = "en" | "nl";

export const copy = {
  en: {
    nav: {
      cta: "Get early access",
    },
    hero: {
      badge: "Launching soon",
      titleA: "Your AI guide for",
      titleB: "every city route",
      subtitle:
        "Pocket Traveler creates a personalised GPS walking tour in seconds — based on your interests, time available and travel vibe. No guidebook. No planning. Just go.",
      primaryCta: "Join the waitlist",
      secondaryCta: "How it works",
    },
    stats: [
      { k: "AI-powered", v: "Tour generator" },
      { k: "GPS-guided", v: "Live navigation" },
      { k: "100% personal", v: "Built for you" },
    ],
    features: {
      label: "Features",
      title: "Everything you need to explore a city",
      subtitle: "AI + GPS + local knowledge, in one smooth experience.",
      cards: [
        {
          title: "Personalised routes",
          text: "Tell the AI what you like — museums, food, architecture or hidden bars — and get a route that fits you.",
        },
        {
          title: "GPS step-by-step",
          text: "Real-time map + routing. The app follows you — pause anytime, continue later.",
        },
        {
          title: "Interactive in-app map",
          text: "All stops on one map. Save favourites and share your route with friends.",
        },
        {
          title: "Hidden gems",
          text: "Not the standard tourist list. Discover spots locals actually love.",
        },
        {
          title: "Your tempo, your time",
          text: "Got 2 hours or a full day? Set the duration and the AI builds a realistic plan.",
        },
      ],
    },
    how: {
      label: "How it works",
      title: "From idea to route in 3 steps",
      steps: [
        {
          title: "Pick your preferences",
          text: "Choose a city, interests (food, art, nature…) and the time you have.",
        },
        {
          title: "AI builds the route",
          text: "In seconds you get a personalised walking route with the best stops for you.",
        },
        {
          title: "Navigate & explore",
          text: "Follow the map and go at your own pace. Pause whenever you want.",
        },
      ],
    },
    benefits: {
      label: "Benefits",
      title: "Why Pocket Traveler?",
      items: [
        "No research — just pick a destination.",
        "Every route is unique to your interests.",
        "Offline-friendly after generating the route.",
        "Discover places typical guides miss.",
        "Flexible durations: from quick tour to full day.",
        "Privacy-first: no trackers, no ads, no third parties.",
      ],
    },
    socialProof: {
      label: "Beta users",
      title: "What early testers say",
      subtitle: "Reviews coming soon — join the waitlist to be first in line.",
      footnote: "Reviews will appear after public launch.",
    },
    privacyHighlight: {
      title: "Privacy by design",
      text:
        "No tracking cookies and no third-party analytics scripts. Your IP is never stored in readable form — only a salted SHA-256 hash for abuse prevention. Built to be GDPR-friendly.",
      link: "Read our privacy policy →",
    },
    waitlist: {
      badge: "Waitlist",
      title: "Be first to try it",
      subtitle:
        "Join for early access and get an intro offer at launch.",
      emailLabel: "Email address",
      emailPlaceholder: "you@email.com",
      cityLabel: "City / destination",
      cityPlaceholder: "Amsterdam, Paris, Rome…",
      useCaseLabel: "Trip type",
      useCasePlaceholder: "What kind of trip? (optional)",
      useCases: [
        { v: "", t: "Select (optional)" },
        { v: "city-trip", t: "City trip" },
        { v: "weekend", t: "Weekend getaway" },
        { v: "solo", t: "Solo travel" },
        { v: "couple", t: "Couple / romantic" },
        { v: "friends", t: "With friends" },
        { v: "work-trip", t: "Business trip" },
      ],
      consentPrivacy:
        "I agree to the privacy policy and consent to storing my data.",
      consentMarketing:
        "Yes, send me updates and offers (optional).",
      submit: "Join the waitlist",
      fineprint:
        "We use your email only for Pocket Traveler launch updates. No spam. No tracking cookies.",
      success: "You're on the list!",
      errorConsent: "Please accept the privacy policy to continue.",
      errorGeneric: "Something went wrong. Please try again.",
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "When will Pocket Traveler launch?",
          a: "Later in 2026. Waitlist members will be invited first.",
        },
        {
          q: "Which cities will be supported?",
          a: "We start with a small set of European cities. Your city input helps us prioritise.",
        },
        {
          q: "Does it work offline?",
          a: "After generating a route, the key info is cached so you can keep going with limited connectivity.",
        },
        {
          q: "Will it be free?",
          a: "There will be a free tier and a premium tier. Waitlist members get an intro offer.",
        },
        {
          q: "What do you do with my email?",
          a: "Only launch-related updates. We do not sell or share your data with third parties.",
        },
      ],
    },
    footer: {
      tagline: "AI-powered city tours for curious travellers.",
      privacy: "Privacy policy",
      terms: "Terms",
      contact: "Contact",
      copyright: "© 2026 Pocket Traveler. All rights reserved.",
    },
    lang: {
      label: "Language",
      en: "English",
      nl: "Nederlands",
    },
    privacy: {
      label: "Legal",
      title: "Privacy Policy – Pocket Traveler",
      updated: "March 24, 2025",
      back: "← Back to home",
      contact: "privacy@pockettraveler.app",
      sections: [
        { heading: "1. Who are we?", paras: ["Pocket Traveler is a digital service for AI-powered GPS walking tours. We are the data controller under GDPR. Questions? Email privacy@pockettraveler.app."] },
        { heading: "2. Data we process", paras: ["Via the waitlist we process: email address (required), city/destination (optional), trip type (optional), marketing consent, UTM parameters, hashed IP (SHA-256 + salt, never readable), and user-agent string."] },
        { heading: "3. Legal basis", paras: ["Consent (Art. 6(1)(a) GDPR) for waitlist sign-up and optional marketing. Legitimate interest (Art. 6(1)(f) GDPR) for fraud prevention via IP hash and user-agent."] },
        { heading: "4. Retention", paras: ["Waitlist data is kept until you unsubscribe or the service launches and your account is migrated. Unused records are deleted within 12 months of the waitlist closing."] },
        { heading: "5. Third parties", paras: ["We never sell or rent your data. We use Supabase (EU data storage, GDPR-compliant) as our sole processor. No other recipients."] },
        { heading: "6. Cookies & tracking", paras: ["No tracking cookies. No third-party analytics scripts (no Google Analytics, no Meta Pixel). Only strictly necessary functional cookies are used."] },
        { heading: "7. Your rights", paras: ["You have the right of access, rectification, erasure, restriction, portability, objection, and withdrawal of consent. Send requests to privacy@pockettraveler.app. We respond within 30 days. You may also lodge a complaint with your national supervisory authority."] },
        { heading: "8. Security", paras: ["We apply appropriate measures: TLS encryption, hashed IP addresses, database access controls, and server-side-only API keys."] },
        { heading: "9. Changes", paras: ["We will notify you by email of material changes. The date at the top reflects the latest version."] },
        { heading: "10. Contact", paras: ["Questions or requests: privacy@pockettraveler.app."] },
      ],
    },
    terms: {
      label: "Legal",
      title: "Terms – Pocket Traveler",
      updated: "March 24, 2025",
      back: "← Back to home",
      contact: "hallo@pockettraveler.app",
      sections: [
        { heading: "1. Acceptance", paras: ["By signing up for the waitlist or using Pocket Traveler services, you agree to these terms. If you disagree, please do not use our services."] },
        { heading: "2. Service description", paras: ["Pocket Traveler is an app that generates personalised GPS walking tours using AI. The service is in pre-launch. Joining the waitlist does not guarantee access or compensation."] },
        { heading: "3. Waitlist", paras: ["Sign-up does not guarantee access. We determine the order of invitations and service availability at our sole discretion."] },
        { heading: "4. Usage rules", paras: ["You agree not to: provide false or misleading information; misuse the service for unlawful purposes; use automated systems to access the service; infringe intellectual property rights."] },
        { heading: "5. Intellectual property", paras: ["All content, design, logos, texts, and technology are owned by Pocket Traveler or its licensors. Copying, distributing, or modifying without written permission is not permitted."] },
        { heading: "6. Liability limitation", paras: ["Pocket Traveler is not liable for damages arising from AI-generated routes. Routes are informational; users are responsible for their own safety. The service is provided \"as is\" without warranties."] },
        { heading: "7. Privacy", paras: ["Our processing of personal data is described in our privacy policy, which forms an integral part of these terms."] },
        { heading: "8. Changes", paras: ["We reserve the right to modify these terms. Material changes will be communicated by email. Continued use after notification constitutes acceptance."] },
        { heading: "9. Governing law", paras: ["These terms are governed by Dutch law. Disputes are submitted to the competent court in the Netherlands."] },
        { heading: "10. Contact", paras: ["Questions? hallo@pockettraveler.app"] },
      ],
    },
  },

  nl: {
    nav: { cta: "Vroege toegang" },
    hero: {
      badge: "Binnenkort beschikbaar",
      titleA: "Je AI-gids voor",
      titleB: "elke stadsroute",
      subtitle:
        "Pocket Traveler genereert in seconden een persoonlijke GPS-wandelroute — afgestemd op jouw interesses, tijd en reisdoel. Geen gidsboek. Geen planning. Gewoon gaan.",
      primaryCta: "Meld je aan",
      secondaryCta: "Hoe het werkt",
    },
    stats: [
      { k: "AI-powered", v: "Tour generator" },
      { k: "GPS-geleid", v: "Realtime navigatie" },
      { k: "100% persoonlijk", v: "Op jouw maat" },
    ],
    features: {
      label: "Functies",
      title: "Alles voor de perfecte stadsontdekking",
      subtitle: "AI + GPS + lokale kennis, in één vloeiende ervaring.",
      cards: [
        {
          title: "Persoonlijk op maat",
          text: "Vertel de AI wat je boeit — musea, eten, architectuur of bars — en krijg een route die bij je past.",
        },
        {
          title: "GPS-geleide navigatie",
          text: "Realtime kaart + routing. Pauzeer wanneer je wilt, ga verder op jouw moment.",
        },
        {
          title: "Interactieve in-app kaart",
          text: "Alle stops op één kaart. Bewaar favorieten en deel je route met vrienden.",
        },
        {
          title: "Hidden gems",
          text: "Geen standaard toeristenlijst. Ontdek plekken die locals echt aanraden.",
        },
        {
          title: "Jouw tempo, jouw tijd",
          text: "2 uur of een hele dag? Stel de duur in en de AI bouwt een haalbare route.",
        },
      ],
    },
    how: {
      label: "Hoe het werkt",
      title: "Van idee naar route in 3 stappen",
      steps: [
        {
          title: "Vertel je voorkeuren",
          text: "Kies stad, interesses en hoeveel tijd je hebt.",
        },
        {
          title: "AI bouwt je route",
          text: "In seconden krijg je een gepersonaliseerde wandelroute.",
        },
        {
          title: "Navigeer & ontdek",
          text: "Volg de kaart en ga op jouw tempo. Pauzeer wanneer je wilt.",
        },
      ],
    },
    benefits: {
      label: "Voordelen",
      title: "Waarom Pocket Traveler?",
      items: [
        "Geen research — kies een bestemming.",
        "Elke route is uniek en persoonlijk.",
        "Offline-vriendelijk na genereren.",
        "Ontdek plekken die gidsen missen.",
        "Flexibele tijdsduur: kort of dagvullend.",
        "Privacy-first: geen trackers, geen ads.",
      ],
    },
    socialProof: {
      label: "Beta-gebruikers",
      title: "Wat early testers zeggen",
      subtitle: "Reviews volgen binnenkort — wees er als eerste bij.",
      footnote: "Reviews verschijnen na de publieke lancering.",
    },
    privacyHighlight: {
      title: "Privacy by design",
      text:
        "Geen tracking cookies en geen analytics-scripts van derden. Je IP wordt nooit leesbaar opgeslagen — alleen een salted SHA-256 hash voor fraudepreventie. AVG-vriendelijk gebouwd.",
      link: "Lees ons privacybeleid →",
    },
    waitlist: {
      badge: "Wachtlijst",
      title: "Wees er als eerste bij",
      subtitle: "Meld je aan voor vroege toegang en een introductie-aanbod.",
      emailLabel: "E-mailadres",
      emailPlaceholder: "jij@email.nl",
      cityLabel: "Stad / bestemming",
      cityPlaceholder: "Amsterdam, Parijs, Rome…",
      useCaseLabel: "Reisdoel",
      useCasePlaceholder: "Wat is je reisdoel? (optioneel)",
      useCases: [
        { v: "", t: "Kies (optioneel)" },
        { v: "city-trip", t: "Stedentrip" },
        { v: "weekend", t: "Weekendje weg" },
        { v: "solo", t: "Solo reizen" },
        { v: "couple", t: "Romantisch uitje" },
        { v: "friends", t: "Met vrienden" },
        { v: "work-trip", t: "Zakenreis" },
      ],
      consentPrivacy:
        "Ik ga akkoord met het privacybeleid en geef toestemming voor het opslaan van mijn gegevens.",
      consentMarketing:
        "Ja, stuur mij updates en aanbiedingen (optioneel).",
      submit: "Zet me op de wachtlijst",
      fineprint:
        "We gebruiken je e-mailadres alleen voor launch-updates. Geen spam. Geen tracking cookies.",
      success: "Je staat op de lijst!",
      errorConsent: "Je moet akkoord gaan met het privacybeleid.",
      errorGeneric: "Er ging iets mis. Probeer het opnieuw.",
    },
    faq: {
      label: "FAQ",
      title: "Veelgestelde vragen",
      items: [
        {
          q: "Wanneer is Pocket Traveler beschikbaar?",
          a: "Later in 2026. Wachtlijst-leden krijgen als eerste toegang.",
        },
        {
          q: "Voor welke steden werkt de app?",
          a: "We starten met een kleine set Europese steden. Jouw keuze helpt prioriteren.",
        },
        {
          q: "Werkt het offline?",
          a: "Na het genereren wordt de belangrijkste info gecached zodat je met beperkte verbinding door kunt.",
        },
        {
          q: "Is het gratis?",
          a: "Er komt een gratis en een premium laag. Wachtlijst-leden krijgen een introductie-aanbod.",
        },
        {
          q: "Wat doen jullie met mijn e-mailadres?",
          a: "Alleen updates over de lancering. We verkopen of delen je data niet met derden.",
        },
      ],
    },
    footer: {
      tagline: "AI-geleide stadstours voor nieuwsgierige reizigers.",
      privacy: "Privacybeleid",
      terms: "Gebruiksvoorwaarden",
      contact: "Contact",
      copyright: "© 2026 Pocket Traveler. Alle rechten voorbehouden.",
    },
    lang: {
      label: "Taal",
      en: "English",
      nl: "Nederlands",
    },
    privacy: {
      label: "Juridisch",
      title: "Privacybeleid – Pocket Traveler",
      updated: "24 maart 2025",
      back: "← Terug naar home",
      contact: "privacy@pockettraveler.app",
      sections: [
        { heading: "1. Wie zijn wij?", paras: ["Pocket Traveler is een digitale dienst voor AI-geleide GPS-wandelroutes. Wij zijn verwerkingsverantwoordelijke in de zin van de AVG. Vragen? Mail naar privacy@pockettraveler.app."] },
        { heading: "2. Welke gegevens verwerken wij?", paras: ["Via de wachtlijst verwerken wij: e-mailadres (verplicht), stad/bestemming (optioneel), reisdoel (optioneel), marketingtoestemming, UTM-parameters, gehashte IP (SHA-256 + salt, nooit leesbaar) en user-agent."] },
        { heading: "3. Rechtsgrondslag", paras: ["Toestemming (art. 6 lid 1 sub a AVG) voor wachtlijst en optionele marketing. Gerechtvaardigd belang (art. 6 lid 1 sub f AVG) voor fraudepreventie via IP-hash en user-agent."] },
        { heading: "4. Bewaartermijn", paras: ["Wachtlijstgegevens bewaren wij tot uitschrijving of lancering. Niet-overgezette records worden binnen 12 maanden na sluiting verwijderd."] },
        { heading: "5. Delen met derden", paras: ["Wij verkopen of verhuren je data nooit. Wij gebruiken Supabase (EU-opslag, AVG-conform) als enige verwerker. Geen andere ontvangers."] },
        { heading: "6. Cookies en tracking", paras: ["Geen tracking cookies. Geen externe analytics-scripts. Uitsluitend strikt noodzakelijke functionele cookies."] },
        { heading: "7. Jouw AVG-rechten", paras: ["Je hebt recht op inzage, rectificatie, verwijdering, beperking, overdraagbaarheid, bezwaar en intrekking van toestemming. Stuur een verzoek naar privacy@pockettraveler.app. Wij reageren binnen 30 dagen. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens."] },
        { heading: "8. Beveiliging", paras: ["Wij passen passende maatregelen toe: TLS-versleuteling, gehashte IP-adressen, toegangsbeperking op databaseniveau en server-side API-sleutels."] },
        { heading: "9. Wijzigingen", paras: ["Wezenlijke wijzigingen communiceren wij via e-mail. De datum bovenaan geeft de meest recente versie aan."] },
        { heading: "10. Contact", paras: ["Vragen of verzoeken: privacy@pockettraveler.app."] },
      ],
    },
    terms: {
      label: "Juridisch",
      title: "Gebruiksvoorwaarden – Pocket Traveler",
      updated: "24 maart 2025",
      back: "← Terug naar home",
      contact: "hallo@pockettraveler.app",
      sections: [
        { heading: "1. Acceptatie", paras: ["Door je aan te melden voor de wachtlijst of gebruik te maken van de diensten van Pocket Traveler ga je akkoord met deze voorwaarden."] },
        { heading: "2. Beschrijving van de dienst", paras: ["Pocket Traveler is een app die via AI gepersonaliseerde GPS-wandelroutes genereert. De dienst is in pre-lancering fase. Inschrijving geeft geen recht op toegang of vergoeding."] },
        { heading: "3. Wachtlijst", paras: ["Aanmelding geeft geen garantie op toegang. Wij bepalen de volgorde van uitnodigingen en de beschikbaarheid naar eigen inzicht."] },
        { heading: "4. Gebruiksregels", paras: ["Je verbindt je ertoe: geen onjuiste informatie te verstrekken; de dienst niet te misbruiken voor onwettige doeleinden; geen geautomatiseerde systemen in te zetten; intellectuele eigendomsrechten te respecteren."] },
        { heading: "5. Intellectueel eigendom", paras: ["Alle content, logo's, teksten en technologie zijn eigendom van Pocket Traveler of haar licentiegevers. Kopiëren of wijzigen zonder toestemming is niet toegestaan."] },
        { heading: "6. Aansprakelijkheidsbeperking", paras: ["Pocket Traveler is niet aansprakelijk voor schade door AI-gegenereerde routes. Routes zijn informatief; de gebruiker is zelf verantwoordelijk voor veiligheid. De dienst wordt geleverd \"as is\" zonder garanties."] },
        { heading: "7. Privacy", paras: ["Onze verwerking van persoonsgegevens is beschreven in ons privacybeleid, dat integraal deel uitmaakt van deze voorwaarden."] },
        { heading: "8. Wijzigingen", paras: ["Wij behouden het recht deze voorwaarden te wijzigen. Wezenlijke wijzigingen worden gecommuniceerd via e-mail."] },
        { heading: "9. Toepasselijk recht", paras: ["Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland."] },
        { heading: "10. Contact", paras: ["Vragen? hallo@pockettraveler.app"] },
      ],
    },
  },
};

export function t<L extends Locale>(locale: L) {
  return copy[locale];
}
