"use client";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Page() {
  const t = useTranslations("home");

  return (
    <main>
      <section className="flex justify-center items-center flex-col">
        {/* 🟣 Badge superior */}
        <div className="flex flex-row gap-2 items-center font-semibold bg-[#E9EAF8] text-[#6065E3] py-1 px-2 md:px-4 rounded-md border border-[#D5D5F5] mt-10 md:mt-15 dark:bg-[#1B1B29] dark:border-[#28294D] cursor-default hover:bg-[#D9DAF7] dark:hover:bg-[#21223C]">
          <Icon
            icon="hugeicons:stars"
            className="w-[13px] h-[13px] md:w-[15px] md:h-[15px]"
          />
          <p className="text-[13px] md:text-[15px]">{t("best")}</p>
        </div>

        <motion.div
          className="mt-5 md:mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center leading-tight">
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
      </section>
    </main>
  );
}
