import * as React from "react";

type ButtonStyle = "filled" | "transparent";
type ButtonSize = "base" | "lg" | "sm";
interface IButton {
  style?: ButtonStyle;
  size?: ButtonSize;
  label: string;
  href?: string;
  color?: ButtonColor;
  mode?: "light";
  isFilled?: boolean;
  onClick: (() => void) | undefined;
}

type ButtonColor = "red" | "yellow" | "green";
type TypeButtonColorMap = {
  [key in ButtonColor]: string;
};
const buttonColorMap: TypeButtonColorMap = {
  green: "bg-lime-600",
  red: "bg-red-600 ",
  yellow: "bg-amber-600",
};
const Button: React.FC<IButton> = ({
  onClick,
  href,
  label,
  mode,
  isFilled,
  color,
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
      <span
        className={`label front  ${
          color ? buttonColorMap[color] : buttonColorMap.red
        }`}
      >
        {label}
      </span>
    </button>
  );
};
export default Button;
