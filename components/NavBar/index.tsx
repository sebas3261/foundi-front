"use client";
import Image from "next/image";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import LanguageDropdown from "../LanguageDropdown.tsx";

export default function NavBar() {
  const t = useTranslations("navbar");
  const { theme, setTheme, systemTheme } = useTheme();
  const { lang } = useParams();

  const currentTheme = theme === "system" ? systemTheme : theme;

  
  return (
    <header className="px-5 py-3 fixed top-0 left-0 right-0 z-50 text-sm bg-white/90 text-black shadow-sm md:backdrop-saturate-150 flex flex-row items-center justify-between text-black dark:text-white dark:bg-[#1F1F1F]/80">
      <Link href="/" className="flex items-center gap-1 group">
        {/* Contenedor fijo para evitar saltos */}
        <span className="relative w-[50px] h-[50px]">
          {/* Logo morado */}
          <Image
            src="/foundi.svg"
            alt="Foundi purple"
            fill
            priority
            className="
        transition-opacity duration-300 ease-out
        opacity-100              /* light: visible */
        dark:opacity-0           /* dark: oculto por defecto */
        dark:group-hover:opacity-100 /* dark+hover: aparece */
        [pointer-events:none] select-none
      "
            sizes="50px"
          />
          {/* Logo blanco */}
          <Image
            src="/foundiWhite.svg"
            alt="Foundi white"
            fill
            priority
            className="
        transition-opacity duration-300 ease-out
        opacity-0                /* light: oculto */
        dark:opacity-100         /* dark: visible por defecto */
        dark:group-hover:opacity-0 /* dark+hover: se oculta */
        [pointer-events:none] select-none
      "
            sizes="50px"
          />
        </span>

        {/* Texto: misma duración y easing */}
        <h1
          className="
      font-semibold text-[#6065E3] text-xl
      dark:text-white
      dark:group-hover:text-[#6065E3]
      transition-colors duration-300 ease-out
    "
        >
          Foundi
        </h1>
      </Link>

      <div className="flex flex-row gap-5 font-semibold">
        <Link
          href={`/`}
          className="hover:text-[#6065E3] transition duration-300"
        >
          {t("home")}
        </Link>
        <Link
          href={`/our-team`}
          className="hover:text-[#6065E3] transition duration-300"
        >
          {t("our-team")}
        </Link>
        <Link
          href={`/contact`}
          className="hover:text-[#6065E3] transition duration-300"
        >
          {t("contact")}
        </Link>
        <Link
          href={`/premium`}
          className="hover:text-[#6065E3] transition duration-300"
        >
          {t("premium")}
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center">
        <LanguageDropdown />
        <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="p-2 rounded-xl hover:bg-[#A7A9F2] hover:text-white hover:dark:bg-[#333777] text-gray-800 dark:text-gray-200 transition duration-300"
      >
        {currentTheme === "dark" ? (
          <Icon icon="lucide:sun" className="w-4 h-4" />
        ) : (
          <Icon icon="lucide:moon" className="w-4 h-4" />
        )}
      </button>
      </div>
    </header>
  );
}
