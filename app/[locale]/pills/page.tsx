'use client';

import vitamins from "@/mockData/pills";
import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Search, Plus, Sparkles, Command, X } from "lucide-react";
import { PillCard } from "@/components/modules/pills/PillCard";
import { PillsFilters } from "@/components/modules/pills/PillsFilters";

export default function PillsPage() {
  const t = useTranslations();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("status");

  const displayVitamins = useMemo(() => {
    return [...vitamins]
      .filter((v) => {
        const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTab = activeFilter === "all" || v.tags?.includes(activeFilter);
        return matchesSearch && matchesTab;
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "status") return Number(a.isTaken) - Number(b.isTaken);
        return 0;
      });
  }, [searchQuery, activeFilter, sortBy]);

  return (
    <main className="min-h-screen py-6 md:py-10 bg-[#fbfcfd]">
      <div className="max-w-[1280px] mx-auto px-4 w-full">
        
        <LayoutGroup>
          {/* Header: Компактніші розміри */}
          <motion.header layout className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-1">
                <Sparkles size={14} className="fill-current" />
                <span>{t('Common.dashboard')}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {t('PillsPage.title') || "Мої вітаміни"}
              </h1>
              <p className="text-slate-500 font-medium text-sm md:text-base max-w-lg mx-auto md:mx-0 opacity-80">
                {t('PillsPage.subtitle')}
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="h-12 md:h-14 px-6 rounded-xl font-bold gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0 w-full md:w-auto text-base"
            >
              <Plus size={20} strokeWidth={3} />
              {t('Buttons.add_new')}
            </Button>
          </motion.header>

          {/* Controls: Зменшена висота інпута */}
          <motion.div layout className="space-y-6 mb-10">
            <div className="relative group max-w-xl">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <Search size={18} />
              </div>
              
              <Input 
                type="search"
                className="h-12 md:h-14 pl-12 pr-12 text-base bg-white border-slate-200 shadow-sm rounded-xl focus-visible:ring-4 focus-visible:ring-primary/5 focus-visible:border-primary/40 transition-all placeholder:text-slate-400" 
                placeholder={t('Common.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <div className="absolute right-3 inset-y-3 hidden md:flex items-center gap-1 px-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-400 text-[10px] font-bold uppercase">
                <Command size={10} /> K
              </div>
            </div>

            <PillsFilters 
              onFilterChange={setActiveFilter} 
              onSortChange={setSortBy}
              activeFilter={activeFilter}
            />
          </motion.div>

          {/* Grid: 5 колонок на десктопі для кращої щільності */}
          <motion.div layout className="relative min-h-[400px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {displayVitamins.length > 0 ? (
                <motion.section 
                  key="grid"
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
                >
                  {displayVitamins.map((vitamin) => (
                    <motion.div 
                      key={vitamin.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <PillCard {...vitamin} imageUrl={vitamin.imgUrl} />
                    </motion.div>
                  ))}
                </motion.section>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 rounded-[2rem] bg-white border border-slate-100 shadow-sm px-6 text-center"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-50">
                    <Search className="text-slate-300" size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {t('Common.not_found')}
                  </h3>
                  <p className="text-slate-400 text-sm max-w-xs mb-6">
                    За запитом "{searchQuery}" результатів немає
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {setSearchQuery(""); setActiveFilter("all")}}
                    className="rounded-lg font-bold"
                  >
                    Скинути фільтри
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>   
    </main>
  );
}