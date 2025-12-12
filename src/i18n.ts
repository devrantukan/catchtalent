import { getRequestConfig } from "next-intl/server";
import { createNavigation } from "next-intl/navigation";
import type { ReactNode } from "react";

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
});

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is one of our supported locales
  const validLocale: Locale =
    locale && locales.includes(locale as Locale)
      ? (locale as Locale)
      : defaultLocale;

  try {
    const messages = await import(`../messages/${validLocale}.json`).then(
      (module) => module.default
    );

    return {
      messages,
      locale: validLocale,
      timeZone: "Europe/Istanbul",
      now: new Date(),
      defaultTranslationValues: {
        strong: (chunks: ReactNode) => chunks,
      },
      onError(error) {
        console.error("i18n error:", error);
      },
      getMessageFallback({ key, namespace }) {
        return `${namespace}.${key}`;
      },
    };
  } catch (error) {
    console.error("Failed to load messages:", error);

    return {
      messages: {},
      locale: validLocale,
      timeZone: "Europe/Istanbul",
      now: new Date(),
      defaultTranslationValues: {
        strong: (chunks: ReactNode) => chunks,
      },
      onError(error) {
        console.error("i18n error:", error);
      },
      getMessageFallback({ key, namespace }) {
        return `${namespace}.${key}`;
      },
    };
  }
});
