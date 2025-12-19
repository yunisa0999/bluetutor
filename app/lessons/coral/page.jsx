"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function CoralLesson() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex justify-center">
      <div className="max-w-3xl bg-slate-800 p-8 rounded-2xl shadow-lg overflow-y-auto h-[90vh]">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Coral Reefs
        </h1>

        <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
           <p>
            Coral reefs are diverse underwater ecosystems held together by calcium carbonate structures secreted by corals. Often referred to as the "rainforests of the sea," coral reefs support a vast array of marine life.
          </p>
          <p>
            They provide habitat for thousands of species, protect coastlines from erosion, and support fisheries and tourism industries worldwide.
          </p>

           <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">Importance of Coral Reefs</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Provide food and shelter for marine organisms.</li>
            <li>Protect coastal communities by reducing wave energy.</li>
            <li>Support fisheries and livelihoods for millions of people.</li>
            <li>Boost tourism through recreational diving and snorkeling.</li>
            <li>Contribute to biodiversity and global ecosystem health.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">Threats</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Climate change causing coral bleaching due to rising ocean temperatures.</li>
            <li>Ocean acidification weakening coral skeletons.</li>
            <li>Overfishing disrupting marine food webs.</li>
            <li>Pollution from plastics, chemicals, and sewage harming reef ecosystems.</li>
            <li>Coastal development destroying habitats and increasing sedimentation.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">Conservation Efforts</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Establishing Marine Protected Areas (MPAs).</li>
            <li>Coral restoration and reef rehabilitation programs.</li>
            <li>Reducing overfishing and promoting sustainable fishing practices.</li>
            <li>Reducing pollution and minimizing human impacts on reefs.</li>
            <li>Raising public awareness about the importance of coral ecosystems.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">How You Can Help</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Participate in beach clean-ups and reef conservation programs.</li>
            <li>Support sustainable seafood and local fisheries.</li>
            <li>Reduce carbon footprint and help fight climate change.</li>
            <li>Educate others about the importance of coral reefs.</li>
            <li>Advocate for marine protection policies in your community.</li>
          </ul>

          <p>
            By taking action, we can protect coral reefs for future generations and maintain the biodiversity and health of our oceans.
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
