// app/[locale]/(nav)/contact/layout.tsx
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

const baseUrl = "https://www.foundifinance.com";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "seo" });
  const messages = await getMessages({ locale });

  // normalizar .default
  // @ts-ignore
  const plain = messages?.default ?? messages;
  const seoMsgs = plain?.seo ?? {};

  // keywords puede ser array o string
  const raw = seoMsgs.contactKeywords;
  const keywords: string[] | undefined = Array.isArray(raw)
    ? raw
    : typeof raw === "string"
    ? raw.split(",").map((x) => x.trim())
    : undefined;

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    keywords,

    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}/contact`])
      ),
    },

    openGraph: {
      url: `${baseUrl}/${locale}/contact`,
      title: t("contactOgTitle"),
      description: t("contactOgDescription"),
      images: [`${baseUrl}/og-foundi.png`],
      siteName: t("contactSiteName"),
      type: "website",
      locale,
    },

    twitter: {
      card: "summary_large_image",
      title: t("contactTwitterTitle"),
      description: t("contactTwitterDescription"),
      images: [`${baseUrl}/og-foundi.png`],
    },

    authors: [{ name: t("contactAuthor") }],
    publisher: t("contactPublisher"),
  };
}

export default async function Layout({ children, params }: any) {
  const { locale } = await params;

  // CLAVE para remount
  return <div key={locale}>{children}</div>;
}
