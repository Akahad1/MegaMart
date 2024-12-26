import type { Metadata } from "next";

import "./globals.css";
import Navber from "@/components/Navber/Navber";
import Footer from "@/components/Footer/Footer";

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
        <Navber></Navber>
        <div className="container mx-auto max-w-7xl  ">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
