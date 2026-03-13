import { Text, Header } from "../..";

interface HighlightCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

const HighlightCard = ({
  icon,
  title,
  subtitle,
  description,
}: HighlightCardProps) => {
  return (
    <div
      className={`flex flex-col gap-y-5 py-7.5 lg:py-10 border-black-300 lg:w-90 2xl:w-106.25`}
    >
      <div className="flex flex-col gap-y-4 lg:gap-y-5">
        <img src={icon} className="w-7.5 lg:w-10" />
        <div>
          <Header className="lg:text-[1.125rem] 2xl:text-[1.25rem]">
            {title}
          </Header>
          <Text className="text-[0.875rem] lg:text-[1rem] 2xl:text-[1.125rem]">
            {subtitle}
          </Text>
        </div>
      </div>
      <Text className="text-[0.875rem] lg:text-[1rem] 2xl:text-[1.25rem]">
        {description}
      </Text>
    </div>
  );
};

export default HighlightCard;
