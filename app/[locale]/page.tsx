import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import LocaleSwitcher from "@/shared/ui/LocaleSwitcher";
import { HeroSection } from "@/components/modules/home/hero";

export default function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations();
  return (
    <div>
      <div>
        <LocaleSwitcher />
        <h1 className="text-3xl font-bold underline">{t("title")}</h1>
        <p>{t('description')}</p>

        <HeroSection />
      </div>
    </div>
  );
}
