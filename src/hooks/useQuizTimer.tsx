import * as React from "react";
import { StopwatchResult, useStopwatch } from "react-timer-hook";

interface IQuizTimer {}
const QuizTimerContext = React.createContext<Partial<StopwatchResult> | null>(
  null
);

interface IQuizTimerProvider {
  children: React.ReactNode;
}
export const QuizTimerProvider = ({ children }: IQuizTimerProvider) => {
  const { start, seconds, minutes, hours, reset, pause } = useStopwatch({
    autoStart: false,
  });

  return (
    <QuizTimerContext.Provider
      value={{ start, seconds, minutes, hours, reset, pause }}
    >
      {children}
    </QuizTimerContext.Provider>
  );
};

export const useQuizTimer = () => {
  const context = React.useContext(QuizTimerContext);
  if (typeof context === "undefined") {
    throw new Error("must have provider");
  }
  const add1Minute = () => {
    const { minutes, hours, seconds, reset } = context as StopwatchResult;

    const time = new Date();
    time.setHours(time.getHours() + hours!);
    time.setMinutes(time.getMinutes() + minutes! + 1);
    time.setSeconds(time.getSeconds() + seconds!);
    console.log(time);
    reset!(time);
  };
  return { ...context, add1Minute };
};

// export const add1Minute = () => {
//   const { minutes, hours, seconds, reset } = useQuizTimer();

//   const time = new Date();
//   time.setHours(time.getHours() + hours!);
//   time.setMinutes(time.getMinutes() + minutes! + 1);
//   time.setSeconds(time.getSeconds() + seconds!);
//   console.log(time);
//   reset!(time);
// };
