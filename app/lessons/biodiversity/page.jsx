"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function EnergyLesson() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex justify-center">
      <div className="max-w-3xl bg-slate-800 p-8 rounded-2xl shadow-lg overflow-y-auto h-[90vh]">
        <h1 className="text-4xl font-bold text-purple-400 mb-8 text-center">
          Renewable Energy
        </h1>

        <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
           <p>
            Renewable energy comes from sources that are naturally replenished, such as sunlight, wind, water, and biomass. It is a clean alternative to fossil fuels and helps reduce greenhouse gas emissions.
          </p>
          <p>
            Transitioning to renewable energy is crucial for mitigating climate change, protecting ecosystems, and ensuring sustainable development.
          </p>

           <h2 className="text-2xl font-semibold text-purple-300 mt-6 mb-4">Why Renewable Energy Matters</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Reduces greenhouse gas emissions and air pollution.</li>
            <li>Promotes sustainable economic growth and job creation.</li>
            <li>Decreases dependence on finite fossil fuels.</li>
            <li>Supports energy security and resilience.</li>
            <li>Protects ecosystems and biodiversity.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-purple-300 mt-6 mb-4">Key Challenges</h2>
          <ul className="list-disc list-inside mb-6">
            <li>High initial investment costs for renewable infrastructure.</li>
            <li>Intermittency issues with solar and wind energy.</li>
            <li>Lack of widespread energy storage solutions.</li>
            <li>Insufficient policy incentives in some regions.</li>
            <li>Public awareness and adoption barriers.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-purple-300 mt-6 mb-4">Global Efforts</h2>
          <p className="mb-6">
            Many countries are investing in renewable energy technologies and infrastructure. International organizations promote clean energy through financing, research, and capacity-building initiatives.
          </p>
          <p className="mb-6">
            Examples include solar farms, wind parks, hydropower projects, and smart grid systems that integrate renewable sources efficiently.
          </p>

           <h2 className="text-2xl font-semibold text-purple-300 mt-6 mb-4">How You Can Help</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Use energy efficient appliances and lighting.</li>
            <li>Support renewable energy projects in your community.</li>
            <li>Advocate for renewable energy policies and incentives.</li>
            <li>Reduce energy consumption in daily life.</li>
            <li>Educate others about the benefits of renewable energy.</li>
          </ul>

          <p>
            Small actions collectively help transition to a cleaner, sustainable energy future.
          </p>
        </div>

         <div className="mt-10 flex gap-4 justify-center">
          <Link
            href="/lessons"
            className="bg-slate-700 px-6 py-2 rounded-xl hover:bg-slate-600 flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-5 h-5 text-white" />
          </Link>

          <Link
            href="/"
            className="bg-slate-700 px-6 py-2 rounded-xl hover:bg-slate-600 flex items-center gap-2"
          >
            <HomeIcon className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
