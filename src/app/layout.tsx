import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric Terlop | Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Node.js, and modern web applications. Building clean, functional products that solve real problems.",
  openGraph: {
    title: "Eric Terlop | Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Node.js, and modern web applications.",
    type: "website",
    url: "https://ericterlop.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eric Terlop - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Terlop | Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, Node.js, and modern web applications.",
    images: ["/images/og-image.png"],
  },
  metadataBase: new URL("https://ericterlop.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
