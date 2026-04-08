import { Check, X } from "lucide-react";

export const TimePickerOverlay = ({ 
  onConfirm, 
  onClose, 
  customTime, 
  setCustomTime 
}: { 
  onConfirm: (time?: string) => void; 
  onClose: () => void; 
  customTime: string; 
  setCustomTime: (t: string) => void 
}) => (
  <div className="absolute inset-0 z-20 bg-white border border-slate-200 rounded-2xl p-2 flex items-center gap-2 shadow-xl animate-in fade-in zoom-in-95 duration-200">
    <button 
      onClick={() => onConfirm()} 
      className="flex-[1.5] h-full bg-slate-900 text-white text-[12px] font-bold rounded-xl active:scale-95 transition-transform"
    >
      Зараз
    </button>
    <div className="flex-[2] h-full flex items-center px-3 bg-slate-50 rounded-xl border border-transparent focus-within:border-slate-200 transition-all">
      <input 
        type="time" 
        className="bg-transparent w-full outline-none text-[13px] font-semibold text-slate-700" 
        value={customTime} 
        onChange={(e) => setCustomTime(e.target.value)} 
      />
      <button onClick={() => onConfirm(customTime)} className="ml-1 text-emerald-600 hover:scale-110 transition-transform">
        <Check size={18} strokeWidth={3} />
      </button>
    </div>
    <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
      <X size={20} />
    </button>
  </div>
);
