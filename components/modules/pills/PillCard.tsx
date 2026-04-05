import {Sheet,SheetTrigger} from "@/components/ui/sheet";
import { PillSidebar } from "./PillSidebar";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function PillCard({ name, imageUrl, tags, isTaken, id }: any) {
  const t = useTranslations();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="group cursor-pointer bg-white border border-slate-100 rounded-[24px] p-5 transition-all hover:shadow-xl hover:-translate-y-1 w-full max-w-[320px]">
           <Image src={imageUrl} alt={name} className="mx-auto mb-4 object-contain" height='80' width='80'/>
           <h3 className="text-lg text-center font-bold text-slate-900">{name}</h3>
        </div>
      </SheetTrigger>

      <PillSidebar pill={{ name, imageUrl, tags }} t={t} />
    </Sheet>
  );
}