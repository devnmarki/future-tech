interface ActionButtonProps {
  icon: string;
  count: string | number;
}

const ActionButton = ({ icon, count }: ActionButtonProps) => {
  return (
    <button className="flex items-center gap-x-0.5 px-3 py-1.5 bg-black-200 border border-black-300 font-kumbh-sans text-[0.875rem] 2xl:text-[1.125rem] text-gray-200 rounded-full cursor-pointer">
      <img src={icon} />
      {count}
    </button>
  );
};

export default ActionButton;
