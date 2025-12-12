import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || "en";
  const messages = await import(`../../messages/${validLocale}.json`);
  return {
    messages: messages.default,
    locale: validLocale,
    timeZone: "UTC",
  };
});
