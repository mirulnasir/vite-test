import * as React from "react";
import Question from "../components/Question";
import Timer from "../components/Timer";

interface IQuestion6Page {}

const Question6Page = ({}: IQuestion6Page) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={6}
        question={`What colour would you get if you would mix the background colour of the first page and second page of the card?`}
        media={
          <img className=" w-60 h-auto mx-auto" src="/images/candle.png" />
        }
        answer={"green"}
        hint="the fist page is blue and second page is yellow"
      />
      <Timer />
    </>
  );
};

export default Question6Page;
