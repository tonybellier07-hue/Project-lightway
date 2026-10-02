export type ThisWeekFeatureContent = {
  category: string;
  speakerName: string;
  speakerRole: string;
  title: string;
  quote: string;
  date: string;
  time: string;
  location: string;
  image: string;
  imageAlt: string;
  actionLabel: string;
  actionUrl: string;
  isDemo: boolean;
};

export const thisWeekFeature: ThisWeekFeatureContent = {
  category: "SABBATH FEATURE",
  speakerName: "Demo Speaker",
  speakerRole: "Guest Speaker",
  title: "Walking by Faith",
  quote: "Faith grows when we choose to trust God before we see the answer.",
  date: "Saturday",
  time: "10:30 AM",
  location: "Lightway SDA Church",
  image: "/images/this-week-demo.svg",
  imageAlt:
    "Illustrative demo artwork of an open Bible beside a sunlit window; no speaker is depicted.",
  actionLabel: "View Event",
  actionUrl: "/events",
  isDemo: true,
};