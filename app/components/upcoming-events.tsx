import Link from "next/link";
import type { UpcomingEvent } from "../content/upcoming-events";

type UpcomingEventsProps = {
  events: UpcomingEvent[];
};

function getEventDateLabels(dateValue: string) {
  const date = new Date(`${dateValue}T12:00:00`);

  return {
    weekday: new Intl.DateTimeFormat("en-US", { weekday: "short" })
      .format(date)
      .toUpperCase(),
    day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
    fullDate: new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(date),
  };
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  const publishedEvents = events.filter((event) => event.published);

  return (
    <section
      className="upcoming-section"
      aria-labelledby="upcoming-heading"
      aria-describedby="upcoming-demo-note"
    >
      <div className="page-shell upcoming-shell">
        <header className="upcoming-intro">
          <div>
            <h2 id="upcoming-heading">UPCOMING AT LIGHTWAY</h2>
            <p>See what&apos;s happening next.</p>
          </div>
          <p id="upcoming-demo-note" className="upcoming-demo-note">
            Demo schedule · Not actual church events
          </p>
        </header>

        <ol className="upcoming-list">
          {publishedEvents.map((event) => {
            const dateLabels = getEventDateLabels(event.date);

            return (
              <li key={event.id}>
                <article className="upcoming-row">
                  <time
                    className="upcoming-date"
                    dateTime={event.date}
                    aria-label={dateLabels.fullDate}
                  >
                    <span>{dateLabels.weekday}</span>
                    <span className="upcoming-date-day">{dateLabels.day}</span>
                  </time>

                  <div className="upcoming-event-content">
                    <p className="upcoming-category">{event.category}</p>
                    <h3>{event.title}</h3>
                    <p className="upcoming-description">{event.description}</p>
                    <p className="upcoming-details">
                      <span>{event.time}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{event.location}</span>
                    </p>
                  </div>

                  <Link
                    className="upcoming-event-link"
                    href={event.actionUrl}
                    aria-label={`${event.actionLabel}: ${event.title}`}
                  >
                    {event.actionLabel} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ol>

        <Link className="upcoming-all-link" href="/events">
          View all events <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}