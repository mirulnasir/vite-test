import { Route } from "@tanstack/react-location";
import Home from "../pages/Home";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";
import Question3 from "../pages/Question3";
import Question4 from "../pages/Question4";

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "q",
    children: [
      {
        path: "1",
        element: <Question1 />,
      },
      {
        path: "2",
        element: <Question2 />,
      },
      {
        path: "3",
        element: <Question3 />,
      },
      {
        path: "4",
        element: <Question4 />,
      },
    ],
  },
];
