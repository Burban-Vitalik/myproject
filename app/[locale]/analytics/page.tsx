import React from 'react';
import { BarChart3, Calendar, CheckCircle2, Flame, ArrowLeft, Download } from 'lucide-react';

const AnalyticsPage = () => {
  const weeklyProgress = [
    { day: 'Пн', value: 80 },
    { day: 'Вт', value: 100 },
    { day: 'Ср', value: 60 },
    { day: 'Чт', value: 90 },
    { day: 'Пт', value: 100 },
    { day: 'Сб', value: 40 },
    { day: 'Нд', value: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 sm:mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <button className="flex items-center text-slate-500 hover:text-slate-800 transition-colors mb-2 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Назад</span>
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Мій прогрес</h1>
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-50 transition-all text-sm font-medium w-full sm:w-auto">
          <Download className="w-4 h-4" />
          Експорт PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:scale-[1.02]">
            <div className="bg-green-100 p-3 rounded-xl shrink-0">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-slate-500 truncate">Виконання плану</p>
              <p className="text-lg sm:text-xl font-bold text-slate-800">84%</p>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:scale-[1.02]">
            <div className="bg-orange-100 p-3 rounded-xl shrink-0">
              <Flame className="w-6 h-6 text-orange-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-slate-500 truncate">Поточна серія</p>
              <p className="text-lg sm:text-xl font-bold text-slate-800">12 днів</p>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:scale-[1.02] sm:col-span-2 lg:col-span-1">
            <div className="bg-blue-100 p-3 rounded-xl shrink-0">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-slate-500 truncate">Прийомів за місяць</p>
              <p className="text-lg sm:text-xl font-bold text-slate-800">124 / 150</p>
            </div>
          </div>
        </div>

        {/* Charts and Lists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Weekly Chart */}
          <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-500" />
                Активність за тиждень
              </h3>
              <select className="text-sm border border-slate-100 bg-slate-50 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500/20">
                <option>Останні 7 днів</option>
                <option>Останні 30 днів</option>
              </select>
            </div>
            
            <div className="flex items-end justify-between h-48 sm:h-64 pt-4 gap-2">
              {weeklyProgress.map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2 w-full">
                  <div className="w-full max-w-[32px] bg-slate-100 rounded-t-lg relative overflow-hidden h-full flex items-end">
                    <div 
                      className="w-full bg-green-400 transition-all duration-700 ease-out rounded-t-lg"
                      style={{ height: `${item.value}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Vitamins Progress */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-800 mb-6">По препаратах</h3>
            <div className="space-y-6">
              {[
                { name: 'Vitamin D3', progress: 95, color: 'bg-yellow-400' },
                { name: 'Omega 3', progress: 70, color: 'bg-blue-400' },
                { name: 'Zinc', progress: 45, color: 'bg-slate-400' },
              ].map((pill) => (
                <div key={pill.name} className="group">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{pill.name}</span>
                    <span className="text-slate-500 font-semibold">{pill.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`${pill.color} h-full rounded-full transition-all duration-1000 ease-in-out`}
                      style={{ width: `${pill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-3 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
              Переглянути всі
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;