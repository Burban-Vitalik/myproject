import LocaleSwitcher from "@/shared/ui/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

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
        <h1 className="text-3xl font-bold underline">{t("hello")}</h1>
        <p>{t('description')}</p>
      </div>
    </div>
  );
}
