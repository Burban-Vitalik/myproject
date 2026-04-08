export const ProgressBar = ({ processed, total }: { processed: number; total: number }) => (
  <div className="p-6 bg-slate-50/30 border-t border-slate-50">
    <div className="flex justify-between items-end mb-3">
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Прогрес дня</p>
      <p className="text-[13px] font-bold text-slate-900">{processed} / {total}</p>
    </div>
    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-green-400 transition-all duration-700 ease-out" 
        style={{ width: `${(processed / total) * 100}%` }} 
      />
    </div>
  </div>
);