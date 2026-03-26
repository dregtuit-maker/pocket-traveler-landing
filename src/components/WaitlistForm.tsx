"use client";

import { useEffect, useRef, useState } from "react";
// useRef kept for mountTime (bot timing check)
import { useAnalytics } from "@/hooks/useAnalytics";
import type { copy } from "@/i18n/copy";

// ─── Types ────────────────────────────────────────────────────────────────────

type WaitlistStrings = (typeof copy)["en"]["waitlist"];

type FormState = "idle" | "loading" | "success" | "duplicate" | "error" | "rate_limited";

// ─── Component ────────────────────────────────────────────────────────────────

export default function WaitlistForm({ c }: { c: WaitlistStrings }) {
  const { track } = useAnalytics();

  const [state,             setState]            = useState<FormState>("idle");
  const [errorMsg,          setErrorMsg]         = useState("");
  const [email,             setEmail]            = useState("");
  const [city,              setCity]             = useState("");
  const [useCase,           setUseCase]          = useState("");
  const [consentPrivacy,    setConsentPrivacy]   = useState(false);
  const [consentMarketing,  setConsentMarketing] = useState(false);
  const [honeypot,          setHoneypot]         = useState("");   // must stay ""

  // Time-to-submit: record when the component mounts
  const mountTime = useRef<number>(Date.now());

  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  function getParam(key: string): string | null {
    if (typeof window === "undefined") return null;
    return new URLSearchParams(window.location.search).get(key);
  }

  // ── Submit ─────────────────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consentPrivacy || state === "loading") return;

    // Client-side bot checks (honeypot + timing)
    if (honeypot) return;
    if (Date.now() - mountTime.current < 2000) {
      setState("rate_limited");
      return;
    }

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          city,
          use_case: useCase,
          referral: "landing",
          source: "landing_page",
          utm_source: getParam("utm_source"),
          utm_medium: getParam("utm_medium"),
          utm_campaign: getParam("utm_campaign"),
          consent_privacy: consentPrivacy,
          consent_marketing: consentMarketing,
        }),
      });

      const data: { ok: boolean; error?: string; details?: string } =
        await res.json();

      if (data.ok) {
        setState("success");
        track("waitlist_submit_success");
        return;
      }

      if (res.status === 429 || data.error === "rate_limited") {
        setState("rate_limited");
        return;
      }

      // Supabase duplicate-key errors surface as supabase_error with details
      const isDuplicate =
        data.error === "supabase_error" &&
        (data.details ?? "").toLowerCase().includes("duplicate");

      if (isDuplicate) {
        setState("duplicate");
        track("waitlist_submit_duplicate");
        return;
      }

      switch (data.error) {
        case "consent_required":
          setErrorMsg(c.errorConsent);
          break;
        case "invalid_email":
          setErrorMsg(c.errorGeneric);
          break;
        default:
          setErrorMsg(c.errorGeneric);
      }
      setState("error");
    } catch {
      setErrorMsg(c.errorGeneric);
      setState("error");
    }
  }

  // ── Success state ──────────────────────────────────────────────────────────

  if (state === "success") {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div
          style={{ background: "rgba(22,163,74,.1)" }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
        >
          <svg className="w-8 h-8" style={{ color: "#16a34a" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{ color: "var(--color-brand-navy)" }} className="text-xl font-bold mb-2">
          {c.success}
        </h3>
        <p style={{ color: "var(--color-brand-muted)" }} className="text-sm">
          We&apos;ll let you know as soon as Pocket Traveler is available.
        </p>
      </div>
    );
  }

  if (state === "duplicate") {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div
          style={{ background: "rgba(224,120,80,.1)" }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
        >
          <svg className="w-8 h-8" style={{ color: "var(--color-brand-coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 style={{ color: "var(--color-brand-navy)" }} className="text-xl font-bold mb-2">
          You&apos;re already on the list!
        </h3>
        <p style={{ color: "var(--color-brand-muted)" }} className="text-sm">
          This email is already on the waitlist. We&apos;ll keep you posted.
        </p>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────

  const disabled = state === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Waitlist form">
      {/* ── Honeypot (invisible to humans, bots will fill it) ── */}
      <div className="hp-trap" aria-hidden="true">
        <label htmlFor="hp_name">Naam</label>
        <input
          id="hp_name"
          name="hp_name"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="wl-email"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--color-brand-navy)" }}
        >
          {c.emailLabel} <span style={{ color: "var(--color-brand-coral)" }}>*</span>
        </label>
        <input
          id="wl-email"
          type="email"
          required
          autoComplete="email"
          placeholder={c.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          disabled={disabled}
        />
      </div>

      {/* City */}
      <div>
        <label
          htmlFor="wl-city"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--color-brand-navy)" }}
        >
          {c.cityLabel}{" "}
          <span className="text-xs" style={{ color: "var(--color-brand-muted)" }}>(optional)</span>
        </label>
        <input
          id="wl-city"
          type="text"
          autoComplete="off"
          placeholder={c.cityPlaceholder}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-field"
          disabled={disabled}
        />
      </div>

      {/* Use case */}
      <div>
        <label
          htmlFor="wl-usecase"
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--color-brand-navy)" }}
        >
          {c.useCaseLabel}
        </label>
        <select
          id="wl-usecase"
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="input-field"
          style={{ cursor: "pointer" }}
          disabled={disabled}
        >
          {c.useCases.map((o) => (
            <option key={o.v} value={o.v}>{o.t}</option>
          ))}
        </select>
      </div>

      {/* Privacy consent – required */}
      <div className="flex gap-3 items-start pt-1">
        <input
          id="wl-consent-privacy"
          type="checkbox"
          required
          checked={consentPrivacy}
          onChange={(e) => setConsentPrivacy(e.target.checked)}
          style={{ accentColor: "var(--color-brand-coral)", marginTop: "2px", flexShrink: 0 }}
          className="w-4 h-4 cursor-pointer"
          disabled={disabled}
        />
        <label
          htmlFor="wl-consent-privacy"
          className="text-sm leading-snug cursor-pointer"
          style={{ color: "var(--color-brand-muted)" }}
        >
          {c.consentPrivacy}{" "}
          <span style={{ color: "var(--color-brand-coral)" }}>*</span>
        </label>
      </div>

      {/* Marketing consent – optional */}
      <div className="flex gap-3 items-start">
        <input
          id="wl-consent-marketing"
          type="checkbox"
          checked={consentMarketing}
          onChange={(e) => setConsentMarketing(e.target.checked)}
          style={{ accentColor: "var(--color-brand-coral)", marginTop: "2px", flexShrink: 0 }}
          className="w-4 h-4 cursor-pointer"
          disabled={disabled}
        />
        <label
          htmlFor="wl-consent-marketing"
          className="text-sm leading-snug cursor-pointer"
          style={{ color: "var(--color-brand-muted)" }}
        >
          {c.consentMarketing}
        </label>
      </div>

      {/* Error messages */}
      {state === "error" && errorMsg && (
        <p
          className="text-sm rounded-xl px-4 py-3"
          style={{ color: "#dc2626", background: "#fef2f2" }}
          role="alert"
        >
          {errorMsg}
        </p>
      )}
      {state === "rate_limited" && (
        <p
          className="text-sm rounded-xl px-4 py-3"
          style={{ color: "#dc2626", background: "#fef2f2" }}
          role="alert"
        >
          Too many requests. Please try again in a moment.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={disabled || !consentPrivacy}
        className="btn-primary w-full text-base"
        style={{ padding: ".875rem 1.5rem", width: "100%" }}
      >
        {disabled ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading…
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {c.submit}
          </>
        )}
      </button>

      {/* Privacy notice */}
      <p className="text-xs text-center leading-relaxed pt-1" style={{ color: "var(--color-brand-muted)" }}>
        {c.fineprint}
      </p>
    </form>
  );
}
