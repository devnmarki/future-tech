import ArrowIcon from "/icons/arrow-up-right.svg";
import { Text } from "..";

interface Button {
  children?: string;
}

const Button = ({ children }: Button) => {
  return (
    <button className="group flex justify-center items-center gap-x-2.5 bg-black-100 outline-1 outline-black-300 px-6 py-3.5 rounded-lg cursor-pointer lg:px-6 lg:py-4.5 hover:bg-black-300 active:opacity-75 transition-all">
      <Text className="group-hover:text-white">{children}</Text>
      <img src={ArrowIcon} className="yellow-icon" />
    </button>
  );
};

export default Button;
