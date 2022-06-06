import { isEqual } from "lodash";
import * as React from "react";
import { useModal } from "../hooks/useModal";
import useQuizRoutes from "../hooks/useQuizRoutes";
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
const initialAnswer = [""];
const Question = ({ question, answer, i, hint, media }: IQuestion) => {
  const answerArr = answer.split(" ");

  const [userAnswer, setUserAnswer] = React.useState(answerArr.map(() => ""));
  // console.log("yseranswer", userAnswer);
  const { setModalData } = useModal();
  const refs = React.useRef(
    answerArr.map(() => React.createRef<HTMLInputElement>())
  );
  const buttonSubmitRef = React.useRef<HTMLButtonElement>(null);
  const { gotoNextQuiz, isLastQuiz, gotoResult } = useQuizRoutes();
  const handleSubmit = () => {
    isEqual(answerArr, userAnswer) ? doCorrect() : doWrong();
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
      // console.log("changing", p);
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
      // console.log("VVV", current!.value);
      current!.value = "";
      // console.log("VVV2", current?.value);
    });
  }
  function displayHint() {
    setModalData({
      on: true,
      type: "hint",
      bodyCopy: hint,
      handleButtonClick: () => setModalData({ on: false }),
      buttonLabel: "close",
    });
  }
  return (
    <>
      <div className="text-center max-w-2xl mx-auto">
        <Heading text={`Question ${i}`} type="h4" />
        <Heading text={question} type="h2" margin="mb-5 lg:mb-12" />
        {media}
        <div className="mt-6 lg:mt-12">
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
        <div className="mt-4 lg:mt-8 flex -mx-2 justify-center">
          <div className="px-2">
            <Button color="yellow" label="hint" onClick={() => displayHint()} />
          </div>
          <div className="px-2">
            <Button
              ref={buttonSubmitRef}
              label="submit"
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
