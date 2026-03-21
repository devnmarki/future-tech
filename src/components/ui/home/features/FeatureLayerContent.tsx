import { Header, Text } from "../..";

interface ContentProps {
  icon: string;
  header: string;
  description: string;
}

const FeatureLayerContent = ({ icon, header, description }: ContentProps) => (
  <>
    <img src={icon} className="w-12.5 lg:w-15 2xl:w-20 mb-5 lg:mb-10" alt="" />
    <Header className="text-[1.5rem] lg:text-[1.875rem] 2xl:text-[2.5rem] mb-1.5">
      {header}
    </Header>
    <Text className="text-[0.875rem] lg:text-md 2xl:text-[1.125rem] mb-12.5 xl:mb-0">
      {description}
    </Text>
    <div className="w-full h-px bg-black-300 xl:hidden"></div>
  </>
);
export default FeatureLayerContent;
