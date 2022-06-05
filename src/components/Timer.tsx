import Lottie from "lottie-react";
import * as React from "react";
import { useQuizTimer } from "../hooks/useQuizTimer";
import timeHourglassAnimation from "../lottie/time-hourglass.json";

interface ITimer {}

const Timer = ({}: ITimer) => {
  const { seconds, minutes, hours, start, reset } = useQuizTimer();
  const lottieRef = React.useRef<any | undefined>(undefined);
  React.useEffect(() => {
    if (lottieRef.current !== null) {
      lottieRef.current.setSpeed(0.5);
    }
  }, [lottieRef]);
  return (
    <>
      <div className="text-center max-w-2xl mx-auto mt-7 lg:mt-10">
        <div className="flex space-x-2  items-center mx-auto w-fit rounded-md px-2 shadow-inner  bg-slate-600/50">
          <div className="w-[40px] relative overflow-hidden aspect-square">
            <Lottie
              className="h-[70px] w-[70px] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              lottieRef={lottieRef}
              loop={true}
              animationData={timeHourglassAnimation}
            />
          </div>
          <div className=" text-stone-400 pb-px pr-2">
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
        </div>

        {/* <button
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
        <button onClick={() => reset!(new Date(), false)}>Reset</button> */}
      </div>
    </>
  );
};

export default Timer;
