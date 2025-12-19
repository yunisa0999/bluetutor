"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function OceanLesson() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex justify-center">
      <div className="max-w-3xl bg-slate-800 p-8 rounded-2xl shadow-lg overflow-y-auto h-[90vh]">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Ocean Conservation
        </h1>

        <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
          <p>
            Ocean conservation is the practice of protecting and preserving the oceans, seas, and marine life. Oceans cover over 70% of the Earth's surface and are crucial for regulating climate, producing oxygen, and supporting biodiversity.
          </p>
          <p>
            Marine ecosystems include coral reefs, mangroves, seagrass beds, and deep-sea habitats. These provide shelter, food, and breeding grounds for millions of species.
          </p>
          <p>
            Healthy oceans contribute to human well-being by providing food, livelihoods, and recreational opportunities. They also help mitigate climate change by absorbing carbon dioxide and regulating temperatures.
          </p>
          <p>
            Major threats to ocean health include overfishing, plastic pollution, chemical runoff, coral reef destruction, and rising ocean temperatures caused by climate change.
          </p>
          <p>
            Efforts to protect the oceans include establishing marine protected areas, promoting sustainable fishing, reducing pollution, restoring habitats, and increasing scientific research.
          </p>
          <p>
            Everyone can contribute to ocean conservation by reducing single-use plastics, supporting sustainable seafood, participating in beach clean-ups, and spreading awareness about marine sustainability.
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
