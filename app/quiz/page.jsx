import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function QuizSelection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white py-16 px-4">
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
         <Link
          href="/quiz/marinelife"
          className="bg-blue-800 hover:bg-blue-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Marine Life Quiz</h2>
          <p className="text-gray-300">Test your knowledge about marine animals.</p>
        </Link>

         <Link
          href="/quiz/oceanpollution"
          className="bg-green-800 hover:bg-green-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Ocean Pollution Quiz</h2>
          <p className="text-gray-300">Learn how pollution affects marine life.</p>
        </Link>

         <Link
          href="/quiz/coralreefs"
          className="bg-blue-800 hover:bg-blue-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"

        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Coral Reefs Quiz</h2>
          <p className="text-gray-300">Understand coral ecosystems and their importance.</p>
        </Link>

         <Link
          href="/quiz/climatechange"
           className="bg-green-800 hover:bg-green-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
        >
          <h2 className="text-2xl font-semibold mb-2 text-white">Climate Change Quiz</h2>
          <p className="text-gray-300">Test your knowledge about climate change effects.</p>
        </Link>

         <Link
          href="/quiz/renewableenergy"
          className="bg-blue-800 hover:bg-blue-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
>
          <h2 className="text-2xl font-semibold mb-2 text-white">Sustainable Energy Quiz</h2>
          <p className="text-gray-300">Learn about renewable energy sources and sustainability.</p>
        </Link>

         <Link
          href="/quiz/biodiversity"
           className="bg-green-800 hover:bg-green-700 p-6 rounded-2xl shadow-lg flex flex-col items-start transition"
>
          <h2 className="text-2xl font-semibold mb-2 text-white">Biodiversity Quiz</h2>
          <p className="text-gray-300">Test your knowledge on ecosystems and species diversity.</p>
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
