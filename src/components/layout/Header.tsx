"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `text-sm p-2 text-[#C1CAD8] hover:text-green ${
      pathname === path ? "text-green font-[600]" : ""
    }`;

  return (
    <header className="w-full border-b border-[#1E293B] bg-background top-0 z-50 py-3.5">
      <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image src={Logo} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/solutions" className={linkClass("/solutions")}>
            Solutions
          </Link>

          <Link href="/use-cases" className={linkClass("/use-cases")}>
            Use Cases
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Button (Desktop) */} 
        <div className="hidden md:block">
          <Button href=""></Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 py-4 space-y-2 bg-[#0F172A] absolute top-[61px] w-full left-0 flex flex-col  ">
          <Link
            href="/solutions"
            className={linkClass("/solutions")}
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>

          <Link
            href="/use-cases"
            className={linkClass("/use-cases")}
            onClick={() => setIsOpen(false)}
          >
            Use Cases
          </Link>

          <Link
            href="/about"
            className={linkClass("/about")}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={linkClass("/contact")}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Button */}
          <div className="pt-2">
            <Button href="" className="justify-center"></Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
