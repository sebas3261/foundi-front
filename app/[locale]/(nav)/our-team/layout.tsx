import type { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://www.foundifinance.com";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ⭐ Remount al cambiar idioma → animaciones vivas
  return <div key={locale}>{children}</div>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const currentLocale = routing.locales.includes(
    locale as (typeof routing.locales)[number]
  )
    ? locale
    : routing.defaultLocale;

  // -----------------------------------------------------------
  // 1) Strings traducidos (TODOS en namespace seo)
  // -----------------------------------------------------------
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "seo",
  });

  // -----------------------------------------------------------
  // 2) RAW messages para leer arrays (keywords)
  // -----------------------------------------------------------
  const allMessages = await getMessages({ locale: currentLocale });
  // @ts-ignore
  const plain = allMessages?.default ? allMessages.default : allMessages;
  const seoMsgs = (plain as any)?.seo ?? {};

  // -----------------------------------------------------------
  // 3) Keywords normalización
  // -----------------------------------------------------------
  const rawKeywords = seoMsgs.ourteamKeywords;
  const keywords: string[] | undefined = Array.isArray(rawKeywords)
    ? rawKeywords.filter((k: unknown) => typeof k === "string")
    : typeof rawKeywords === "string"
    ? rawKeywords.split(",").map((k) => k.trim()).filter(Boolean)
    : undefined;

  // -----------------------------------------------------------
  // 4) Alternates
  // -----------------------------------------------------------
  const canonical = `${baseUrl}/${currentLocale}/our-team`;
  const ogImage = `${baseUrl}/og-foundi.png`;

  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${baseUrl}/${l}/our-team`])
  );

  // -----------------------------------------------------------
  // 5) Metadata final
  // -----------------------------------------------------------
  return {
    metadataBase: new URL(baseUrl),
    title: t("ourteamTitle"),
    description: t("ourteamDescription"),
    keywords,

    alternates: {
      canonical,
      languages: {
        "x-default": `${baseUrl}/our-team`,
        ...languages,
      },
    },

    openGraph: {
      url: canonical,
      title: ((): string => {
        try {
          return t("ourteamOgTitle");
        } catch {
          return t("ourteamTitle");
        }
      })(),
      description: ((): string => {
        try {
          return t("ourteamOgDescription");
        } catch {
          return t("ourteamDescription");
        }
      })(),
      images: [ogImage],
      siteName: ((): string => {
        try {
          return t("ourteamSiteName");
        } catch {
          return "Foundi Finance";
        }
      })(),
      locale: currentLocale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: ((): string => {
        try {
          return t("ourteamTwitterTitle");
        } catch {
          return t("ourteamTitle");
        }
      })(),
      description: ((): string => {
        try {
          return t("ourteamTwitterDescription");
        } catch {
          return t("ourteamDescription");
        }
      })(),
      images: [ogImage],
    },

    authors: ((): { name: string }[] | undefined => {
      try {
        const a = t("ourteamAuthor");
        return a ? [{ name: a }] : undefined;
      } catch {
        return undefined;
      }
    })(),

    publisher: ((): string | undefined => {
      try {
        return t("ourteamPublisher");
      } catch {
        return undefined;
      }
    })(),
  };
}

export function generateViewport() {
  return {
    themeColor: "#6065E3",
  };
}
