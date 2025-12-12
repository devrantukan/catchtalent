import { createNavigation } from "next-intl/navigation";
import { locales } from "./settings";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
});

export async function getMessages(locale: string) {
  return (await import(`../../messages/${locale}.json`)).default;
}
