import * as React from "react";

type ButtonStyle = "filled" | "transparent";
type ButtonSize = "base" | "lg" | "sm";
interface IButton {
  style?: ButtonStyle;
  size?: ButtonSize;
  label: string;
  href?: string;
  type?: "submit";
  color?: ButtonColor;
  mode?: "light";
  disabled?: boolean;
  isFilled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
type Ref = HTMLButtonElement;

type ButtonColor = "red" | "yellow" | "green";
type TypeButtonColorMap = {
  [key in ButtonColor]: string;
};
const buttonColorMap: TypeButtonColorMap = {
  green: "bg-lime-600",
  red: "bg-red-600 ",
  yellow: "bg-amber-600",
};

const Button = React.forwardRef<Ref, IButton>(
  (
    { onClick, href, type, label, mode, isFilled, color, size, disabled },
    ref
  ) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        type={type}
        onClick={onClick}
        className={` pushable ${size ? `btn--${size}` : ""} ${
          isFilled ? "btn--filled" : ""
        } ${mode === "light" ? "btn--light" : ""}`}
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
  }
);
export default Button;
