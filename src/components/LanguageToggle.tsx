"use client";

import type { Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  onToggle: () => void;
}

export default function LanguageToggle({ lang, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      aria-label={lang === "en" ? "Switch to Dutch" : "Switch to English"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "4px 10px",
        borderRadius: "6px",
        border: "1px solid var(--color-brand-border)",
        background: "transparent",
        cursor: "pointer",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
        color: "var(--color-brand-navy)",
        transition: "border-color .15s, color .15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--color-brand-navy)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--color-brand-border)";
      }}
    >
      <span style={{ opacity: lang === "en" ? 1 : 0.4 }}>EN</span>
      <span style={{ opacity: 0.3 }}>/</span>
      <span style={{ opacity: lang === "nl" ? 1 : 0.4 }}>NL</span>
    </button>
  );
}
