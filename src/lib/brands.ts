export interface Brand {
  name: string;
  slug: string;
  category: string;
  description: string;
  url?: string;
  image?: string;
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
    name: "Yumble",
    slug: "yumble",
    category: "Food & Media",
    description:
      "A fresh take on food discovery and culinary storytelling. Yumble brings together food lovers and creators in one vibrant community.",
    status: "coming-soon",
  },
];
