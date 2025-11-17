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
      <motion.section
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
        className="text-center"
      >
        <motion.h1 variants={fade} className="text-5xl font-bold dark:text-white">
          {t("title")}
        </motion.h1>

        <motion.p
          variants={fade}
          className="mt-5 text-[#707070] dark:text-[#A0A0A0] max-w-xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        {/* Pricing card */}
        <motion.div
          variants={fade}
          className="mt-20 mx-auto max-w-lg p-10 rounded-3xl border border-gray-200 dark:border-[#2D2D45] bg-white dark:bg-[#1B1B29] shadow-lg"
        >
          <h2 className="text-3xl font-bold dark:text-white">{t("planTitle")}</h2>

          <p className="mt-4 text-lg text-[#6065E3] font-semibold">
            {t("price")}
          </p>

          <ul className="mt-6 space-y-3 text-left text-[#707070] dark:text-[#A0A0A0]">
            {[
              t("feature1"),
              t("feature2"),
              t("feature3"),
              t("feature4"),
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Icon icon="lucide:check" className="w-5 h-5 text-[#6065E3]" />
                {item}
              </li>
            ))}
          </ul>

          <motion.a
            variants={fade}
            href={`/${locale}/login`}
            className="inline-block w-full text-center mt-10 py-3 rounded-xl bg-[#6065E3] text-white font-semibold hover:bg-[#4E50D1] transition"
          >
            {t("cta")}
          </motion.a>
        </motion.div>
      </motion.section>

      <div className="mb-32"></div>
    </main>
  );
}
