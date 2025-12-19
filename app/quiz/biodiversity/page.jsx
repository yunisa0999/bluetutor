"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowPathIcon, HomeIcon } from "@heroicons/react/24/solid";


const questions = [
  {
    question: "What does biodiversity refer to?",
    options: ["Variety of life on Earth", "Only plants", "Only animals"],
    answer: "Variety of life on Earth"
  },
  {
    question: "Which ecosystem has the highest biodiversity?",
    options: ["Rainforests", "Deserts", "Tundra"],
    answer: "Rainforests"
  },
  {
    question: "Why is biodiversity important?",
    options: ["Provides ecosystem services", "Only for recreation", "No importance"],
    answer: "Provides ecosystem services"
  },
  {
    question: "Which human activity reduces biodiversity?",
    options: ["Deforestation", "Planting trees", "Cleaning beaches"],
    answer: "Deforestation"
  },
  {
    question: "Which is an endangered species?",
    options: ["Tiger", "House cat", "Cow"],
    answer: "Tiger"
  },
  {
    question: "What is habitat loss?",
    options: ["Destruction of natural living spaces", "Planting gardens", "Pollinating flowers"],
    answer: "Destruction of natural living spaces"
  },
  {
    question: "Pollution affects biodiversity by:",
    options: ["Killing species and degrading habitats", "Increasing species", "Helping plants grow"],
    answer: "Killing species and degrading habitats"
  },
  {
    question: "Conservation efforts aim to:",
    options: ["Protect species and habitats", "Remove trees", "Pollute rivers"],
    answer: "Protect species and habitats"
  },
  {
    question: "Which group of animals has the greatest number of species?",
    options: ["Insects", "Mammals", "Birds"],
    answer: "Insects"
  },
  {
    question: "Coral reefs contribute to biodiversity because they:",
    options: ["Provide habitat for many species", "Destroy fish", "Block sunlight"],
    answer: "Provide habitat for many species"
  },
  {
    question: "Which human action helps maintain biodiversity?",
    options: ["Reforestation", "Overhunting", "Deforestation"],
    answer: "Reforestation"
  },
  {
    question: "What is genetic diversity?",
    options: ["Variation of genes within species", "Number of species", "Number of ecosystems"],
    answer: "Variation of genes within species"
  },
  {
    question: "Invasive species can:",
    options: ["Harm native species", "Help native species", "Have no effect"],
    answer: "Harm native species"
  },
  {
    question: "Protected areas like national parks:",
    options: ["Conserve biodiversity", "Promote hunting", "Promote deforestation"],
    answer: "Conserve biodiversity"
  },
  {
    question: "Why should we protect biodiversity?",
    options: ["For ecosystem health and human well-being", "For pollution", "For mining"],
    answer: "For ecosystem health and human well-being"
  }
];

export default function BiodiversityQuiz() {
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
