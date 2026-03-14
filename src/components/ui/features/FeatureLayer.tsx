import { Header, Text, TextCard } from "../..";

interface FeatureLayerProps {
  icon: string;
  header: string;
  description: string;
  className?: string;
}

const FeatureLayer = ({
  icon,
  header,
  description,
  className,
}: FeatureLayerProps) => {
  return (
    <div
      className={`flex flex-col xl:flex-row xl:gap-x-15 items-center xl:justify-center w-full bg-black-100 px-4 xl:px-20 ${className}`}
    >
      <div className="flex flex-col justify-center pt-12.5 pb-7.5 xl:py-0 max-w-89.5">
        <img src={icon} className="w-12.5 lg:w-15 2xl:w-20 mb-5 lg:mb-10" />
        <Header className="text-[1.5rem] lg:text-[1.875rem] 2xl:text-[2.5rem] mb-1.5">
          {header}
        </Header>
        <Text className="text-[0.875rem] lg:text-[1rem] 2xl:text-[1.125rem] mb-12.5 xl:mb-0">
          {description}
        </Text>
        <div className="w-full h-px bg-black-300 xl:hidden"></div>
      </div>

      <div className="hidden xl:block w-px self-stretch bg-black-300"></div>

      <div className="flex flex-col w-full max-w-89.5 lg:w-auto lg:max-w-none lg:grid lg:grid-cols-[repeat(2,364px)] lg:auto-rows-[154px] 2xl:grid-cols-[repeat(2,443px)] 2xl:auto-rows-[190px] gap-4 px-4 lg:px-0 pb-7.5 xl:py-15">
        <TextCard
          header="Quantity"
          description="Over 1,000 articles on emerging tech trends and breakthroughs."
          headerClassName="text-[1.125rem] lg:tex-[1.25rem] 2xl:text-[1.5rem]"
          descClassName="text-[0.875rem] lg:text-[1rem] 2xl:text-[1.125rem]"
        />
        <TextCard
          header="Quantity"
          description="Over 1,000 articles on emerging tech trends and breakthroughs."
          headerClassName="text-[1.125rem] lg:tex-[1.25rem] 2xl:text-[1.5rem]"
          descClassName="text-[0.875rem] lg:text-[1rem] 2xl:text-[1.125rem]"
        />
        <TextCard
          header="Quantity"
          description="Over 1,000 articles on emerging tech trends and breakthroughs."
          headerClassName="text-[1.125rem] lg:tex-[1.25rem] 2xl:text-[1.5rem]"
          descClassName="text-[0.875rem] lg:text-[1rem] 2xl:text-[1.125rem]"
        />
        <TextCard
          header="Quantity"
          description="Over 1,000 articles on emerging tech trends and breakthroughs."
          headerClassName="text-[1.125rem] lg:tex-[1.25rem] 2xl:text-[1.5rem]"
          descClassName="text-[0.875rem] lg:text-[1rem] 2xl:text-[1.125rem]"
        />
      </div>
    </div>
  );
};

export default FeatureLayer;
