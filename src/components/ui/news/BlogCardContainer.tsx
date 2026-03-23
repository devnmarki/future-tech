import { NewsBlogCards } from "../../../data/blogs";
import { BlogCard } from ".";

const BlogCardContainer = () => {
  return (
    <div className="flex flex-col w-full bg-black-100 border-t border-black-300 px-4 xl:px-20 2xl:px-40.5">
      <div className="flex flex-col xl:flex-row py-10 xl:py-15 2xl:py-20 max-w-89.5 xl:max-w-none self-center gap-7.5">
        {NewsBlogCards.map((data, index) => (
          <BlogCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default BlogCardContainer;
