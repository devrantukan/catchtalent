import { getRequestConfig } from "next-intl/server";

const locales = ["en", "tr"];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale)) {
    locale = "en";
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    messages,
    timeZone: "UTC",
    now: new Date(),
  };
});
