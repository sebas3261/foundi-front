// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import ThemeProviderWrapper from "@/providers/ThemeProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((l) => ({ locale: l }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Mensajes resueltos por request.ts
  const messages = await getMessages({ locale });
  // (por si vinieran en .default)
  // @ts-ignore
  const plainMessages = (messages as any)?.default
    ? (messages as any).default
    : messages;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased pt-[74px]`}>
        <NextIntlClientProvider locale={locale} messages={plainMessages}>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
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

  // Traducciones (strings) para title/description/etc.
  const t = await getTranslations({ locale: currentLocale, namespace: "seo" });

  // Mensajes crudos para poder leer arrays (e.g., seo.keywords como array)
  const allMessages = await getMessages({ locale: currentLocale });
  // @ts-ignore por si vienen con .default
  const plain = (allMessages as any)?.default
    ? (allMessages as any).default
    : allMessages;
  const seoMsgs = (plain as any)?.seo ?? {};

  // Normalizamos keywords a string[]
  const rawKeywords = seoMsgs.keywords;
  const keywords: string[] | undefined = Array.isArray(rawKeywords)
    ? rawKeywords.filter((k: unknown) => typeof k === "string")
    : typeof rawKeywords === "string"
    ? rawKeywords
        .split(",")
        .map((k: string) => k.trim())
        .filter(Boolean)
    : undefined;

  const baseUrl = "https://www.foundifinance.com";
  const canonical = `${baseUrl}/${currentLocale}`;
  const ogImage = `${baseUrl}/og-foundi.png`;

  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${baseUrl}/${l}`])
  );

  return {
    metadataBase: new URL(baseUrl),
    title: t("title"),
    description: t("description"),
    keywords,
    alternates: {
      canonical,
      languages: { "x-default": baseUrl, ...languages },
    },
    openGraph: {
      url: canonical,
      title: ((): string => {
        try {
          return t("ogTitle");
        } catch {
          return t("title");
        }
      })(),
      description: ((): string => {
        try {
          return t("ogDescription");
        } catch {
          return t("description");
        }
      })(),
      images: [ogImage],
      siteName: ((): string => {
        try {
          return t("siteName");
        } catch {
          return "Foundi";
        }
      })(),
      locale: currentLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ((): string => {
        try {
          return t("twitterTitle");
        } catch {
          return t("title");
        }
      })(),
      description: ((): string => {
        try {
          return t("twitterDescription");
        } catch {
          return t("description");
        }
      })(),
      images: [ogImage],
    },
    authors: ((): { name: string }[] | undefined => {
      try {
        const a = t("author");
        return a ? [{ name: a }] : undefined;
      } catch {
        return undefined;
      }
    })(),
    publisher: ((): string | undefined => {
      try {
        return t("publisher");
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
