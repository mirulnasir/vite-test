import { useState } from "react";
import logo from "./logo.svg";
import { Router, Route, Outlet, ReactLocation } from "@tanstack/react-location";
import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import { QuizTimerProvider } from "./hooks/useQuizTimer";
import { ModalProvider } from "./hooks/useModal";
import { routes } from "./config/routeConfig";

type PageType = "home" | "question" | "result";

interface IHomePageContent {
  heading: string;
  subheading: string;
  list: string[];
}
interface IPageHome {
  type: PageType[0];
  content: IHomePageContent;
}
type S<Type> = {
  [Property in keyof Type]: Type[Property];
};
type K = keyof PageContent;
type HC = S<PageContent>;
// const h:HC ={home:{heading:''}}
interface IQuestionContent {
  question: string;
  answer: string;
  hint: string;
}
type Avail = {
  [key in PageType]: boolean;
};
// const a:Avail= {home:true}
interface IResultContent {
  heading: string;
}
interface PageContent {
  home: IHomePageContent;
  question: IQuestionContent;
  result: IResultContent;
}

type IPages = {
  type: PageType;
  // content: PageContent[ReturnType keyof type];
};
const pp: IPages = { type: "home" };
const pages = [
  { type: "home", content: { heading: "" } },
  { type: "question", content: { hint: "" } },
];
const location = new ReactLocation();
function App() {
  return (
    <Router routes={routes} location={location}>
      <QuizTimerProvider>
        <ModalProvider>
          <main className="app min-h-[400px] w-full mx-auto max-w-4xl">
            <Outlet />
          </main>
        </ModalProvider>
      </QuizTimerProvider>
    </Router>
  );
}

export default App;
