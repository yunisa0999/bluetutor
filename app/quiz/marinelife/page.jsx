"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowPathIcon, HomeIcon } from "@heroicons/react/24/solid";

 const allQuestions = [
  {
    question: "What does SDG 14 focus on?",
    options: ["Life on Land", "Life Below Water", "Quality Education"],
    answer: "Life Below Water",
  },
  {
    question: "Which of the following harms marine life?",
    options: ["Plastic waste", "Clean oceans", "Marine sanctuaries"],
    answer: "Plastic waste",
  },
  {
    question: "What animal is commonly affected by plastic straws?",
    options: ["Sea turtles", "Sharks", "Dolphins"],
    answer: "Sea turtles",
  },
  {
    question: "What is overfishing?",
    options: [
      "Catching too many fish",
      "Protecting marine animals",
      "Cleaning oceans",
    ],
    answer: "Catching too many fish",
  },
  {
    question: "Which ecosystem protects coastlines?",
    options: ["Coral reefs", "Deserts", "Mountains"],
    answer: "Coral reefs",
  },
  {
    question: "What causes coral bleaching?",
    options: ["Rising sea temperatures", "Cold water", "Strong winds"],
    answer: "Rising sea temperatures",
  },
  {
    question: "Which action helps protect oceans?",
    options: ["Reducing plastic use", "Throwing trash at sea", "Overfishing"],
    answer: "Reducing plastic use",
  },
  {
    question: "What percentage of Earth is covered by oceans?",
    options: ["70%", "30%", "50%"],
    answer: "70%",
  },
  {
    question: "Which gas causes ocean acidification?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen"],
    answer: "Carbon dioxide",
  },
  {
    question: "Mangroves are important because they:",
    options: [
      "Prevent coastal erosion",
      "Pollute water",
      "Kill marine life",
    ],
    answer: "Prevent coastal erosion",
  },
  {
    question: "What animal lives only in the ocean?",
    options: ["Whale", "Tiger", "Eagle"],
    answer: "Whale",
  },
  {
    question: "Which activity damages coral reefs?",
    options: ["Dynamite fishing", "Snorkeling safely", "Marine protection"],
    answer: "Dynamite fishing",
  },
  {
    question: "Why are oceans important?",
    options: [
      "They regulate climate",
      "They create pollution",
      "They reduce oxygen",
    ],
    answer: "They regulate climate",
  },
  {
    question: "What is marine pollution?",
    options: [
      "Waste entering oceans",
      "Ocean cleaning",
      "Fish protection",
    ],
    answer: "Waste entering oceans",
  },
  {
    question: "Which is a renewable ocean resource?",
    options: ["Fish (managed properly)", "Oil", "Gas"],
    answer: "Fish (managed properly)",
  },
];

 const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function MarineLifeQuiz() {
  const [questions, setQuestions] = useState(shuffleArray(allQuestions));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(shuffleArray(allQuestions));  
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white">
        <h1 className="text-4xl text-cyan-400 mb-4">Quiz Completed</h1>
        <p className="text-xl mb-6">
          Your Score:{" "}
          <span className="text-cyan-400 font-bold">{score}</span> /{" "}
          {questions.length}
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
        <h2 className="text-xl mb-6">
          {questions[current].question}
        </h2>
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
