import StarIcon from "/icons/star-icon.svg";
import { Card, Header, Text } from "../..";
import type { TestimonialData } from "../../../data/testimonials";

interface TestimonialProps {
  data: TestimonialData;
  className?: string;
}

const Testimonial = ({ data, className = "" }: TestimonialProps) => {
  return (
    <div
      className={`flex flex-col gap-y-7.5 items-center w-full px-4 xl:px-0 py-10 max-w-89.5 xl:max-w-none border-b xl:border-none border-black-300 ${className}`}
    >
      <div className="w-full flex justify-center gap-x-2.5">
        <img src={data.profileImage} className="w-12.5 h-12.5" />
        <div>
          <Header className="text-lg">{data.name}</Header>
          <Text className="text-md">{data.location}</Text>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-x-1 px-3 py-2 bg-black-100 border border-black-300 rounded-full -mb-4 z-10">
          <img src={StarIcon} />
          <img src={StarIcon} />
          <img src={StarIcon} />
          <img src={StarIcon} />
          <img src={StarIcon} />
        </div>
        <Card>
          <Text className="text-white text-sm text-center">{data.message}</Text>
        </Card>
      </div>
    </div>
  );
};

export default Testimonial;
