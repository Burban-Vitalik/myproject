'use client';

import { DirectionProvider } from "@radix-ui/react-direction";
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';

interface ProvidersProps {
    locale: string;
    dir: 'ltr' | 'rtl';
    children: React.ReactNode;
    messages: AbstractIntlMessages;
}

export function ClientProviders({ children, locale, messages, dir }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DirectionProvider dir={dir}>
        {children}
      </DirectionProvider>
    </NextIntlClientProvider>
  );
}