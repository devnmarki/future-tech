import { ResourceRow } from "../..";
import { resourceRows } from "../../../data/resources";

const ResourcesSection = () => {
  return (
    <section className="w-full bg-black-100">
      <ResourceRow data={resourceRows[0]} />
      <ResourceRow data={resourceRows[1]} />
    </section>
  );
};

export default ResourcesSection;
