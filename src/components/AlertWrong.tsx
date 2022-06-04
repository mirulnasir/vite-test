import Lottie from "lottie-react";
import * as React from "react";
import Heading from "./Heading";
import LottieInvalid from "../lottie/invalid.json";

interface IAlertWrong {
  setOn: boolean;
}

const AlertWrong = ({ setOn }: IAlertWrong) => {
  const [isDisplaying, setIsDisplaying] = React.useState(false);
  React.useEffect(() => {
    if (setOn) {
      setIsDisplaying(true);
      const timeout = setTimeout(() => setIsDisplaying(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [setOn]);
  return (
    <div
      className={`${
        isDisplaying ? "visible" : " invisible"
      } transition-all absolute bg-zinc-800 border-zinc-400 border-8 rounded-xl px-12 pb-8 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
    >
      <div className="text-center">
        <Lottie
          className="h-[150px] w-[150px] object-cover mx-auto"
          loop={true}
          animationData={LottieInvalid}
        />
        <Heading
          text="Incorrect! Try again or alternatively use a hint"
          className="text-xl leading-snug -mt-5 max-w-[300px]"
          type="h3"
        />
      </div>
    </div>
  );
};

export default AlertWrong;
