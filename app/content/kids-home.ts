export type KidsResourceType =
  | "childrens-bible"
  | "bible-story"
  | "memory-verse"
  | "lesson"
  | "activity"
  | "game"
  | "coloring"
  | "quiz"
  | "challenge"
  | "sabbath-school"
  | "family-resource"
  | "achievement"
  | "song"
  | "video"
  | "prayer";

export type KidsAgeGroup = "little-ones" | "kids" | "older-kids";
export type KidsResourceGroup = "discover" | "play-create" | "grow";
export type KidsResourceIcon =
  | "bible"
  | "story"
  | "verse"
  | "school"
  | "game"
  | "activity"
  | "color"
  | "quiz"
  | "challenge"
  | "music"
  | "prayer"
  | "watch"
  | "journey";
export type KidsResourceTone = "sky" | "leaf" | "sun" | "coral";

export type KidsResourcePreview = {
  id: string;
  title: string;
  description: string;
  type: KidsResourceType;
  group: KidsResourceGroup;
  icon: KidsResourceIcon;
  tone: KidsResourceTone;
  ageGroups?: KidsAgeGroup[];
  image?: string;
  imageAlt?: string;
  resourceUrl?: string;
  displayOrder: number;
  published: boolean;
};

export type KidsResourceGroupContent = {
  id: KidsResourceGroup;
  title: string;
  description: string;
};

export type KidsFeaturedStory = {
  title: string;
  description: string;
  note: string;
  image: string;
  imageAlt: string;
};

export type KidsHomeContent = {
  image: string;
  imageAlt: string;
  heroTitle: string;
  heroGreeting: string;
  heroPhrase: string;
  heroSupportingText: string;
  experienceHeading: string;
  experienceIntroduction: string;
  resourceGroups: KidsResourceGroupContent[];
  resources: KidsResourcePreview[];
  featuredStory: KidsFeaturedStory;
  ageHeading: string;
  ageIntroduction: string;
  ageGroups: { id: KidsAgeGroup; label: string }[];
  familyHeading: string;
  familyDescription: string;
  familyPractices: string[];
  journeyHeading: string;
  journeySupportingText: string;
  journeyDescription: string;
  journeyStages: string[];
};

// Temporary frontend demo content. Future resources must be approved, child-safe, and supplied through Lightway administration; no child personal data is modeled here.
export const kidsHomeContent: KidsHomeContent = {
  image: "/images/lightway-kids-demo.svg",
  imageAlt:
    "An illustrated Lightway Kids world with children, nature, and an open Bible.",
  heroTitle: "Growing with Jesus.",
  heroGreeting: "WELCOME, FRIEND!",
  heroPhrase: "LEARN · PLAY · DISCOVER · GROW",
  heroSupportingText:
    "A place to discover God’s Word, ask questions, create, worship, and grow.",
  experienceHeading: "WHAT DO YOU WANT TO EXPLORE?",
  experienceIntroduction:
    "Open God’s Word, try something new, and see where your curiosity leads.",
  resourceGroups: [
    {
      id: "discover",
      title: "DISCOVER",
      description:
        "The Bible opens first; stories and learning will grow here.",
    },
    {
      id: "play-create",
      title: "PLAY & CREATE",
      description: "Games, art, and activities are being shaped for kids.",
    },
    {
      id: "grow",
      title: "GROW",
      description:
        "Songs, prayer, approved videos, and private progress will come with time.",
    },
  ],
  resources: [
    {
      id: "childrens-bible",
      title: "Children’s Bible",
      description: "Read & discover",
      type: "childrens-bible",
      group: "discover",
      icon: "bible",
      tone: "sky",
      resourceUrl: "/bible",
      displayOrder: 1,
      published: true,
    },
    {
      id: "bible-stories",
      title: "Bible Stories",
      description: "Stories of faith, courage, and hope",
      type: "bible-story",
      group: "discover",
      icon: "story",
      tone: "sun",
      resourceUrl: "#kids-story-feature",
      displayOrder: 2,
      published: true,
    },
    {
      id: "memory-verses",
      title: "Memory Verses",
      description: "Keep a good word close",
      type: "memory-verse",
      group: "discover",
      icon: "verse",
      tone: "coral",
      displayOrder: 3,
      published: true,
    },
    {
      id: "sabbath-school",
      title: "Sabbath School",
      description: "Bible learning for every stage",
      type: "sabbath-school",
      group: "discover",
      icon: "school",
      tone: "leaf",
      displayOrder: 4,
      published: true,
    },
    {
      id: "games",
      title: "Games",
      description: "Play your way through learning",
      type: "game",
      group: "play-create",
      icon: "game",
      tone: "sky",
      displayOrder: 5,
      published: true,
    },
    {
      id: "activities",
      title: "Activities",
      description: "Try, make, and explore",
      type: "activity",
      group: "play-create",
      icon: "activity",
      tone: "sun",
      displayOrder: 6,
      published: true,
    },
    {
      id: "create-color",
      title: "Create & Color",
      description: "Make something your own",
      type: "coloring",
      group: "play-create",
      icon: "color",
      tone: "coral",
      displayOrder: 7,
      published: true,
    },
    {
      id: "quizzes",
      title: "Quizzes",
      description: "See what you remember",
      type: "quiz",
      group: "play-create",
      icon: "quiz",
      tone: "leaf",
      displayOrder: 8,
      published: true,
    },
    {
      id: "challenges",
      title: "Challenges",
      description: "Try a new way to grow",
      type: "challenge",
      group: "play-create",
      icon: "challenge",
      tone: "sky",
      displayOrder: 9,
      published: true,
    },
    {
      id: "songs-worship",
      title: "Songs & Worship",
      description: "Sing, praise, and worship",
      type: "song",
      group: "grow",
      icon: "music",
      tone: "sun",
      displayOrder: 10,
      published: true,
    },
    {
      id: "prayer",
      title: "Prayer Corner",
      description: "Let’s talk to God",
      type: "prayer",
      group: "grow",
      icon: "prayer",
      tone: "coral",
      displayOrder: 11,
      published: true,
    },
    {
      id: "watch",
      title: "Watch",
      description: "A space for videos chosen with care",
      type: "video",
      group: "grow",
      icon: "watch",
      tone: "leaf",
      displayOrder: 12,
      published: true,
    },
    {
      id: "my-journey",
      title: "My Journey",
      description: "A place for your story to unfold",
      type: "achievement",
      group: "grow",
      icon: "journey",
      tone: "sky",
      displayOrder: 13,
      published: true,
    },
  ],
  featuredStory: {
    title: "Meet the people. Discover the stories. See God at work.",
    description:
      "A welcoming space for Bible stories, thoughtful questions, and discovery through God’s Word.",
    note: "Approved, age-appropriate stories will be added as Lightway Kids grows.",
    image: "/images/lightway-kids-story.svg",
    imageAlt:
      "Illustration of an open Bible with a young green shoot growing in morning light.",
  },
  ageHeading: "GROW AT YOUR OWN PACE",
  ageIntroduction:
    "Lightway Kids will grow to offer age-appropriate experiences, shaped with care and without fixed age ranges.",
  ageGroups: [
    { id: "little-ones", label: "Little Ones" },
    { id: "kids", label: "Kids" },
    { id: "older-kids", label: "Older Kids" },
  ],
  familyHeading: "GROWING TOGETHER",
  familyDescription:
    "Faith isn’t only something we learn on our own. Lightway Kids is designed to help families discover, worship, pray, and grow together.",
  familyPractices: ["Discover", "Worship", "Pray", "Grow"],
  journeyHeading: "THE JOURNEY CONTINUES",
  journeySupportingText: "Lightway is designed to grow with you.",
  journeyDescription:
    "Different opportunities can support people at different stages of life. This is one way to picture a wider journey, not a required path for every child.",
  journeyStages: [
    "Lightway Kids",
    "Adventurers",
    "Pathfinders",
    "Ambassadors",
    "Youth",
    "Young Adults",
  ],
};