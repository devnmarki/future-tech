import { Header, Text } from "..";

const HeroSection = () => {
  return (
    <section className="w-full bg-black-100">
      <div className="flex flex-col w-full px-4 items-center py-10">
        <div className="flex flex-col w-89.5 justify-center gap-y-3.5 lg:w-179.25 2xl:w-223.25">
          <h1 className="font-kumbh-sans text-black-300 text-[1.125rem] font-medium lg:text-[1.375rem]">
            Your Journey to Tomorrow Begins Here
          </h1>

          <div className="flex flex-col gap-y-2.5">
            <Header className="text-[1.875rem] lg:text-[3.4375rem] 2xl:text-[4.375rem]">
              Explore the Frontiers of Artificial Intelligence
            </Header>
            <Text className="text-[0.875rem] lg:hidden">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future.
            </Text>
            <Text className="hidden text-[1rem] lg:block 2xl:text-[1.125rem]">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
