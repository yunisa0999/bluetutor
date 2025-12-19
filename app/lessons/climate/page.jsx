"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ClimateLesson() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex justify-center">
      <div className="max-w-3xl bg-slate-800 p-8 rounded-2xl shadow-lg overflow-y-auto h-[90vh]">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
          Climate Change
        </h1>

        <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
           <p>
            Climate change refers to long-term alterations in temperature, precipitation, and weather patterns on Earth. It results from natural processes and human activities, especially the emission of greenhouse gases like carbon dioxide and methane.
          </p>
          <p>
            Its impacts are global and affect ecosystems, communities, and economies. Understanding and addressing climate change is essential for sustainable development and human well-being.
          </p>

           <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-4">Why Climate Change Matters</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Rising sea levels threaten coastal communities and habitats.</li>
            <li>Extreme weather events—storms, floods, and droughts—disrupt lives and economies.</li>
            <li>Climate change leads to biodiversity loss and ecosystem degradation.</li>
            <li>Affects food security and water availability worldwide.</li>
            <li>Impacts human health through heatwaves, disease spread, and food shortages.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-4">Key Challenges</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Rising greenhouse gas emissions from energy, transport, and industry.</li>
            <li>Deforestation and land-use changes reducing carbon sinks.</li>
            <li>Unsustainable agricultural and industrial practices.</li>
            <li>Lack of global coordination and policy enforcement.</li>
            <li>Climate change exacerbates social and economic inequalities.</li>
          </ul>

           <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-4">Global Efforts</h2>
          <p className="mb-6">
            International initiatives like the Paris Agreement aim to limit global warming to well below 2°C. Countries are implementing renewable energy, reforestation, and sustainable development policies to reduce emissions.
          </p>
          <p className="mb-6">
            Organizations, NGOs, and local communities are also taking action through climate education, clean energy projects, and climate adaptation programs.
          </p>

           <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-4">How You Can Help</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Reduce energy consumption and switch to renewable energy sources.</li>
            <li>Plant trees and support reforestation initiatives.</li>
            <li>Use sustainable transport: walk, bike, or use public transport.</li>
            <li>Advocate for climate policies and raise awareness in your community.</li>
            <li>Support sustainable products and reduce waste.</li>
          </ul>

          <p>
            Collective action is essential—every small step contributes to mitigating climate change and protecting our planet for future generations.
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
