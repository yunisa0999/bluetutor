"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ClimateLesson() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Climate Change</h1>

      <div className="max-w-3xl text-gray-300 space-y-4">
        <p>Climate change refers to long-term changes in temperature, precipitation, and weather patterns on Earth.</p>
        <p>It is caused by natural factors and human activities, especially the emission of greenhouse gases.</p>
        <p>Impacts include rising sea levels, extreme weather events, loss of biodiversity, and threats to human health.</p>
        <p>Mitigation involves reducing emissions, renewable energy adoption, reforestation, and sustainable practices.</p>
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
