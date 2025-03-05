import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./settings";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export async function getMessages(locale: string) {
  return (await import(`../../messages/${locale}.json`)).default;
}
