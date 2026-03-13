import {
  HeroSection,
  NavigationBar,
  NewsletterBar,
  SectionHeader,
  FeaturesSection,
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
    </>
  );
};

export default Home;
