"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { AbstractIntlMessages } from "next-intl";

type Props = {
  messages: AbstractIntlMessages;
  locale: string;
  children: ReactNode;
};

export default function NextIntlProvider({
  messages,
  locale,
  children,
}: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
