import TodayCard from "./components/today-card";
import CommunityIntro from "./components/community-intro";
import FeaturedMessage from "./components/featured-message";
import FindYourPlace from "./components/find-your-place";
import GiveToLightway from "./components/give-to-lightway";
import SiteFooter from "./components/site-footer";
import ThisWeekFeature from "./components/this-week-feature";
import UpcomingEvents from "./components/upcoming-events";
import { featuredMessage } from "./content/featured-message";
import { demoMinistryEntries } from "./content/find-your-place";
import { demoGivingSection } from "./content/give-to-lightway";
import { siteFooterConfig } from "./content/site-footer";
import { communityIntro } from "./content/community-intro";
import { thisWeekFeature } from "./content/this-week-feature";
import { upcomingEvents } from "./content/upcoming-events";

const todayItems = [
  {
    id: "today-word",
    number: "01",
    label: "Today’s Word",
    title: "A moment in the Word.",
    description: "Daily Scripture and a short reflection will have a home here.",
  },
  {
    id: "next-event",
    number: "02",
    label: "Next Event",
    title: "What’s next at Lightway?",
    description: "Upcoming gatherings and event details will be shared here.",
  },
  {
    id: "stay-connected",
    number: "03",
    label: "Stay Connected",
    title: "Life at Lightway, together.",
    description: "Church news and ways to connect will be gathered here.",
  },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <section className="hero-section">
        <div className="page-shell hero-copy">
          <p className="hero-eyebrow">Lightway SDA Church</p>
          <h1 className="hero-title">
            One Church. One Platform.
            <br />
            <span>Everything Lightway.</span>
          </h1>
          <p className="hero-description">Worship. Grow. Connect. Serve.</p>
          <a className="hero-link" href="#today">
            Find your place today <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>

      <ThisWeekFeature feature={thisWeekFeature} />

      <UpcomingEvents events={upcomingEvents} />

      <FeaturedMessage message={featuredMessage} />

      <CommunityIntro content={communityIntro} />

      <FindYourPlace ministries={demoMinistryEntries} />

      <GiveToLightway content={demoGivingSection} />

      <section id="today" className="page-shell today-section">
        <div className="today-heading">
          <p className="section-eyebrow">Your Lightway Today</p>
          <h2>Stay connected with your church.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {todayItems.map((item) => (
            <TodayCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <SiteFooter config={siteFooterConfig} />
    </main>
  );
}