import * as React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

interface IAnswerBox {
  max: number;
  handleOnChange?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AnswerBox = React.forwardRef<Ref, IAnswerBox>(
  ({ max, handleOnChange, onChange }, ref) => {
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
          ref={ref}
          autoCorrect="false"
          autoComplete="false"
          onKeyUp={handleKeyUpBlur}
          // onFocus={handleKeyUpBlur}
          onChange={onChange}
          type="text"
          maxLength={max}
          className=""
          style={{ width: size.width > 767 ? max * 80 : max * 50 }}
        />
      </div>
    );
  }
);
type Ref = HTMLInputElement;
const AnswerBox2 = React.forwardRef<Ref, IAnswerBox>(({ max }, ref) => (
  <input />
));

export default AnswerBox;
