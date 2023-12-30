import type { Metadata } from "next";
import { clinton } from "@/app/ui/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { LayoutProps } from "@/types/props";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Datewise",
  description: "A Better Google Calendar",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
