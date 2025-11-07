import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import React from "react";

export default function page() {
  const t = useTranslations("home");
  return (
    <main>
      <section className="flex justify-center items-center flex-col">
        <div className="flex flex-row gap-2 items-center font-semibold bg-[#E9EAF8] text-[#6065E3] py-1 px-2 rounded-md border-1 border-[#D5D5F5] mt-10">
          <Icon icon="hugeicons:stars" className="w-[10px] h-[10px]" />
          <p className="text-[10px]">{t("best")}</p>
        </div>

        <div className="mt-5">
          <h2 className="text-[40px] font-bold text-center leading-tight">
            <span className="bg-gradient-to-b from-[#6065E3] via-[#A7A9F2] to-[#6065E3] bg-clip-text text-transparent">
              {t("title1")}
            </span>
            <span className="block text-black dark:text-white">
              {t("title2")}
            </span>
          </h2>
        </div>
      </section>
    </main>
  );
}
