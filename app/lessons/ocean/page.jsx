"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function SDG14Lesson() {
  return (
    <div className="min-h-screen bg-teal-900 text-white px-6 py-12 flex flex-col items-center">
      
       <h1 className="text-4xl font-bold text-cyan-400 mb-6">SDG #14: Life Below Water</h1>

       <div className="max-w-3xl text-gray-200 space-y-4">
        <p>
          SDG #14 aims to conserve and sustainably use the oceans, seas, and marine resources for sustainable development. Oceans are essential for life on Earth—they produce over half of the world's oxygen and are home to millions of species.
        </p>
        <p>
          Protecting marine ecosystems helps combat climate change, supports biodiversity, and ensures sustainable livelihoods for communities that rely on oceans.
        </p>
        <p>
          Major threats to oceans include plastic pollution, overfishing, coral reef destruction, and ocean acidification.
        </p>
        <p>
          Efforts to achieve SDG #14 include promoting sustainable fishing, reducing marine pollution, protecting marine habitats, and raising awareness about ocean conservation.
        </p>
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
