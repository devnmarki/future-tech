import { Testimonial } from "../..";
import { testimonialsData } from "../../../data/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col items-center w-full bg-black-100">
      <div className="flex flex-col">
        <div className="flex flex-col xl:flex-row xl:gap-x-10">
          <Testimonial
            data={testimonialsData[0]}
            className="xl:ml-20 2xl:ml-40.5"
          />
          <div className="hidden xl:block w-px self-stretch bg-black-300"></div>
          <Testimonial data={testimonialsData[1]} />
          <div className="hidden xl:block w-px self-stretch bg-black-300"></div>
          <Testimonial
            data={testimonialsData[2]}
            className="xl:mr-20 2xl:mr-40.5"
          />
        </div>
        <div className="hidden xl:block h-px self-stretch bg-black-300"></div>
        <div className="flex flex-col xl:flex-row xl:gap-x-10">
          <Testimonial
            data={testimonialsData[3]}
            className="xl:ml-20 2xl:ml-40.5"
          />
          <div className="hidden xl:block w-px self-stretch bg-black-300"></div>
          <Testimonial data={testimonialsData[4]} />
          <div className="hidden xl:block w-px self-stretch bg-black-300"></div>
          <Testimonial
            data={testimonialsData[5]}
            className="xl:mr-20 2xl:mr-40.5 border-none"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
