import {
  HeroSection,
  NavigationBar,
  NewsletterBar,
  SectionHeader,
  FeaturesSection,
  BlogPostsSection,
  Button,
} from "../components";

const Home = () => {
  return (
    <>
      <NewsletterBar />
      <NavigationBar />

      <HeroSection />

      <SectionHeader
        header="FutureTech Features"
        subheader="Unlock the Power of"
      />
      <FeaturesSection />

      <SectionHeader
        header="Explore FutureTech's In-Depth Blog Posts"
        subheader="A Knowledge Treasure Trove"
      >
        <Button className="w-full max-w-89.5 lg:w-fit mt-7.5 lg:mt-0 text-[0.875rem]">
          View All Blogs
        </Button>
      </SectionHeader>
      <BlogPostsSection />
    </>
  );
};

export default Home;
