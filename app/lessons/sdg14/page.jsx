"use client";
import Link from "next/link";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function SDG14Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-6 flex justify-center">
      <div className="max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-lg overflow-y-auto h-[90vh]">

        <h1 className="text-4xl font-bold text-cyan-300 mb-8 text-center">
          SDG #14: Life Below Water
        </h1>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Sustainable Development Goal 14 (SDG 14) focuses on conserving and sustainably using oceans, seas, and marine resources. Oceans cover over 70% of Earth’s surface, produce more than half of the world’s oxygen, and are home to millions of marine species including fish, whales, turtles, and coral reefs.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Oceans are vital for human survival: they regulate climate, provide food, support livelihoods, and offer recreational and cultural benefits. Protecting marine ecosystems is essential for biodiversity and sustainable development.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-8 mb-4">Why SDG 14 Matters</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Marine ecosystems provide critical habitats for over 230,000 known species, and possibly millions more undiscovered. Coral reefs alone support approximately 25% of all marine life. Healthy oceans absorb carbon dioxide and help mitigate climate change.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Fisheries provide livelihoods for over 60 million people globally, and billions rely on seafood as a primary source of protein. Ocean tourism contributes significantly to economies, especially in coastal communities.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">Key Challenges</h2>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
          <li>Overfishing and illegal fishing practices reducing fish populations by 30% in many regions.</li>
          <li>Plastic pollution: over 8 million tons of plastic enter oceans yearly, harming marine species.</li>
          <li>Climate change increasing ocean temperatures and acidification, affecting coral reefs and marine biodiversity.</li>
          <li>Destruction of critical habitats like mangroves and seagrass beds.</li>
          <li>Invasive species disrupting local marine ecosystems.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">SDG 14 Targets</h2>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
          <li>Prevent and significantly reduce marine pollution by 2025.</li>
          <li>Protect and restore marine and coastal ecosystems.</li>
          <li>Minimize the impacts of ocean acidification.</li>
          <li>End overfishing and unsustainable fishing practices.</li>
          <li>Increase scientific knowledge, research, and marine technology.</li>
          <li>Provide access for small-scale fishers to resources and markets.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">Examples of Marine Life & Habitats</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Marine life includes fish like tuna and sardines, mammals such as whales and dolphins, sea turtles, and various coral species. Coral reefs, mangroves, and seagrass beds are vital habitats that protect coasts from erosion and provide shelter for marine species.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">Current Global Efforts</h2>
        <p className="text-lg leading-relaxed mb-6 text-justify">
          Global initiatives include the United Nations Decade of Ocean Science (2021–2030), Marine Protected Areas (MPAs), sustainable fisheries management, and programs by NGOs like WWF and Oceana. These efforts aim to restore marine biodiversity, reduce pollution, and support sustainable use of ocean resources.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Community programs such as beach clean-ups, mangrove planting, and citizen science projects help local populations contribute to marine conservation.
        </p>

        <h2 className="text-2xl font-semibold text-cyan-300 mt-6 mb-4">How You Can Help</h2>
        <ul className="list-disc list-inside mb-6 text-lg leading-relaxed">
          <li>Reduce single use plastics and recycle responsibly.</li>
          <li>Support sustainable seafood and local fisheries.</li>
          <li>Join or organize beach clean-ups and marine conservation projects.</li>
          <li>Educate others about ocean health and SDG 14.</li>
          <li>Advocate for policies protecting marine ecosystems.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-6 text-justify">
          Every action, big or small, contributes to healthier oceans and a sustainable future for all life on Earth.
        </p>

         <div className="mt-10 flex gap-4">
          <Link
            href="/lessons"
            className="bg-slate-700 px-4 py-2 rounded-xl hover:bg-slate-600 flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-5 h-5 text-white" />
            <span className="text-white font-medium"></span>
          </Link>

          <Link
            href="/"
            className="bg-slate-700 px-4 py-2 rounded-xl hover:bg-slate-600 flex items-center gap-2"
          >
            <HomeIcon className="w-5 h-5 text-white" />
            <span className="text-white font-medium"></span>
          </Link>
        </div>

      </div>  
    </div>  
  );
}
