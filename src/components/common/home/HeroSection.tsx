import HeroImage from "/images/hero_image.png";
import Profile1Picture from "/images/profile_1.png";
import Profile2Picture from "/images/profile_2.png";
import Profile3Picture from "/images/profile_3.png";
import Profile4Picture from "/images/profile_4.png";
import HighlightIcon1 from "/icons/highlight-icon-1.svg";
import HighlightIcon2 from "/icons/highlight-icon-2.svg";
import HighlightIcon3 from "/icons/highlight-icon-3.svg";
import { Header, Stat, Text, Button, HighlightCard } from "../..";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center lg:pl-20 2xl:pl-40.5 w-full bg-black-100">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center lg:items-start pt-10 lg:pt-25 2xl:pt-37.5">
          <div className="flex flex-col gap-y-3.5">
            <h1 className="font-kumbh-sans text-black-800 text-[1.125rem] font-medium lg:text-[1.375rem]">
              Your Journey to Tomorrow Begins Here
            </h1>

            <div className="flex flex-col gap-y-2.5 mb-7.5 w-89.5 lg:w-160 lg:pr-10 xl:w-179 2xl:w-223.25 2xl:pr-12.5">
              <Header className="text-[1.875rem] lg:text-[3.4375rem] 2xl:text-[4.375rem]">
                Explore the Frontiers of Artificial Intelligence
              </Header>
              <Text className="text-[0.875rem] lg:hidden">
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future.
              </Text>
              <Text className="hidden text-md lg:block">
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </Text>
            </div>
          </div>

          <div className="w-full h-px bg-black-300"></div>

          <div className="flex gap-x-5 h-31 lg:h-full">
            <Stat
              value={300}
              className="max-w-24.5 lg:max-w-none lg:w-50 2xl:w-62"
            >
              Resources available
            </Stat>
            <div className="w-px h-full bg-black-300"></div>
            <Stat
              value={12000}
              className="max-w-24.5 lg:max-w-none lg:w-50 2xl:w-62"
            >
              Total Downloads
            </Stat>
            <div className="w-px h-full bg-black-300"></div>
            <Stat
              value={10000}
              className="max-w-24.5 lg:max-w-none lg:w-50 2xl:w-62"
            >
              Active Users
            </Stat>
          </div>
          <div className="hidden lg:block w-full h-px bg-black-300"></div>
        </div>

        <div className="relative w-full lg:flex-1 flex flex-col justify-center lg:justify-end overflow-hidden border-t lg:border-t-0 lg:border-l border-black-300 py-10 lg:py-0 border-b">
          <img
            src={HeroImage}
            className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto -top-10 z-0 w-[180%] lg:w-[140%] opacity-40 pointer-events-none"
            alt="Background Decor"
          />

          <div className="relative z-10 p-6 lg:p-10 2xl:p-15 flex flex-col items-center lg:items-start gap-y-6 text-center lg:text-left">
            <div className="flex w-fit bg-black-200 backdrop-blur-md p-2 rounded-full border-2 border-black-300">
              <img
                src={Profile1Picture}
                className="rounded-full border-black-100"
              />
              <img
                src={Profile2Picture}
                className="rounded-full border-black-100 -ml-4"
              />
              <img
                src={Profile3Picture}
                className="rounded-full border-black-100 -ml-4"
              />
              <img
                src={Profile4Picture}
                className="rounded-full border-black-100 -ml-4"
              />
            </div>

            <div className="max-w-90 lg:max-w-none">
              <Header className="text-lg lg:text-xl 2xl:text-2xl mb-2">
                Explore 1000+ resources
              </Header>
              <Text className="text-sm lg:text-md">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </Text>
            </div>

            <Button>Explore Resources</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-stretch px-4 lg:px-0 lg:flex-row lg:gap-x-12.5 2xl:gap-x-20">
        <HighlightCard
          icon={HighlightIcon1}
          title="Latest News Updates"
          subtitle="Stay Current"
          description="Over 1,000 articles published monthly"
        />
        <div className="w-full h-px bg-black-300 lg:w-px lg:h-auto lg:self-stretch"></div>
        <HighlightCard
          icon={HighlightIcon2}
          title="Expert Contributors"
          subtitle="Trusted Insights"
          description="50+ renowned AI experts on our team"
        />
        <div className="w-full h-px bg-black-300 lg:w-px lg:h-auto lg:self-stretch"></div>
        <HighlightCard
          icon={HighlightIcon3}
          title="Latest News Updates"
          subtitle="Stay Current"
          description="Over 1,000 articles published monthly"
        />
      </div>
    </section>
  );
};

export default HeroSection;
