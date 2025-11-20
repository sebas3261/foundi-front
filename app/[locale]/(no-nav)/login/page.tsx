"use client";

import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function LoginPage() {
  const t = useTranslations("auth");
  const locale = useLocale();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.section
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="w-full max-w-sm"
      >
        {/* Title */}
        <motion.h1
          variants={fade}
          className="text-3xl font-bold dark:text-white text-center"
        >
          {t("loginTitle")}
        </motion.h1>

        <motion.p
          variants={fade}
          className="mt-2 text-center text-[#707070] dark:text-[#A0A0A0]"
        >
          {t("loginSubtitle")}
        </motion.p>

        {/* OAUTH BUTTONS */}
        <motion.div variants={fade} className="mt-6 space-y-3">
          <button
            className="w-full flex items-center justify-center gap-3 py-3
            border border-gray-300 dark:border-[#2D2F45]
            rounded-xl bg-white dark:bg-[#1B1B29] text-sm font-semibold
            hover:bg-gray-50 dark:hover:bg-[#232336] transition"
          >
            <Icon icon="logos:google-icon" className="w-5 h-5" />
            {t("loginWithGoogle")}
          </button>

          <button
            className="w-full flex items-center justify-center gap-3 py-3
            border border-gray-300 dark:border-[#2D2F45]
            rounded-xl bg-white dark:bg-[#1B1B29] text-sm font-semibold
            hover:bg-gray-50 dark:hover:bg-[#232336] transition"
          >
            <Icon icon="logos:apple" className="w-5 h-5" />
            {t("loginWithApple")}
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div variants={fade} className="flex items-center gap-3 my-6">
          <div className="h-px bg-gray-300 dark:bg-[#2D2F45] flex-1" />
          <span className="text-xs text-[#707070] dark:text-[#A0A0A0]">
            {t("orText")}
          </span>
          <div className="h-px bg-gray-300 dark:bg-[#2D2F45] flex-1" />
        </motion.div>

        {/* FORM */}
        <motion.form variants={fade} className="space-y-5">
          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium dark:text-gray-200">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
              dark:border-[#2D2F45] bg-white dark:bg-[#1B1B29]
              text-black dark:text-white text-sm
              focus:ring-2 focus:ring-[#6065E3] outline-none transition"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium dark:text-gray-200">
              {t("passwordLabel")}
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300
              dark:border-[#2D2F45] bg-white dark:bg-[#1B1B29]
              text-black dark:text-white text-sm
              focus:ring-2 focus:ring-[#6065E3] outline-none transition"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-[#6065E3] text-white font-semibold
            rounded-xl hover:bg-[#4E50D1] transition text-sm shadow-md"
          >
            {t("loginButton")}
          </button>
        </motion.form>

        {/* SIGNUP LINK */}
        <motion.p
          variants={fade}
          className="mt-4 text-center text-sm text-[#707070] dark:text-[#A0A0A0]"
        >
          {t("noAccount")}{" "}
          <a
            href={`/${locale}/signup`}
            className="text-[#6065E3] dark:text-[#A7A9F2] font-semibold"
          >
            {t("goToSignup")}
          </a>
        </motion.p>
      </motion.section>
    </main>
  );
}
