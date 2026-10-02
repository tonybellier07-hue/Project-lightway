export type FeaturedMessageContent = {
  id: string;
  category: string;
  title: string;
  speakerName: string;
  speakerRole?: string;
  type: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  videoUrl?: string;
  duration?: string;
  actionLabel: string;
  actionUrl: string;
  published: boolean;
  featured: boolean;
};

// Temporary frontend demo content; future messages will come from Lightway's admin/CMS.
export const featuredMessage: FeaturedMessageContent = {
  id: "demo-message-peace",
  category: "FEATURED MESSAGE",
  title: "Finding Peace in the Presence of God",
  speakerName: "Demo Speaker",
  speakerRole: "Guest Speaker",
  type: "Sabbath Worship",
  date: "2026-10-03",
  description:
    "A short demo description showing how Lightway could present a recent message and invite members and visitors to watch.",
  image: "/images/featured-message-demo.svg",
  imageAlt:
    "Illustrative demo artwork of an open book and sound waves; no speaker is depicted.",
  actionLabel: "Watch Message",
  actionUrl: "/watch",
  published: true,
  featured: true,
};