import React from "react";
import clsx from "clsx";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <h2
      className={clsx(
        "text-2xl font-semibold text-gray-900 mt-12 mb-6",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
