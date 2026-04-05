import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import { useTranslations } from "next-intl";

const TAB_OPTIONS = ["all", "morning", "day", "evening"] as const;
const SORT_OPTIONS = ["default", "name", "status"] as const;

interface PillsFiltersProps {
  onTabChange: (value: string) => void;
  onSortChange: (value: string) => void;
  defaultValue?: string;
}

export function PillsFilters({ onTabChange, onSortChange, defaultValue = "all" }: PillsFiltersProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <Tabs 
        defaultValue={defaultValue} 
        onValueChange={onTabChange} 
        className="w-full sm:w-auto"
      >
        <TabsList className="grid grid-cols-4 w-full sm:w-[400px]">
          {TAB_OPTIONS.map((tab) => (
            <TabsTrigger key={tab} value={tab} className="cursor-pointer">
              {t(`Filtration.pills.${tab}`)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 border-slate-200 text-slate-600">
            <ListFilter size={16} />
            {t('Sorting.sorting')}
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent align="end" className="w-48">
          {SORT_OPTIONS.map((option) => (
            <DropdownMenuItem 
              key={option} 
              onClick={() => onSortChange(option)}
            >
              {t(`Sorting.by_${option}`)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}