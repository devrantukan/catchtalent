import { getRequestConfig } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is one of our supported locales
  const validLocale = locales.includes(locale as Locale)
    ? locale
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
        strong: (chunks) => chunks,
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
        strong: (chunks) => chunks,
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
