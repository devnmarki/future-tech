import {
  CTASection,
  Footer,
  HeaderSection,
  NavigationBar,
  NewsletterBar,
} from "../components";

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

      <CTASection />
      <Footer />
    </>
  );
};

export default News;
