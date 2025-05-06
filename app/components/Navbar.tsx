"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur bg-black/40 shadow" : "bg-transparent"
      }`}
    >
      <div className="px-4 float-right mr-60">
        <ul className="flex space-x-14 py-6 text-2xl">
          <li>
            <Link href="#homeSection">Home</Link>
          </li>
          <li>
            <Link href="#aboutSection">About</Link>
          </li>
          <li>
            <Link href="#projectSection">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
