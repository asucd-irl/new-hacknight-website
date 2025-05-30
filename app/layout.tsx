import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HackNights | for the love of making. | UC Davis",
  description: "For the love of making.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#FEFFF3] text-gray-900`}>
        <Navbar />
        {/* page content */}
        {children}
      </body>
    </html>
  );
}
