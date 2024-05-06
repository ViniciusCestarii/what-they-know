import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" flex flex-col bg-gray-900 p-4 text-green-500 max-w-[900px] mx-auto">{children}</body>
    </html>
  );
}
