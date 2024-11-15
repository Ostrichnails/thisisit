import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/app/navBar";

export const metadata: Metadata = {
  title: "Gustavo's website",
  description: "My Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavBar links={data} />
        {children}
      </body>
    </html>
  );
}
const data = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Hobbies",
    link: "/hobbies",
  },
  {
    label: "Kitties",
    link: "/kitties",
  },
];
