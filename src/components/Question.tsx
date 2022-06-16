import { isEqual } from "lodash";
import * as React from "react";
import { useModal } from "../hooks/useModal";
import useQuizRoutes from "../hooks/useQuizRoutes";
import { useQuizStates } from "../hooks/useQuizStates";
import { useQuizTimer } from "../hooks/useQuizTimer";
import AnswerBox from "./AnswerBox";
import Button from "./Button";
import Heading from "./Heading";

interface IQuestion {
  i: number;
  question: string;
  hint: string;
  answer: string;
  media: React.ReactNode;
}
const Question = ({ question, answer, i, hint, media }: IQuestion) => {
  const answerArr = answer.split(" ");
  const { setState: setQuizState } = useQuizStates();
  const [userAnswer, setUserAnswer] = React.useState(answerArr.map(() => ""));
  const { setModalData } = useModal();
  const refs = React.useRef(
    answerArr.map(() => React.createRef<HTMLInputElement>())
  );
  const buttonSubmitRef = React.useRef<HTMLButtonElement>(null);
  const { gotoNextQuiz, isLastQuiz, gotoResult } = useQuizRoutes();
  const { add1Minute, add3Minutes } = useQuizTimer();
  const handleSubmit = () => {
    isEqual(
      answerArr,
      userAnswer.map((a) => a.toLowerCase())
    )
      ? doCorrect()
      : doWrong();
  };
  const handleOnBlur = (i: number) => {
    if (i < answerArr.length - 1) {
      refs.current[++i].current?.focus();
    } else {
      buttonSubmitRef.current?.focus();
    }
  };
  const handleChange = (i: number) => {
    setUserAnswer((p) => {
      p[i] = refs.current[i].current?.value || "";
      return p;
    });
  };
  function doCorrect() {
    if (isLastQuiz) {
      gotoResult();
    } else {
      setModalData({
        on: true,
        type: "correct",
        handleButtonClick: () => {
          setModalData({ on: false });
          gotoNextQuiz();
        },
        buttonLabel: "next question",
      });
    }
  }
  function doWrong() {
    setModalData({
      on: true,
      type: "incorrect",
      handleButtonClick: () => setModalData({ on: false }),
      buttonLabel: "try again",
    });
    refs.current.map(({ current }) => {
      current!.value = "";
    });
  }
  function displayHint() {
    setQuizState!((p) => ({ ...p, hints: p.hints + 1 }));
    add1Minute();
    setModalData({
      on: true,
      type: "hint",
      bodyCopy: hint,
      handleButtonClick: () => setModalData({ on: false }),
      buttonLabel: "close",
    });
  }
  function displaySolution() {
    setQuizState!((p) => ({ ...p, solutions: p.solutions + 1 }));

    add3Minutes();
    setModalData({
      on: true,
      type: "solution",
      bodyCopy: answer,
      handleButtonClick: () => {
        setModalData({ on: false });
        gotoNextQuiz();
      },
      buttonLabel: "next question",
    });
  }
  return (
    <>
      <div className="text-center max-w-3xl mx-auto">
        <Heading text={`Question ${i}`} type="h4" />
        <Heading
          text={question}
          type="h2"
          margin="max-w-xl mx-auto mb-5 lg:mb-12"
        />
        {media}
        <div className="mt-6 lg:mt-12 pb-2 overflow-x-auto">
          {answerArr &&
            answerArr.map((a, i) => {
              const max = a.length;
              return (
                <AnswerBox
                  key={i}
                  max={max}
                  ref={refs.current[i]}
                  onChange={() => handleChange(i)}
                  handleOnBlur={() => handleOnBlur(i)}
                />
              );
            })}
        </div>
        <div className="mt-4 lg:mt-8 flex flex-wrap -mx-2 justify-center">
          <div className="px-2 ">
            <Button
              color="yellow"
              sublabel="+1 minute"
              label="hint"
              onClick={() => displayHint()}
            />
          </div>
          <div className="px-2 ">
            <Button
              ref={buttonSubmitRef}
              label="submit"
              onClick={() => handleSubmit()}
            />
          </div>
          <div className="w-full mt-4 px-2">
            <Button
              color="blue"
              label="solution"
              sublabel="+3 minutes"
              onClick={() => displaySolution()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
