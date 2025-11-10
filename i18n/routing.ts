// /src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "es", "fr", "pt"],
  defaultLocale: "en",
});

// OJO: aquí NO existe useLocale
export const { Link, useRouter, usePathname } = createNavigation(routing);
