import React from "react";
import { useQuiz } from "../../Context/QuizContext";
import Loader from "../Loader";
import Error from "../Error/Error";
import StartScreen from "../StartScreen";
import Progress from "../Progress";
import Questions from "../Questions";
import Footer from "../Footer/Footer";
import FinishScreen from "../FinishScreen";

export default function Main() {
  const { status } = useQuiz();
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Questions />
          <Footer />
        </>
      )}
      {status === "finished" && <FinishScreen />}
    </main>
  );
}
