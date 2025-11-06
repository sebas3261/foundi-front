// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export const locales = ["es", "en", "fr", "pt"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validar el idioma
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  // Cargar varios archivos de traducción
  const [common, navbar, seo, home] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/navbar.json`),
    import(`../messages/${locale}/seo.json`),
    import(`../messages/${locale}/home.json`)
  ]);

  // Combinar en un solo objeto
  return {
    locale,
    messages: {
      ...common.default,
      ...navbar.default,
      ...seo.default,
      ...home.default
    }
  };
});
