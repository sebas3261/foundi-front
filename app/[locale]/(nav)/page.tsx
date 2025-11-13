"use client";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { motion, type Variants } from "framer-motion";
import React from "react";

// 🔮 Variantes para el efecto escalonado (tipadas)
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const, // ✅ fuerza el literal correcto
      stiffness: 220,
      damping: 15,
      mass: 0.8,
    },
  },
};

export default function Page() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <main className="p-2">
      <motion.section
        key={locale}
        className="flex justify-center items-center flex-col"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* ⭐ Badge */}
        <motion.div
          variants={item}
          className="flex flex-row gap-2 items-center font-semibold bg-[#E9EAF8] text-[#6065E3] py-1 px-2 md:px-4 rounded-md border border-[#D5D5F5] mt-10 md:mt-15 dark:bg-[#1B1B29] dark:border-[#28294D] cursor-default hover:bg-[#D9DAF7] dark:hover:bg-[#21223C]"
        >
          <Icon
            icon="hugeicons:stars"
            className="w-[13px] h-[13px] md:w-[15px] md:h-[15px]"
          />
          <p className="text-[13px] md:text-[15px]">{t("best")}</p>
        </motion.div>

        {/* ✨ Título */}
        <motion.div variants={item} className="mt-5 md:mt-10">
          <h2 className="text-[40px] md:text-6xl lg:text-[80px] font-bold text-center leading-tight">
            <span
              className="
                bg-gradient-to-b from-[#6065E3] via-[#A7A9F2] to-[#6065E3]
                bg-clip-text text-transparent
                dark:bg-none dark:text-[#6065E3]
              "
            >
              {t("title1")}
            </span>
            <span className="block text-black dark:text-white">
              {t("title2")}
            </span>
          </h2>
        </motion.div>

        {/* 📱 Subtítulo */}
        <motion.div
          variants={item}
          className="mt-4 text-center font-semibold md:text-lg lg:text-2xl"
        >
          <p className="text-[#707070] dark:text-[#A0A0A0]">{t("subtitle1")}</p>
          <p>{t("subtitle2")}</p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-10 justify-center items-center w-full max-w-md mx-auto"
        >
          {/* 🎯 Botón principal */}
          <button className="flex-1 px-6 py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-[#6065E3] to-[#A7A9F2] hover:opacity-90 hover:scale-[1.05] transition-all duration-300 dark:bg-none dark:bg-[#6065E3] text-[clamp(0.9rem,1vw,1rem)] flex items-center justify-center text-center whitespace-nowrap min-w-[160px]">
            {t("start-button")}
          </button>

          {/* 💎 Botón secundario */}
          <button
            className="
      flex-1 px-6 py-2.5 rounded-xl font-semibold
      border-2 border-[#6065E3]
      text-[#6065E3] dark:text-[#A7A9F2]
      hover:bg-[#E9EAF8] dark:hover:bg-[#1B1B29]
      hover:scale-[1.05]
      transition-all duration-300
      text-[clamp(0.9rem,1vw,1rem)]
      flex items-center justify-center text-center
      whitespace-nowrap
      min-w-[160px]
    "
          >
            {t("premium-button")}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
          className="mt-7 flex flex-row flex-wrap items-center justify-center gap-2 md:gap-5 text-[#707070] dark:text-[#A0A0A0] px-5 font-semibold"
        >
          <p>+10,000 usuarios activos</p>
          <p>Encriptación bancaria</p>
          <p>Ahorra hasta 30% más</p>
        </motion.div>
        
      </motion.section>
    </main>
  );
}
