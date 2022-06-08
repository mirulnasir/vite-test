import { Route } from "@tanstack/react-location";
import Home from "../pages/Home";
import Question1Page from "../pages/Question1";
import Question2Page from "../pages/Question2";
import Question3Page from "../pages/Question3";
import Question4Page from "../pages/Question4";
import Question5Page from "../pages/Question5";
import Question6Page from "../pages/Question6";
import ResultPage from "../pages/Result";

export const basePath = "/challenge";
export const questionPathName = "q";
export const homePathName = "/";
export const resultPathName = "/result";
export const routes: Route[] = [
  {
    path: homePathName,
    element: <Home />,
  },
  {
    path: questionPathName,
    children: [
      {
        path: "1",
        element: <Question1Page />,
      },
      {
        path: "2",
        element: <Question2Page />,
      },
      {
        path: "3",
        element: <Question3Page />,
      },
      {
        path: "4",
        element: <Question4Page />,
      },
      {
        path: "5",
        element: <Question5Page />,
      },
      {
        path: "6",
        element: <Question6Page />,
      },
    ],
  },
  {
    path: resultPathName,
    element: <ResultPage />,
  },
];
