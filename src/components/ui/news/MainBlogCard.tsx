import { useState } from "react";
import { ActionButton, Header, LikeButton, Text } from "..";
import type { MainBlogCardType } from "../../../data/blogs";
import DeliveryIcon from "/icons/delivery-icon.svg";

interface MainBlogCardProps {
  data: MainBlogCardType;
}

const MainBlogCard = ({ data }: MainBlogCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex justify-center w-full px-4 xl:px-20 2xl:px-40.5 py-10 xl:py-15 2xl:py-20 bg-black-100 border-t border-black-300">
      <div className="flex flex-col xl:flex-row gap-y-7.5 xl:gap-x-10  max-w-89.5 xl:max-w-none">
        <div
          style={{ backgroundImage: `url(${data.imageLink})` }}
          className="self-center w-full xl:w-128.75 xl:min-w-128.75 h-53.5 xl:h-81.25 2xl:h-106.75 bg-no-repeat bg-cover rounded-[10px]"
        ></div>
        <div className="flex flex-col gap-y-5 xl:gap-y-10 2xl:gap-y-12.5 justify-center">
          <div className="flex flex-col self-center gap-5 xl:gap-10 2xl:gap-12.5">
            <div>
              <Header className="text-xl xl:text-2xl 2xl:text-[2rem] mb-1.5 2xl:mb-7.5">
                {data.header}
              </Header>
              <Text className="text-md xl:text-lg 2xl:text-xl">
                {data.description}
              </Text>
            </div>
            <div className="flex gap-5">
              <div>
                <Text className="text-sm xl:text-md 2xl:text-lg mb-0.5">
                  Category
                </Text>
                <Text className="text-sm xl:text-md 2xl:text-lg text-white">
                  {data.category}
                </Text>
              </div>
              <div>
                <Text className="text-sm xl:text-md 2xl:text-lg mb-0.5">
                  Publication Date
                </Text>
                <Text className="text-sm xl:text-md 2xl:text-lg text-white">
                  {data.publicationDate}
                </Text>
              </div>
              <div>
                <Text className="text-sm xl:text-md 2xl:text-lg mb-0.5">
                  Author
                </Text>
                <Text className="text-sm xl:text-md 2xl:text-lg text-white">
                  {data.author}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center max-w-89.5 xl:max-w-none">
            <div className="flex gap-2">
              <LikeButton
                count={data.likes}
                setLiked={setLiked}
                liked={liked}
              />
              <ActionButton icon={DeliveryIcon} count={data.deliveries} />
            </div>
            <button
              className={`group whitespace-nowrap flex justify-center items-center gap-x-2.5 bg-black-100 outline-1 outline-black-300 px-5 py-3.5 rounded-lg cursor-pointer hover:bg-black-300 active:opacity-75 transition-all`}
            >
              <Text className="group-hover:text-white">Read More</Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogCard;
