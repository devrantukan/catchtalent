"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/tr") ? "tr" : "en";

  const menuItems = [
    {
      href: currentLang === "tr" ? "/tr/portfolyo" : "/portfolio",
      label: currentLang === "tr" ? "Portfolyo" : "Portfolio",
      icon: "🎬",
    },
    {
      href: currentLang === "tr" ? "/tr/biz-kimiz" : "/who-are-we",
      label: currentLang === "tr" ? "Biz Kimiz" : "Who Are We",
      icon: "👥",
    },
    {
      href: currentLang === "tr" ? "/tr/iletisim" : "/contact",
      label: currentLang === "tr" ? "İletişim" : "Contact",
      icon: "📧",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={currentLang === "tr" ? "/tr" : "/"}>
            <span className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
              CATCH TALENT
            </span>
          </Link>

          {/* Center Menu */}
          <div className="flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
