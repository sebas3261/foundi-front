"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="mt-32 border-t border-gray-200 dark:border-[#27283F] bg-white dark:bg-[#1B1B29]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID SUPERIOR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <Image
                src="/foundi.svg"
                alt="Foundi Logo"
                width={38}
                height={38}
                className="dark:hidden"
              />
              <Image
                src="/foundiWhite.svg"
                alt="Foundi Logo"
                width={38}
                height={38}
                className="hidden dark:block"
              />

              <span className="text-2xl font-bold text-[#6065E3]">
                Foundi
              </span>
            </Link>

            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>

            <Link
              href={`/${locale}/premium`}
              className="inline-block mt-6 text-sm font-medium text-[#6065E3] hover:underline underline-offset-4"
            >
              {t("upgrade")}
            </Link>
          </div>

          {/* FEATURES */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              {t("features")}
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href={`/${locale}/#tracking`} className="hover:text-[#6065E3] transition">{t("track")}</Link></li>
              <li><Link href={`/${locale}/#security`} className="hover:text-[#6065E3] transition">{t("security")}</Link></li>
              <li><Link href={`/${locale}/#dashboard`} className="hover:text-[#6065E3] transition">{t("dashboard")}</Link></li>
              <li><Link href={`/${locale}/premium`} className="hover:text-[#6065E3] transition">{t("premium")}</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              {t("company")}
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href={`/${locale}/about`} className="hover:text-[#6065E3] transition">{t("about")}</Link></li>
              <li><Link href={`/${locale}/our-team`} className="hover:text-[#6065E3] transition">{t("team")}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-[#6065E3] transition">{t("contact")}</Link></li>
            </ul>
          </div>

          {/* LEGAL + SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              {t("legal")}
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <li><Link href={`/${locale}/privacy`} className="hover:text-[#6065E3] transition">{t("privacy")}</Link></li>
              <li><Link href={`/${locale}/terms`} className="hover:text-[#6065E3] transition">{t("terms")}</Link></li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {t("follow")}
            </h3>

            {/* Redes con ICONOS + hover por color oficial */}
            <div className="flex gap-4 sm:gap-6">
              <a
                href="#"
                className="transition"
              >
                <Icon
                  icon="ri:twitter-x-fill"
                  className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-[#1DA1F2] transition"
                />
              </a>

              <a
                href="#"
                className="transition"
              >
                <Icon
                  icon="mdi:instagram"
                  className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-[#E1306C] transition"
                />
              </a>

              <a
                href="#"
                className="transition"
              >
                <Icon
                  icon="mdi:github"
                  className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-[#181717] dark:hover:text-white transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 mb-6 border-t border-gray-200 dark:border-[#27283F]" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Foundi. {t("rights")}</p>
          <p>{t("made")}</p>
        </div>
      </div>
    </footer>
  );
}
