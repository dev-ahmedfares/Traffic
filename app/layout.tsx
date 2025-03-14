import type { Metadata } from "next";
import { Cairo, DM_Sans, Fira_Sans_Extra_Condensed, Open_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700",'800'],
  variable: "--font-dm-sans",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

const cairo = Cairo({
  subsets:["arabic"],
  weight: ["400", "500"],
  variable: "--font-cairo",
})

const fireSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fire-sans",
})

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
      <body className={`${dmSans.variable} ${openSans.variable} ${cairo.variable} ${fireSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
