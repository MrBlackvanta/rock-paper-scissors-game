import { Footer } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Rock, Paper, Scissors, Lizard, Spock";
const description =
  "Play Rock, Paper, Scissors, Lizard, Spock against the computer and keep your score between visits — Frontend Mentor challenge built with Next.js, TypeScript, and Tailwind CSS.";
const siteUrl = "https://vanta-rock-paper-scissors-game.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F3757",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowSemiCondensed.variable} antialiased`}>
      <body>
        <div className="flex min-h-dvh flex-col overflow-clip">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
