import TwitterIcon from "/icons/twitter-icon.svg";
import MediumIcon from "/icons/medium-icon.svg";
import LinkedInIcon from "/icons/linked-in-icon.svg";
import { Button, FooterLinksContainer, Header } from "..";
import { Link } from "react-router";

const footerLinks = {
  Home: [
    { name: "Features" },
    { name: "Blogs" },
    { name: "Resources", isNew: true },
    { name: "Testimonials" },
    { name: "Contact Us" },
    { name: "Newsletter" },
  ],
  News: [
    { name: "Trending Stories" },
    { name: "Featured Videos" },
    { name: "Technology" },
    { name: "Health" },
    { name: "Politics" },
    { name: "Environment" },
  ],
  Podcasts: [
    { name: "AI Revolution" },
    { name: "AI Revolution", isNew: true },
    { name: "TechTalk AI" },
    { name: "AI Conversations" },
  ],
  Blogs: [
    { name: "Quantum Computing" },
    { name: "AI Ethics" },
    { name: "Space Exploration" },
    { name: "Biotechnology", isNew: true },
    { name: "Renewable Energy" },
    { name: "Biohacking" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-black-100 border-t border-black-300 flex justify-center">
      <div className="w-full max-w-89.5 xl:max-w-none px-4 xl:px-20 flex flex-col items-center">
        <div className="w-full flex flex-col xl:flex-row gap-y-10 xl:gap-x-12 2xl:gap-x-20 py-10 xl:py-15 2xl:py-20">
          <div className="grid grid-cols-2 xl:flex xl:flex-1 gap-10 xl:gap-x-12 2xl:gap-x-20">
            <FooterLinksContainer header="Home" links={footerLinks.Home} />
            <FooterLinksContainer header="News" links={footerLinks.News} />
            <FooterLinksContainer
              header="Podcasts"
              links={footerLinks.Podcasts}
            />
            <FooterLinksContainer header="Blogs" links={footerLinks.Blogs} />
          </div>

          <div className="w-full xl:w-80 flex flex-col gap-y-6">
            <Header className="xl:text-lg 2xl:text-xl">Resources</Header>
            <div className="flex flex-wrap xl:flex-nowrap xl:flex-col xl:items-start gap-3">
              {["Whitepapers", "Ebooks", "Reports", "Research Papers"].map(
                (item) => (
                  <Button
                    key={item}
                    className="px-4! py-3! text-sm xl:text-md 2xl:text-lg"
                  >
                    {item}
                  </Button>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-black-300 flex flex-col items-center gap-y-6 py-6 2xl:py-10">
          <div className="flex gap-x-4">
            <img
              src={TwitterIcon}
              className="w-5 h-5 2xl:w-6 2xl:h-6 cursor-pointer opacity-80 transition-opacity hover:opacity-100"
            />
            <img
              src={MediumIcon}
              className="w-5 h-5 2xl:w-6 2xl:h-6 cursor-pointer opacity-80 hover:opacity-100"
            />
            <img
              src={LinkedInIcon}
              className="w-5 h-5 2xl:w-6 2xl:h-6 cursor-pointer opacity-80 hover:opacity-100"
            />
          </div>

          <div className="flex items-center gap-x-3 text-black-800 text-sm">
            <Link
              to="#"
              className="hover:text-white transition-colors 2xl:text-lg"
            >
              Terms & Conditions
            </Link>
            <div className="w-0.5 self-stretch bg-black-300"></div>
            <Link
              to="#"
              className="hover:text-white transition-colors 2xl:text-lg"
            >
              Privacy Policy
            </Link>
          </div>

          <p className="text-black-800 text-sm 2xl:text-lg font-inter">
            &copy; 2024 FutureTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
