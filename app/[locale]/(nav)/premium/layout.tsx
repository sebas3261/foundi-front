// app/[locale]/(nav)/premium/layout.tsx
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

const baseUrl = "https://www.foundifinance.com";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "seo" });
  const messages = await getMessages({ locale });

  // @ts-ignore
  const plain = messages?.default ?? messages;
  const seoMsgs = plain?.seo ?? {};

  const raw = seoMsgs.premiumKeywords;
  const keywords: string[] | undefined = Array.isArray(raw)
    ? raw
    : typeof raw === "string"
    ? raw.split(",").map((x) => x.trim())
    : undefined;

  return {
    title: t("premiumTitle"),
    description: t("premiumDescription"),
    keywords,

    alternates: {
      canonical: `${baseUrl}/${locale}/premium`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}/premium`])
      ),
    },

    openGraph: {
      url: `${baseUrl}/${locale}/premium`,
      title: t("premiumOgTitle"),
      description: t("premiumOgDescription"),
      images: [`${baseUrl}/og-foundi.png`],
      siteName: t("premiumSiteName"),
      locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("premiumTwitterTitle"),
      description: t("premiumTwitterDescription"),
      images: [`${baseUrl}/og-foundi.png`],
    },

    authors: [{ name: t("premiumAuthor") }],
    publisher: t("premiumPublisher"),
  };
}

export default async function Layout({ children, params }: any) {
  const { locale } = await params;
  return <div key={locale}>{children}</div>;
}
