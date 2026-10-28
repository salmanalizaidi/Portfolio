"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { cn, copyText } from "@/lib/utils";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Hero() {
  const { personal, site, heroChips, heroPills, metrics } = portfolio;
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    const ok = await copyText(personal.email);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Reveal className="relative w-full overflow-hidden py-space-xl md:py-space-2xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-lg px-margin md:px-margin-md lg:px-margin-lg">
        <div className="flex flex-wrap items-center gap-space-sm">
          {heroChips.map((chip) => (
            <div
              key={chip.label}
              className={cn(
                "inline-flex items-center gap-space-xs rounded-full px-space-md py-space-xs",
                chip.tone === "live" && "bg-surface-container-high/80 backdrop-blur-md",
                chip.tone === "neutral" && "bg-surface-container/70",
                chip.tone === "research" && "bg-secondary-container/20",
              )}
            >
              {chip.tone === "live" ? (
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-tertiary-fixed" />
              ) : null}
              {chip.tone === "neutral" ? (
                <Icon name="school" className="h-3.5 w-3.5 text-outline" />
              ) : null}
              {chip.tone === "research" ? (
                <Icon name="verified" className="h-3.5 w-3.5 text-secondary" />
              ) : null}
              <span
                className={cn(
                  "font-mono text-label-sm",
                  chip.tone === "live" && "text-tertiary-fixed-dim",
                  chip.tone === "neutral" && "text-on-surface-variant",
                  chip.tone === "research" && "text-secondary",
                )}
              >
                {chip.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-space-xs">
          <div className="font-mono text-label-md uppercase tracking-wider text-primary-container">
            {personal.location}
          </div>
          <h1 className="max-w-4xl font-display text-headline-xl-mobile text-on-surface md:text-headline-xl">
            {personal.name}
          </h1>
          <p className="max-w-3xl font-display text-headline-md text-primary-container">
            {personal.title}
          </p>
          <p className="max-w-3xl pt-space-xs font-sans text-body-lg text-on-surface-variant">
            {personal.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
          {heroPills.map((pill) => (
            <span
              key={pill}
              className="rounded bg-surface-container px-space-md py-space-xs font-mono text-label-sm text-on-surface"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
          <Link
            href="#contact"
            className="inline-flex items-center gap-space-xs rounded bg-primary-container px-space-lg py-space-sm font-mono text-label-md font-bold text-on-primary-container transition-shadow hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]"
          >
            <Icon name="contact" className="h-[18px] w-[18px]" />
            {site.getInTouch}
          </Link>
          <a
            href={site.resumeHref}
            download
            className="inline-flex items-center gap-space-xs rounded bg-surface-container-high px-space-lg py-space-sm font-mono text-label-md text-on-surface transition-colors hover:bg-surface-bright"
          >
            <Icon name="file" className="h-[18px] w-[18px]" />
            {site.downloadResume}
          </a>
          <div className="flex max-w-full items-center gap-space-xs rounded bg-surface-container-lowest px-space-md py-space-xs font-mono text-label-sm">
            {site.terminalPrompt ? (
              <span className="text-tertiary-fixed-dim">{site.terminalPrompt}</span>
            ) : null}
            <span className="truncate text-on-surface-variant">{personal.email}</span>
            <button
              type="button"
              aria-label={site.copyEmail}
              onClick={onCopy}
              className="ml-space-xs text-outline transition-colors hover:text-primary-container"
            >
              <Icon name="copy" className="h-4 w-4" />
            </button>
            <span className="text-primary-container">{copied ? site.copied : ""}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-gutter pt-space-lg lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex min-w-0 flex-col gap-space-xs overflow-hidden rounded border border-hairline bg-surface-container-low p-space-md"
            >
              <span className="font-mono text-label-sm uppercase tracking-wider text-on-surface-variant">
                {metric.label}
              </span>
              <span className="font-display text-headline-md text-on-surface sm:text-headline-lg lg:text-metric-display">
                {metric.value}
              </span>
              <span className="font-sans text-body-sm text-outline">{metric.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
