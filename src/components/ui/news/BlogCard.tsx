import type { BlogCardType } from "../../../data/blogs";
import { ActionButton, Button, Header, LikeButton, Text } from "..";
import { useState } from "react";
import DeliveryIcon from "/icons/delivery-icon.svg";

interface BlogCardProps {
  data: BlogCardType;
}

const BlogCard = ({ data }: BlogCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col gap-y-4 2xl:gap-y-5">
      <img src={data.image} className="w-full" />
      <div className="flex flex-col gap-y-2.5 2xl:gap-y-5">
        <div>
          <Header className="mb-1 2xl:text-xl">{data.header}</Header>
          <Text className="text-sm xl:text-md 2xl:text-xl">
            {data.category}
          </Text>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2 2xl:gap-x-2.5">
            <LikeButton count={data.likes} setLiked={setLiked} liked={liked} />
            <ActionButton icon={DeliveryIcon} count={data.deliveries} />
          </div>
          <Button className="px-5!">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
