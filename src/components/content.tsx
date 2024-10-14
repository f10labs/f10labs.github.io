import React from "react";
import clsx from "clsx";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content: React.FC<ContentProps> = ({ children, className }) => {
  return (
    <div
      className={clsx("text-gray-700 mb-8 text-lg leading-relaxed", className)}
    >
      {children}
    </div>
  );
};

export default Content;
