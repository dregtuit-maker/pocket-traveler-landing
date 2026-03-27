import { NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;
const WAITLIST_IP_SALT = process.env.WAITLIST_IP_SALT!;

function sha256Hex(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

function getIp(req: Request) {
  const h = req.headers;

  // Vercel sometimes provides this explicitly
  const xv = h.get("x-vercel-forwarded-for");
  if (xv) return xv.split(",")[0].trim();

  // Standard proxy header
  const xf = h.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();

  // Cloudflare
  const cf = h.get("cf-connecting-ip");
  if (cf) return cf.trim();

  // Common fallback
  const realIp = h.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "0.0.0.0";
}

export async function POST(req: Request) {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !WAITLIST_IP_SALT) {
      return NextResponse.json(
        { ok: false, error: "server_misconfigured" },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));

    const email = String(body.email ?? "").trim();
    const city = body.city ? String(body.city).trim() : null;
    const use_case = body.use_case ? String(body.use_case).trim() : null;
    const referral = body.referral ? String(body.referral).trim() : null;
    const source = body.source ? String(body.source).trim() : "landing_page";
    const utm_source = body.utm_source ? String(body.utm_source).trim() : null;
    const utm_medium = body.utm_medium ? String(body.utm_medium).trim() : null;
    const utm_campaign = body.utm_campaign ? String(body.utm_campaign).trim() : null;

    const consent_privacy = Boolean(body.consent_privacy);
    const consent_marketing = Boolean(body.consent_marketing);

    // Basic validation
    if (!consent_privacy) {
      return NextResponse.json(
        { ok: false, error: "consent_required" },
        { status: 400 }
      );
    }
    if (!email || email.length > 254) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 }
      );
    }

    const ip = getIp(req);
    const ip_hash = sha256Hex(`${ip}:${WAITLIST_IP_SALT}`);
    const user_agent = req.headers.get("user-agent") ?? null;

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false },
    });

    const { data, error } = await supabase.rpc("waitlist_submit", {
      email,
      city,
      use_case,
      referral,
      source,
      utm_source,
      utm_medium,
      utm_campaign,
      consent_privacy,
      consent_marketing,
      ip_hash,
      user_agent,
    });

    if (error) {
      // Rate limit is expected: map to 429 for nicer UX
      const msg = (error.message || "").toLowerCase();
      if (msg.includes("rate_limit_exceeded")) {
        return NextResponse.json(
          { ok: false, error: "rate_limited" },
          { status: 429 }
        );
      }
      return NextResponse.json(
        { ok: false, error: "supabase_error", details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true, result: data }, { status: 200 });
  } catch (e: unknown) {
    console.error("[waitlist] unhandled error", e);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 }
    );
  }
}
