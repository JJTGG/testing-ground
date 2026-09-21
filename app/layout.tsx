import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Testing Ground",
  description:
    "A live environment for testing external technologies under real conditions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}