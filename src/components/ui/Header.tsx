interface HeaderProps {
  text?: string;
  className?: string;
}

const Header = ({ text, className }: HeaderProps) => {
  return (
    <h1 className={`${className} font-kumbh-sans font-medium text-white`}>
      {text}
    </h1>
  );
};

export default Header;
