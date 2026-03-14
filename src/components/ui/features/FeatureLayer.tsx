import type { ReactNode } from "react";
import { Header, Text, Card } from "../..";
import Content from "./Content";

type CardData = {
  header: string;
  description: string;
};

interface FeatureLayerProps {
  children?: ReactNode;
  cards?: CardData[];
  className?: string;
}

const FeatureLayer = ({
  children,
  cards = [],
  className = "",
}: FeatureLayerProps) => {
  return (
    <div
      className={`flex flex-col xl:flex-row xl:gap-x-15 2xl:gap-x-20 items-center xl:justify-center w-full bg-black-100 px-4 xl:px-20 border-b border-black-300 ${className}`}
    >
      <div className="flex flex-col justify-center pt-12.5 pb-7.5 xl:py-0 max-w-89.5">
        {children}
      </div>

      <div className="hidden xl:block w-px self-stretch bg-black-300"></div>

      <div className="flex flex-col w-full max-w-89.5 lg:w-auto lg:max-w-none lg:grid lg:grid-cols-[repeat(2,364px)] lg:auto-rows-[154px] 2xl:grid-cols-[repeat(2,443px)] 2xl:auto-rows-[190px] gap-4 px-4 lg:px-0 pb-7.5 xl:py-15 xl:gap-5 2xl:gap-7.5">
        {cards != null &&
          cards.map((card, index) => (
            <Card key={index}>
              <Header className="text-[1.125rem] lg:tex-[1.25rem] 2xl:text-[1.5rem]">
                {card.header}
              </Header>
              <Text className="text-[0.875rem] lg:text-[1rem] 2xl:text-[1.125rem]">
                {card.description}
              </Text>
            </Card>
          ))}
      </div>
    </div>
  );
};

FeatureLayer.Content = Content;

export default FeatureLayer;
