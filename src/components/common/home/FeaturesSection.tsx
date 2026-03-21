import { FeatureLayer } from "../..";
import FeatureIcon1 from "/icons/feature-icon-1.svg";
import FeatureIcon2 from "/icons/feature-icon-2.svg";

const layers = [
  {
    icon: FeatureIcon1,
    header: "Future Technology Blog",
    description:
      "Stay informed with our blog section dedicated to future technology.",
    cards: [
      {
        header: "Quantity",
        description:
          "Over 1,000 articles on emerging tech trends and breakthroughs.",
      },
      {
        header: "Variety",
        description:
          "Articles cover fields like AI, robotics, biotechnology, and more.",
      },
      {
        header: "Frequency",
        description: "Fresh content added daily to keep you up to date.",
      },
      {
        header: "Authoritative",
        description:
          "Written by our team of tech experts and industry professionals.",
      },
    ],
  },
  {
    icon: FeatureIcon2,
    header: "Research Insights Blogs",
    description:
      "Dive deep into future technology concepts with our research section.",
    cards: [
      {
        header: "Depth",
        description: "500+ research articles for in-depth understanding.",
      },
      {
        header: "Graphics",
        description: "Visual aids and infographics to enhance comprehension.",
      },
      {
        header: "Trends",
        description: "Explore emerging trends in future technology research.",
      },
      {
        header: "Contributors",
        description: "Contributions from tech researchers and academics.",
      },
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features">
      {layers.map((layer, index) => (
        <FeatureLayer key={index} cards={layer.cards}>
          <FeatureLayer.Content
            icon={layer.icon}
            header={layer.header}
            description={layer.description}
          />
        </FeatureLayer>
      ))}
    </section>
  );
};

export default FeaturesSection;
