import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

import "./globals.css";
import { ClientProviders } from "@/components/providers/client-providers";
import { geistSans, geistMono, fontArabic } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Header } from "@/components/modules/Header";
import { Footer } from "@/components/modules/Footer";

export const metadata: Metadata = {
  title: "Multi-language App",
  description: "LTR and RTL support demo",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isRtl = locale === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <html 
      lang={locale} 
      dir={dir} 
      suppressHydrationWarning
      className={cn(
        geistSans.variable, 
        geistMono.variable, 
        fontArabic.variable,
        "h-full"
      )}
    >
      <body className="h-full antialiased font-sans">
        <ClientProviders locale={locale} messages={messages} dir={dir}>
          <Header />
          <main className="bg-gray-200 w-full mx-auto min-h-screen p-4">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}