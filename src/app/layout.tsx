import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-jetbrains",
});

const { personal } = portfolio;

const pageTitle = `${personal.name} — ${personal.title}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: personal.tagline,
  authors: [{ name: personal.name }],
  openGraph: {
    title: pageTitle,
    description: personal.tagline,
    type: "website",
    locale: "en_US",
    siteName: personal.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} dark`}
    >
      <body className="min-h-screen bg-background font-sans text-body-md text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
