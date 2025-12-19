"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function EnergyLesson() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">Renewable Energy</h1>

      <div className="max-w-3xl text-gray-300 space-y-4">
        <p>Renewable energy comes from sources that are naturally replenished, such as sunlight, wind, water, and biomass.</p>
        <p>It reduces greenhouse gas emissions, promotes sustainability, and decreases dependence on fossil fuels.</p>
        <p>Examples include solar panels, wind turbines, hydropower, and geothermal energy.</p>
        <p>Adopting renewable energy is crucial for combating climate change and protecting ecosystems.</p>
      </div>

      <div className="mt-10 flex gap-4">
      <Link
        href="/lessons"
        className="bg-slate-700 px-4 py-2 rounded-xl hover:bg-slate-600 flex items-center gap-2"
      >
        <span className="bg-slate-600 rounded-full p-1.5 flex items-center justify-center">
          <ArrowLeftIcon className="w-5 h-5 text-white" />
        </span>
       </Link>
        <Link
          href="/"
          className="bg-slate-700 px-4 py-2 rounded-xl hover:bg-slate-600 flex items-center gap-2"
        >
          <HomeIcon className="w-5 h-5" />
           
        </Link>
      </div>
    </div>
  );
}
