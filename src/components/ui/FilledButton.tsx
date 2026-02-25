interface FilledButtonProps {
  content?: string;
  className?: string;
  onClick?: () => void;
}

const FilledButton = ({ content, className, onClick }: FilledButtonProps) => {
  return (
    <button
      className={`hidden font-inter font-medium text-black-100 bg-yellow rounded-[10px] cursor-pointer transition-shadow hover:shadow-[0px_0px_15px] hover:shadow-yellow active:opacity-75
                  md:block md:w-25.75 md:h-10.25 md:text-[0.875rem]
                  2xl:w-34.25 2xl:h-13.75 2xl:text-[1.125rem]
                  ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default FilledButton;
