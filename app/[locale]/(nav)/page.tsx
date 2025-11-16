"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

// ✔ Fade optimizado (solo opacity + transform) → GPU-friendly
const fade: Variants = {
  hidden: { opacity: 0, y: 20, willChange: "opacity, transform" },
  show: {
    opacity: 1,
    y: 0,
    willChange: "opacity, transform",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// ✔ Para contenedores grandes → NO staggerChildren (Chrome lo odia)
const sectionVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
};

export default function Page() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <main key={locale} className="px-5">
      {/* ───────────────────────────────────────────── */}
      {/* ⭐ HERO */}
      {/* ───────────────────────────────────────────── */}
      <motion.section
        key={"hero-" + locale}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
        }}
        className="flex justify-center items-center flex-col max-w-4xl mx-auto mt-20 text-center"
      >
        <motion.div
          variants={fade}
          className="flex flex-row gap-2 items-center font-semibold 
          bg-[#E9EAF8] text-[#6065E3] py-1 px-3 rounded-md border border-[#D5D5F5]
          dark:bg-[#1B1B29] dark:border-[#28294D] mt-10"
        >
          <Icon icon="hugeicons:stars" className="w-[15px] h-[15px]" />
          <p className="text-[15px]">{t("best")}</p>
        </motion.div>

        <motion.h1
          variants={fade}
          className="text-[40px] md:text-6xl lg:text-[80px] font-bold leading-tight text-black dark:text-white"
        >
          <span
            className="bg-gradient-to-b from-[#6065E3] via-[#A7A9F2] to-[#6065E3]
            bg-clip-text text-transparent dark:bg-none dark:text-[#6065E3]"
          >
            {t("title1")}
          </span>
          <br />
          {t("title2")}
        </motion.h1>

        <motion.div
          variants={fade}
          className="mt-4 text-center font-semibold md:text-lg lg:text-2xl"
        >
          <p className="text-[#707070] dark:text-[#A0A0A0]">{t("subtitle1")}</p>
          <p>{t("subtitle2")}</p>
        </motion.div>

        <motion.div
          variants={fade}
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center"
        >
          <button
            className="px-8 py-3 rounded-xl text-white font-semibold 
            bg-gradient-to-r from-[#6065E3] to-[#A7A9F2] hover:opacity-90 transition cursor-pointer dark:bg-none dark:bg-[#6065E3]"
          >
            {t("start-button")}
          </button>

          <button
            className="px-8 py-3 rounded-xl font-semibold border-2 border-[#6065E3]
            text-[#6065E3] dark:text-[#A7A9F2] dark:border-[#A7A9F2]
            hover:bg-[#E9EAF8] dark:hover:bg-[#1B1B29] transition cursor-pointer"
          >
            {t("premium-button")}
          </button>
        </motion.div>

        <motion.div
          variants={fade}
          className="mt-6 flex flex-row flex-wrap items-center justify-center gap-4 
          text-[#707070] dark:text-[#A0A0A0] font-semibold"
        >
          {[
            ["lucide:shield-check", t("underText1")],
            ["lucide:fingerprint", t("underText2")],
            ["lucide:settings", t("underText3")],
          ].map(([icon, text], i) => (
            <p key={i} className="flex items-center gap-2">
              <Icon icon={icon} className="w-4 h-4" />
              {text}
            </p>
          ))}
        </motion.div>
      </motion.section>

      {/* ───────────────────────────────────────────── */}
      {/* ⭐ WHY */}
      {/* ───────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto mt-32 px-4 grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-12"
      >
        <motion.div
          variants={fade}
          className="md:col-span-2 rounded-3xl p-8 border border-gray-200 dark:border-[#28294D] 
          bg-white dark:bg-[#1B1B29] shadow-sm flex flex-col justify-center"
        >
          <Icon
            icon="lucide:bar-chart-3"
            className="w-14 h-14 text-[#6065E3]"
          />
          <h2 className="mt-5 text-3xl font-bold dark:text-white">
            {t("why1Title")}
          </h2>
          <p className="mt-3 text-[#707070] dark:text-[#A0A0A0] text-lg leading-relaxed">
            {t("why1Desc")}
          </p>
        </motion.div>

        <div className="flex flex-col justify-between gap-8">
          {[
            ["lucide:wallet", t("why2Title"), t("why2Desc")],
            ["lucide:shield-check", t("why3Title"), t("why3Desc")],
          ].map(([icon, title, desc], i) => (
            <motion.div
              key={i}
              variants={fade}
              className="rounded-3xl p-6 border border-gray-200 dark:border-[#28294D] 
                bg-white dark:bg-[#1B1B29] shadow-sm"
            >
              <Icon icon={icon} className="w-10 h-10 text-[#6065E3]" />
              <h3 className="mt-4 text-xl font-semibold dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-[#707070] dark:text-[#A0A0A0] leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ───────────────────────────────────────────── */}
      {/* ⭐ EXPERIENCE — Animación 1 sola vez */}
      {/* ───────────────────────────────────────────── */}

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }} // 👈 animación solo 1 vez
        variants={sectionVariants}
        className="mx-auto mt-40 max-w-6xl px-4"
      >
        <motion.h2
          variants={fade}
          viewport={{ once: true }} // 👈 solo 1 vez
          className="text-4xl font-bold text-center dark:text-white"
        >
          {t("experienceTitle")}
        </motion.h2>

        <motion.p
          variants={fade}
          viewport={{ once: true }} // 👈 solo 1 vez
          className="mt-4 text-center text-[#707070] dark:text-[#A0A0A0] max-w-2xl mx-auto"
        >
          {t("experienceSubtitle")}
        </motion.p>

        {/* Mockup */}
        <motion.div
          variants={fade}
          viewport={{ once: true }} // 👈 solo 1 vez
          className="mt-14 mx-auto rounded-3xl bg-white dark:bg-[#1B1B29]
      border border-gray-200 dark:border-[#28294D] shadow-xl p-10 w-full"
        >
          {/* Balance */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold dark:text-white">
              {t("balanceLabel")}
            </p>
            <p className="text-4xl font-bold text-[#6065E3]">
              {t("balanceValue")}
            </p>
          </div>

          {/* Income / expense */}
          <div className="flex items-center justify-between mt-6 text-base font-semibold">
            <p className="text-green-600 dark:text-green-400">{t("income")}</p>
            <p className="text-red-500 dark:text-red-400">{t("expenses")}</p>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-200 dark:bg-[#2D2F45] my-8" />

          {/* Progress bars — OPTIMIZADAS (solo 1 vez + scaleX) */}
          <div className="space-y-8">
            {[
              {
                label: t("catDining"),
                amount: t("catDiningAmount"),
                value: 0.22,
              },
              {
                label: t("catGroceries"),
                amount: t("catGroceriesAmount"),
                value: 0.48,
              },
              {
                label: t("catSubscriptions"),
                amount: t("catSubscriptionsAmount"),
                value: 0.09,
              },
              {
                label: t("catTransport"),
                amount: t("catTransportAmount"),
                value: 0.21,
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fade} viewport={{ once: true }}>
                <div className="flex justify-between mb-2">
                  <p className="font-medium dark:text-white">{item.label}</p>
                  <p className="font-semibold dark:text-white">{item.amount}</p>
                </div>

                <div className="w-full h-4 rounded-full bg-gray-200 dark:bg-[#2D2F45] overflow-hidden origin-left">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: item.value }}
                    viewport={{ once: true }} // 👈 animación 1 sola vez
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#6065E3] to-[#A7A9F2] origin-left"
                    style={{ willChange: "transform" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ───────────────────────────────────────────── */}
      {/* ⭐ HOW IT WORKS */}
      {/* ───────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-130px" }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto mt-40 text-center"
      >
        <motion.h2
          variants={fade}
          className="text-4xl font-bold dark:text-white"
        >
          {t("howTitle")}
        </motion.h2>

        <motion.p
          variants={fade}
          className="mt-4 max-w-3xl mx-auto text-[#707070] dark:text-[#A0A0A0]"
        >
          {t("howSubtitle")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          {[
            ["lucide:plus-circle", t("how1Title"), t("how1Desc")],
            ["lucide:list-checks", t("how2Title"), t("how2Desc")],
            ["lucide:pie-chart", t("how3Title"), t("how3Desc")],
          ].map(([icon, title, desc], i) => (
            <motion.div
              key={i}
              variants={fade}
              className="bg-white dark:bg-[#1B1B29] border border-gray-200
                dark:border-[#2D2F45] rounded-3xl p-8 shadow-sm"
            >
              <Icon icon={icon} className="w-12 h-12 text-[#6065E3]" />
              <h3 className="mt-4 text-xl font-semibold dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-[#707070] dark:text-[#A0A0A0]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ───────────────────────────────────────────── */}
      {/* ⭐ TRACK */}
      {/* ───────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="max-w-6xl mx-auto mt-48 px-4"
      >
        <motion.h2
          variants={fade}
          className="text-4xl font-bold text-center dark:text-white"
        >
          {t("trackTitle")}
        </motion.h2>

        <motion.p
          variants={fade}
          className="mt-4 text-center text-[#707070] dark:text-[#A0A0A0] max-w-xl mx-auto"
        >
          {t("trackSubtitle")}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mt-16">
          {[
            ["lucide:shopping-bag", t("trackGroceries")],
            ["lucide:credit-card", t("trackSubscriptions")],
            ["lucide:car", t("trackTransport")],
            ["lucide:utensils", t("trackDining")],
            ["lucide:piggy-bank", t("trackSavings")],
            ["lucide:badge-dollar-sign", t("trackIncome")],
            ["lucide:briefcase", t("trackWork")],
            ["lucide:home", t("trackHome")],
          ].map(([icon, label], i) => (
            <motion.div
              key={i}
              variants={fade}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300
                dark:border-[#2D2F45] bg-white dark:bg-[#1B1B29] shadow-sm"
            >
              <Icon icon={icon} className="w-5 h-5 text-[#6065E3]" />
              <p className="font-medium dark:text-white">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ───────────────────────────────────────────── */}
      {/* ⭐ PRIVACY */}
      {/* ───────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={fade}
        className="max-w-5xl mx-auto mt-48 px-4"
      >
        <div
          className="rounded-3xl border border-gray-200 dark:border-[#2D2F45]
          bg-white dark:bg-[#1B1B29] p-12 shadow-sm flex flex-col md:flex-row items-center gap-10"
        >
          <Icon icon="lucide:shield" className="w-16 h-16 text-[#6065E3]" />

          <div>
            <h2 className="text-4xl font-bold dark:text-white">
              {t("privacyTitle")}
            </h2>
            <p className="mt-3 text-[#707070] dark:text-[#A0A0A0] max-w-xl">
              {t("privacySubtitle")}
            </p>

            <ul className="mt-5 space-y-2 text-[#707070] dark:text-[#A0A0A0]">
              <li>{t("privacyBullet1")}</li>
              <li>{t("privacyBullet2")}</li>
              <li>{t("privacyBullet3")}</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ───────────────────────────────────────────── */}
      {/* ⭐ ROADMAP */}
      {/* ───────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
        className="max-w-4xl mx-auto mt-48 px-4"
      >
        <motion.h2
          variants={fade}
          className="text-4xl font-bold text-center dark:text-white"
        >
          {t("roadmapTitle")}
        </motion.h2>

        <motion.p
          variants={fade}
          className="mt-4 text-center text-[#707070] dark:text-[#A0A0A0]"
        >
          {t("roadmapSubtitle")}
        </motion.p>

        <div className="mt-16 relative border-l border-gray-300 dark:border-[#2D2F45] ml-3 pl-8 space-y-12">
          {[
            [t("roadmap1Label"), t("roadmap1Status")],
            [t("roadmap2Label"), t("roadmap2Status")],
            [t("roadmap3Label"), t("roadmap3Status")],
            [t("roadmap4Label"), t("roadmap4Status")],
            [t("roadmap5Label"), t("roadmap5Status")],
          ].map(([label, status], i) => (
            <motion.div key={i} variants={fade} className="relative">
              <div
                className="absolute -left-[1.63rem] top-2 w-4 h-4 rounded-full
                bg-[#6065E3] dark:bg-[#A7A9F2]"
              />
              <h3 className="text-xl font-semibold dark:text-white">{label}</h3>
              <span className="mt-1 inline-block text-sm text-[#6065E3] dark:text-[#A7A9F2]">
                {status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ───────────────────────────────────────────── */}
      {/* ⭐ FAQ */}
      {/* ───────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="max-w-4xl mx-auto mt-48 px-4"
      >
        <motion.h2
          variants={fade}
          className="text-4xl font-bold text-center dark:text-white"
        >
          {t("faqTitle")}
        </motion.h2>

        <div className="mt-12 space-y-4">
          {[
            [t("faq1Q"), t("faq1A")],
            [t("faq2Q"), t("faq2A")],
            [t("faq3Q"), t("faq3A")],
            [t("faq4Q"), t("faq4A")],
          ].map(([q, a], i) => (
            <motion.details
              key={i}
              variants={fade}
              className="border border-gray-200 dark:border-[#2D2F45] rounded-2xl p-5
                bg-white dark:bg-[#1B1B29] shadow-sm cursor-pointer"
            >
              <summary className="font-semibold dark:text-white text-lg">
                {q}
              </summary>
              <p className="mt-3 text-[#707070] dark:text-[#A0A0A0] leading-relaxed">
                {a}
              </p>
            </motion.details>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
