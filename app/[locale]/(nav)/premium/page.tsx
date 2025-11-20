"use client";

import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";

const fade: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Page() {
  const t = useTranslations("premium");
  const locale = useLocale();

  return (
    <main key={locale} className="px-5 max-w-5xl mx-auto mt-20">

      {/* --------------------------------------------------- */}
      {/* ⭐ HERO — Animación al cargar */}
      {/* --------------------------------------------------- */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
        }}
        className="text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fade}
          className="mx-auto w-fit bg-[#E9EAF8] dark:bg-[#1B1B29]
          text-[#6065E3] border border-[#D5D5F5] dark:border-[#28294D]
          px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2"
        >
          <Icon icon="lucide:star" className="w-4 h-4" />
          {t("badge")}
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fade}
          className="text-4xl md:text-6xl font-bold mt-6 dark:text-white"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fade}
          className="mt-4 text-[#707070] dark:text-[#A0A0A0] max-w-xl mx-auto text-lg"
        >
          {t("subtitle")}
        </motion.p>
      </motion.section>

      {/* --------------------------------------------------- */}
      {/* ⭐ FEATURES — Animación al cargar */}
      {/* --------------------------------------------------- */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          ["lucide:cloud", "f1Title", "f1Text"],
          ["lucide:shield", "f2Title", "f2Text"],
          ["lucide:bar-chart-3", "f3Title", "f3Text"],
          ["lucide:file-chart-column", "f4Title", "f4Text"],
          ["lucide:list-checks", "f5Title", "f5Text"],
          ["lucide:target", "f6Title", "f6Text"],
        ].map(([icon, title, text], i) => (
          <motion.div
            key={i}
            variants={fade}
            className="p-7 rounded-3xl border border-gray-200 dark:border-[#2D2F45]
            bg-white dark:bg-[#1B1B29] shadow-sm"
          >
            <Icon icon={icon} className="w-10 h-10 text-[#6065E3]" />
            <h3 className="mt-3 text-xl font-semibold dark:text-white">
              {t(title)}
            </h3>
            <p className="mt-2 text-[#707070] dark:text-[#A0A0A0]">{t(text)}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* --------------------------------------------------- */}
      {/* ⭐ CHOOSE PLAN — Animación SOLO al aparecer */}
      {/* --------------------------------------------------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15, delayChildren: 0.04 } },
        }}
        className="mt-32"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold text-center dark:text-white"
        >
          {t("choose")}
        </motion.h2>

        <motion.p
          variants={fade}
          className="mt-4 text-center text-[#707070] dark:text-[#A0A0A0]"
        >
          {t("chooseSubtitle")}
        </motion.p>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* MONTHLY */}
          <motion.div
            variants={fade}
            className="rounded-3xl p-10 border border-gray-200 dark:border-[#2D2F45]
            bg-white dark:bg-[#1B1B29] shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold dark:text-white">
              {t("monthly")}
            </h3>

            <p className="mt-4 text-4xl font-bold text-[#6065E3]">
              $4.99 usd
            </p>

            <p className="mt-3 text-[#707070] dark:text-[#A0A0A0]">
              {t("monthlyDesc")}
            </p>

            <a
              href={`/${locale}/login`}
              className="inline-block w-full mt-8 py-3 rounded-xl bg-[#6065E3] 
              text-white font-semibold hover:bg-[#4E50D1] transition"
            >
              {t("cta")}
            </a>
          </motion.div>

          {/* YEARLY */}
          <motion.div
            variants={fade}
            className="rounded-3xl p-10 border-2 border-[#6065E3] dark:border-[#A7A9F2]
            bg-white dark:bg-[#1B1B29] shadow-lg text-center relative"
          >
            <span
              className="absolute -top-4 left-1/2 -translate-x-1/2
              bg-[#6065E3] text-white dark:bg-[#A7A9F2] dark:text-black
              py-1 px-4 rounded-full text-sm font-semibold"
            >
              {t("bestValue")}
            </span>

            <h3 className="text-xl font-semibold dark:text-white">
              {t("yearly")}
            </h3>

            <p className="mt-4 text-4xl font-bold text-[#6065E3]">
              49.99 usd
            </p>

            <p className="mt-3 text-[#707070] dark:text-[#A0A0A0]">
              {t("yearlyDesc")}
            </p>

            <a
              href={`/${locale}/login`}
              className="inline-block w-full mt-8 py-3 rounded-xl bg-[#6065E3] 
              text-white font-semibold hover:bg-[#4E50D1] transition"
            >
              {t("cta")}
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* --------------------------------------------------- */}
      {/* ⭐ BENEFITS — Animación SOLO al aparecer */}
      {/* --------------------------------------------------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="mt-40 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold text-center dark:text-white"
        >
          {t("benefitsTitle")}
        </motion.h2>

        {/* GRID 2 COLUMNS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"].map((key, i) => (
            <motion.div
              key={i}
              variants={fade}
              className="flex items-start gap-3 text-[#707070] dark:text-[#A0A0A0]"
            >
              <Icon icon="lucide:check" className="w-5 h-5 text-[#6065E3] mt-1" />
              <p>{t(key)}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --------------------------------------------------- */}
      {/* ⭐ FAQ — Animación SOLO al aparecer */}
      {/* --------------------------------------------------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="mt-44 max-w-3xl mx-auto"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold text-center dark:text-white"
        >
          {t("faqTitle")}
        </motion.h2>

        <div className="mt-12 space-y-4">
          {[
            ["faq1Q","faq1A"],
            ["faq2Q","faq2A"],
            ["faq3Q","faq3A"],
            ["faqRefundQ","faqRefundA"],
          ].map(([q, a], i) => (
            <motion.details
              key={i}
              variants={fade}
              className="border border-gray-200 dark:border-[#2D2F45] rounded-2xl p-5
              bg-white dark:bg-[#1B1B29] shadow-sm cursor-pointer"
            >
              <summary className="font-semibold dark:text-white text-lg">
                {t(q)}
              </summary>
              <p className="mt-3 text-[#707070] dark:text-[#A0A0A0] leading-relaxed">
                {t(a)}
              </p>
            </motion.details>
          ))}
        </div>
      </motion.section>

      {/* --------------------------------------------------- */}
      {/* ⭐ FINAL CTA — Animación SOLO al aparecer */}
      {/* --------------------------------------------------- */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="mt-48 max-w-4xl mx-auto text-center mb-28"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold dark:text-white"
        >
          {t("finalTitle")}
        </motion.h2>

        <motion.p
          variants={fade}
          className="mt-4 text-[#707070] dark:text-[#A0A0A0] max-w-xl mx-auto"
        >
          {t("finalSubtitle")}
        </motion.p>

        <motion.a
          variants={fade}
          href={`/${locale}/login`}
          className="inline-block mt-10 px-8 py-4 bg-[#6065E3] 
          text-white font-semibold rounded-xl shadow-md hover:bg-[#5054D1] transition"
        >
          {t("finalCTA")}
        </motion.a>
      </motion.section>

    </main>
  );
}
