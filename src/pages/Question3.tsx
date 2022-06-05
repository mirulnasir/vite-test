import Lottie from "lottie-react";
import * as React from "react";
import AlertWrong from "../components/AlertWrong";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { useQuizTimer } from "../hooks/useQuizTimer";

interface IQuestion3 {}

const Question3 = ({}: IQuestion3) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={3}
        question={`What words are we looking for?`}
        media={
          <img className=" w-60 h-auto mx-auto" src="/images/numbers.png" />
        }
        answer={"special day"}
        hint="In the card “Happy Birthday” is being wished in 4 different languages and in 4 different colours. Use the correct letters from the right phrases"
      />
      <Timer />
    </>
  );
};

export default Question3;
