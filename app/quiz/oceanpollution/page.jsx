"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowPathIcon, HomeIcon } from "@heroicons/react/24/solid";

 const allQuestions = [
  {
    question: "What is a major cause of ocean pollution?",
    options: ["Plastic waste", "Sea plants", "Clean water"],
    answer: "Plastic waste",
  },
  {
    question: "Why should we protect the ocean?",
    options: [
      "For marine ecosystems and life",
      "For waste disposal",
      "For pollution",
    ],
    answer: "For marine ecosystems and life",
  },
  {
    question: "Which action helps reduce ocean pollution?",
    options: ["Throwing trash in rivers", "Recycling", "Oil dumping"],
    answer: "Recycling",
  },
  {
    question: "What happens when plastics enter the ocean?",
    options: [
      "They harm marine animals",
      "They disappear",
      "They clean the water",
    ],
    answer: "They harm marine animals",
  },
  {
    question: "Which item is commonly found in ocean waste?",
    options: ["Plastic bottles", "Rocks", "Seaweed"],
    answer: "Plastic bottles",
  },
  {
    question: "Oil spills are harmful because they:",
    options: [
      "Poison marine life",
      "Help coral reefs",
      "Increase oxygen",
    ],
    answer: "Poison marine life",
  },
  {
    question: "What is marine debris?",
    options: [
      "Human-made waste in oceans",
      "Natural sand",
      "Sea animals",
    ],
    answer: "Human-made waste in oceans",
  },
  {
    question: "Which habit reduces ocean pollution?",
    options: [
      "Using reusable bags",
      "Throwing trash anywhere",
      "Burning plastic",
    ],
    answer: "Using reusable bags",
  },
  {
    question: "Where does most ocean trash come from?",
    options: ["Land-based activities", "Volcanoes", "Fish"],
    answer: "Land-based activities",
  },
  {
    question: "How does pollution affect fish?",
    options: [
      "It makes them sick",
      "It helps them grow",
      "It protects them",
    ],
    answer: "It makes them sick",
  },
  {
    question: "What is microplastic?",
    options: [
      "Very small plastic particles",
      "Large ocean animals",
      "Natural sand",
    ],
    answer: "Very small plastic particles",
  },
  {
    question: "Which material takes the longest to decompose?",
    options: ["Plastic", "Paper", "Food waste"],
    answer: "Plastic",
  },
  {
    question: "Why is clean ocean important to humans?",
    options: [
      "It provides food and livelihood",
      "It increases pollution",
      "It causes sickness",
    ],
    answer: "It provides food and livelihood",
  },
  {
    question: "What should you do with trash?",
    options: [
      "Dispose properly",
      "Throw in ocean",
      "Leave on the beach",
    ],
    answer: "Dispose properly",
  },
  {
    question: "Which organization goal focuses on ocean protection?",
    options: ["SDG 14", "SDG 4", "SDG 1"],
    answer: "SDG 14",
  },
];

// SHUFFLE FUNCTION
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function OceanPollutionQuiz() {
  const [questions, setQuestions] = useState(shuffleArray(allQuestions));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
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
            className="bg-cyan-500 p-4 rounded-full hover:bg-cyan-600 transition"
          >
            <ArrowPathIcon className="w-6 h-6 text-white" />
          </button>

          <Link
            href="/quiz"
            className="bg-slate-700 p-4 rounded-full hover:bg-slate-600 transition"
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
