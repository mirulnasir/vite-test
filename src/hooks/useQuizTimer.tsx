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
  const { start, seconds, minutes, hours } = useStopwatch();
  return (
    <QuizTimerContext.Provider value={{ start, seconds, minutes, hours }}>
      {children}
    </QuizTimerContext.Provider>
  );
};

export const useQuizTimer = () => {
  const context = React.useContext(QuizTimerContext);
  if (typeof context === "undefined") {
    throw new Error("must have provider");
  }
  return context;
};
