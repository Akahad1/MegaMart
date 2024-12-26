import type { Metadata } from "next";

import "./globals.css";
import TopHeader from "@/components/TopHeader/TopHeader";

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Generated ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopHeader></TopHeader>
        {children}
      </body>
    </html>
  );
}
