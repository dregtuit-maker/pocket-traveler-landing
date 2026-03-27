"use client";

import { useEffect, useRef, useState } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import type { copy } from "@/i18n/copy";

type WaitlistStrings = (typeof copy)["en"]["waitlist"];
type FormState = "idle" | "loading" | "success" | "duplicate" | "error" | "rate_limited";

const MAX_USE_CASES = 3;

export default function WaitlistForm({ c }: { c: WaitlistStrings }) {
  const { track } = useAnalytics();

  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [useCases, setUseCases] = useState<string[]>([]);
  const [consentPrivacy, setConsentPrivacy] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // must stay ""
  const [cooldownUntil, setCooldownUntil] = useState<number>(0);

  // Time-to-submit: record when the component mounts
  const mountTime = useRef<number>(Date.now());
  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  function getParam(key: string): string | null {
    if (typeof window === "undefined") return null;
    return new URLSearchParams(window.location.search).get(key);
  }

  function startCooldown(ms: number) {
    const until = Date.now() + ms;
    setCooldownUntil(until);
    window.setTimeout(() => {
      setCooldownUntil((prev) => {
        if (prev !== until) return prev;
        setState("idle");
        return 0;
      });
    }, ms);
  }

  function toggleUseCase(v: string) {
    setUseCases((prev) => {
      const has = prev.includes(v);
      if (has) return prev.filter((x) => x !== v);
      if (prev.length >= MAX_USE_CASES) return prev; // hard cap
      return [...prev, v];
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!consentPrivacy) return;
    if (state === "loading") return;

    // cooldown guard
    if (cooldownUntil && Date.now() < cooldownUntil) {
      setState("rate_limited");
      return;
    }

    // bot checks
    if (honeypot) return;
    if (Date.now() - mountTime.current < 1500) {
      setState("rate_limited");
      setErrorMsg("");
      startCooldown(3000);
      return;
    }

    setState("loading");
    setErrorMsg("");

    const use_case = useCases.length ? useCases.join(",") : "";

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          city,
          use_case,
          referral: "landing",
          source: "landing_page",
          utm_source: getParam("utm_source"),
          utm_medium: getParam("utm_medium"),
          utm_campaign: getParam("utm_campaign"),
          consent_privacy: consentPrivacy,
          consent_marketing: consentMarketing,
        }),
      });

      const raw = await res.text();
      let data: any = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = {};
      }

      // Your API: ok:true with inserted true/false
      if (data?.ok === true) {
        const inserted = data?.result?.inserted;
        const reason = data?.result?.reason;

        if (inserted === false && reason === "duplicate_email") {
          setState("duplicate");
          track("waitlist_submit_duplicate");
          return;
        }

        setState("success");
        track("waitlist_submit_success");
        return;
      }

      if (res.status === 429 || data?.error === "rate_limited") {
        setState("rate_limited");
        setErrorMsg("");
        startCooldown(5000);
        return;
      }

      const isDuplicate =
        data?.error === "supabase_error" &&
        (String(data?.details ?? "").toLowerCase().includes("duplicate") ||
          String(data?.details ?? "").toLowerCase().includes("unique"));

      if (isDuplicate) {
        setState("duplicate");
        track("waitlist_submit_duplicate");
        return;
      }

      switch (data?.error) {
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

  const disabled = state === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-label="Waitlist form">
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

      <div>
        <div className="flex items-end justify-between gap-3">
          <label
            className="block text-sm font-medium mb-1.5"
            style={{ color: "var(--color-brand-navy)" }}
          >
            {c.useCaseLabel}
          </label>
          <span className="text-xs" style={{ color: "var(--color-brand-muted)" }}>
            {useCases.length}/{MAX_USE_CASES}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {c.useCases
            .filter((o) => o.v) // drop empty placeholder option if present
            .map((o) => {
              const checked = useCases.includes(o.v);
              const disabledOption = !checked && useCases.length >= MAX_USE_CASES;
              return (
                <label
                  key={o.v}
                  className="flex items-center gap-2 rounded-xl px-3 py-2"
                  style={{
                    border: "1px solid var(--color-brand-border)",
                    background: checked ? "rgba(224,120,80,.08)" : "#fff",
                    opacity: disabledOption ? 0.6 : 1,
                    cursor: disabled || disabledOption ? "not-allowed" : "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleUseCase(o.v)}
                    disabled={disabled || disabledOption}
                    style={{ accentColor: "var(--color-brand-coral)" }}
                    className="w-4 h-4"
                  />
                  <span className="text-sm" style={{ color: "var(--color-brand-navy)" }}>
                    {o.t}
                  </span>
                </label>
              );
            })}
        </div>

        <p className="text-xs mt-2" style={{ color: "var(--color-brand-muted)" }}>
          Select up to {MAX_USE_CASES}.
        </p>
      </div>

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
          {c.consentPrivacy} <span style={{ color: "var(--color-brand-coral)" }}>*</span>
        </label>
      </div>

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

      {state === "error" && errorMsg && (
        <p className="text-sm rounded-xl px-4 py-3" style={{ color: "#dc2626", background: "#fef2f2" }} role="alert">
          {errorMsg}
        </p>
      )}

      {state === "rate_limited" && (
        <p className="text-sm rounded-xl px-4 py-3" style={{ color: "#dc2626", background: "#fef2f2" }} role="alert">
          Too many requests. Try again in 5s.
        </p>
      )}

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

      <p className="text-xs text-center leading-relaxed pt-1" style={{ color: "var(--color-brand-muted)" }}>
        {c.fineprint}
      </p>
    </form>
  );
}