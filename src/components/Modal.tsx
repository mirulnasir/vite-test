import Lottie from "lottie-react";
import * as React from "react";
import Heading from "./Heading";
import LottieInvalid from "../lottie/invalid.json";
import LottieSuccess from "../lottie/success.json";
import LottieInfo from "../lottie/info.json";
import Button from "./Button";
import BodyCopy from "./BodyCopy";

export interface IModal {
  on?: boolean;
  color?: string;
  timer?: number;
  type?: ModalType;
  buttonLabel?: string;
  handleButtonClick?: () => void;
  heading?: string;
  bodyCopy?: string;
  image?: any;
  imageClass?: string;
  setOn?: (bool: boolean) => void;
}
type ModalType = "correct" | "incorrect" | "hint";

type IModalDefault = {
  [key in ModalType]: IModal;
};
const modalDefault: IModalDefault = {
  correct: {
    heading: "Good work! You are correct !",
    color: "bg-lime-900",
    image: LottieSuccess,
    imageClass: "h-[150px] w-[150px] object-cover mx-auto ",
  },
  incorrect: {
    heading: "Incorrect! Try again or alternatively use a hint",
    color: "bg-rose-900",
    image: LottieInvalid,
    imageClass: "h-[150px] w-[150px] object-cover mx-auto ",
  },
  hint: {
    heading: "hint",
    color: "bg-yellow-700",
    image: LottieInfo,
    imageClass: "h-[150px] w-[150px] object-cover mx-auto p-8",
  },
};
const Modal = ({
  on = false,
  color,
  type,
  heading,
  image,
  imageClass,
  bodyCopy,
  buttonLabel,
  handleButtonClick,
  setOn,
}: IModal) => {
  const returnDefault = type ? modalDefault[type] : modalDefault.correct;
  const bgColor = `bg-${returnDefault.color}`;
  //   const [on, setOn] = React.useState(propsOn);
  //   React.useEffect(() => {
  //     setOn(propsOn);
  //   }, [propsOn]);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    on ? buttonRef.current?.focus() : null;
  }, [on]);
  return (
    <>
      {on ? (
        <div className="absolute  w-full h-full top-0 left-0 flex items-center justify-center">
          <div
            className={`absolute w-full h-full backdrop-blur `}
            onClick={() => handleButtonClick?.()}
          ></div>
          <div
            className={`relative transition-all w-[450px] flex items-center max-w-full justify-center ${returnDefault.color} shadow-md  shadow-zinc-500/30  rounded-xl `}
          >
            <div className={` px-12 pb-8 lg:pt-4 lg:pb-14`}>
              <div className="text-center max-w-[300px] mx-auto">
                <Lottie
                  className={imageClass ? imageClass : returnDefault.imageClass}
                  loop={true}
                  animationData={image ? image : returnDefault.image}
                />
                <Heading
                  text={heading ? heading : returnDefault.heading!}
                  className="text-xl lg:text-2xl leading-snug -mt-5  text-stone-200"
                  type="h3"
                />
                {bodyCopy ? (
                  <BodyCopy
                    text={bodyCopy}
                    className="text-lg mt-2 lg:mt-4 leading-snug"
                  />
                ) : null}
                {buttonLabel && handleButtonClick ? (
                  <div className="mt-4 lg:mt-8">
                    <Button
                      ref={buttonRef}
                      label={buttonLabel ? buttonLabel : "Submit"}
                      onClick={() => handleButtonClick()}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
