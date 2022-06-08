import * as React from "react";

type ButtonStyle = "filled" | "transparent";
type ButtonSize = "base" | "lg" | "sm";
interface IButton {
  style?: ButtonStyle;
  size?: ButtonSize;
  label: string;
  sublabel?: string;
  href?: string;
  type?: "submit";
  color?: ButtonColor;
  mode?: "light";
  disabled?: boolean;
  isFilled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
type Ref = HTMLButtonElement;

type ButtonColor = "red" | "yellow" | "green" | "blue";
type TypeButtonColorMap = {
  [key in ButtonColor]: string;
};
const buttonColorMap: TypeButtonColorMap = {
  green: "bg-lime-600",
  red: "bg-red-600 ",
  yellow: "bg-amber-600",
  blue: "bg-sky-700",
};

const Button = React.forwardRef<Ref, IButton>(
  (
    {
      onClick,
      href,
      type,
      sublabel,
      label,
      mode,
      isFilled,
      color,
      size,
      disabled,
    },
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
          <span>{label}</span>
          {sublabel ? <span className="sub">{sublabel}</span> : null}
        </span>
      </button>
    );
  }
);
export default Button;
