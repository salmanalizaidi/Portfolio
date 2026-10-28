"use client";

import { FormEvent, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { copyText, isEmail, isHttpUrl } from "@/lib/utils";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

interface FormState {
  name: string;
  email: string;
  organization: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  organization: "",
  message: "",
};

export function Contact() {
  const { personal, site } = portfolio;
  const [form, setForm] = useState<FormState>(emptyForm);
  const [notice, setNotice] = useState("");
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    const ok = await copyText(personal.email);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isEmail(personal.email)) {
      setNotice(site.formNeedsEmail);
      return;
    }
    const body = [
      `From: ${form.name} <${form.email}>`,
      form.organization ? `Organization: ${form.organization}` : "",
      "",
      form.message,
    ]
      .filter((line) => line !== "")
      .join("\n");
    const href = `mailto:${personal.email}?subject=${encodeURIComponent(form.name)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setNotice(site.formOpened);
    setForm(emptyForm);
  }

  return (
    <Reveal
      id="contact"
      className="w-full scroll-mt-24 bg-surface-container-lowest py-space-2xl"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-space-xl px-margin md:px-margin-md lg:px-margin-lg">
        <header className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="h-2 w-2 rounded-full bg-primary-container" />
            <span className="font-mono text-label-md uppercase tracking-wider text-primary-container">
              {site.contactKicker}
            </span>
          </div>
          <h2 className="font-display text-headline-lg-mobile text-on-surface md:text-headline-lg">
            {site.contactTitle}
          </h2>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            {site.contactIntro}
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-gutter-lg lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-space-md rounded border border-hairline bg-surface-container-low p-space-lg">
              <span className="font-mono text-label-sm uppercase tracking-wider text-outline">
                {site.endpointsLabel}
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-label-sm text-on-surface-variant">
                  {site.emailLabel}
                </span>
                <div className="flex items-center justify-between gap-space-sm rounded bg-surface-container p-space-sm">
                  <span className="break-all font-mono text-body-sm text-on-surface">
                    {personal.email}
                  </span>
                  <button
                    type="button"
                    aria-label={site.copyEmail}
                    onClick={onCopy}
                    className="shrink-0 text-outline transition-colors hover:text-primary-container"
                  >
                    <Icon name="copy" className="h-[18px] w-[18px]" />
                  </button>
                </div>
                {copied ? (
                  <span className="font-mono text-label-sm text-primary-container">{site.copied}</span>
                ) : null}
              </div>
              <div className="flex flex-col gap-space-xs pt-space-xs">
                <ProfileRow href={personal.linkedin} icon="link" />
                <ProfileRow href={personal.github} icon="terminal" />
              </div>
              <div className="mt-space-xs flex items-center justify-between gap-space-sm rounded bg-surface-container p-space-sm">
                <span className="inline-flex items-center gap-space-xs font-mono text-label-sm text-on-surface">
                  <Icon name="pin" className="h-[18px] w-[18px] text-tertiary-fixed" />
                  {personal.location}
                </span>
                <span className="font-mono text-label-sm text-tertiary-fixed-dim">
                  {site.timezone}
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-space-md rounded border border-hairline bg-surface-container-low p-space-lg md:p-space-xl lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              <Field
                id="senderName"
                label={site.formName}
                value={form.name}
                placeholder={site.formNamePlaceholder}
                onChange={(name) => setForm((current) => ({ ...current, name }))}
                required
              />
              <Field
                id="senderEmail"
                label={site.formEmail}
                type="email"
                value={form.email}
                placeholder={site.formEmailPlaceholder}
                onChange={(email) => setForm((current) => ({ ...current, email }))}
                required
              />
            </div>
            <Field
              id="senderOrg"
              label={site.formOrg}
              value={form.organization}
              placeholder={site.formOrgPlaceholder}
              onChange={(organization) => setForm((current) => ({ ...current, organization }))}
            />
            <label className="flex flex-col gap-space-xs" htmlFor="msgBody">
              <span className="font-mono text-label-sm text-on-surface-variant">
                {site.formMessage}
              </span>
              <textarea
                id="msgBody"
                required
                rows={4}
                value={form.message}
                placeholder={site.formMessagePlaceholder}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                className="rounded bg-surface-container p-space-md font-sans text-body-md text-on-surface outline-none placeholder:text-outline focus:ring-1 focus:ring-primary-container"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-space-xs self-start rounded bg-primary-container px-space-xl py-space-sm font-mono text-label-md font-bold text-on-primary-container transition-shadow hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] sm:w-auto"
            >
              <Icon name="send" className="h-[18px] w-[18px]" />
              {site.formSubmit}
            </button>
            {notice ? (
              <p className="flex items-center gap-space-xs rounded bg-surface-container p-space-sm font-mono text-label-sm text-tertiary-fixed">
                {notice}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </Reveal>
  );
}

function ProfileRow({ href, icon }: { href: string; icon: "link" | "terminal" }) {
  const className =
    "flex items-center justify-between gap-space-sm rounded bg-surface-container p-space-sm";
  const body = (
    <>
      <span className="inline-flex min-w-0 items-center gap-space-xs">
        <Icon
          name={icon}
          className={`h-[18px] w-[18px] shrink-0 ${icon === "link" ? "text-primary-container" : "text-secondary"}`}
        />
        <span className="break-all font-mono text-label-md text-on-surface">{href}</span>
      </span>
      <Icon name="arrow" className="h-3.5 w-3.5 shrink-0 text-outline" />
    </>
  );
  if (!isHttpUrl(href)) return <div className={className}>{body}</div>;
  return (
    <a className={`${className} transition-colors hover:bg-surface-bright`} href={href} rel="noreferrer" target="_blank">
      {body}
    </a>
  );
}

function Field({
  id,
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-space-xs" htmlFor={id}>
      <span className="font-mono text-label-sm text-on-surface-variant">{label}</span>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="rounded bg-surface-container px-space-md py-space-sm font-sans text-body-md text-on-surface outline-none placeholder:text-outline focus:ring-1 focus:ring-primary-container"
      />
    </label>
  );
}
