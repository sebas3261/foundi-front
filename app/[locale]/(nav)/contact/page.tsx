"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Icon } from "@iconify/react";
import { useState } from "react";

/* -------------------------------------------- */
/* ANIMACIONES */
/* -------------------------------------------- */

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// ⭐ FIX IMPORTANTE: EL CONTENEDOR NECESITA PROPS REALES
const container: Variants = {
  hidden: { opacity: 0 }, // 👈 Antes vacío → animaciones NO se activaban
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.18,
      delayChildren: 0.05,
      ease: "easeOut",
    },
  },
};

/* -------------------------------------------- */
/* COMPONENTE */
/* -------------------------------------------- */

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main key={locale} className="px-6 md:px-12 mt-24 max-w-5xl mx-auto">

      {/* ----------------------------------------------------- */}
      {/* ⭐ HERO NUEVO */}
      {/* ----------------------------------------------------- */}
      <motion.section
        key={"hero-" + locale}
        initial="hidden"
        animate="show"
        variants={container}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.div variants={fade} className="flex justify-center mb-6">
          <Icon icon="lucide:mail-plus" className="w-16 h-16 text-[#6065E3]" />
        </motion.div>

        <motion.h1
          variants={fade}
          className="text-4xl md:text-6xl font-bold dark:text-white tracking-tight"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          variants={fade}
          className="mt-5 text-lg md:text-xl text-[#6F6F6F] dark:text-[#B0B0B0] leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>
      </motion.section>

      {/* ----------------------------------------------------- */}
      {/* ⭐ CONTACT OPTIONS — CARDS (ANIMAN PERFECTO AHORA) */}
      {/* ----------------------------------------------------- */}
      <motion.section
        key={"cards-" + locale}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // 🔥 reliable trigger
        variants={container} // ⭐ contenedor sí anima
        className="mt-28 grid md:grid-cols-3 gap-8"
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
        ].map((c, i) => (
          <motion.div
            key={i}
            variants={fade}
            className="group p-8 rounded-3xl border border-gray-200 dark:border-[#2A2A44]
              bg-white dark:bg-[#181824] shadow-sm hover:shadow-xl transition cursor-pointer
              hover:border-[#6065E3] dark:hover:border-[#6065E3]"
            onClick={() => (window.location.href = c.link)}
          >
            <div className="flex justify-center">
              <Icon
                icon={c.icon}
                className="w-12 h-12 text-[#6065E3] group-hover:scale-110 transition"
              />
            </div>

            <h3 className="mt-5 text-2xl font-semibold dark:text-white text-center">
              {c.title}
            </h3>

            <p className="mt-3 text-[#707070] dark:text-[#A0A0A0] leading-relaxed text-center">
              {c.text}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* ----------------------------------------------------- */}
      {/* ⭐ FORMULARIO PREMIUM */}
      {/* ----------------------------------------------------- */}
      <motion.section
        key={"form-" + locale}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mt-40"
      >
        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl font-bold dark:text-white text-center"
        >
          {t("formTitle")}
        </motion.h2>

        <motion.form
          variants={fade}
          onSubmit={(e) => e.preventDefault()}
          className="mt-14 p-10 rounded-3xl border border-gray-200 dark:border-[#2A2A44]
            bg-white dark:bg-[#1A1A28] shadow-xl max-w-xl mx-auto space-y-8"
        >
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium dark:text-gray-200 mb-2">
              {t("formName")}
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border 
                border-gray-300 dark:border-[#2A2A44]
                bg-[#FAFAFA] dark:bg-[#16161E]
                focus:ring-2 focus:ring-[#6065E3] focus:border-transparent
                transition text-black dark:text-white"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium dark:text-gray-200 mb-2">
              {t("formEmail")}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border 
                border-gray-300 dark:border-[#2A2A44]
                bg-[#FAFAFA] dark:bg-[#16161E]
                focus:ring-2 focus:ring-[#6065E3] focus:border-transparent
                transition text-black dark:text-white"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium dark:text-gray-200 mb-2">
              {t("formMessage")}
            </label>
            <textarea
              name="message"
              value={form.message}
              rows={6}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border 
                border-gray-300 dark:border-[#2A2A44]
                bg-[#FAFAFA] dark:bg-[#16161E]
                focus:ring-2 focus:ring-[#6065E3] focus:border-transparent
                transition text-black dark:text-white"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-4 bg-[#6065E3] text-white
              font-semibold rounded-xl shadow-md hover:bg-[#5054D1]
              transition text-center"
          >
            {t("send")}
          </button>
        </motion.form>
      </motion.section>

      <div className="mb-36" />
    </main>
  );
}
