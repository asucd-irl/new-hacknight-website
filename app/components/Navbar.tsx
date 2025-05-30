"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { instrumentSerif } from "../_components/fonts";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const getNavLink = (href: string, label: string) => {
    if (isHomePage) {
      return (
        <a
          href={href}
          className={`hover:text-brand-dark cursor-pointer ${instrumentSerif.className} text-lg`}
          onClick={(e) => handleSmoothScroll(e, href.substring(1))}
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        href={`/${href}`}
        className={`hover:text-brand-dark cursor-pointer ${instrumentSerif.className} text-lg`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md border-b bg-[#FEFFF3]/80 text-gray-900 border-black/20">
      {isHomePage ? (
        <a
          href="#hero"
          className="flex items-center cursor-pointer"
          onClick={(e) => handleSmoothScroll(e, "hero")}
        >
          <Image
            src="/images/logo-black.svg"
            alt="Hack Night logo"
            width={32}
            height={32}
            className="h-10 w-auto"
            priority
            fill={false}
          />
        </a>
      ) : (
        <Link href="/#hero" className="flex items-center cursor-pointer">
          <Image
            src="/images/logo-black.svg"
            alt="Hack Night logo"
            width={32}
            height={32}
            className="h-10 w-auto"
            priority
            fill={false}
          />
        </Link>
      )}

      <div className="space-x-8 text font-medium tracking-wide">
        {getNavLink("#about", "about")}
        {getNavLink("#mentor", "mentors")}
        {getNavLink("#portfolio", "portfolio")}
        <a
          href="https://ucdhacknight.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[#7A40FF] px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#5A2FD6] hover:shadow-lg cursor-pointer"
        >
          Register Now
        </a>
      </div>
    </nav>
  );
}
