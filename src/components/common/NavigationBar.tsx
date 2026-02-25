import LogoImage from "/images/logo.svg";
import BarsIcon from "/icons/bars.svg";
import FilledButton from "../ui/FilledButton";

const NavigationBar = () => {
  return (
    <div className="flex justify-between items-center bg-black-200 py-5 px-4 md:px-20 md:py-5 2xl:px-40.5 2xl:py-6">
      <img src={LogoImage} className="w-31.25 md:w-35.75 2xl:w-44.5" />
      <img src={BarsIcon} className="size-8.5 cursor-pointer md:hidden" />
      <FilledButton content="Contact Us" />
    </div>
  );
};

export default NavigationBar;
