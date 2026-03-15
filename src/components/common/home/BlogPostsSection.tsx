import { useState } from "react";
import { FilterButton } from "../../ui/button";

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
    </section>
  );
};

export default BlogPostsSection;
