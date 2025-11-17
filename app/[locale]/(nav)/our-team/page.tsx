"use client";

import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useEffect } from "react";

/* -------------------------------------------------------
   🌿 Fade MUY SUAVE (móvil first)
-------------------------------------------------------- */
const fade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/* -------------------------------------------------------
   🌿 Container con menos stagger
-------------------------------------------------------- */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02,
    },
  },
};

export default function Page() {
  const t = useTranslations("our-team");
  const locale = useLocale();

  // 🔥 FIX SCROLL → evita animaciones bug en cambio de idioma
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locale]);

  return (
    <main key={locale} className="px-6 md:px-10 max-w-6xl mx-auto mt-16">
      {/* ------------------------------------------------ */}
      {/* ⭐ HERO */}
      {/* ------------------------------------------------ */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <motion.h1
          variants={fade}
          className="text-4xl md:text-6xl font-bold dark:text-white"
        >
          {t("heroTitle")}
        </motion.h1>

        <motion.p
          variants={fade}
          className="mt-4 text-lg md:text-xl text-[#6F6F6F] dark:text-[#B0B0B0] max-w-2xl"
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.p
          variants={fade}
          className="mt-8 text-[#707070] dark:text-[#A0A0A0] max-w-2xl leading-relaxed"
        >
          {t("editorial")}
        </motion.p>
      </motion.section>

      {/* ------------------------------------------------ */}
      {/* ⭐ 3 PILARES */}
      {/* ------------------------------------------------ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="mt-28 grid md:grid-cols-3 gap-10"
      >
        {[
          ["who1Title", "who1Short", "lucide:help-circle"],
          ["who2Title", "who2Short", "lucide:check-circle"],
          ["who3Title", "who3Short", "lucide:lightbulb"],
        ].map(([title, text, icon], i) => (
          <motion.div
            key={i}
            variants={fade}
            className="p-7 rounded-3xl border border-gray-200 dark:border-[#2D2F45] bg-white dark:bg-[#1B1B29] shadow-sm"
          >
            <Icon icon={icon} className="w-12 h-12 text-[#6065E3]" />
            <h3 className="mt-3 text-2xl font-semibold dark:text-white">
              {t(title)}
            </h3>
            <p className="mt-2 text-[#707070] dark:text-[#A0A0A0]">{t(text)}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ------------------------------------------------ */}
      {/* ⭐ VALORES */}
      {/* ------------------------------------------------ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="mt-36"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold dark:text-white text-center"
        >
          {t("valuesTitle")}
        </motion.h2>

        {/* Desktop grid */}
        <div className="mt-14 hidden md:grid grid-cols-2 gap-10">
          {[
            ["lucide:sparkles", "value1Title", "value1Text"],
            ["lucide:lock", "value2Title", "value2Text"],
            ["lucide:shield-check", "value3Title", "value3Text"],
            ["lucide:eye", "value4Title", "value4Text"],
          ].map(([icon, title, text], i) => (
            <motion.div
              key={i}
              variants={fade}
              className="p-8 rounded-3xl border border-gray-200 dark:border-[#2D2F45] bg-white dark:bg-[#1B1B29] shadow-sm"
            >
              <Icon icon={icon} className="w-10 h-10 text-[#6065E3]" />
              <h3 className="mt-3 text-2xl font-semibold dark:text-white">
                {t(title)}
              </h3>
              <p className="mt-2 text-[#707070] dark:text-[#A0A0A0]">
                {t(text)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile card → solo fade (sin framer extra) */}
        <motion.div
          variants={fade}
          className="mt-14 md:hidden rounded-3xl p-6 border border-gray-200 dark:border-[#2D2F45]
          bg-white dark:bg-[#1B1B29] shadow-sm text-center"
        >
          <Icon
            icon="lucide:sparkles"
            className="w-10 h-10 mx-auto text-[#6065E3]"
          />
          <h3 className="mt-3 text-xl font-semibold dark:text-white">
            {t("value1Title")}
          </h3>
          <p className="mt-2 text-[#707070] dark:text-[#A0A0A0]">
            {t("value1Text")}
          </p>
        </motion.div>
      </motion.section>

      {/* ------------------------------------------------ */}
      {/* ⭐ OUR STORY */}
      {/* ------------------------------------------------ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="mt-40"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold dark:text-white text-center"
        >
          {t("historyTitle")}
        </motion.h2>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-10 mt-20">
          {[
            ["h1Title", "h1Text"],
            ["h2Title", "h2Text"],
            ["h3Title", "h3Text"],
            ["h4Title", "h4Text"],
          ].map(([title, text], i) => (
            <motion.div
              key={i}
              variants={fade}
              className="max-w-xs mx-auto text-center"
            >
              <h3 className="text-xl font-semibold dark:text-white">
                {t(title)}
              </h3>
              <p className="mt-3 text-[#707070] dark:text-[#A0A0A0] leading-relaxed">
                {t(text)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile stack (FIX) */}
        <div className="md:hidden flex flex-col gap-10 mt-16">
          {[
            ["h1Title", "h1Text"],
            ["h2Title", "h2Text"],
            ["h3Title", "h3Text"],
            ["h4Title", "h4Text"],
          ].map(([title, text], i) => (
            <motion.div key={i} variants={fade} className="text-center px-4">
              <h3 className="text-2xl font-semibold dark:text-white">
                {t(title)}
              </h3>
              <p className="mt-3 text-[#707070] dark:text-[#A0A0A0] leading-relaxed">
                {t(text)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ------------------------------------------------ */}
      {/* ⭐ FUNDADOR */}
      {/* ------------------------------------------------ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="mt-40 max-w-3xl mx-auto text-center"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold dark:text-white"
        >
          {t("teamTitle")}
        </motion.h2>

        <motion.p
          variants={fade}
          className="mt-8 text-lg font-semibold dark:text-white"
        >
          {t("teamFounderTitle")}
        </motion.p>

        <motion.p
          variants={fade}
          className="mt-3 text-[#707070] dark:text-[#A0A0A0]"
        >
          {t("teamFounderText")}
        </motion.p>
      </motion.section>

      {/* ------------------------------------------------ */}
      {/* ⭐ CTA FINAL */}
      {/* ------------------------------------------------ */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="mt-40 text-center max-w-3xl mx-auto mb-32"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold dark:text-white"
        >
          {t("ctaTitle")}
        </motion.h2>

        <motion.p
          variants={fade}
          className="mt-4 text-[#707070] dark:text-[#A0A0A0] max-w-xl mx-auto"
        >
          {t("ctaText")}
        </motion.p>

        <motion.a
          variants={fade}
          href={`/${locale}/login`}
          className="inline-block mt-8 px-8 py-4 bg-[#6065E3] text-white font-semibold rounded-xl shadow-md hover:bg-[#5054d1] transition"
        >
          {t("ctaButton")}
        </motion.a>
      </motion.section>
    </main>
  );
}
