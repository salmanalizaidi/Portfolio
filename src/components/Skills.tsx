import { portfolio } from "@/data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const accents = [
  "text-primary-container",
  "text-tertiary-fixed-dim",
  "text-secondary",
  "text-primary-container",
  "text-tertiary-fixed",
  "text-secondary",
  "text-primary-container",
  "text-outline",
] as const;

export function Skills() {
  const { skills, site } = portfolio;

  return (
    <Reveal
      id="skills"
      className="w-full scroll-mt-24 bg-surface-container-lowest py-space-2xl"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-xl px-margin md:px-margin-md lg:px-margin-lg">
        <header className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-primary-container" />
            <span className="font-mono text-label-md uppercase tracking-wider text-primary-container">
              {site.skillsKicker}
            </span>
          </div>
          <h2 className="font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
            {site.skillsTitle}
          </h2>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            {site.skillsIntro}
          </p>
        </header>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <article
              key={group.name}
              className="flex flex-col gap-space-md rounded border border-hairline bg-surface-container-low p-space-md"
            >
              <div className="flex items-center gap-space-xs">
                <Icon
                  name={group.icon}
                  className={`h-5 w-5 ${accents[index] ?? "text-primary-container"}`}
                />
                <h3 className="font-display text-headline-sm text-on-surface">{group.name}</h3>
              </div>
              <div className="flex flex-wrap gap-space-xs">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-surface-container px-space-xs py-0.5 font-mono text-label-sm text-on-surface"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
