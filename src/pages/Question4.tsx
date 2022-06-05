import Lottie from "lottie-react";
import * as React from "react";
import AlertWrong from "../components/AlertWrong";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { useQuizTimer } from "../hooks/useQuizTimer";

interface IQuestion4 {}

const Question4 = ({}: IQuestion4) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={4}
        question={`What number combination do you get if you connect only purple triangles that face each other?`}
        media={
          <img className=" w-60 h-auto mx-auto" src="/images/balloon.png" />
        }
        answer={"1374"}
        hint="Use all pages of the card and connect only purple triangles that face each other"
      />
      <Timer />
    </>
  );
};

export default Question4;
