"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocale } from "./actions";
import type { Locale } from "./locale";

export function useLocale(initial: Locale): [Locale, (l: Locale) => void] {
  const [locale, setLocaleState] = useState<Locale>("en");
  const router = useRouter();
  const [, startTransition] = useTransition();

  function changeLocale(l: Locale) {
    setLocaleState(l);
    startTransition(async () => {
      await setLocale(l);
      router.refresh();
    });
  }

  return [locale, changeLocale];
}
