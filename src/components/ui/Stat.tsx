import { Text } from ".";

interface StatProps {
  value: number;
  width?: string | number;
  height?: string | number;
  children?: string;
  className?: string;
}

const Stat = ({ value, width, height, children, className }: StatProps) => {
  return (
    <div
      className={`${className} ${width === typeof Number ? `w-[${width}px]` : width} ${height === typeof Number ? `w-[${height}px]` : height} py-5 lg:py-7.5`}
    >
      <p className="font-inter font-semibold text-white text-[1.5rem] lg:text-[1.875rem]">
        {value > 9999
          ? value.toString().slice(0, 2) + "k"
          : value || (value > 999 && value < 1000)
            ? value
            : value.toString().slice(0, 1) + "k"}
        <span className="text-yellow">+</span>
      </p>
      <Text className="text-[0.875rem]">{children}</Text>
    </div>
  );
};

export default Stat;
