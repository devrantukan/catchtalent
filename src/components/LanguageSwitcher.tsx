"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const pathMappings: {
  tr: { [key: string]: string };
  en: { [key: string]: string };
} = {
  tr: {
    "/tr": "/en",
    "/tr/portfolyo": "/en/portfolio",
    "/tr/biz-kimiz": "/en/who-are-we",
    "/tr/iletisim": "/en/contact",
  },
  en: {
    "/en": "/tr",
    "/en/portfolio": "/tr/portfolyo",
    "/en/who-are-we": "/tr/biz-kimiz",
    "/en/contact": "/tr/iletisim",
  },
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/tr") ? "tr" : "en";

  const handleLanguageSwitch = () => {
    const mappings = currentLang === "tr" ? pathMappings.tr : pathMappings.en;
    const newPath =
      mappings[pathname] || (currentLang === "tr" ? "/en" : "/tr");
    router.push(newPath);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleLanguageSwitch}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
    >
      {currentLang === "tr" ? "EN" : "TR"}
    </motion.button>
  );
}
