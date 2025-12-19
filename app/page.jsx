import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 to-blue-900 text-white">
      <h1 className="text-5xl font-bold text-cyan-400 mb-4">
        BlueTutor
      </h1>

      <p className="max-w-xl mb-8 text-gray-300">
        A simple educational web application that teaches marine life
        awareness and supports Sustainable Development Goal 14: Life Below Water.
      </p>

      <div className="flex gap-4">
        <Link
          href="/lessons"
          className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition"
        >
          Start Learning
        </Link>

        <Link
          href="/quiz"
          className="bg-indigo-500 px-6 py-3 rounded-xl hover:bg-indigo-600 transition"
        >
          Take Quiz
        </Link>
      </div>
    </section>
  );
}
