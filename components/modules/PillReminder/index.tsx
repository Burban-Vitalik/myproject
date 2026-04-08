"use client";

import { useState, useMemo } from "react";
import {  Clock } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import { Pill } from "./pill";
import { TimePickerOverlay } from "./TimePickerOverlay";
import { PillCard } from "./PillCard";
import { HeaderCheckList } from "./HeaderCheckList";

const TIME_SLOTS = [
  { id: "morning", label: "Ранок (06:00 - 12:00)" },
  { id: "evening", label: "Вечір (18:00 - 22:00)" }
];

export function PillWidget() {
  const [selectedTab, setSelectedTab] = useState<"yesterday" | "today" | "tomorrow">("today");
  const [activePicker, setActivePicker] = useState<number | null>(null);
  const [customTime, setCustomTime] = useState("");

  const [pills, setPills] = useState<Pill[]>([
    { id: 1, name: "D3 + K2", slot: "morning", color: "#fbbf24", status: "done", takenAt: "09:05" },
    { id: 2, name: "Vitamin C", slot: "morning", color: "#f97316", status: "pending", takenAt: null },
    { id: 3, name: "Zinc", slot: "evening", color: "#38bdf8", status: "pending", takenAt: null },
    { id: 4, name: "Magnesium", slot: "evening", color: "#a855f7", status: "pending", takenAt: null },
    { id: 5, name: "Omega 3", slot: "morning", color: "#ec4899", status: "pending", takenAt: null },
  ]);

  const stats = useMemo(() => ({
    total: pills.length,
    processed: pills.filter(p => p.status !== "pending").length
  }), [pills]);

  const updateStatus = (id: number, newStatus: Pill["status"], time?: string) => {
    const finalTime = time || new Date().toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    setPills(prev => prev.map(p => 
      p.id === id ? { ...p, status: newStatus, takenAt: newStatus === "done" ? finalTime : null } : p
    ));
    setActivePicker(null);
  };

  return (
    <div className="w-full max-w-[320px] bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col overflow-hidden font-sans">
      <HeaderCheckList
        selectedTab={selectedTab} 
        onClick={(tab) => { setSelectedTab(tab); setActivePicker(null); }} 
      />
    
      <div className="flex-1 px-4 py-2 custom-scrollbar overflow-y-auto max-h-[400px]">
        {TIME_SLOTS.map((slot) => (
          <div key={slot.id} className="mt-6 first:mt-2">
            <div className="flex items-center gap-2 mb-3 px-1 text-slate-400 border-b border-slate-400 pb-1">
              <Clock size={12} strokeWidth={2.5} />
              <span className="text-[11px] font-bold uppercase tracking-wider">{slot.label}</span>
            </div>

            <div className="space-y-2">
              {pills.filter(p => p.slot === slot.id).map((pill) => (
                <div key={pill.id} className="relative">
                  <PillCard
                    pill={pill}
                    isActive={activePicker === pill.id}
                    selectedTab={selectedTab}
                    onStatusUpdate={updateStatus}
                    onOpenPicker={setActivePicker}
                  />

                  {activePicker === pill.id && (
                    <TimePickerOverlay 
                      customTime={customTime}
                      setCustomTime={setCustomTime}
                      onConfirm={(time) => updateStatus(pill.id, "done", time)}
                      onClose={() => setActivePicker(null)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProgressBar processed={stats.processed} total={stats.total} />

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
}