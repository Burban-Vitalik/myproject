import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pill } from "lucide-react";
import LocaleSwitcher from "@/shared/ui/LocaleSwitcher";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto w-full md:w-[95%] lg:w-[90%] h-16 px-4 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="bg-primary/10 p-2 rounded-xl">
            <Pill className="text-primary h-6 w-6" />
          </div>
          <span className="font-black text-xl tracking-tight text-slate-900 hidden sm:block">
            PillTrack
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <LocaleSwitcher />
          
          <Button 
            variant="ghost" 
            className="text-slate-600 font-medium hover:text-primary hover:bg-primary/5 hidden sm:flex"
          >
            My Plan
          </Button>

          <Button className="rounded-full px-6 shadow-sm hover:shadow-md transition-all">
            Add New
          </Button>
        </div>

      </div>
    </header>
  );
}