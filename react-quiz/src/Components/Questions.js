import React from "react";
import Options from "./Options";
import { useQuiz } from "../Context/QuizContext";

export default function Questions() {
  const { questions, index } = useQuiz();

  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}
