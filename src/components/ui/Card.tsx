import type { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`flex flex-col justify-center gap-y-1 p-6 bg-black-200 outline-1 outline-black-300 rounded-[10px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
