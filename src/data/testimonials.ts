import TestimonialImage1 from "/images/testimonial_1.png";
import TestimonialImage2 from "/images/testimonial_2.png";
import TestimonialImage3 from "/images/testimonial_3.png";
import TestimonialImage4 from "/images/testimonial_4.png";
import TestimonialImage5 from "/images/testimonial_5.png";
import TestimonialImage6 from "/images/testimonial_6.png";

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
  {
    profileImage: TestimonialImage2,
    name: "Raj Patel",
    location: "Mumbai, India",
    message:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.",
  },
  {
    profileImage: TestimonialImage3,
    name: "Emily Adams",
    location: "London, UK",
    message:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    profileImage: TestimonialImage4,
    name: "Alan Jackson",
    location: "Houston, USA",
    message:
      "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view.",
  },
  {
    profileImage: TestimonialImage5,
    name: "Jessica Miller",
    location: "Boston, USA",
    message:
      "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
  {
    profileImage: TestimonialImage6,
    name: "Diego Lopez",
    location: "Barcelona, Spain",
    message:
      "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
  },
];
