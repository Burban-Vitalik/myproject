import { PillCard } from "@/components/modules/pills/PillCard";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import vitamins from "@/mockData/pills";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";

export default function PillsPage() {
  const t = useTranslations();
  const sortedVitamins = [...vitamins].sort((a, b) => Number(a.isTaken) - Number(b.isTaken));

  return (
    <main className="min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-[1440px] mx-auto w-full md:w-[95%] lg:w-[90%]">
        
        <header className="mb-8 md:mb-12 text-center md:text-start">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {t('PillsPage.title')}
          </h1>
          <p className="text-slate-500 mt-2 font-medium text-base md:text-lg">
            {t('PillsPage.subtitle')}
          </p>
        </header>

        <div className="mb-12 md:mb-16 max-w-2xl mx-auto md:ms-0">
  <ButtonGroup className="w-full flex h-12 md:h-14 bg-white shadow-sm rounded-xl overflow-hidden border border-slate-200 transition-all focus-within:ring-4 focus-within:ring-primary/5 focus-within:border-primary/40 [&_input]:focus-visible:ring-0 [&_input]:focus-visible:ring-offset-0">
    
    <div className="hidden md:flex items-center ps-4 md:ps-5 text-slate-400">
      <Search size={18} className="shrink-0" />
    </div>

  <Input 
      id="input-button-group" 
      type="search"
      className="h-full text-base px-3 md:px-3 border-none outline-none bg-transparent placeholder:text-slate-400 min-w-0" 
      placeholder={t('Common.search_placeholder')}
    />
    
    <Button 
      variant="secondary" 
      className="h-full cursor-pointer px-4 md:px-10 text-slate-500 font-semibold rounded-none transition-all border-s border-slate-100 shrink-0"
    >
      <span className="hidden md:inline">{t('Common.search_btn')}</span>
      <Search size={18} className="md:hidden" />
    </Button>
  </ButtonGroup>
</div>
        <section className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-items-center md:justify-items-start">
          {sortedVitamins.map((vitamin) => (
            <div key={vitamin.id} className="w-full max-w-[320px] sm:max-w-none">
              <PillCard 
                id={vitamin.id}
                imageUrl={vitamin.imgUrl} 
                name={vitamin.name} 
                tags={vitamin.tags} 
                isTaken={vitamin.isTaken} 
              />
            </div>
          ))}
        </section>

        {sortedVitamins.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 md:py-24 border-2 border-dashed border-slate-200 rounded-3xl bg-white/50 px-4 text-center">
            <p className="text-slate-400 font-medium text-lg">{t('PillsPage.noVitamins')}</p>
          </div>
        )}
      </div>
    </main>
  );
}