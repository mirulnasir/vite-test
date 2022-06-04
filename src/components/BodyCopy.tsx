import * as React from "react";

interface IBodyCopy {
  text: string;
  className?: string;
}

const BodyCopy = ({ text, className }: IBodyCopy) => {
  const textWithBr = text.replace(/\n/g, "<br/>");
  const classNames = className ? className : "leading-relaxed";
  return (
    <p
      dangerouslySetInnerHTML={{ __html: textWithBr }}
      className={classNames}
    ></p>
  );
};

export default BodyCopy;
