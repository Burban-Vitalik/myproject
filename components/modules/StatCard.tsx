'use client';
import { GlassWaterIcon, Plus } from "lucide-react";

const STAT = {
  label: "Hydration",
  current: 2.8,
  target: 3.0,
  unit: "L",
  color: "#3b82f6",
};

export function StatCard() {
  const progress = Math.min((STAT.current / STAT.target) * 100, 100);

  return (
    <div className="group relative w-full max-w-[240px] p-4 bg-white border border-slate-100 rounded-2xl 
                    shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer active:scale-[0.98]">
      
      {/* Quick Action Button - Appears on Hover */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevents clicking the whole card
          console.log("Quick add water");
        }}
        className="absolute -top-2 -right-2 p-1.5 bg-blue-600 text-white rounded-full shadow-lg 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-blue-700 z-10"
      >
        <Plus size={14} strokeWidth={3} />
      </button>

      <div className="flex items-center gap-3">
        {/* Icon with subtle pulse on hover */}
        <div 
          className="flex-shrink-0 p-2 rounded-xl transition-colors duration-200 group-hover:bg-blue-100" 
          style={{ backgroundColor: `${STAT.color}10` }}
        >
          <GlassWaterIcon size={18} color={STAT.color} className="group-hover:scale-110 transition-transform" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">
            {STAT.label}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-slate-900">{STAT.current}</span>
            <span className="text-xs font-medium text-slate-400">{STAT.unit}</span>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mt-3">
        <div className="flex justify-between mb-1.5 text-[10px]">
          <span className="font-bold text-slate-600">{progress.toFixed(0)}%</span>
          <span className="text-slate-400">Goal: {STAT.target}{STAT.unit}</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-700 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
    </div>
  );
}