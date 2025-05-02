"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (path: string) =>
    `block px-4 py-2 rounded text-center text-2xl ${
      pathname === path
        ? "text-white underline underline-offset-8 decoration-emerald-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur bg-black/40 shadow" : "bg-transparent"
      }`}
    >
      <div className="px-4 float-right mr-60">
        <ul className="flex space-x-14 py-4">
          <li>
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={linkClasses("/projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/title" className={linkClasses("/title")}>
              Title
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
