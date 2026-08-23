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

const title = "Rock, Paper, Scissors | Now with Lizard and Spock";
const description =
  "Play Rock, Paper, Scissors against the house with two picks added, Lizard and Spock. Your score is kept between visits and the rules are one tap away.";
const siteUrl =
  "https://rock-paper-scissors-game.abdelrhman-ahmed8881.workers.dev";
const card = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Rock, Paper, Scissors, now with Lizard and Spock",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Rock, Paper, Scissors",
    locale: "en_US",
    type: "website",
    images: [card],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [card],
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
