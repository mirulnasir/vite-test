import * as React from "react";
import Question from "../components/Question";
import Timer from "../components/Timer";

interface IQuestion1Page {}

const Question1Page = ({}: IQuestion1Page) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={1}
        question={`What word are we looking for?`}
        media={
          <img
            className=" w-60 h-auto mx-auto  max-w-full"
            src="https://excape.com.au/wp-content/challenge/images/balloon.png"
          />
        }
        answer={"wish"}
        hint="Use the English alphabet to figure out which number represent the letter"
      />
      <Timer />
    </>
  );
};

export default Question1Page;
