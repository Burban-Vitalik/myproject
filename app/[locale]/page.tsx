import { PillWidget } from "@/components/modules/PillReminder";

export default function Page() {
  return (
    <main className="p-10 w-[90%] mx-auto min-h-screen">
      <div className="flex justify-end h-full">
        <PillWidget/>
      </div>
    </main>
  );
}