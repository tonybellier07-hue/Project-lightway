export type CommunityIntroContent = {
  heading: string;
  supportingLine: string;
  description: string;
  image: string;
  imageAlt: string;
  supportingStatements: string[];
  visible: boolean;
  published: boolean;
};

// Temporary frontend demo copy and artwork; final content will be approved and supplied by the Lightway church admin/CMS.
export const communityIntro: CommunityIntroContent = {
  heading: "MORE THAN A PLACE. A COMMUNITY.",
  supportingLine: "Faith grows when we walk together.",
  description:
    "Lightway is a community where people come together to worship, learn, serve, and grow in faith. Whether you are discovering the church for the first time or have walked with this community for years, there is a place for you here.",
  image: "/images/community-demo.svg",
  imageAlt:
    "A gentle illustrative scene of people gathered together in a welcoming space; demo artwork, not a photograph of Lightway members.",
  supportingStatements: ["Worship", "Fellowship", "Growth", "Service"],
  visible: true,
  published: true,
};