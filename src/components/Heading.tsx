import * as React from "react";

interface IHeading {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  className?: string;
  fontSize?: string;
  margin?: string;
}

const Heading = ({
  type: CustomTag,
  text,
  className,
  fontSize,
  margin,
}: IHeading) => {
  const typeClassNames = () => {
    switch (CustomTag) {
      case "h1":
        return `${fontSize ? fontSize : "text-4xl lg:text-5xl"} ${
          margin ? margin : "mb-5 lg:mb-8"
        }`;
      case "h2":
        return `${fontSize ? fontSize : "text-3xl lg:text-4xl"} ${
          margin ? margin : "mb-4 lg:mb-7"
        }`;
      case "h3":
        return `${fontSize ? fontSize : "text-2xl lg:text-3xl"} ${
          margin ? margin : "mb-3 lg:mb-6"
        }`;
      default:
        return "";
    }
  };
  const classNames = className ? className : typeClassNames();
  return (
    <CustomTag
      dangerouslySetInnerHTML={{ __html: text }}
      className={classNames}
    ></CustomTag>
  );
};

export default Heading;
