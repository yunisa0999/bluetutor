"use client";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function LessonsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-blue-900 text-white py-16 px-4">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">Learning Modules</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
         <Link
          href="/lessons/marin"
          className="bg-blue-800 hover:bg-blue-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Marine Life</h2>
          <p className="text-gray-300">Learn about different marine animals and their ecosystems.</p>
        </Link>

         <Link
          href="/lessons/ocean"
          className="bg-green-800 hover:bg-green-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Ocean Pollution</h2>
          <p className="text-gray-300">Understand how pollution affects oceans and marine life.</p>
        </Link>

         <Link
          href="/lessons/coral"
          className="bg-blue-800 hover:bg-blue-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Coral Reefs</h2>
          <p className="text-gray-300">Discover the importance of coral reefs and their ecosystems.</p>
        </Link>

         <Link
          href="/lessons/climate"
          className="bg-green-800 hover:bg-green-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Climate Change</h2>
          <p className="text-gray-300">Learn about climate change and its impacts on the planet.</p>
        </Link>

         <Link
          href="/lessons/energy"
          className="bg-blue-800 hover:bg-blue-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Renewable Energy</h2>
          <p className="text-gray-300">Explore sustainable energy sources and their benefits.</p>
        </Link>

         <Link
          href="/lessons/biodiversity"
          className="bg-green-800 hover:bg-green-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Biodiversity</h2>
          <p className="text-gray-300">Understand ecosystems, species diversity, and conservation.</p>
        </Link>

         <Link
          href="/lessons/sdg14"
          className="bg-blue-800 hover:bg-blue-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"

          >
          <h2 className="text-2xl font-semibold mb-2 text-white">SDG #14: Life Below Water</h2>
          <p className="text-gray-300">
            Learn about Sustainable Development Goal 14 and efforts to conserve and sustainably use oceans, seas, and marine resources.
          </p>
        </Link>
      </div>

       <Link
        href="/"
        className="mt-10 bg-slate-700 px-6 py-3 rounded-xl hover:bg-slate-600 transition flex items-center gap-2"
      >
        <HomeIcon className="w-5 h-5" />
      </Link>
    </div>
  );
}
