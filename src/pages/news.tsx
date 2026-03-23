import {
  BlogCardContainer,
  BlogPostsSection,
  Button,
  CTASection,
  Footer,
  HeaderSection,
  MainBlogCard,
  NavigationBar,
  NewsletterBar,
  SectionHeader,
} from "../components";
import { NewsBlogPosts, NewsMainBlogCard } from "../data/blogs";

const News = () => {
  return (
    <>
      <NewsletterBar />
      <NavigationBar />

      <HeaderSection
        headerPrimary="Today's Headlines: Stay"
        headerSecondary="Informed"
        description="Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage."
      />
      <MainBlogCard data={NewsMainBlogCard} />
      <BlogCardContainer />

      <SectionHeader
        header="Discover the World of Headlines"
        subheader="Welcome to Our News Hub"
      >
        <Button className="w-full max-w-89.5 lg:w-fit mt-7.5 lg:mt-0 text-[0.875rem]">
          View All News
        </Button>
      </SectionHeader>
      <BlogPostsSection data={NewsBlogPosts} />

      <CTASection />
      <Footer />
    </>
  );
};

export default News;
