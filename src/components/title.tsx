import React from "react";
import clsx from "clsx";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
