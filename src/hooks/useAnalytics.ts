"use client";

/**
 * Privacy-first analytics hook.
 * Only fires a named event — no PII, no fingerprinting, no cookies.
 * Uses navigator.sendBeacon so it never blocks the UI.
 */
export function useAnalytics() {
  function track(event: string, meta?: Record<string, string | number>) {
    if (typeof window === "undefined") return;

    const payload = JSON.stringify({ event, ...meta });

    // sendBeacon: fire-and-forget, works even if the page is being unloaded
    if (typeof navigator.sendBeacon === "function") {
      navigator.sendBeacon("/api/analytics", payload);
    } else {
      // Fallback for environments without sendBeacon
      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  }

  return { track };
}
