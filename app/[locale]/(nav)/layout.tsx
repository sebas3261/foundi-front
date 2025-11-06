import NavBar from "@/components/NavBar";
import { Locale } from "@/i18n/request";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "fr" }];
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  const messages = await getMessages({ locale: lang }).catch(() => null);
  if (!messages) notFound();

  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
