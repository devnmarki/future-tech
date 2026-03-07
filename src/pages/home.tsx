import {
  HeroSection,
  NavigationBar,
  NewsletterBar,
  SectionHeader,
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
    </>
  );
};

export default Home;
