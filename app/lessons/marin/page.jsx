"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function MarineLesson() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">Marine Life</h1>

      <div className="max-w-3xl text-gray-300 space-y-4">
        <p>Marine life refers to the plants, animals, and other organisms that live in saltwater environments such as oceans and seas.</p>
        <p>Coral reefs, fish, marine mammals, and plankton are all examples of marine life.</p>
        <p>Protecting marine ecosystems is crucial for maintaining biodiversity, climate regulation, and human livelihoods.</p>
        <p>Threats include overfishing, habitat destruction, and ocean pollution.</p>
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
