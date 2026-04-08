import { Check, Lock, RotateCcw, X, Minus } from "lucide-react";
import { Pill } from "./pill";

export const PillCard = ({ 
  pill, 
  isActive, 
  selectedTab, 
  onStatusUpdate, 
  onOpenPicker 
}: { 
  pill: Pill; 
  isActive: boolean; 
  selectedTab: string; 
  onStatusUpdate: (id: number, status: Pill["status"]) => void;
  onOpenPicker: (id: number) => void;
}) => {
  const isPending = pill.status === "pending";
  const isDone = pill.status === "done";
  const isSkipped = pill.status === "skipped";
  const isToday = selectedTab === "today";

  // Логіка фону: чіткий поділ станів
  const getCardBg = () => {
    if (!isToday) return "bg-slate-200 border-slate-200"; // Інші дні
    if (isPending) return "bg-white border-slate-400 shadow-sm"; // Треба випити сьогодні
    return `${isDone ? 'bg-emerald-50' : 'bg-red-50'} border-transparent`; // Вже зроблено/пропущено
  };

  return (
    <div 
      className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${getCardBg()} 
        ${isToday && isPending ? 'cursor-pointer hover:border-slate-400' : ''}`}
        onClick={() => isToday && isPending && onOpenPicker(pill.id)}
    >
      <div className="shrink-0 flex items-center justify-center w-6 h-6">
        {isDone ? (
          <Check className="text-emerald-600" size={24} strokeWidth={3} />
        ) : isSkipped ? (
          <X className="text-red-500" size={24} strokeWidth={3} />
        ) : (
          <Minus className="text-slate-300" size={20} strokeWidth={3} />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className={`text-[15px] font-bold leading-tight ${!isPending ? 'text-slate-500' : 'text-slate-900'}`}>
          {pill.name}
        </p>
        
        {isToday && (
          <>
            {isDone && <p className="text-[12px] font-bold text-emerald-700 mt-0.5">Випито: {pill.takenAt}</p>}
            {isSkipped && <p className="text-[12px] font-bold text-red-600 mt-0.5">Пропущено</p>}
          </>
        )}
      </div>
      
      <div className="shrink-0 flex items-center gap-1">
        {isToday && (
          <>
            {isPending ? (
              <div className="flex items-center group/card">
                <button 
                  onClick={(e) => { e.stopPropagation(); onStatusUpdate(pill.id, "skipped"); }}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Пропустити"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
                <div className="p-2 text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <Check size={20} strokeWidth={3} />
                </div>
              </div>
            ) : (
              <button 
                onClick={(e) => { e.stopPropagation(); onStatusUpdate(pill.id, "pending"); }}
                className="p-2.5 cursor-pointer text-slate-600 rounded-xl active:scale-95 transition-all"
                title="Повернути до списку"
              >
                <RotateCcw size={16} strokeWidth={2.5} />
              </button>
            )}
          </>
        )}
        {!isToday && isPending && selectedTab === "yesterday" && (
           <Lock size={16} className="text-slate-300 mr-2" />
        )}
      </div>
    </div>
  );
};