import Image from "next/image";
import Link from "next/link";
import type { FooterLink, SiteFooterConfig } from "../content/site-footer";

type SiteFooterProps = {
  config: SiteFooterConfig;
};

function FooterLinkGroup({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    <nav className="footer-column" aria-label={heading}>
      <h2>{heading}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            {link.href ? (
              <Link
                href={link.href}
                aria-label={
                  link.planned ? `${link.label} (planned page)` : undefined
                }
              >
                {link.label}
                {link.planned && (
                  <span className="footer-link-status">Planned</span>
                )}
              </Link>
            ) : (
              <span className="footer-unavailable">
                {link.label}
                <span>{link.status}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function SiteFooter({ config }: SiteFooterProps) {
  if (!config.visible) {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="footer-brand-link" href="/">
              <Image
                src={config.logo}
                alt="Seventh-day Adventist Church symbol"
                width={40}
                height={40}
              />
              <span>{config.churchName}</span>
            </Link>
            {config.descriptionIsDemo && (
              <p className="footer-demo-label">DEMO COPY</p>
            )}
            <p className="footer-description">{config.shortDescription}</p>
          </div>

          <FooterLinkGroup heading="Explore" links={config.exploreLinks} />
          <FooterLinkGroup heading="Connect" links={config.connectLinks} />
          <FooterLinkGroup heading="Resources" links={config.resourceLinks} />
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {config.copyrightText}
          </p>
          <nav aria-label="Legal information">
            <ul>
              {config.legalLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href ?? "/"}
                    aria-label={`${link.label} (planned page)`}
                  >
                    {link.label}
                    {link.planned && (
                      <span className="footer-link-status">Planned</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}