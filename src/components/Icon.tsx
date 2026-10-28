import type { SVGProps } from "react";
import type { CertIcon, SkillIcon } from "@/data/portfolio";

export type IconName =
  | SkillIcon
  | CertIcon
  | "school"
  | "verified"
  | "contact"
  | "file"
  | "copy"
  | "bolt"
  | "shield"
  | "check"
  | "link"
  | "arrow"
  | "pin"
  | "send"
  | "menu"
  | "close"
  | "person";

const paths: Record<IconName, string> = {
  layers:
    "M12 3 3 7.5 12 12l9-4.5L12 3Zm-9 9 9 4.5 9-4.5M3 16.5 12 21l9-4.5",
  database:
    "M12 4c-4.4 0-8 1.3-8 3s3.6 3 8 3 8-1.3 8-3-3.6-3-8-3Zm8 6.2C20 12 16.4 13.2 12 13.2S4 12 4 10.2V14c0 1.7 3.6 3 8 3s8-1.3 8-3v-3.8Zm0 5.6C20 17.6 16.4 18.8 12 18.8S4 17.6 4 15.8V18c0 1.7 3.6 3 8 3s8-1.3 8-3v-2.2Z",
  hub: "M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8.2 13.2 10.6 16M15.8 13.2 13.4 16M12 8v8M8.4 11.6 11 8.8M15.6 11.6 13 8.8",
  key: "M14.5 4a5.5 5.5 0 0 0-5.3 7H4v3h2v2h3v-2h2.2A5.5 5.5 0 1 0 14.5 4Zm0 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z",
  pulse: "M3 12h4l2-5 4 10 2-5h6",
  spark: "M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3Zm6 10 .8 2.4L21 16l-2.2.6L18 19l-.8-2.4L15 16l2.2-.6L18 13Z",
  cloud: "M7 18h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.5-1.6A3.5 3.5 0 0 0 7 18Z",
  terminal: "M5 6h14v12H5V6Zm2.5 3 2.2 2-2.2 2M11 13h4",
  aws: "M7 16c2.2 1.4 7.8 1.4 10 0M8 14l4-6 4 6",
  school: "M3 9 12 5l9 4-9 4-9-4Zm4 3.2V16c1.6 1.2 3.6 2 5 2s3.4-.8 5-2v-3.8",
  verified: "m12 3 2.1 1.5 2.6-.2.8 2.4 2.2 1.4-.8 2.4.8 2.4-2.2 1.4-.8 2.4-2.6-.2L12 21l-2.1-1.5-2.6.2-.8-2.4-2.2-1.4.8-2.4-.8-2.4 2.2-1.4.8-2.4 2.6.2L12 3Zm-1.2 9.2 3.2-3.2-1.1-1.1-2.1 2.1-1.1-1.1-1.1 1.1 2.2 2.2Z",
  contact: "M5 5h14v14H5V5Zm2 3v2h10V8H7Zm0 4v2h6v-2H7Z",
  file: "M7 3h7l5 5v13H7V3Zm7 1.5V9h4.5",
  copy: "M8 8h10v12H8V8Zm-2 10H5V4h10v2",
  bolt: "M13 2 5 14h6l-1 8 8-12h-6l1-8Z",
  shield: "M12 3 5 6v6c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6l-7-3Z",
  check: "m5 12 5 5 9-10",
  link: "M10 13a4 4 0 0 0 5.7.3l2-2a4 4 0 0 0-5.7-5.6l-1.1 1.1M14 11a4 4 0 0 0-5.7-.3l-2 2a4 4 0 0 0 5.7 5.6l1.1-1.1",
  arrow: "M5 12h14M13 6l6 6-6 6",
  pin: "M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  send: "m4 12 16-8-6 16-2-6-8-2Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "m6 6 12 12M18 6 6 18",
  person: "M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5 20c1.2-3 3.6-4.5 7-4.5S17.8 17 19 20",
  badge: "m12 3 2.4 1.6 2.8.2 1.2 2.5 1.6 2.4-.2 2.8L19 15l-2.5 1.2-.2 2.8-2.8.2L12 21l-1.5-2.8-2.8-.2-.2-2.8L5 15l1.2-2.5-.2-2.8 2.5-1.2L12 3Z",
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
