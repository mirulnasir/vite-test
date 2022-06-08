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
          <img
            className=" w-16  md:w-24 h-auto mx-auto  max-w-full"
            src="https://excape.com.au/wp-content/challenge/images/poem.png"
          />
        }
        answer={"celebrate"}
        hint="line – word - letter"
      />
      <Timer />
    </>
  );
};

export default Question5Page;
