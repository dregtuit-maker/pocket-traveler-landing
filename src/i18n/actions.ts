"use server";

import { cookies } from "next/headers";
import type { Locale } from "./locale";

export async function setLocale(locale: Locale): Promise<void> {
  (await cookies()).set("pt_locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
