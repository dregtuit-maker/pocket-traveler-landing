# Pocket Traveler – Landing Page

Production-ready Next.js landing page with waitlist signup for Pocket Traveler (AI GPS city tours).

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, `src/`) |
| Styling | Tailwind CSS v4 (CSS-first config in `globals.css`) |
| Validation | Zod v4 |
| Database | Supabase (via RPC, server-side only) |
| Font | Inter via `next/font/google` |

---

## Quick start

### 1. Install

```bash
npm install
```

### 2. Environment variables

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Full URL of your site, e.g. `https://pockettraveler.app` |
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | Supabase anon/public key — **never** use `service_role` |
| `WAITLIST_IP_SALT` | Random secret for SHA-256 IP hashing. Generate: `openssl rand -hex 32` |

### 3. Branding assets (optional)

The brand images live in `_brand/`. To serve the logo in the app:

```bash
mkdir -p public/branding
cp _brand/*.png public/branding/
```

Then use `/branding/logo.png` via `next/image`.

### 4. Dev server

```bash
npm run dev
# → http://localhost:3000
```

### 5. Production build

```bash
npm run build && npm start
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx           Root layout, Inter font, metadata
│   ├── globals.css          Tailwind v4: @import + @theme brand tokens
│   ├── page.tsx             Landing page (all sections)
│   ├── privacy/page.tsx     AVG-compliant privacy policy (NL)
│   ├── terms/page.tsx       Terms of service (NL)
│   └── api/
│       ├── waitlist/route.ts     POST: Zod validation, bot protection, Supabase RPC
│       └── analytics/route.ts   POST: privacy-first event logging (no PII)
├── components/
│   └── WaitlistForm.tsx     Client form with honeypot, timing check, all UX states
└── hooks/
    └── useAnalytics.ts      sendBeacon hook – fires named events, zero PII
```

---

## Supabase RPC

The waitlist route calls `waitlist_submit` server-side:

```
POST {SUPABASE_URL}/rest/v1/rpc/waitlist_submit
```

Expected parameters (adapt to your function signature):

| Param | Type | Notes |
|-------|------|-------|
| `p_email` | text | required |
| `p_city` | text\|null | |
| `p_use_case` | text\|null | city-trip / weekend / solo / couple / friends / work-trip |
| `p_referral` | text\|null | |
| `p_utm_source/medium/campaign` | text\|null | |
| `p_consent_privacy` | bool | always `true` |
| `p_consent_marketing` | bool | |
| `p_ip_hash` | text | SHA-256(`salt:ip`) |
| `p_user_agent` | text | max 512 chars |

Expected HTTP responses: **200/201** success · **409 / code 23505** duplicate · **429** rate limited.

---

## Bot protection

Two layers (client + server):

1. **Honeypot field** (`hp_name`): off-screen invisible input. Bots fill it; humans don't.
   Server silently accepts (returns success) to confuse bots rather than revealing detection.
2. **Timing check** (`time_delta`): ms since form mount. Server returns 429 if < 2 000 ms.

---

## Privacy / AVG

- No tracking cookies by default.
- No third-party analytics scripts loaded.
- Raw IP never stored — only a SHA-256+salt hash for fraud prevention.
- `consent_privacy` (required) and `consent_marketing` (optional) checkboxes in form.
- Full Dutch privacy policy at `/privacy`, terms at `/terms`.

---

## Analytics

`useAnalytics` fires named events via `navigator.sendBeacon` — no PII, no cookies:

```ts
const { track } = useAnalytics();
track("waitlist_submit_success");
```

`/api/analytics` logs server-side. Wire it to Plausible, Umami, Fathom, or a Supabase counter table.

---

## Deploy on Vercel

Add the four env vars in the Vercel dashboard, then:

```bash
vercel deploy
```
