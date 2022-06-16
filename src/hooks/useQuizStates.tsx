import { useNavigate, useRouter } from "@tanstack/react-location";
import * as React from "react";
import useQuizRoutes from "./useQuizRoutes";

interface IQuizStatesContext {
  state: IQuizStates;
  setState: React.Dispatch<React.SetStateAction<IQuizStates>>;
}
const QuizStatesContext = React.createContext<IQuizStatesContext | null>(null);

interface IQuizStatesProvider {
  children: React.ReactNode;
}
interface IQuizStates {
  start: boolean;
  hints: number;
  solutions: number;
}
export const QuizStatesProvider = ({ children }: IQuizStatesProvider) => {
  const [state, setState] = React.useState<IQuizStates>({
    start: false,
    hints: 0,
    solutions: 0,
  });
  // console.log("quizstate", state.start, state.hints, state.solutions);
  const { gotoHome } = useQuizRoutes();
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";
  React.useEffect(() => {
    // console.log("state", state);
    !isHome && !state.start ? gotoHome() : null;
  }, []);
  return (
    <QuizStatesContext.Provider value={{ state, setState }}>
      {children}
    </QuizStatesContext.Provider>
  );
};

export const useQuizStates = () => {
  const context = React.useContext(QuizStatesContext);
  if (typeof context === "undefined") {
    throw new Error("must have provider");
  }
  return { ...context };
};
