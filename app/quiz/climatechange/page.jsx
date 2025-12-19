"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowPathIcon, HomeIcon } from "@heroicons/react/24/solid";

const questions = [
  {
    question: "What is the main cause of climate change?",
    options: ["Greenhouse gas emissions", "Volcanic eruptions", "Earthquakes"],
    answer: "Greenhouse gas emissions"
  },
  {
    question: "Which gas is most responsible for global warming?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen"],
    answer: "Carbon dioxide"
  },
  {
    question: "Melting glaciers lead to:",
    options: ["Rising sea levels", "Desertification", "Volcanic eruptions"],
    answer: "Rising sea levels"
  },
  {
    question: "Deforestation contributes to climate change because:",
    options: ["Trees absorb less CO2", "Trees produce pollution", "Trees block sunlight"],
    answer: "Trees absorb less CO2"
  },
  {
    question: "Which human activity contributes most to greenhouse gas emissions?",
    options: ["Burning fossil fuels", "Fishing", "Planting trees"],
    answer: "Burning fossil fuels"
  },
  {
    question: "Climate change can cause more frequent:",
    options: ["Extreme weather events", "Moon phases", "Solar eclipses"],
    answer: "Extreme weather events"
  },
  {
    question: "Global warming affects oceans by:",
    options: ["Increasing temperatures and acidification", "Decreasing salinity", "Increasing ice coverage"],
    answer: "Increasing temperatures and acidification"
  },
  {
    question: "Renewable energy helps combat climate change by:",
    options: ["Reducing CO2 emissions", "Increasing CO2 emissions", "Destroying habitats"],
    answer: "Reducing CO2 emissions"
  },
  {
    question: "Which is a consequence of climate change on wildlife?",
    options: ["Habitat loss", "Population growth", "Migration to the moon"],
    answer: "Habitat loss"
  },
  {
    question: "Which international agreement aims to limit global warming?",
    options: ["Paris Agreement", "Kyoto Games", "Geneva Convention"],
    answer: "Paris Agreement"
  },
  {
    question: "Which human action helps reduce climate change?",
    options: ["Recycling and using renewable energy", "Driving gasoline cars", "Cutting down forests"],
    answer: "Recycling and using renewable energy"
  },
  {
    question: "Climate change can lead to:",
    options: ["Floods and droughts", "Increased snowfall everywhere", "Decreased UV radiation"],
    answer: "Floods and droughts"
  },
  {
    question: "Which energy source increases greenhouse gas emissions?",
    options: ["Coal", "Solar", "Wind"],
    answer: "Coal"
  },
  {
    question: "Climate change affects agriculture by:",
    options: ["Reducing crop yields", "Increasing crop yields always", "Making soil richer"],
    answer: "Reducing crop yields"
  },
  {
    question: "How can individuals fight climate change?",
    options: ["Use energy-efficient appliances", "Waste energy", "Cut down more trees"],
    answer: "Use energy-efficient appliances"
  }
];

export default function ClimateChangeQuiz() {
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
