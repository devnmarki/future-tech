import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";

interface MenuItemContainer {
  className?: string;
  items: Record<string, string>;
  horizontal?: boolean;
}

const MenuItemContainer = ({
  className,
  items,
  horizontal = true,
}: MenuItemContainer) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const match = Object.entries(items).find(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_label, destination]) => destination === location.pathname,
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveLink(match ? match[0] : "");
  }, [location.pathname, items]);

  return (
    <div
      className={`${className} flex ${horizontal ? "flex-row" : "flex-col"} gap-y-6 items-center md:gap-6 2xl:gap-10`}
    >
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
                    ? "w-full h-13.75 px-6 bg-black-100 text-white outline-2 outline-black-400 hover:opacity-75 active:opacity-50"
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
