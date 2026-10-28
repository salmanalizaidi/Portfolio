import { portfolio } from "@/data/portfolio";
import { isHttpUrl } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Research() {
  const { research, site } = portfolio;
  const linked = isHttpUrl(research.link);

  return (
    <Reveal id="research" className="w-full scroll-mt-24 bg-surface py-space-2xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-xl px-margin md:px-margin-md lg:px-margin-lg">
        <header className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="font-mono text-label-md uppercase tracking-wider text-secondary">
              {site.researchKicker}
            </span>
          </div>
          <h2 className="font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
            {site.researchTitle}
          </h2>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            {site.researchIntro}
          </p>
        </header>

        <article className="rounded border border-hairline bg-surface-container-low p-space-lg md:p-space-xl">
          <div className="grid grid-cols-1 items-start gap-gutter-lg lg:grid-cols-12">
            <div className="flex flex-col gap-space-md lg:col-span-8">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="rounded-full bg-secondary-container/30 px-space-md py-space-xs font-mono text-label-sm font-semibold text-secondary">
                  {research.venue}
                </span>
                {research.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-container px-space-md py-space-xs font-mono text-label-sm text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
                {research.title}
              </h3>
              <p className="font-sans text-body-md text-on-surface-variant">{research.description}</p>
              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                {research.tags.map((tag) => (
                  <span
                    key={`${tag}-pill`}
                    className="rounded bg-surface-container px-space-md py-space-xs font-mono text-label-sm text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-space-sm">
                {linked ? (
                  <a
                    href={research.link}
                    rel="noreferrer"
                    target="_blank"
                    className="inline-flex items-center rounded bg-secondary-container px-space-md py-space-xs font-mono text-label-md font-semibold text-on-secondary-container transition-shadow hover:shadow-[0_0_16px_rgba(99,102,241,0.4)]"
                  >
                    {site.publicationLinkLabel}
                  </a>
                ) : (
                  <p className="break-all rounded bg-surface-container px-space-md py-space-sm font-mono text-label-md text-on-surface">
                    <span className="text-outline">{site.publicationLinkLabel}: </span>
                    {research.link}
                  </p>
                )}
              </div>
            </div>
            <aside className="flex flex-col gap-space-md rounded bg-surface-container p-space-md lg:col-span-4">
              <span className="font-mono text-label-sm uppercase tracking-wider text-outline">
                {site.researchSideLabel}
              </span>
              <ul className="flex flex-col gap-space-sm">
                {research.results.map((result) => (
                  <li key={result.label} className="flex flex-col gap-space-xs">
                    <span className="font-mono text-label-sm text-on-surface-variant">
                      {result.label}
                    </span>
                    <span className="font-mono text-label-md text-secondary">{result.value}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </article>
      </div>
    </Reveal>
  );
}
