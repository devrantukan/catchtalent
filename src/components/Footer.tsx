"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/tr") ? "tr" : "en";

  const menuItems = [
    {
      href: currentLang === "tr" ? "/tr" : "/",
      label: currentLang === "tr" ? "Ana Sayfa" : "Home",
    },
    {
      href: currentLang === "tr" ? "/tr/portfolyo" : "/portfolio",
      label: currentLang === "tr" ? "Portfolyo" : "Portfolio",
    },
    {
      href: currentLang === "tr" ? "/tr/biz-kimiz" : "/who-are-we",
      label: currentLang === "tr" ? "Biz Kimiz" : "Who Are We",
    },
    {
      href: currentLang === "tr" ? "/tr/iletisim" : "/contact",
      label: currentLang === "tr" ? "İletişim" : "Contact",
    },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Technology by TukanFT */}
          <div className="flex flex-row justify-center md:justify-end items-center">
            <p className="text-white font-normal mr-2 text-sm md:text-base">
              Technology by{" "}
              <a
                target="_blank"
                href="https://tukanft.com/tr"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                rel="noopener noreferrer"
              >
                TukanFT
              </a>
            </p>
            <a
              target="_blank"
              href="https://tukanft.com/tr"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <img
                alt="TukanFT Logo"
                src="https://tukanft.com/toucan.svg"
                width={40}
                height={40}
                className="mx-auto lg:mx-0 h-[25px] w-auto"
                loading="lazy"
                decoding="async"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
