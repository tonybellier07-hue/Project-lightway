export type MinistryCategory =
  | "youth"
  | "children"
  | "family"
  | "women"
  | "men"
  | "community"
  | "worship"
  | "service"
  | "campus";

export type MinistryEntry = {
  id: string;
  name: string;
  category: MinistryCategory;
  shortDescription: string;
  fullDescription?: string;
  image?: string;
  imageAlt?: string;
  icon?: string;
  ministryPageUrl?: string;
  published: boolean;
  displayOrder: number;
  featured: boolean;
  leaderInformation?: string;
  contactInformation?: string;
  meetingInformation?: string;
};

// Temporary frontend demo entries; future ministry content will be supplied and managed by the Lightway admin/CMS.
export const demoMinistryEntries: MinistryEntry[] = [
  {
    id: "demo-youth",
    name: "Youth",
    category: "youth",
    shortDescription: "Grow in faith, friendship, service, and purpose.",
    published: true,
    displayOrder: 1,
    featured: true,
  },
  {
    id: "demo-young-adults",
    name: "Young Adults",
    category: "youth",
    shortDescription:
      "Connect, grow, worship, and serve through every season of young adulthood.",
    published: true,
    displayOrder: 2,
    featured: true,
  },
  {
    id: "demo-ambassadors",
    name: "Ambassadors",
    category: "youth",
    shortDescription:
      "A space for young people to grow spiritually, build friendships, and serve.",
    published: true,
    displayOrder: 3,
    featured: true,
  },
  {
    id: "demo-pathfinders",
    name: "Pathfinders",
    category: "youth",
    shortDescription: "Discover faith, leadership, service, skills, and adventure.",
    published: true,
    displayOrder: 4,
    featured: true,
  },
  {
    id: "demo-adventurers",
    name: "Adventurers",
    category: "children",
    shortDescription: "Helping children grow in faith, character, family, and discovery.",
    published: true,
    displayOrder: 5,
    featured: true,
  },
  {
    id: "demo-children",
    name: "Children",
    category: "children",
    shortDescription:
      "Helping children discover Jesus through Bible learning, worship, creativity, friendship, and service.",
    ministryPageUrl: "/kids",
    published: true,
    displayOrder: 6,
    featured: true,
  },
  {
    id: "demo-women",
    name: "Women",
    category: "women",
    shortDescription: "Connect, encourage, serve, and grow together.",
    published: true,
    displayOrder: 7,
    featured: true,
  },
  {
    id: "demo-men",
    name: "Men",
    category: "men",
    shortDescription: "Build faith, fellowship, leadership, and service.",
    published: true,
    displayOrder: 8,
    featured: true,
  },
  {
    id: "demo-community",
    name: "Community",
    category: "community",
    shortDescription: "Serve others and strengthen the community around us.",
    published: true,
    displayOrder: 9,
    featured: true,
  },
  {
    id: "demo-childrens-ministries",
    name: "Children’s Ministries",
    category: "children",
    shortDescription: "A place for children to learn, grow, and belong.",
    published: true,
    displayOrder: 10,
    featured: false,
  },
  // Church leadership must confirm this ministry exists at Lightway before publication.
  {
    id: "demo-public-campus-ministry",
    name: "Public Campus Ministry",
    category: "campus",
    shortDescription: "Demo entry; confirm presence with church leadership before publishing.",
    published: false,
    displayOrder: 11,
    featured: false,
  },
];