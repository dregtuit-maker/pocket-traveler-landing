import { NextRequest, NextResponse } from "next/server";

/**
 * Minimal privacy-first analytics endpoint.
 * Accepts: { event: string } — nothing else is trusted from the client.
 * No IP, no user-agent, no cookies stored.
 */
export async function POST(req: NextRequest) {
  let event = "unknown";
  try {
    const body = await req.json();
    if (typeof body?.event === "string") {
      // Allowlist — only pre-defined event names are accepted
      const ALLOWED: Set<string> = new Set([
        "waitlist_submit_success",
        "waitlist_submit_duplicate",
        "waitlist_page_view",
      ]);
      if (ALLOWED.has(body.event)) event = body.event;
    }
  } catch {
    // ignore malformed body
  }

  // In production, forward to your privacy-first analytics backend here
  // e.g. Plausible self-hosted, Umami, Fathom, or a simple counter table in Supabase.
  // For now: log server-side only.
  console.info(`[analytics] event=${event} ts=${new Date().toISOString()}`);

  return new NextResponse(null, { status: 204 });
}
