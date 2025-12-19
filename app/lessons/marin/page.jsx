"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function MarineLesson() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex justify-center">
      <div className="max-w-3xl bg-slate-800 p-8 rounded-2xl shadow-lg overflow-y-auto h-[90vh]">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Marine Life
        </h1>

        <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
           <p>
            Marine life refers to the plants, animals, and other organisms that live in saltwater environments such as oceans, seas, and coral reefs. Oceans cover over 70% of Earth’s surface and are essential for life, producing more than half of the world’s oxygen.
          </p>
          <p>
            Coral reefs, fish, marine mammals, and plankton are just a few examples of marine organisms. Protecting these ecosystems is crucial for maintaining biodiversity, regulating climate, and supporting human livelihoods.
          </p>

           <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">Why Marine Life Matters</h2>
          <p>
            Oceans and marine ecosystems regulate climate, provide food, support livelihoods, and sustain cultural and recreational activities. Coral reefs alone support 25% of all marine species. Fisheries provide livelihoods for millions, and ocean biodiversity maintains ecosystem balance.
          </p>

           <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">Key Threats</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Overfishing and illegal fishing practices reducing fish populations.</li>
            <li>Plastic pollution and chemical waste harming marine species.</li>
            <li>Habitat destruction: coral reefs, mangroves, and seagrass beds.</li>
            <li>Climate change: warming oceans, acidification, and rising sea levels.</li>
            <li>Invasive species affecting local ecosystems.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">SDG 14 Targets</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Reduce marine pollution by 2025.</li>
            <li>Protect and restore marine and coastal ecosystems.</li>
            <li>Minimize the impacts of ocean acidification.</li>
            <li>End overfishing and unsustainable fishing practices.</li>
            <li>Increase scientific research and marine technology development.</li>
            <li>Support small-scale fishers with resources and market access.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">How You Can Help</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Reduce single use plastics and recycle responsibly.</li>
            <li>Support sustainable seafood and local fisheries.</li>
            <li>Participate in beach clean-ups and conservation projects.</li>
            <li>Educate others about ocean health and SDG 14.</li>
            <li>Advocate for policies protecting marine ecosystems.</li>
          </ul>
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
