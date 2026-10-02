export type FooterLink = {
  id: string;
  label: string;
  href?: string;
  status?: string;
  planned?: boolean;
};

export type SiteFooterConfig = {
  visible: boolean;
  churchName: string;
  shortDescription: string;
  descriptionIsDemo: boolean;
  logo: string;
  contactInformation: {
    address?: string;
    email?: string;
    phone?: string;
  };
  exploreLinks: FooterLink[];
  connectLinks: FooterLink[];
  resourceLinks: FooterLink[];
  legalLinks: FooterLink[];
  copyrightText: string;
};

// Temporary frontend configuration only; contact, social, navigation and legal content must be approved and managed through Lightway administration.
export const siteFooterConfig: SiteFooterConfig = {
  visible: true,
  churchName: "Lightway SDA Church",
  shortDescription:
    "A digital home for worship, study, community, and connection.",
  descriptionIsDemo: true,
  logo: "/branding/sda-logo.svg",
  contactInformation: {},
  exploreLinks: [
    { id: "home", label: "Home", href: "/" },
    { id: "bible", label: "Bible", href: "/bible" },
    { id: "events", label: "Events", href: "/events" },
    { id: "watch", label: "Watch", href: "/watch" },
    { id: "more", label: "More", href: "/more" },
    { id: "ministries", label: "Ministries", href: "/ministries", planned: true },
    { id: "give", label: "Give", href: "/give", planned: true },
  ],
  connectLinks: [
    { id: "contact", label: "Contact", status: "Details not configured" },
    { id: "facebook", label: "Facebook", status: "Not configured" },
    { id: "instagram", label: "Instagram", status: "Not configured" },
    { id: "youtube", label: "YouTube", status: "Not configured" },
    { id: "whatsapp", label: "WhatsApp", status: "Not configured" },
  ],
  resourceLinks: [
    { id: "resource-bible", label: "Bible", href: "/bible" },
    { id: "hymnal", label: "Hymnal", status: "Coming soon" },
    { id: "sabbath-school", label: "Sabbath School", status: "Coming soon" },
    { id: "prayer", label: "Prayer", status: "Coming soon" },
    { id: "announcements", label: "Announcements", status: "Coming soon" },
  ],
  legalLinks: [
    { id: "privacy", label: "Privacy", href: "/privacy", planned: true },
    { id: "terms", label: "Terms", href: "/terms", planned: true },
    {
      id: "copyright",
      label: "Copyright / Content Rights",
      href: "/copyright",
      planned: true,
    },
  ],
  copyrightText: "Lightway SDA Church",
};