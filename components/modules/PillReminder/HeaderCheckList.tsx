import { Button } from "@/components/ui/button";

type PropsType = {
    onClick: (tab: "yesterday" | "today" | "tomorrow") => void;
    selectedTab: "yesterday" | "today" | "tomorrow";
}

const tabs = ["yesterday", "today", "tomorrow"] as const;

export function HeaderCheckList({ onClick, selectedTab }: PropsType) {
    return (
        <nav className="p-4 flex gap-1">
            {tabs.map((tab) => (
            <Button
                key={tab}
                variant='outline'
                onClick={() => onClick(tab)}
                className={`flex-1 py-2 text-[11px] font-bold rounded-md transition-all text-slate-600 cursor-pointer border
                ${selectedTab === tab && 'bg-white shadow-md text-emerald-600'}`}
            >
                {tab === "yesterday" ? "Yesterday" : tab === "today" ? "Today" : "Tomorrow"}
            </Button>
            ))}
      </nav>
    )
}