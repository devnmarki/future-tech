import type { ReactNode } from "react";

interface FilterButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  currentFilter?: number;
  index?: number;
}

const FilterButton = ({
  children,
  className = "",
  onClick,
  currentFilter,
  index,
}: FilterButtonProps) => {
  return (
    <button
      className={`shrink-0 whitespace-nowrap min-w-37.75 xl:min-w-49 px-4 xl:px-5 2xl:px-7.5 py-4.5 xl:py-6 2xl:py-6 cursor-pointer font-inter text-[0.875rem] 2xl:text-[1.125rem] border border-black-300 rounded-[7px] outline-none ${currentFilter === index ? "bg-black-200 text-white" : "bg-black-100  text-gray-200"} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;
