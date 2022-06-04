import * as React from "react";

type ButtonStyle = "filled" | "transparent";
type ButtonSize = "base" | "lg" | "sm";
interface IButton {
  style?: ButtonStyle;
  size?: ButtonSize;
  label: string;
  href?: string;
  mode?: "light";
  isFilled?: boolean;
  onClick: (() => void) | undefined;
}
const Button: React.FC<IButton> = ({
  onClick,
  href,
  label,
  mode,
  isFilled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn pushable ${isFilled ? "btn--filled" : ""} ${
        mode === "light" ? "btn--light" : ""
      }`}
    >
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="label front">{label}</span>
    </button>
  );
};
export default Button;
