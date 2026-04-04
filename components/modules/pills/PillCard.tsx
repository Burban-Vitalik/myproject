import Image from 'next/image';
import React from 'react';

interface PillCardProps {
  id: number;
  name: string;
  tags?: string[];
  imageUrl?: string;
  isTaken: boolean;
}

export function PillCard({ name, tags, imageUrl, isTaken }: PillCardProps) {
  return (
    <div 
      className={`p-5 w-full w-[340px] h-[140px] flex rounded-xl shadow-sm font-sans bg-white items-center gap-4 border transition-all duration-300 relative overflow-hidden
        ${isTaken 
          ? "bg-gray-50 border-gray-200 opacity-60 grayscale" 
          : "border-slate-100 cursor-pointer hover:shadow-md hover:border-slate-300"}`}
    >
      {isTaken && (
        <div className="absolute top-2 right-2 bg-gray-400 text-white text-[8px] px-1.5 py-0.5 rounded-full uppercase font-bold">
          Finished
        </div>
      )}

      <div className="shrink-0 w-20 h-20 flex items-center justify-center bg-slate-50 rounded-lg p-2">
        <Image 
          width={64} 
          height={64} 
          alt={name} 
          src={imageUrl || 'https://vitaminka.com.ua/files/resized/products/17586.1800x1800w.jpg'}
          className="rounded-md object-contain mix-blend-multiply"
        />
      </div>

      <div className="flex flex-col justify-between h-full py-1 overflow-hidden">
        <div>
          <h2 className="text-lg font-bold text-gray-800 leading-tight line-clamp-1">
            {name}
          </h2>
          <p className="text-[11px] text-gray-500 mt-1 font-medium italic">
            2 tablets / day
          </p>
        </div>

        <div className="flex flex-wrap gap-1 mt-auto">
          {tags?.map((tag, index) => (
            <Tag key={index} color={isTaken ? "gray" : "orange"}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tag({ children, color }: { children: React.ReactNode; color: string }) {
  const colorClasses: Record<string, string> = {
    orange: "bg-orange-50 text-orange-600 border-orange-100",
    gray: "bg-gray-100 text-gray-500 border-gray-200",
  };

  return (
    <span className={`px-2 py-0.5 border rounded-md text-[9px] font-bold tracking-wide uppercase ${colorClasses[color]}`}>
      {children}
    </span>
  );
}