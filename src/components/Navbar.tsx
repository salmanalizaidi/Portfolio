"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

const shell =
  "mx-auto flex w-full max-w-7xl items-center px-margin md:px-margin-md lg:px-margin-lg";

export function Navbar() {
  const { personal, site, nav } = portfolio;
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = nav.map((item) => item.id);

    const update = () => {
      const line = 96;
      let current = "";
      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top - line <= 0) current = id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [nav]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-hairline bg-surface/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className={cn(shell, "h-16 justify-between gap-gutter")}>
        <Link href="#top" className="flex min-w-0 items-center gap-space-md">
          <Image
            src="/monogram.svg"
            alt={site.monogramAlt}
            width={32}
            height={32}
            priority
            unoptimized
            className="h-8 w-8 shrink-0"
          />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate font-mono text-label-md font-semibold text-on-surface">
              {site.brand}
            </span>
            <span className="hidden items-center gap-space-xs xl:flex">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-tertiary-fixed" />
              <span className="font-mono text-label-sm text-tertiary-fixed-dim">
                {portfolio.heroChips[0]?.label}
              </span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-gutter xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "font-mono text-label-md transition-colors",
                active === item.id
                  ? "font-semibold text-primary-container"
                  : "text-on-surface-variant hover:text-on-surface",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-space-md">
          <Link
            href="#contact"
            className="inline-flex items-center gap-space-xs rounded-md bg-primary-container px-space-md py-space-xs font-mono text-label-md font-bold text-on-primary-container transition-shadow hover:shadow-[0_0_16px_rgba(0,242,254,0.45)]"
          >
            <span className="hidden sm:inline">{site.getInTouch}</span>
            <Icon name="send" className="h-4 w-4 sm:hidden" />
          </Link>
          <Image
            src={personal.photo}
            alt={personal.photoAlt}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <button
            type="button"
            className="inline-flex h-8 items-center rounded-md border border-hairline px-space-sm font-mono text-label-sm text-on-surface xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? site.menuClose : site.menuOpen}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-hairline bg-surface-container-lowest px-margin py-space-md xl:hidden md:px-margin-md"
        >
          <ul className="flex flex-col gap-space-sm">
            {nav.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block font-mono text-label-md",
                    active === item.id
                      ? "font-semibold text-primary-container"
                      : "text-on-surface-variant",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
