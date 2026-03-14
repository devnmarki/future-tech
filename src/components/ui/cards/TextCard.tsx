import { Header, Text } from "../..";

interface TextCardProps {
  header: string;
  description: string;
  headerClassName?: string;
  descClassName?: string;
}

const TextCard = ({
  header,
  description,
  headerClassName,
  descClassName,
}: TextCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-1 p-6 bg-black-200 outline-1 outline-black-300 rounded-[10px]">
      <Header className={`text-[1.125rem] ${headerClassName}`}>{header}</Header>
      <Text className={`text-[0.875rem] ${descClassName}`}>{description}</Text>
    </div>
  );
};

export default TextCard;
