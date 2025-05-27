"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md border-b bg-white/80 text-gray-900 border-black/20">
      <a href="#hero" className="flex items-center">
        <Image
          src="/logo-black.svg"
          alt="Hack Night logo"
          width={32}
          height={32}
          className="h-10 w-auto"
          priority
          fill={false}
        />
      </a>

      <div className="space-x-8 text-sm font-medium tracking-wide">
        <a
          href="#about"
          className="hover:text-brand-dark transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#portfolio"
          className="hover:text-brand-dark transition-colors duration-200"
        >
          Portfolio
        </a>
        <a
          href="#statement"
          className="hover:text-brand-dark transition-colors duration-200"
        >
          Mission
        </a>
        <a
          href="#signup"
          className="inline-block rounded-md px-4 py-1.5 text-sm font-medium transition-colors duration-200 border bg-[#022851] text-white border-transparent hover:bg-white hover:text-[#022851] hover:border-black"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}
