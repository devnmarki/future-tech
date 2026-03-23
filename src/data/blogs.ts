import ProfileImage1 from "/images/blog-profile-1.png";
import ProfileImage2 from "/images/blog-profile-2.png";
import ProfileImage3 from "/images/blog-profile-3.png";
import BlogCardImage1 from "/images/recommended-blog-image-1.png";
import BlogCardImage2 from "/images/recommended-blog-image-2.png";
import BlogCardImage3 from "/images/recommended-blog-image-3.png";

type BlogContentType = {
  date: string;
  header: string;
  description: string;
  likes: string | number;
  comments: string | number;
  deliveries: string | number;
};

export type BlogType = {
  profileImage: string;
  name: string;
  profession: string;
  post: BlogContentType;
};

export const HomeBlogPosts: BlogType[] = [
  {
    profileImage: ProfileImage1,
    name: "John Techson",
    profession: "Quantum Computing",
    post: {
      date: "October 15, 2026",
      header: "The Quantum Leap in Computing",
      description:
        "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      likes: "24.5k",
      comments: 50,
      deliveries: 20,
    },
  },
  {
    profileImage: ProfileImage2,
    name: "Sarah Ethicist",
    profession: "AI Ethics",
    post: {
      date: "November 5, 2026",
      header: "The Ethical Dilemmas of AI",
      description:
        "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
      likes: "32k",
      comments: 72,
      deliveries: 18,
    },
  },
  {
    profileImage: ProfileImage3,
    name: "Astronomer X",
    profession: "Space Exploration",
    post: {
      date: "December 10, 2026",
      header: "The Mars Colonization Challenge",
      description:
        "Exploring the technical and logistical challenges of human colonization on Mars.",
      likes: "20k",
      comments: 31,
      deliveries: 12,
    },
  },
];

export type MainBlogCardType = {
  imageLink: string;
  header: string;
  description: string;
  category: string;
  publicationDate: string;
  author: string;
  likes: string;
  deliveries: number;
};

export const NewsMainBlogCard: MainBlogCardType = {
  imageLink: "/images/main_blog_image.png",
  header: "Global Climate Summit Addresses Urgent Climate Action",
  description:
    "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions.",
  category: "Enviroment",
  publicationDate: "October 10, 2026",
  author: "Jane Smith",
  likes: "14k",
  deliveries: 204,
};

export type BlogCardType = {
  image: string;
  header: string;
  category: string;
  likes: string;
  deliveries: string | number;
};

export const NewsBlogCards: BlogCardType[] = [
  {
    image: BlogCardImage1,
    header: "A Decisive Victory for Progressive Policies",
    category: "Politics",
    likes: "2.2k",
    deliveries: 60,
  },
  {
    image: BlogCardImage2,
    header: "Tech Giants Unveil Cutting-Edge AI Innovations",
    category: "Technology",
    likes: "6k",
    deliveries: 92,
  },
  {
    image: BlogCardImage3,
    header: "COVID-19 Variants",
    category: "Health",
    likes: "10k",
    deliveries: 124,
  },
];
