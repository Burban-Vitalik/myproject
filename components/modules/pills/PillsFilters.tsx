import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

interface PillsFiltersProps {
  onTabChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export function PillsFilters({ onTabChange, onSortChange }: PillsFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <Tabs defaultValue="all" onValueChange={onTabChange} className="w-full sm:w-auto">
        <TabsList className="grid grid-cols-4 w-full sm:w-[400px]">
          <TabsTrigger value="all">Всі</TabsTrigger>
          <TabsTrigger value="morning">Ранок</TabsTrigger>
          <TabsTrigger value="day">День</TabsTrigger>
          <TabsTrigger value="evening">Вечір</TabsTrigger>
        </TabsList>
      </Tabs>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 border-slate-200 text-slate-600">
            <ListFilter size={16} />
            Сортування
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => onSortChange("default")}>За замовчуванням</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("name")}>За назвою (А-Я)</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("status")}>Спочатку невипиті</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}