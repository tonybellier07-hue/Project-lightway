"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Bible", href: "/bible" },
  { label: "Events", href: "/events" },
  { label: "Watch", href: "/watch" },
  { label: "More", href: "/more" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="page-shell flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between md:py-0">
        <Link
          className="flex w-fit items-center gap-3"
          href="/"
          aria-label="Lightway SDA Church home"
        >
          <Image
            src="/branding/sda-logo.svg"
            alt="Seventh-day Adventist Church symbol"
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <span>
            <span className="block text-xl font-semibold leading-tight text-[var(--color-ink)]">
              Lightway
            </span>
            <span className="block text-xs font-medium text-[var(--color-muted)]">
              SDA Church
            </span>
          </span>
        </Link>

        <nav
          className="-mx-5 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0 md:pb-0"
          aria-label="Primary navigation"
        >
          <ul className="flex min-w-max items-center gap-7">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  className="site-nav-link"
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}