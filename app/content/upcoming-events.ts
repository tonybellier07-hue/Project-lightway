export type UpcomingEvent = {
  id: string;
  category: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  actionLabel: string;
  actionUrl: string;
  published: boolean;
};

// Temporary frontend demo content; future events will come from Lightway's authorized admin/content-management system.
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "demo-friday-vespers",
    category: "Vespers",
    title: "Friday Vespers",
    date: "2026-10-09",
    time: "6:00 PM",
    location: "Lightway SDA Church",
    description: "An evening of worship, prayer and reflection.",
    actionLabel: "View Event",
    actionUrl: "/events",
    published: true,
  },
  {
    id: "demo-sabbath-worship",
    category: "Sabbath",
    title: "Sabbath Worship",
    date: "2026-10-10",
    time: "10:30 AM",
    location: "Lightway SDA Church",
    description: "Gather for worship and a message of hope.",
    actionLabel: "View Event",
    actionUrl: "/events",
    published: true,
  },
  {
    id: "demo-community-gathering",
    category: "Community",
    title: "Community Gathering",
    date: "2026-10-11",
    time: "9:00 AM",
    location: "Lightway SDA Church",
    description: "Make time for fellowship and connection.",
    actionLabel: "View Event",
    actionUrl: "/events",
    published: true,
  },
];