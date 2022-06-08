import * as React from "react";
import Question from "../components/Question";
import Timer from "../components/Timer";

interface IQuestion4Page {}

const Question4Page = ({}: IQuestion4Page) => {
  // const css = `body{
  //  background:red;
  // }`;
  return (
    <>
      <Question
        i={4}
        question={`What number combination do you get if you connect only purple triangles that face each other?`}
        media={
          <img
            className=" w-72 h-auto mx-auto  max-w-full"
            src="/images/arrow-connect.png"
          />
        }
        answer={"1374"}
        hint="use each page separately and connect the purple triangles with a pencil to reveal the numbers."
      />
      <Timer />
    </>
  );
};

export default Question4Page;
