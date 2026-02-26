import { Header } from "..";

const HeroSection = () => {
  return (
    <section className="w-full bg-black-100">
      <div className="flex flex-col w-full items-center py-10">
        <div className="flex flex-col w-89.5 justify-center px-4">
          <h1 className="font-kumbh-sans text-black-300 text-[1.125rem] font-medium ">
            Your Journey to Tomorrow Begins Here
          </h1>
          <Header
            text="Explore the Frontiers of Artificial Intelligence"
            className="text-[1.875rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
