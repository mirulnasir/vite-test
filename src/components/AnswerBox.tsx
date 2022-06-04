import * as React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

interface IAnswerBox {
  max: number;
}

const AnswerBox = ({ max }: IAnswerBox) => {
  const size = useWindowSize();
  const handleKeyUpBlur = ({
    currentTarget,
  }:
    | React.KeyboardEvent<HTMLInputElement>
    | React.FocusEvent<HTMLInputElement>) => {
    if (currentTarget.value.length >= max) {
      console.log("what");
      currentTarget.blur();
    }
  };
  const handleFocus = () => {};
  return (
    <div className="answer-box">
      <input
        onKeyUp={handleKeyUpBlur}
        // onFocus={handleKeyUpBlur}
        type="text"
        maxLength={max}
        className=""
        style={{ width: size.width > 767 ? max * 80 : max * 50 }}
      />
    </div>
  );
};

export default AnswerBox;
