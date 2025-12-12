import { getRequestConfig } from "next-intl/server";

const locales = ["en", "tr"];

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale && locales.includes(locale) ? locale : "en";

  const messages = (await import(`../../messages/${validLocale}.json`)).default;

  return {
    locale: validLocale,
    messages,
    timeZone: "UTC",
    now: new Date(),
  };
});
