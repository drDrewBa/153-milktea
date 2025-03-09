import type { Metadata } from "next";
import { dmSans } from "./fonts/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "153 Milk Tea",
  description: "The official website of 153 Milk Tea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}
