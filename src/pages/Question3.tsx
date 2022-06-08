import * as React from "react";
import Question from "../components/Question";
import Timer from "../components/Timer";

interface IQuestion3Page {}

const Question3Page = ({}: IQuestion3Page) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={3}
        question={`What words are we looking for?`}
        media={
          <img
            className=" w-72 h-auto mx-auto max-w-full"
            src="https://excape.com.au/wp-content/challenge/images/numbers-group.png"
          />
        }
        answer={"special day"}
        hint="In the card “Happy Birthday” is being wished in 4 different languages and in 4 different colours. Use the correct letters from the right phrases"
      />
      <Timer />
    </>
  );
};

export default Question3Page;
