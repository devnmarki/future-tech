import TestimonialImage1 from "/images/testimonial_1.png";

export type TestimonialData = {
  profileImage: string;
  name: string;
  location: string;
  message: string;
};

export const testimonialsData: TestimonialData[] = [
  {
    profileImage: TestimonialImage1,
    name: "Sarah Thompson",
    location: "San Francisco, USA",
    message:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
];
