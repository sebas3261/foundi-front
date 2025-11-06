// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // En Next 15, requestLocale es una Promise<string>
  let locale = await requestLocale;

  // Asegura que el locale sea válido
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // 👇 MUY IMPORTANTE: usa .default para obtener el objeto plano (no el Module)
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
