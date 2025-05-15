import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hack Night @ UC Davis",
  description: "For the love of making.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-white/80 px-6 py-3 backdrop-blur-md">
          <a href="#hero" className="font-bold tracking-tight">
            Hack&nbsp;Night
          </a>
          <div className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-brand-dark">
              About
            </a>
            <a href="#portfolio" className="hover:text-brand-dark">
              Portfolio
            </a>
            <a href="#faq" className="hover:text-brand-dark">
              FAQ
            </a>
          </div>
        </nav>

        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
