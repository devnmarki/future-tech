import EbooksIcon from "/icons/ebooks-icon.svg";
import WhitepapersIcon from "/icons/whitepapers-icon.svg";
import AvatarImage1 from "/images/profile_1.png";
import AvatarImage2 from "/images/profile_2.png";
import AvatarImage3 from "/images/profile_3.png";
import AvatarImage4 from "/images/profile_4.png";
import AvatarImage5 from "/images/profile_5.png";
import AvatarImage6 from "/images/profile_6.png";
import AvatarImage7 from "/images/profile_7.png";
import AvatarImage8 from "/images/profile_8.png";

type ResourceRowCard = {
  header: string;
  text: string;
};

type ResourceRowContentData = {
  header: string;
  description: string;
  image: string;
  cards: ResourceRowCard[];
};

export type ResourceRowData = {
  icon: string;
  header: string;
  description: string;
  buttonContent: string;
  avatars: string[];
  content: ResourceRowContentData;
};

export const resourceRows: ResourceRowData[] = [
  {
    icon: EbooksIcon,
    header: "Ebooks",
    description:
      "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
    buttonContent: "Download Ebooks Now",
    avatars: [AvatarImage1, AvatarImage2, AvatarImage3, AvatarImage4],
    content: {
      header: "Variety of Topics",
      description:
        "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
      image: "/images/resources-image-1.png",
      cards: [
        {
          header: "Total Ebooks",
          text: "Over 100 ebooks",
        },
        {
          header: "Average Author Expertise",
          text: "Ebooks are authored by renowned experts with an average of 15 years of experience",
        },
      ],
    },
  },

  {
    icon: WhitepapersIcon,
    header: "Whitepapers",
    description:
      "Dive into comprehensive reports and analyses with our collection of whitepapers.",
    buttonContent: "Download Whitepapers Now",
    avatars: [AvatarImage5, AvatarImage6, AvatarImage7, AvatarImage8],
    content: {
      header: "Topics Coverage",
      description:
        "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
      image: "/images/resources-image-2.png",
      cards: [
        {
          header: "Total Whitepapers",
          text: "Over 50 whitepapers",
        },
        {
          header: "Average Author Expertise",
          text: "Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
        },
      ],
    },
  },
];
