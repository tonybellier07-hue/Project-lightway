import Image from "next/image";
import Link from "next/link";
import type { FeaturedMessageContent } from "../content/featured-message";

type FeaturedMessageProps = {
  message: FeaturedMessageContent;
};

function formatMessageDate(dateValue: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${dateValue}T12:00:00Z`));
}

export default function FeaturedMessage({
  message,
}: FeaturedMessageProps) {
  return (
    <section
      className="featured-message-section"
      aria-labelledby="featured-message-heading"
    >
      <div className="page-shell featured-message-shell">
        <header className="featured-message-intro">
          <h2 id="featured-message-heading">A MESSAGE FOR YOUR WEEK</h2>
          <p>Pause. Listen. Reflect.</p>
        </header>

        <article
          className="featured-message-layout"
          aria-labelledby="featured-message-title"
        >
          <div className="featured-message-media">
            <Image
              src={message.image}
              alt={message.imageAlt}
              fill
              sizes="(min-width: 52rem) 42vw, 100vw"
            />
            <span className="featured-message-demo-media">DEMO MEDIA</span>
            <span className="featured-message-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.8v12.4c0 .7.8 1.1 1.4.7l9-6.2a.9.9 0 0 0 0-1.4l-9-6.2c-.6-.4-1.4 0-1.4.7Z" />
              </svg>
            </span>
          </div>

          <div className="featured-message-copy">
            <p className="featured-message-demo-label">DEMO MESSAGE</p>
            <p className="featured-message-category">{message.category}</p>
            <h3 id="featured-message-title">{message.title}</h3>

            <p className="featured-message-speaker">
              <span>{message.speakerName}</span>
              {message.speakerRole && <span>{message.speakerRole}</span>}
            </p>

            <p className="featured-message-meta">
              <span>{message.type}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={message.date}>{formatMessageDate(message.date)}</time>
              {message.duration && (
                <>
                  <span aria-hidden="true">&middot;</span>
                  <span>{message.duration}</span>
                </>
              )}
            </p>

            <p className="featured-message-description">
              {message.description}
            </p>

            <Link
              className="featured-message-action"
              href={message.actionUrl}
              aria-label={`${message.actionLabel}: ${message.title} (demo message)`}
            >
              {message.actionLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}