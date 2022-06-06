import * as React from "react";
import Question from "../components/Question";
import Timer from "../components/Timer";

interface IQuestion5Page {}

const Question5Page = ({}: IQuestion5Page) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={5}
        question={`Read the poem and see if you can figure out the word we are looking for? `}
        media={
          <img className=" w-60 h-auto mx-auto" src="/images/candle.png" />
        }
        answer={"celebrate"}
        hint="line – word - letter"
      />
      <Timer />
    </>
  );
};

export default Question5Page;
