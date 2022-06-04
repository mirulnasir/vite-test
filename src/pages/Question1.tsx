import * as React from "react";
import { useStopwatch } from "react-timer-hook";
import { useQuizTimer } from "../hooks/useQuizTimer";
import Lottie from "lottie-react";
import timeHourglassAnimation from "../lottie/time-hourglass.json";
import LottieInvalid from "../lottie/invalid.json";
import { Link } from "@tanstack/react-location";
import Button from "../components/Button";
import Heading from "../components/Heading";
import List from "../components/List";
import ImageBalloons from "/images/balloon.png";
import AnswerBox from "../components/AnswerBox";
import AlertWrong from "../components/AlertWrong";

interface IQuestion1 {}

const Question1 = ({}: IQuestion1) => {
  const { seconds, minutes, hours, start, reset } = useQuizTimer();
  const lottieRef = React.useRef<any | undefined>(undefined);
  React.useEffect(() => {
    if (lottieRef.current !== null) {
      lottieRef.current.setSpeed(0.5);
    }
  }, [lottieRef]);
  // const css = `body{
  //  background:red;
  // }`;
  const [on, setOn] = React.useState(false);
  return (
    <>
      {/* <style>{css}</style> */}
      <div className="text-center max-w-2xl mx-auto">
        <Heading text="Question 1" type="h4" />
        <Heading
          text="What word are we looking for?"
          type="h2"
          margin="mb-5 lg:mb-12"
        />
        <img className=" w-60 h-auto mx-auto" src="/images/balloon.png" />
        <div className="mt-6 lg:mt-12">
          <AnswerBox max={4} />
        </div>
        <div className="mt-3 lg:mt-5">
          <Button label="submit" onClick={() => setOn((e) => !e)} />
        </div>
      </div>
      <AlertWrong setOn={on} />
      <div className="">
        {hours?.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {minutes?.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {seconds?.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
      <button
        className=""
        onClick={() => {
          const time = new Date();
          time.setHours(time.getHours() + hours!);
          time.setMinutes(time.getMinutes() + minutes! + 1);
          time.setSeconds(time.getSeconds() + seconds!);
          console.log(time);
          reset!(time);
        }}
      >
        reset
      </button>
      <button onClick={() => reset!(new Date(), false)}>Reset</button>
      <Lottie
        className="h-[150px] w-[150px] object-cover"
        lottieRef={lottieRef}
        loop={true}
        animationData={timeHourglassAnimation}
      />
    </>
  );
};

export default Question1;
