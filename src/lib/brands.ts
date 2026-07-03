export interface Brand {
  name: string;
  slug: string;
  category: string;
  description: string;
  url?: string;
  image?: string;
  imageStyle?: "cover" | "contain";
  status: "live" | "coming-soon" | "placeholder";
}

export const brands: Brand[] = [
  {
    name: "Cellar Lounge",
    slug: "cellar-lounge",
    category: "Arts & Culture",
    description:
      "A curated platform celebrating underground arts, music, and culture. Cellar Lounge connects creatives with audiences who crave authenticity.",
    url: "https://cellarlounge.com",
    image: "/cellar-lounge-logo.png",
    status: "live",
  },
  {
    name: "Bizmoon",
    slug: "bizmoon",
    category: "AI & Business",
    description:
      "AI-powered tools built to help small businesses grow smarter. Bizmoon brings together automation and strategy in one intuitive platform.",
    url: "https://bizmoon.ai",
    image: "/bizmoon-logo.png",
    imageStyle: "contain",
    status: "live",
  },
];
