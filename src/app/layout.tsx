import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});



export const metadata: Metadata = {
  title: "Modern Design Tool Landing Page",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
