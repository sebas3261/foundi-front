"use client";

import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: "easeOut" },
  },
};

export default function SignupPage() {
  const t = useTranslations("auth");
  const locale = useLocale();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main
      className="
        min-h-screen 
        flex items-center justify-center 
        px-6 
        py-10 
        md:py-0
      "
    >
      <motion.section
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="w-full max-w-sm"
      >
        {/* TITLE */}
        <motion.h1
          variants={fade}
          className="
            text-3xl 
            sm:text-4xl 
            font-bold 
            text-center 
            dark:text-white
          "
        >
          {t("signupTitle")}
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={fade}
          className="
            mt-2 
            text-center 
            text-sm 
            sm:text-base 
            text-[#707070] 
            dark:text-[#A0A0A0]
          "
        >
          {t("signupSubtitle")}
        </motion.p>

        {/* OAUTH BUTTONS */}
        <motion.div variants={fade} className="mt-7 space-y-3">
          {/* Google */}
          <button
            className="
              w-full 
              flex items-center justify-center gap-2 
              py-3 
              border border-gray-300 dark:border-[#2D2F45]
              rounded-xl 
              bg-white dark:bg-[#1B1B29] 
              text-sm 
              font-semibold
              hover:bg-gray-50 dark:hover:bg-[#232336] 
              transition
            "
          >
            <Icon icon="logos:google-icon" className="w-4 h-4" />
            {t("signupWithGoogle")}
          </button>

          {/* Apple */}
          <button
            className="
              w-full 
              flex items-center justify-center gap-2 
              py-3 
              border border-gray-300 dark:border-[#2D2F45]
              rounded-xl 
              bg-white dark:bg-[#1B1B29] 
              text-sm 
              font-semibold
              hover:bg-gray-50 dark:hover:bg-[#232336] 
              transition
            "
          >
            <Icon icon="logos:apple" className="w-4 h-4" />
            {t("signupWithApple")}
          </button>
        </motion.div>

        {/* DIVIDER */}
        <motion.div variants={fade} className="flex items-center gap-3 my-7">
          <div className="h-px bg-gray-300 dark:bg-[#2D2F45] flex-1" />
          <span className="text-xs text-[#707070] dark:text-[#A0A0A0]">
            {t("orText")}
          </span>
          <div className="h-px bg-gray-300 dark:bg-[#2D2F45] flex-1" />
        </motion.div>

        {/* FORM */}
        <motion.form variants={fade} className="space-y-4">
          {/* NAME */}
          <div>
            <label className="text-sm font-medium dark:text-gray-200">
              {t("nameLabel")}
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="
                w-full 
                mt-1 
                px-4 
                py-3.5 
                rounded-xl 
                border border-gray-300 
                dark:border-[#2D2F45]
                bg-white dark:bg-[#1B1B29]
                text-sm 
                text-black dark:text-white
                focus:ring-2 focus:ring-[#6065E3] 
                outline-none 
                transition
              "
            />
          </div>

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
              className="
                w-full 
                mt-1 
                px-4 
                py-3.5 
                rounded-xl 
                border border-gray-300 
                dark:border-[#2D2F45]
                bg-white dark:bg-[#1B1B29]
                text-sm 
                text-black dark:text-white
                focus:ring-2 focus:ring-[#6065E3] 
                outline-none 
                transition
              "
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
              className="
                w-full 
                mt-1 
                px-4 
                py-3.5 
                rounded-xl 
                border border-gray-300 
                dark:border-[#2D2F45]
                bg-white dark:bg-[#1B1B29]
                text-sm 
                text-black dark:text-white
                focus:ring-2 focus:ring-[#6065E3] 
                outline-none 
                transition
              "
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="text-sm font-medium dark:text-gray-200">
              {t("confirmPasswordLabel")}
            </label>
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              className="
                w-full 
                mt-1 
                px-4 
                py-3.5 
                rounded-xl 
                border border-gray-300 
                dark:border-[#2D2F45]
                bg-white dark:bg-[#1B1B29]
                text-sm 
                text-black dark:text-white
                focus:ring-2 focus:ring-[#6065E3] 
                outline-none 
                transition
              "
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full 
              py-3.5 
              bg-[#6065E3] 
              text-white 
              font-semibold 
              rounded-xl 
              hover:bg-[#4E50D1] 
              transition 
              text-sm 
              shadow-md
            "
          >
            {t("signupButton")}
          </button>
        </motion.form>

        {/* LOGIN LINK */}
        <motion.p
          variants={fade}
          className="
            mt-5 
            text-center 
            text-sm 
            text-[#707070] 
            dark:text-[#A0A0A0]
          "
        >
          {t("haveAccount")}{" "}
          <a
            href={`/${locale}/login`}
            className="text-[#6065E3] dark:text-[#A7A9F2] font-semibold"
          >
            {t("goToLogin")}
          </a>
        </motion.p>
      </motion.section>
    </main>
  );
}
