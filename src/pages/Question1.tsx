import * as React from "react";
import { useStopwatch } from "react-timer-hook";
import { useQuizTimer } from "../hooks/useQuizTimer";
import Lottie from "lottie-react";
import timeHourglassAnimation from "../lottie/time-hourglass.json";

interface IQuestion1 {}

const Question1 = ({}: IQuestion1) => {
  const { seconds, minutes, hours, start } = useQuizTimer();
  const lottieRef = React.useRef<any | undefined>(undefined);
  React.useEffect(() => {
    if (lottieRef.current !== null) {
      lottieRef.current.setSpeed(0.5);
    }
  }, [lottieRef]);
  return (
    <>
      <div className="">Question1</div>
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
