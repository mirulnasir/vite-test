import Link from "next/link";
import * as React from "react";
import SVGIcon from "./SVGIcon";

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
    <Link href={href}>
      <a
        className={`btn ${isFilled ? "btn--filled" : ""} ${
          mode === "light" ? "btn--light" : ""
        }`}
      >
        <span className="label">{label}</span>
        <span className="arrow">
          <span className="arrow__inner">
            {/* <StaticImage className="arrow-1 arrow__image" objectFit='contain' src="../../static/arrow-right.svg" alt="arrow-right" />
                    <StaticImage className="arrow-2 arrow__image" objectFit='contain' src="../../static/arrow-right.svg" alt="arrow-right" /> */}
            <SVGIcon
              icon="arrow-right"
              className="fill-current stroke-current arrow__image"
            />
            <SVGIcon
              icon="arrow-right"
              className="fill-current stroke-current arrow__image"
            />
          </span>
        </span>
      </a>
    </Link>
  );
};
export default Button;
