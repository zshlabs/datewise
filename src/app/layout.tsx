import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { LayoutProps } from "@/types/props";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Datewise",
  description: "A Better Google Calendar",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={GeistSans.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
