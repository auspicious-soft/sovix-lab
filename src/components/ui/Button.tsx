import Link from "next/link";
import React from "react";
import ButtonArrow from "@/assets/images/button-arrow.svg"
import Image from "next/image";

type ButtonProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Button({
  href = "/about",
  children = "Book a Demo",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-self-start gap-0.5 font-medium text-sm bg-green text-[#020617] px-5 py-2.5 rounded-[6px] hover:bg-[#6CEDBE] transition ${className}`} 
    >
      {children} 
      <Image src={ButtonArrow} alt="Button Arrow" />
    </Link> 
  );
}