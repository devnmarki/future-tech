import {
  BlogCardContainer,
  CTASection,
  Footer,
  HeaderSection,
  MainBlogCard,
  NavigationBar,
  NewsletterBar,
} from "../components";
import { NewsMainBlogCard } from "../data/blogs";

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

      <CTASection />
      <Footer />
    </>
  );
};

export default News;
