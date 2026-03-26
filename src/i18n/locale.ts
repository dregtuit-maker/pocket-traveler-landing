import { cookies } from "next/headers";

export type Locale = "en" | "nl";
export const LOCALE_COOKIE = "pt_locale";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const val = store.get(LOCALE_COOKIE)?.value;
  return val === "nl" ? "nl" : "en";
}
