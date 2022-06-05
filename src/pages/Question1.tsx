import Lottie from "lottie-react";
import * as React from "react";
import AlertWrong from "../components/AlertWrong";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { useQuizTimer } from "../hooks/useQuizTimer";

interface IQuestion1 {}

const Question1 = ({}: IQuestion1) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={1}
        question={`What word are we looking for?`}
        media={
          <img className=" w-60 h-auto mx-auto" src="/images/balloon.png" />
        }
        answer={"wish"}
        hint="Use English alphabet to figure out witch number represent the letter"
      />
      <Timer />
    </>
  );
};

export default Question1;
