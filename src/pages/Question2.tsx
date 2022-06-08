import Lottie from "lottie-react";
import * as React from "react";
import AlertWrong from "../components/AlertWrong";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { useQuizTimer } from "../hooks/useQuizTimer";

interface IQuestion2Page {}

const Question2Page = ({}: IQuestion2Page) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={2}
        question={`What word are the candle flames trying to spell out? `}
        media={
          <img
            className=" w-96 h-auto mx-auto  max-w-full"
            src="https://excape.com.au/wp-content/challenge/images/candle-full.png"
          />
        }
        answer={"love"}
        hint=" Use the 4 candles at the front of the card and match the symbol in order"
      />
      <Timer />
    </>
  );
};

export default Question2Page;
