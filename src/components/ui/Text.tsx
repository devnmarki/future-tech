interface TextProps {
  children?: string;
  className?: string;
}

const Text = ({ children, className }: TextProps) => {
  return (
    <p className={`font-inter text-gray-100 leading-[175%] ${className}`}>
      {children}
    </p>
  );
};

export default Text;
