import LogoImage from "/images/logo.svg";
import BarsIcon from "/icons/bars.svg";
import { FilledButton, MenuItemContainer } from "..";
import { useNavigate } from "react-router";

const menuItems: Record<string, string> = {
  Home: "/",
  News: "/news",
  Podcasts: "/news",
  Resources: "/news",
};

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-black-200 py-5 px-4 md:px-20 md:py-5 2xl:px-40.5 2xl:py-6">
      <img src={LogoImage} className="w-31.25 md:w-35.75 2xl:w-44.5" />
      <MenuItemContainer items={menuItems} className="hidden lg:flex" />
      <FilledButton
        content="Contact Us"
        onClick={() => navigate("/news")}
        className="hidden lg:block"
      />

      <img src={BarsIcon} className="size-8.5 cursor-pointer lg:hidden" />
    </div>
  );
};

export default NavigationBar;
