import * as React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

interface IAnswerBox {
  // value: string;
  max: number;
  handleOnChange?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const AnswerBox = React.forwardRef<Ref, IAnswerBox>(
  ({ max, handleOnChange, onChange, handleOnBlur }, ref) => {
    const size = useWindowSize();
    const handleKeyUpBlur = ({
      currentTarget,
    }:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>) => {
      if (currentTarget.value.length >= max) {
        // console.log("what");
        currentTarget.blur();
      }
    };
    const handleFocus = () => {};
    return (
      <div className="answer-box">
        <input
          // value={value}
          ref={ref}
          autoCorrect="false"
          autoComplete="false"
          onKeyUp={handleKeyUpBlur}
          // onFocus={handleKeyUpBlur}
          onChange={onChange}
          onBlur={handleOnBlur}
          type="text"
          maxLength={max}
          className=""
          style={{ width: size.width > 767 ? max * 80 : max * 35 }}
        />
      </div>
    );
  }
);
type Ref = HTMLInputElement;

export default AnswerBox;
