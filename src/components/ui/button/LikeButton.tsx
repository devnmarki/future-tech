import LikeIcon from "/icons/like.svg";
import LikeFillIcon from "/icons/like-fill.svg";

interface LikeButtonProps {
  count: string;
  setLiked: (liked: boolean) => void;
  liked: boolean;
}

const LikeButton = ({ count, setLiked, liked }: LikeButtonProps) => {
  return (
    <button
      className="flex items-center gap-x-0.5 w-fit h-fit px-3 2xl:px-4 py-1.5 2xl:py-2 bg-black-200 border border-black-300 font-kumbh-sans text-[0.875rem] 2xl:text-[1.125rem] text-gray-200 rounded-full cursor-pointer"
      onClick={() => setLiked(!liked)}
    >
      <img src={LikeIcon} className={`${liked ? "hidden" : "block"}`} />
      <img src={LikeFillIcon} className={`${liked ? "block" : "hidden"}`} />
      {count}
    </button>
  );
};

export default LikeButton;
