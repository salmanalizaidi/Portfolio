import type { ExperienceEntry } from "@/data/portfolio";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const frame =
  "mx-auto w-full max-w-7xl px-margin md:px-margin-md lg:px-margin-lg";

type Block =
  | { type: "feature"; entry: ExperienceEntry }
  | { type: "compact"; entries: ExperienceEntry[] };

function groupExperience(entries: readonly ExperienceEntry[]): Block[] {
  const blocks: Block[] = [];
  entries.forEach((entry) => {
    if (entry.variant === "compact") {
      const last = blocks[blocks.length - 1];
      if (last?.type === "compact") last.entries.push(entry);
      else blocks.push({ type: "compact", entries: [entry] });
      return;
    }
    blocks.push({ type: "feature", entry });
  });
  return blocks;
}

export function Experience() {
  const { experience, site } = portfolio;
  const blocks = groupExperience(experience);

  return (
    <Reveal id="experience" className="w-full scroll-mt-24 bg-surface py-space-2xl">
      <div className={`${frame} flex flex-col gap-space-xl`}>
        <header className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-primary-container" />
            <span className="font-mono text-label-md uppercase tracking-wider text-primary-container">
              {site.experienceKicker}
            </span>
          </div>
          <h2 className="font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
            {site.experienceTitle}
          </h2>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            {site.experienceIntro}
          </p>
        </header>

        <div className="flex flex-col gap-space-xl">
          {blocks.map((block) =>
            block.type === "feature" ? (
              <FeatureRow key={`${block.entry.company}-${block.entry.role}`} entry={block.entry} />
            ) : (
              <div
                key={block.entries.map((entry) => entry.role).join("-")}
                className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12"
              >
                <div className="flex flex-col gap-space-xs lg:col-span-3">
                  <span className="font-mono text-label-md text-outline">
                    {site.earlyCareerLabel}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:col-span-9">
                  {block.entries.map((entry) => (
                    <article
                      key={`${entry.company}-${entry.role}`}
                      className="flex flex-col gap-space-xs rounded border border-hairline bg-surface-container-low p-space-md"
                    >
                      <div className="flex items-center justify-between gap-space-sm">
                        <span className="font-mono text-label-sm text-outline">
                          {entry.company}
                        </span>
                        <span className="font-mono text-label-sm text-on-surface-variant">
                          {entry.dates}
                        </span>
                      </div>
                      <h3 className="font-display text-headline-sm text-on-surface">
                        {entry.role}
                      </h3>
                    </article>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </Reveal>
  );
}

function FeatureRow({ entry }: { entry: ExperienceEntry }) {
  const current = entry.dates.includes("Present");
  return (
    <article className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
      <div className="flex flex-col gap-space-xs lg:col-span-3">
        <span
          className={`font-mono text-label-md ${current ? "text-primary-container" : "text-outline"}`}
        >
          {entry.dates}
        </span>
        <span className="font-display text-headline-sm text-on-surface">{entry.company}</span>
        <span className="font-sans text-body-sm text-outline">{entry.location}</span>
        {current ? (
          <span className="inline-flex items-center gap-1 pt-space-xs font-mono text-label-sm text-tertiary-fixed-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed" />
            {entry.role}
          </span>
        ) : (
          <span className="font-sans text-body-sm text-outline">{entry.role}</span>
        )}
      </div>
      <div className="flex flex-col gap-space-md rounded border border-hairline bg-surface-container-low p-space-lg lg:col-span-9">
        <h3 className="font-display text-headline-md text-on-surface">{entry.role}</h3>
        {entry.workstreams.length > 0 ? (
          <div className="space-y-space-md">
            {entry.workstreams.map((stream) => (
              <div
                key={stream.title}
                className="flex flex-col gap-space-xs rounded bg-surface-container p-space-md"
              >
                <span className="font-display text-headline-sm text-primary">{stream.title}</span>
                <ul className="list-disc space-y-space-xs pl-space-md font-sans text-body-sm text-on-surface-variant">
                  {stream.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
        {entry.highlights.length > 0 ? (
          <ul className="list-disc space-y-space-sm pl-space-md font-sans text-body-md text-on-surface-variant">
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
        {entry.stack.length > 0 ? (
          <div className="flex flex-wrap gap-space-xs pt-space-xs">
            {entry.stack.map((item) => (
              <span
                key={item}
                className="rounded bg-surface-container-highest px-space-sm py-space-xs font-mono text-label-sm text-on-surface"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
