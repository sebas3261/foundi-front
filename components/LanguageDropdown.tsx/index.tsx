"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";

const LANGUAGES = [
  { code: "en", label: "En" },
  { code: "es", label: "Es" },
  { code: "fr", label: "Fr" },
  { code: "pt", label: "Pt" }
] as const;

const LOCALE_CODES = LANGUAGES.map(l => l.code).join("|");
// ^ /(en|es|fr|pt)(/|$)
const LOCALE_RE = new RegExp(`^\\/(${LOCALE_CODES})(\\/|$)`);

// Quita TODOS los prefijos de idioma al inicio: /pt/en/xyz -> /xyz
function stripAllLocales(pathname: string) {
  let p = pathname;
  // Mientras comience con /{locale}(/|$), lo elimina
  while (LOCALE_RE.test(p)) {
    p = p.replace(LOCALE_RE, "$2"); // conserva el '/' si existía
  }
  if (!p.startsWith("/")) p = "/" + p;
  return p === "" ? "/" : p;
}

function buildLocalePath(pathname: string, target: string) {
  const rest = stripAllLocales(pathname); // sin ningún prefijo de idioma
  // Si rest es '/', no duplicar la barra final
  return rest === "/" ? `/${target}` : `/${target}${rest}`;
}

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLang =
    (pathname.match(new RegExp(`^\\/(${LOCALE_CODES})(?:\\/|$)`))?.[1] as
      | (typeof LANGUAGES)[number]["code"]
      | undefined) ?? LANGUAGES[0].code;

  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const current = useMemo(
    () => LANGUAGES.find((l) => l.code === currentLang) ?? LANGUAGES[0],
    [currentLang]
  );

  const onSelect = (code: string) => {
    const nextPath = buildLocalePath(pathname, code);
    const qs = searchParams.toString();
    const href = qs ? `${nextPath}?${qs}` : nextPath;
    setOpen(false);
    router.replace(href);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        !menuRef.current ||
        !btnRef.current ||
        menuRef.current.contains(e.target as Node) ||
        btnRef.current.contains(e.target as Node)
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-xl hover:bg-[#A7A9F2] hover:text-white hover:dark:bg-[#333777] text-gray-800 dark:text-gray-200 transition duration-300 flex items-center gap-2"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="lang-menu"
      >
        <span className="text-sm font-medium">{current.label}</span>
        <Icon
          icon="lucide:chevron-down"
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          id="lang-menu"
          ref={menuRef}
          role="menu"
          aria-label="Select language"
          className="absolute right-0 mt-2 z-50 min-w-40 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-[#1F1F1F] shadow-lg focus:outline-none"
        >
          {LANGUAGES.map((lang) => {
            const active = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                role="menuitem"
                onClick={() => onSelect(lang.code)}
                className={`w-full px-4 py-2 text-sm flex items-center gap-2 text-left transition duration-200 hover:bg-[#A7A9F2] hover:text-white hover:dark:bg-[#333777] ${
                  active ? "font-semibold" : ""
                }`}
              >
                {lang.label}
                {active && <Icon icon="lucide:check" className="ml-auto w-4 h-4 opacity-80" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
