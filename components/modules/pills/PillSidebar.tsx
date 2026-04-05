import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, Clock, Info, Zap, Package, History, 
  ChevronRight, AlertCircle 
} from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export function PillSidebar({ pill, t, id }: any) {
  const currentDay = 12;
  const totalDays = 30;
  const progress = (currentDay / totalDays) * 100;
  const dir = "ltr"; 
  return (
    <SheetContent 
        dir={dir}
        side={!dir === "rtl" ? "left" : "right"} 
        className="w-full sm:max-w-[480px] border-s border-slate-100 bg-white/95 backdrop-blur-xl flex flex-col p-0 shadow-2xl"
        style={{width: '100%'}}
    >
      <div className="overflow-y-auto flex-1 px-6 py-4 space-y-10">
        <SheetHeader>
            <SheetTitle className="text-3xl text-center font-black text-slate-900 leading-tight uppercase tracking-tight">
                {pill.name}
            </SheetTitle>

            <SheetDescription className="text-slate-500 font-medium text-lg mt-1 flex justify-center items-center w-full gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span>
                    Active Course: {totalDays - currentDay} days left
                </span>
            </SheetDescription>
        </SheetHeader>

        <div className="relative">
          <div className="aspect-square w-full bg-gradient-to-br from-slate-50 to-white rounded-[40px] flex items-center justify-center p-12 border border-slate-100 shadow-inner group">
            <Image 
              src={pill.imageUrl} 
              alt={pill.name} 
              className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-105" 
              width={200}
              height={200}
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-2xl shadow-xs border border-slate-50 flex items-center gap-2">
             <Clock size={14} className="text-blue-500" />
             <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Next: 10:00 AM</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-end px-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Course progress</span>
            <span className="text-sm font-black text-slate-900">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2.5 bg-slate-100" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-[28px] bg-slate-50/50 border border-slate-100 group hover:bg-white transition-all">
            <Zap size={20} className="text-amber-500 mb-3 fill-amber-500/20" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Streak</span>
            <p className="text-slate-900 font-black text-xl">7 Days</p>
          </div>
          <div className="p-5 rounded-[28px] bg-slate-50/50 border border-slate-100 group hover:bg-white transition-all">
            <Package size={20} className="text-blue-500 mb-3" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">In Stock</span>
            <p className="text-slate-900 font-black text-xl">24 Pills</p>
          </div>
        </div>

        {/* Блоки інформації */}
        <div className="space-y-4">
          {/* Смарт-підказка */}
          <div className="p-5 rounded-[28px] bg-blue-50/50 border border-blue-100/50 flex gap-4">
             <AlertCircle size={20} className="text-blue-600 shrink-0 mt-1" />
             <p className="text-xs text-blue-900 font-medium leading-relaxed">
               D3 is fat-soluble. Take it with your largest meal to improve absorption by up to <strong>40%</strong>.
             </p>
          </div>

          <div className="p-6 rounded-[28px] bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-slate-900">
              <Info size={18} className="text-primary" />
              <span className="font-black text-sm uppercase tracking-tight">How it helps</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Supports immune function and bone health. Regular intake helps maintain optimal energy levels during the day.
            </p>
          </div>

          {/* Кнопка аналітики */}
          <Link href={`/pills/${id}/stats`} className="block group">
            <div className="p-5 rounded-[28px] border-2 border-dashed border-slate-200 hover:border-primary/40 hover:bg-primary/[0.02] transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-slate-100 group-hover:bg-primary/10 group-hover:text-primary transition-colors flex items-center justify-center">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <span className="text-sm font-black text-slate-900 uppercase tracking-tight block">Full Analytics</span>
                  <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">View history</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        </div>
      </div>

      {/* Футер з великою кнопкою */}
      <div className="p-6 pb-8 border-t border-slate-100 bg-white/80 backdrop-blur-md">
        <Button className="w-full cursor-pointer h-16 rounded-[24px] text-xl font-black bg-slate-950 hover:bg-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all active:scale-[0.98] uppercase tracking-tight">
          {/* {t('Common.mark_taken')} */}
          Прийнято
        </Button>
        <p className="text-center mt-4 flex items-center justify-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
          <History size={12} />
          <span>Last taken: Yesterday, 10:02 AM</span>
        </p>
      </div>
    </SheetContent>
  );
}