import { portfolio } from "@/data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const frame =
  "mx-auto w-full max-w-7xl px-margin md:px-margin-md lg:px-margin-lg";

export function About() {
  const { personal, education, site } = portfolio;

  return (
    <Reveal
      id="about"
      className="w-full scroll-mt-24 bg-surface-container-lowest py-space-2xl"
    >
      <div className={frame}>
        <div className="grid grid-cols-1 items-stretch gap-gutter-lg lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-5">
            <div className="flex items-center gap-space-xs">
              <span className="h-2 w-2 rounded-full bg-primary-container" />
              <span className="font-mono text-label-md uppercase tracking-wider text-primary-container">
                {site.aboutKicker}
              </span>
            </div>
            <h2 className="mt-space-md font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
              {site.aboutTitle}
            </h2>
            <div className="mt-space-md flex flex-1 flex-col justify-between gap-space-md font-sans text-body-md leading-relaxed text-on-surface-variant">
              {site.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-space-md lg:col-span-7">
            <div className="font-mono text-label-md uppercase tracking-wider text-outline">
              {site.principlesLabel}
            </div>
            <div className="grid grid-cols-1 gap-gutter sm:grid-cols-3">
              {site.principles.map((principle) => (
                <article
                  key={principle.title}
                  className="flex flex-col gap-space-sm rounded border border-hairline bg-surface-container-low p-space-md transition-colors hover:bg-surface-container"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-container/10 text-primary-container">
                    <Icon name={principle.icon} className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="font-display text-headline-sm text-on-surface">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-body-sm text-on-surface-variant">
                    {principle.body}
                  </p>
                  <span className="mt-auto font-mono text-label-sm text-primary-container">
                    {principle.tag}
                  </span>
                </article>
              ))}
            </div>

            <div className="flex flex-col gap-space-xs rounded border border-hairline bg-surface-container-low p-space-md">
              <span className="font-mono text-label-sm text-on-surface-variant">
                {site.logLabel}
              </span>
              <pre className="overflow-x-auto whitespace-pre rounded bg-surface-container-lowest p-space-sm font-mono text-label-sm text-outline">
                {site.logLines.join("\n")}
              </pre>
            </div>

            <div className="flex flex-col gap-space-md rounded border border-hairline bg-surface-container p-space-md sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 flex-col gap-space-xs">
                <span className="font-mono text-label-sm uppercase text-outline">
                  {site.baseLabel}
                </span>
                <span className="font-mono text-label-md text-on-surface">
                  {personal.location}
                </span>
              </div>
              <div className="flex min-w-0 flex-col gap-space-xs sm:items-end sm:text-right">
                <span className="font-mono text-label-sm uppercase text-outline">
                  {site.educationLabel}
                </span>
                <span className="font-mono text-label-md text-tertiary-fixed-dim">
                  {education.degree}
                </span>
                <span className="font-mono text-label-sm text-on-surface-variant">
                  {education.school}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
