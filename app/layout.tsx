import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "PhotoStudio - Professional Photography",
  description:
    "Professional photographer specializing in weddings, portraits and events. Capturing unique moments with passion and creativity.",
  keywords:
    "photography, professional photographer, weddings, portraits, events, photo sessions",
  authors: [{ name: "PhotoStudio" }],
  creator: "PhotoStudio",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://photostudio.com",
    title: "PhotoStudio - Professional Photography",
    description:
      "Professional photographer specializing in weddings, portraits and events.",
    siteName: "PhotoStudio",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
