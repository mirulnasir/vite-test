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
        return `${fontSize ? fontSize : "text-2xl lg:text-3xl"} ${
          margin ? margin : "mb-3 lg:mb-4"
        }`;
      case "h2":
        return `${fontSize ? fontSize : "text-2xl lg:text-3xl"} ${
          margin ? margin : "mb-2 lg:mb-3"
        }`;
      case "h3":
        return `${fontSize ? fontSize : "text-lg lg:text-xl"} ${
          margin ? margin : "mb-2 lg:mb-3"
        }`;
      case "h4":
        return `${fontSize ? fontSize : "text-lg lg:text-xl"} ${
          margin ? margin : "mb-1 lg:mb-2"
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
