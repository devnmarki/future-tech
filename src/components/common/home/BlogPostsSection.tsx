import { useState } from "react";
import { HomeBlogPosts } from "../../../data/blogs";
import { BlogPost, FilterButton } from "../..";

const filterCategories: string[] = [
  "All",
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
];

const BlogPostsSection = () => {
  const [currentFilter, setCurrentFilter] = useState(0);

  return (
    <section>
      <div className="flex xl:justify-center gap-x-3.5 bg-black-100 border-b px-4 lg:px-20 py-5 border-black-300 overflow-x-auto no-scrollbar">
        {filterCategories.map((category, index) => (
          <FilterButton
            key={category}
            onClick={() => setCurrentFilter(index)}
            currentFilter={currentFilter}
            index={index}
          >
            {category}
          </FilterButton>
        ))}
      </div>
      <div className="flex flex-col">
        {HomeBlogPosts.map((blogData, index) => (
          <BlogPost data={blogData} key={index} />
        ))}
      </div>
    </section>
  );
};

export default BlogPostsSection;
