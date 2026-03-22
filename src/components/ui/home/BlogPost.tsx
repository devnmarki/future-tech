import CommentIcon from "/icons/comment-icon.svg";
import DeliveryIcon from "/icons/delivery-icon.svg";
import type { BlogType } from "../../../data/blogs";
import { ActionButton, Button, Header, LikeButton, Text } from "..";
import { useState } from "react";

interface BlogPost {
  data: BlogType;
  buttonContent?: string;
}

const BlogPost = ({ data, buttonContent = "View Blog" }: BlogPost) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex justify-center px-4 xl:px-20 2xl:px-40.5 py-10 xl:py-15 2xl:py-20 bg-black-100 border-b border-black-300">
      <div className="flex flex-col xl:flex-row xl:justify-center gap-y-7.5 xl:gap-x-10 max-w-97 xl:max-w-none xl:w-full">
        <div className="flex items-center gap-x-2 2xl:gap-x-4 xl:w-76.25 2xl:w-[384px]">
          <img
            src={data.profileImage}
            className="w-15 h-15 2xl:w-20 2xl:h-20"
          />
          <div className="flex flex-col">
            <Header className="font-inter text-[1.125rem] 2xl:text-[1.25rem]">
              {data.name}
            </Header>
            <Text className="text-[0.875rem] xl:text-md 2xl:text-[1.125rem]">
              {data.profession}
            </Text>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row lg:items-center gap-x-10 gap-y-7.5">
          <div className="flex flex-col gap-y-7.5">
            <div className="flex flex-col gap-y-5 xl:w-3xl 2xl:w-200">
              <p className="font-inter font-semibold text-md xl:text-[1.125rem] 2xl:text-[1.25rem] text-gray-200">
                {data.post.date}
              </p>
              <div className="flex flex-col gap-y-1">
                <Header className="text-[1.125rem] xl:text-[1.375rem] 2xl:text-[1.625rem]">
                  {data.post.header}
                </Header>
                <Text className="text-[0.875rem] xl:text-md 2xl:text-[1.125rem]">
                  {data.post.description}
                </Text>
              </div>
            </div>

            <div className="flex gap-x-2">
              <LikeButton
                count={data.post.likes.toString()}
                setLiked={setLiked}
                liked={liked}
              />
              <ActionButton icon={CommentIcon} count={data.post.comments} />
              <ActionButton icon={DeliveryIcon} count={data.post.deliveries} />
            </div>
          </div>

          <Button className="w-full xl:w-fit xl:h-fit text-[0.875rem] xl:text-md 2xl:text-[1.125rem] px-5">
            {buttonContent}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
