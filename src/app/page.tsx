import { getLocale } from "@/i18n/locale";
import LandingPage from "@/components/LandingPage";

export default async function Page() {
  const locale = await getLocale();
  return <LandingPage initialLocale={locale} />;
}
