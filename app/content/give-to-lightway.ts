export type GivingArea = {
  id: string;
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  published: boolean;
  displayOrder: number;
  paymentMethod?: string;
  paymentInstructions?: string;
  paymentProvider?: string;
  currency?: string;
  minimumAmount?: number;
  maximumAmount?: number;
  receiptInformation?: string;
  approvedPaymentMessaging?: string;
};

export type GivingSectionContent = {
  visible: boolean;
  published: boolean;
  heading: string;
  supportingLine: string;
  description: string;
  actionLabel: string;
  actionUrl: string;
  areas: GivingArea[];
};

// Temporary frontend demo content only; replace with church-approved giving configuration before launch.
export const demoGivingSection: GivingSectionContent = {
  visible: true,
  published: true,
  heading: "GIVE TO LIGHTWAY",
  supportingLine: "Support the work. Strengthen the mission.",
  description:
    "DEMO COPY. Giving can support ministry, worship, community service, development, and mission. Official Lightway giving details will appear here once approved by the church.",
  actionLabel: "Give to Lightway",
  actionUrl: "/give",
  areas: [
    { id: "demo-tithe", name: "Tithe", published: true, displayOrder: 1 },
    { id: "demo-offering", name: "Offering", published: true, displayOrder: 2 },
    {
      id: "demo-renovation-development",
      name: "Renovation & Development",
      published: true,
      displayOrder: 3,
    },
    { id: "demo-missions", name: "Missions", published: true, displayOrder: 4 },
    {
      id: "demo-youth-children",
      name: "Youth & Children",
      published: true,
      displayOrder: 5,
    },
    { id: "demo-other", name: "Other", published: true, displayOrder: 6 },
  ],
};