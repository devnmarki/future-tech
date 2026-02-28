import { Text } from "..";

interface StatProps {
  value: number;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const Stat = ({ value, width, height, className }: StatProps) => {
  return (
    <div
      className={`${className} ${width === typeof Number ? `w-[${width}px]` : width} ${height === typeof Number ? `w-[${height}px]` : height} py-5`}
    >
      <p className="font-inter font-semibold text-white text-[1.5rem]">
        {value > 9999
          ? value.toString().slice(0, 2) + "k"
          : value || (value > 999 && value < 1000)
            ? value
            : value.toString().slice(0, 1) + "k"}
        <span className="text-yellow">+</span>
      </p>
      <Text className="text-[0.875rem]">Resources available</Text>
    </div>
  );
};

export default Stat;
