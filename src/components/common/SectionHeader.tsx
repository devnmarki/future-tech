import type { ReactNode } from "react";
import { Header } from "..";

interface SectionHeaderProps {
  header: string;
  subheader: string;
  children?: ReactNode;
}

const SectionHeader = ({ header, subheader, children }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full px-4 py-10 lg:p-20 2xl:px-40.5 2xl:py-30 bg-black-200 border-t border-b border-black-300">
      <div className="flex flex-col gap-y-2.5 max-w-89.5 lg:max-w-none">
        <div className="w-fit px-2 py-1 bg-black-400 rounded-sm">
          <Header className="text-[0.875rem] lg:text-md 2xl:text-[1.125rem]">
            {subheader}
          </Header>
        </div>
        <Header className="text-[1.75rem] lg:text-[2.75rem] 2xl:text-[3.625rem]">
          {header}
        </Header>
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;
