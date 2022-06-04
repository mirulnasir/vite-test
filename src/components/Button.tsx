import * as React from "react";

type ButtonStyle = "filled" | "transparent";
type ButtonSize = "base" | "lg" | "sm";
interface IButton {
  style?: ButtonStyle;
  size?: ButtonSize;
  label: string;
  href: string;
  mode?: "light";
  isFilled?: boolean;
}
const Button: React.FC<IButton> = ({ href, label, mode, isFilled }) => {
  return (
    <a
      className={`btn ${isFilled ? "btn--filled" : ""} ${
        mode === "light" ? "btn--light" : ""
      }`}
    >
      <span className="label">{label}</span>
    </a>
  );
};
export default Button;
