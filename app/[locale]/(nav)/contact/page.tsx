"use client";

import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

/* Fade exacto del Premium */
const fade: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <main key={locale} className="px-5 max-w-5xl mx-auto mt-20">

      {/* ----------------------------------------------------- */}
      {/* ⭐ HERO — Animación tipo Premium */}
      {/* ----------------------------------------------------- */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
        className="text-center"
      >
        <motion.div variants={fade} className="flex justify-center mb-6">
          <Icon icon="lucide:mail-plus" className="w-16 h-16 text-[#6065E3]" />
        </motion.div>

        <motion.h1
          variants={fade}
          className="text-5xl font-bold dark:text-white"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          variants={fade}
          className="mt-5 text-[#707070] dark:text-[#A0A0A0] max-w-xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        {/* ----------------------------------------------------- */}
        {/* ⭐ CONTACT OPTION CARDS — estilo Premium */}
        {/* ----------------------------------------------------- */}
        <motion.div
          variants={fade}
          className="mt-20 grid md:grid-cols-3 gap-10"
        >
          {[
            {
              icon: "lucide:mail",
              title: t("emailTitle"),
              text: t("emailText"),
              link: "mailto:support@foundifinance.com",
            },
            {
              icon: "lucide:help-circle",
              title: t("supportTitle"),
              text: t("supportText"),
              link: "/faq",
            },
            {
              icon: "lucide:lightbulb",
              title: t("ideasTitle"),
              text: t("ideasText"),
              link: "/feedback",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fade}
              className="p-8 rounded-3xl border border-gray-200 dark:border-[#2A2A44]
                bg-white dark:bg-[#181824] shadow-sm hover:shadow-xl transition 
                cursor-pointer text-center"
              onClick={() => (window.location.href = card.link)}
            >
              <Icon
                icon={card.icon}
                className="w-12 h-12 text-[#6065E3] mx-auto"
              />

              <h3 className="mt-5 text-2xl font-semibold dark:text-white">
                {card.title}
              </h3>

              <p className="mt-3 text-[#707070] dark:text-[#A0A0A0]">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ----------------------------------------------------- */}
        {/* ⭐ SEND US A MESSAGE — Premium Style + Animation */}
        {/* ----------------------------------------------------- */}
        <motion.div
          variants={fade}
          className="mt-32 max-w-xl mx-auto"
        >
          {/* Title */}
          <motion.h2
            variants={fade}
            className="text-4xl md:text-5xl font-bold text-center dark:text-white"
          >
            {t("formTitle")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fade}
            className="mt-3 text-[#707070] dark:text-[#A0A0A0] text-center max-w-md mx-auto"
          >
            {t("formSubtitle")}
          </motion.p>

          {/* Card */}
          <motion.form
            variants={fade}
            onSubmit={(e) => e.preventDefault()}
            className="
              mt-12 p-10 rounded-3xl 
              border border-gray-200 dark:border-[#2A2A44]
              bg-white dark:bg-[#1A1A28]
              shadow-xl space-y-8 text-left
            "
          >
            {/* NAME */}
            <div>
              <label className="block text-sm font-semibold dark:text-gray-200 mb-2">
                {t("formName")}
              </label>
              <input
                className="
                  w-full px-4 py-3 rounded-xl border 
                  border-gray-300 dark:border-[#2A2A44]
                  bg-[#FAFAFA] dark:bg-[#16161E]
                  focus:ring-2 focus:ring-[#6065E3] focus:border-transparent
                  text-black dark:text-white transition
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold dark:text-gray-200 mb-2">
                {t("formEmail")}
              </label>
              <input
                type="email"
                className="
                  w-full px-4 py-3 rounded-xl border 
                  border-gray-300 dark:border-[#2A2A44]
                  bg-[#FAFAFA] dark:bg-[#16161E]
                  focus:ring-2 focus:ring-[#6065E3] focus:border-transparent
                  text-black dark:text-white transition
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-semibold dark:text-gray-200 mb-2">
                {t("formMessage")}
              </label>
              <textarea
                rows={6}
                className="
                  w-full px-4 py-3 rounded-xl border 
                  border-gray-300 dark:border-[#2A2A44]
                  bg-[#FAFAFA] dark:bg-[#16161E]
                  focus:ring-2 focus:ring-[#6065E3] focus:border-transparent
                  text-black dark:text-white transition
                "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full py-4 rounded-xl 
                bg-[#6065E3] hover:bg-[#5054D1]
                text-white font-semibold transition
                shadow-md hover:shadow-lg
              "
            >
              {t("send")}
            </button>
          </motion.form>
        </motion.div>
      </motion.section>

      <div className="mb-32"></div>
    </main>
  );
}
