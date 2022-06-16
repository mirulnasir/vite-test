import { useNavigate, useRouter } from "@tanstack/react-location";
import {
  questionPathName,
  resultPathName,
  homePathName,
  basePath,
} from "../config/routeConfig";

interface IuseQuizRoutes {}

// const routeToArr = routes.map((route, i) => {});

const useQuizRoutes = () => {
  const { routes, state, setState } = useRouter();
  const navigate = useNavigate();
  const quizRoutes = routes.filter(
    (route, i) => route.path === questionPathName
  )[0].children;
  // console.log("routes", routes);
  // console.log(quizRoutes);

  const quizRoutesArr = quizRoutes!.map((r) => r.path);

  const currentQuiz = state.location.pathname.replace(
    `${basePath}/${questionPathName}/`,
    ""
  );
  // console.log(
  //   "useROurter",
  //   state,
  //   currentQuiz,
  //   quizRoutesArr,
  //   quizRoutesArr?.indexOf(currentQuiz)
  // );
  const isLastQuiz =
    quizRoutesArr.indexOf(currentQuiz) === quizRoutesArr.length - 1;
  const gotoNextQuiz = () => {
    // console.log(
    //   "useROurter",
    //   state,
    //   currentQuiz,
    //   quizRoutesArr,
    //   quizRoutesArr?.indexOf(currentQuiz)
    // );
    const nextQuizIndex =
      quizRoutesArr.indexOf(currentQuiz) > -1
        ? quizRoutesArr?.indexOf(currentQuiz) + 1
        : null;
    // console.log("nextquizindex", nextQuizIndex);
    if (nextQuizIndex && nextQuizIndex < quizRoutesArr?.length!) {
      navigate({ to: `/${questionPathName}/${quizRoutesArr[nextQuizIndex]}` });
    } else {
      navigate({ to: `/${resultPathName}` });
    }
  };
  const gotoHome = () => {
    navigate({ to: `${homePathName}` });
  };
  const gotoResult = () => {
    navigate({ to: `/${resultPathName}` });
  };
  return { gotoNextQuiz, isLastQuiz, gotoResult, gotoHome };
};

export default useQuizRoutes;
