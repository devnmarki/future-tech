interface HeaderProps {
  children?: string;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  return (
    <h1 className={`${className} font-kumbh-sans font-medium text-white`}>
      {children}
    </h1>
  );
};

export default Header;
