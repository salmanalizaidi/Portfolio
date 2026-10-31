import { portfolio } from "@/data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Certifications() {
  const { certifications, education, site } = portfolio;

  return (
    <Reveal id="certifications" className="w-full scroll-mt-24 bg-surface py-space-2xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-xl px-margin md:px-margin-md lg:px-margin-lg">
        <header className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-primary-container" />
            <span className="font-mono text-label-md uppercase tracking-wider text-primary-container">
              {site.certsKicker}
            </span>
          </div>
          <h2 className="font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
            {site.certsTitle}
          </h2>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            {site.certsIntro}
          </p>
        </header>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          {certifications.map((item) => (
            <article
              key={item.name}
              className="flex items-center gap-space-md rounded border border-hairline bg-surface-container-low p-space-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-surface-container text-primary-container">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-headline-sm text-on-surface">{item.name}</h3>
            </article>
          ))}
          <article className="flex items-center gap-space-md rounded border border-hairline bg-surface-container-low p-space-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-surface-container text-on-surface">
              <Icon name="school" className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-display text-headline-sm text-on-surface">{education.degree}</h3>
              <p className="font-sans text-body-sm text-on-surface-variant">{education.school}</p>
            </div>
          </article>
        </div>
      </div>
    </Reveal>
  );
}
