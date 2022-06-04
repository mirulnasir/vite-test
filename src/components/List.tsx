import * as React from "react";

interface IList {
  text: string[];
  className?: string;
  parentClassName?: string;
  margin?: string;
  parentMargin?: string;
}

const List = ({ text, className, parentMargin, parentClassName }: IList) => {
  //   const textWithBr = text.replace(/\n/g, "<br/>");
  const classNames = className
    ? className
    : "leading-relaxed pl-2 ml-4 text-lg";
  const parentClassNames = parentClassName
    ? parentClassName
    : "list-decimal  text-left max-w-xl mx-auto space-y-1 lg:space-y-2";

  return (
    <ol
      className={`${parentClassNames} ${
        parentMargin ? parentMargin : "mb-6 lg:mb-10"
      }`}
    >
      {text.map((t, i) => {
        return (
          <li
            className={classNames}
            key={i}
            dangerouslySetInnerHTML={{ __html: t }}
          ></li>
        );
      })}
    </ol>
  );
};

export default List;
