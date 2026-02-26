import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";

interface MenuItemContainer {
  className?: string;
  items: Record<string, string>;
}

const MenuItemContainer = ({ className, items }: MenuItemContainer) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentLinkLabel = Object.entries(items).find(
      ([_, destination]) => destination === location.pathname,
    );

    if (currentLinkLabel) {
      setActiveLink(currentLinkLabel[0]); // currentLabel[0] is the key
    }
  }, [location.pathname, items]);

  return (
    <div className={`${className} flex items-center md:gap-6 2xl:gap-10`}>
      {Object.entries(items).map(([label, destination]) => {
        const isActive = activeLink === label;

        return (
          <Link
            key={label}
            to={destination}
            className={`
                font-inter rounded-[10px] flex justify-center items-center
                ${
                  isActive
                    ? "w-25 h-13.75 bg-black-100 text-white outline-2 outline-black-400"
                    : "text-gray-100 hover:text-white px-4"
                }
              `}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuItemContainer;
