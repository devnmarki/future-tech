import { Card, Header, Text } from "..";
import LogoIcon from "/icons/logo-icon.svg";
import ArrowButtonIcon from "/icons/arrow-button-icon.svg";

const CTASection = () => {
  return (
    <section className="flex justify-center w-full bg-black-200 px-4 xl:px-20 2xl:px-40.5 py-10 xl:py-20 border-b border-t border-black-300">
      <div className="flex flex-col gap-y-10 xl:gap-y-12.5 2xl:gap-y-25">
        <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-x-15 max-w-89.5 xl:max-w-none ">
          <div className="flex items-center gap-x-5 mb-5 xl:mb-0">
            <img src={LogoIcon} className="w-15 xl:w-30 2xl:w-37.5" />
            <div className="w-fit px-2 py-1 bg-black-400 rounded-sm xl:hidden">
              <Header className="font-inter text-sm">
                Learn, Connect, and Innovate
              </Header>
            </div>
          </div>
          <div>
            <div className="w-fit px-2 py-1 bg-black-400 rounded-sm xl:mb-2.5 2xl:mb-4 max-xl:hidden">
              <Header className="font-inter text-sm xl:text-md 2xl:text-lg">
                Learn, Connect, and Innovate
              </Header>
            </div>
            <Header className="text-[1.75rem] xl:text-[2.75rem] 2xl:text-[3.625rem] mb-1 xl:mb-5 2xl:mb-7.5">
              Be Part of the Future Tech Revolution
            </Header>
            <Text className="text-sm xl:hidden">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources.
            </Text>
            <Text className="text-md 2xl:text-lg max-xl:hidden">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </Text>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-y-2.5 xl:gap-x-2.5 2xl:gap-x-5 w-full max-w-89.5 xl:max-w-none bg-black-100 p-2.5 2xl:p-5 border border-black-300 rounded-[10px]">
          <Card className="justify-start gap-y-2.5 xl:gap-y-4 2xl:gap-y-5 xl:w-[33%] xl:p-7.5 2xl:p-10">
            <div className="w-full flex justify-between items-center">
              <Header className="xl:text-lg 2xl:text-[1.375rem]">
                Resource Access
              </Header>
              <img
                src={ArrowButtonIcon}
                className="xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 cursor-pointer"
              />
            </div>
            <Text className="text-sm xl:text-md 2xl:text-lg">
              Visitors can access a wide range of resources, including ebooks,
              whitepapers, reports.
            </Text>
          </Card>

          <Card className="justify-start gap-y-2.5 xl:gap-y-4 2xl:gap-y-5 xl:w-[33%] xl:p-7.5 2xl:p-10">
            <div className="w-full flex justify-between items-center">
              <Header className="xl:text-lg 2xl:text-[1.375rem]">
                Community Forum
              </Header>
              <img
                src={ArrowButtonIcon}
                className="xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 cursor-pointer"
              />
            </div>
            <Text className="text-sm xl:text-md 2xl:text-lg">
              Join our active community forum to discuss industry trends, share
              insights, and collaborate with peers.
            </Text>
          </Card>

          <Card className="justify-start gap-y-2.5 xl:gap-y-4 2xl:gap-y-5 xl:w-[33%] xl:p-7.5 2xl:p-10">
            <div className="w-full flex justify-between items-center">
              <Header className="xl:text-lg 2xl:text-[1.375rem]">
                Tech Events
              </Header>
              <img
                src={ArrowButtonIcon}
                className="xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 cursor-pointer"
              />
            </div>
            <Text className="text-sm xl:text-md 2xl:text-lg">
              Stay updated on upcoming tech events, webinars, and conferences to
              enhance your knowledge.
            </Text>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
