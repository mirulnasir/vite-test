import { useState } from "react";
import logo from "./logo.svg";
import { Router, Route, Outlet, ReactLocation } from "@tanstack/react-location";
import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import { QuizTimerProvider } from "./hooks/useQuizTimer";

const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/q1",
    element: <Question1 />,
  },
];
const location = new ReactLocation();
function App() {
  return (
    <Router routes={routes} location={location}>
      <QuizTimerProvider>
        <main className="app min-h-[400px] w-full mx-auto max-w-4xl">
          <Outlet />
        </main>
      </QuizTimerProvider>
    </Router>
  );
}

export default App;
