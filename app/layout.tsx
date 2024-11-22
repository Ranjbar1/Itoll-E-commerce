import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import SW from "./_components/Sw";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Advanced E-Com",
    template: "%s / Advanced E-Com ",
  },
  description: "Advanced E-Commerce Product Listing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <SW>{children}</SW>
      </body>
    </html>
  );
}
