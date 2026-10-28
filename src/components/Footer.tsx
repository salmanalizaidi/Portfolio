import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { isEmail, isHttpUrl } from "@/lib/utils";
import { Icon } from "./Icon";

export function Footer() {
  const { personal, site, nav } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-lowest py-space-2xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-lg px-margin md:px-margin-md lg:px-margin-lg">
        <div className="flex flex-col items-start justify-between gap-gutter border-b border-hairline pb-space-lg md:flex-row md:items-center">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="h-2 w-2 rounded-full bg-tertiary-fixed" />
              <span className="font-mono text-label-md font-semibold text-on-surface">
                {personal.name}
              </span>
            </div>
            <p className="font-sans text-body-sm text-on-surface-variant">{site.footerBlurb}</p>
          </div>
          <div className="flex flex-wrap items-center gap-gutter">
            {isEmail(personal.email) ? (
              <a
                className="break-all font-mono text-label-md text-on-surface-variant transition-colors hover:text-primary-container"
                href={`mailto:${personal.email}`}
              >
                {personal.email}
              </a>
            ) : (
              <span className="break-all font-mono text-label-md text-on-surface-variant">
                {personal.email}
              </span>
            )}
            <FooterLink href={personal.github} />
            <FooterLink href={personal.linkedin} />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-space-md sm:flex-row sm:items-center">
          <span className="font-mono text-label-sm text-outline">
            © {year} {personal.name}. {site.footerRights}
          </span>
          <div className="flex flex-wrap items-center gap-gutter">
            <nav className="flex flex-wrap gap-space-md" aria-label="Footer">
              {nav.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="font-mono text-label-sm text-on-surface-variant transition-colors hover:text-primary-container"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <span className="font-mono text-label-sm text-outline">{site.footerBuilt}</span>
            <span className="inline-flex items-center gap-space-xs font-mono text-label-sm text-on-surface-variant">
              <Icon name="pin" className="h-3.5 w-3.5 text-tertiary-fixed-dim" />
              {personal.location} ({site.timezone})
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href }: { href: string }) {
  const className =
    "break-all font-mono text-label-md text-on-surface-variant transition-colors hover:text-primary-container";
  if (!isHttpUrl(href)) return <span className={className}>{href}</span>;
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {href}
    </a>
  );
}
