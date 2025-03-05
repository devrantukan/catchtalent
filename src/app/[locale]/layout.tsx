import { locales } from "@/i18n";

import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Script from "next/script";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>Catch Talent | Creative Agency</title>
        <meta
          name="description"
          content="Discover exceptional talent and creative solutions for your projects. We connect visionaries with opportunities."
        />
        <meta
          name="keywords"
          content="talent agency, creative agency, casting, production, entertainment, portfolio"
        />
        <meta property="og:title" content="Catch Talent | Creative Agency" />
        <meta
          property="og:description"
          content="Discover exceptional talent and creative solutions for your projects"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://catchtalent.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catch Talent | Creative Agency" />
        <meta
          name="twitter:description"
          content="Discover exceptional talent and creative solutions for your projects"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Script src="https://player.vimeo.com/api/player.js" />
        <div lang={locale}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <div className="min-h-screen">
              <Navigation />
              <main>{children}</main>
            </div>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Catch Talent | Creative Agency",
  description:
    "Discover exceptional talent and creative solutions for your projects. We connect visionaries with opportunities.",
  keywords:
    "talent agency, creative agency, casting, production, entertainment, portfolio",
  openGraph: {
    title: "Catch Talent | Creative Agency",
    description:
      "Discover exceptional talent and creative solutions for your projects",
    type: "website",
    locale: "en_US",
    url: "https://catchtalent.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catch Talent | Creative Agency",
    description:
      "Discover exceptional talent and creative solutions for your projects",
  },
  robots: "index, follow",
};

export const viewport = {
  themeColor: "#000000",
};
