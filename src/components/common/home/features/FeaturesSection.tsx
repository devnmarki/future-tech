import FeatureIcon1 from "/icons/feature-icon-1.svg";
import FeatureLayer from "../../../ui/features/FeatureLayer";

const FeaturesSection = () => {
  return (
    <section>
      <FeatureLayer
        icon={FeatureIcon1}
        header="Future Technology Blog"
        description="Stay informed with our blog section dedicated to future technology."
      ></FeatureLayer>
    </section>
  );
};

export default FeaturesSection;
