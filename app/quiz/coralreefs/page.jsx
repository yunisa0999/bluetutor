"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowPathIcon, HomeIcon } from "@heroicons/react/24/solid";

const questions = [
  {
    question: "What are coral reefs also called?",
    options: ["Ocean deserts", "Rainforests of the sea", "Sea rocks"],
    answer: "Rainforests of the sea"
  },
  {
    question: "Why are coral reefs important?",
    options: ["Provide habitat","Cause pollution","Destroy fish"],
    answer: "Provide habitat"
  },
  {
    question: "Which human activity harms coral reefs?",
    options: ["Overfishing","Planting trees","Cleaning beaches"],
    answer: "Overfishing"
  },
  {
    question: "What is coral made of?",
    options: ["Calcium carbonate", "Sand", "Algae"],
    answer: "Calcium carbonate"
  },
  {
    question: "Which type of animal builds coral reefs?",
    options: ["Coral polyps", "Fish", "Crabs"],
    answer: "Coral polyps"
  },
  {
    question: "Which marine species depends on coral reefs?",
    options: ["Clownfish", "Seagulls", "Penguins"],
    answer: "Clownfish"
  },
  {
    question: "What causes coral bleaching?",
    options: ["Warmer water temperatures", "Saltwater", "Low oxygen"],
    answer: "Warmer water temperatures"
  },
  {
    question: "Which is a direct threat to coral reefs?",
    options: ["Plastic pollution", "Sea turtles", "Seagrass beds"],
    answer: "Plastic pollution"
  },
  {
    question: "Coral reefs cover approximately how much of the ocean floor?",
    options: ["Less than 1%", "10%", "25%"],
    answer: "Less than 1%"
  },
  {
    question: "Which type of coral grows fastest?",
    options: ["Branching coral", "Massive coral", "Encrusting coral"],
    answer: "Branching coral"
  },
  {
    question: "Why are coral reefs called the 'rainforests of the sea'?",
    options: ["High biodiversity", "They are tall", "They produce oxygen"],
    answer: "High biodiversity"
  },
  {
    question: "Which practice helps protect coral reefs?",
    options: ["Sustainable fishing", "Overfishing", "Dumping waste"],
    answer: "Sustainable fishing"
  },
  {
    question: "Which ocean has the largest coral reef system?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "How do corals get their energy?",
    options: ["From symbiotic algae", "From plankton", "From sunlight directly"],
    answer: "From symbiotic algae"
  },
  {
    question: "What is a major global threat to coral reefs?",
    options: ["Climate change", "Mangroves", "Seagrass beds"],
    answer: "Climate change"
  }
];

export default function CoralReefsQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setFinished(true);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white">
        <h1 className="text-4xl text-cyan-400 mb-4">Quiz Completed</h1>
        <p className="text-xl mb-6">
          Your Score: <span className="text-cyan-400 font-bold">{score}</span> / {questions.length}
        </p>
        <div className="flex gap-6">
          <button
            onClick={restartQuiz}
            className="bg-cyan-500 p-4 rounded-full hover:bg-cyan-600 transition flex items-center justify-center"
          >
            <ArrowPathIcon className="w-6 h-6 text-white" />
          </button>
          <Link
            href="/quiz"
            className="bg-slate-700 p-4 rounded-full hover:bg-slate-600 transition flex items-center justify-center"
          >
            <HomeIcon className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900 text-white px-4">
      <div className="bg-slate-800 p-8 rounded-xl max-w-xl w-full">
        <p className="text-sm text-gray-400 mb-2">
          Question {current + 1} of {questions.length}
        </p>
        <h2 className="text-xl mb-6">{questions[current].question}</h2>
        <div className="flex flex-col gap-4">
          {questions[current].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className="bg-slate-700 hover:bg-cyan-500 p-3 rounded transition"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
