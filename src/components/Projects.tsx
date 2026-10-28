import { portfolio } from "@/data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Projects() {
  const { projects, site } = portfolio;

  return (
    <Reveal
      id="projects"
      className="w-full scroll-mt-24 bg-surface-container-lowest py-space-2xl"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-xl px-margin md:px-margin-md lg:px-margin-lg">
        <header className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-primary-container" />
            <span className="font-mono text-label-md uppercase tracking-wider text-primary-container">
              {site.projectsKicker}
            </span>
          </div>
          <h2 className="font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
            {site.projectsTitle}
          </h2>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            {site.projectsIntro}
          </p>
        </header>
        <div className="grid grid-cols-1 gap-gutter">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col gap-space-md rounded border border-hairline bg-surface-container-low p-space-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-label-sm font-semibold text-primary-container">
                  {project.category}
                </span>
                <span className="h-2 w-2 rounded-full bg-tertiary-fixed" />
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-display text-headline-sm text-on-surface">{project.name}</h3>
                <p className="font-sans text-body-sm text-on-surface-variant">{project.summary}</p>
              </div>
              <ul className="space-y-space-xs rounded bg-surface-container p-space-sm font-sans text-body-sm text-on-surface-variant">
                {project.points.map((point) => (
                  <li key={point} className="flex items-start gap-space-xs">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-container"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-space-xs pt-space-xs">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-surface-container-highest px-space-xs py-0.5 font-mono text-label-sm text-on-surface"
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
