import { PillCard } from "@/components/modules/pills/PillCard";
import vitamins from "@/mockData/pills";

export default function PillsPage() {
  const sortedVitamins = [...vitamins].sort((a, b) => Number(a.isTaken) - Number(b.isTaken));

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-12 px-4">
      <div className="max-w-[1440px] mx-auto">
        
        <header className="mb-10 px-2">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            My Daily Vitamins
          </h1>
          <p className="text-slate-500 mt-1 font-medium">
            Manage your supplements and health routine
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          2xl:grid-cols-5 
          justify-items-center">
          
          {sortedVitamins.map((vitamin) => (
            <PillCard 
              key={vitamin.id} 
              id={vitamin.id}
              imageUrl={vitamin.imgUrl} 
              name={vitamin.name} 
              tags={vitamin.tags} 
              isTaken={vitamin.isTaken} 
            />
          ))}
        </section>

        {sortedVitamins.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
            <p className="text-slate-400 font-medium text-lg">No vitamins added yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}