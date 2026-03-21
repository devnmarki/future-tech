import { Link } from "react-router";
import { Header } from "..";

interface FooterLinksContainerProps {
  header: string;
  links: { name: string; isNew?: boolean }[];
}

const FooterLinksContainer = ({ header, links }: FooterLinksContainerProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-4 xl:gap-y-6">
      <Header className="xl:text-lg 2xl:text-xl">{header}</Header>
      <div className="flex flex-col gap-y-2 xl:gap-y-3">
        {links.map((link, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <Link
              to={"#"}
              className="font-inter text-sm xl:text-md 2xl:text-lg text-black-800 transition-colors hover:text-white truncate"
            >
              {link.name}
            </Link>
            {link.isNew && (
              <span className="px-2 py-0.5 text-[10px] 2xl:text-sm bg-black-200 border border-black-300 text-white rounded-md">
                New
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksContainer;
