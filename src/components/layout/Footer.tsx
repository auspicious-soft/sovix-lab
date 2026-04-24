"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import { CallIcon, Emailcon } from "@/assets/svgicons";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#0F172A] bg-[#000000] ">
      <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[2.4fr_1fr_1fr_1fr] gap-8 lg:gap-16 py-[60px]" >
          {/* Left Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src={Logo} alt="Logo" />
            </div>

            <p className="text-[#C1CAD8]/80 text-base font-normal leading-[24px] w-full">
              Private AI infrastructure for risk, underwriting, and Inspection
              teams. Deployed inside your cloud or on-premise — never in ours.
            </p>

            <div className="relative w-full m-auto lg:ml-auto flex gap-1.5 flex-wrap mt-6">
              <div className="px-[11.01px] py-[7.34px] bg-slate-900/60 rounded-md outline outline-[0.92px] outline-offset-[-0.92px] outline-slate-800 justify-center text-[#c1cad8] text-[11px] font-normal font-jetbrainsmono uppercase leading-[14.46px] tracking-[0.92px]">
                SOC 2
              </div>
              <div className="px-[11.01px] py-[7.34px] bg-slate-900/60 rounded-md outline outline-[0.92px] outline-offset-[-0.92px] outline-slate-800 justify-center text-[#c1cad8] text-[11px] font-normal font-jetbrainsmono uppercase leading-[14.46px] tracking-[0.92px]">
                ISO 27001
              </div>
              <div className="px-[11.01px] py-[7.34px] bg-slate-900/60 rounded-md outline outline-[0.92px] outline-offset-[-0.92px] outline-slate-800 justify-center text-[#c1cad8] text-[11px] font-normal font-jetbrainsmono uppercase leading-[14.46px] tracking-[0.92px]">
                HIPAA
              </div>
              <div className="px-[11.01px] py-[7.34px] bg-slate-900/60 rounded-md outline outline-[0.92px] outline-offset-[-0.92px] outline-slate-800 justify-center text-[#c1cad8] text-[11px] font-normal font-jetbrainsmono uppercase leading-[14.46px] tracking-[0.92px]">
                GDPR
              </div>
              <div className="px-[11.01px] py-[7.34px] bg-slate-900/60 rounded-md outline outline-[0.92px] outline-offset-[-0.92px] outline-slate-800 justify-center text-[#c1cad8] text-[11px] font-normal font-jetbrainsmono uppercase leading-[14.46px] tracking-[0.92px]">
                NAIC #668
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-5">
            <h4 className="text-[#64748B] text-xs font-semibold uppercase leading-4 tracking-[1.3px]">Product</h4>
            <ul className="space-y-5 [&_a]:text-[#C1CAD8] [&_a]:text-sm lg:[&_a]:text-base">
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
              <li>
                <Link href="/use-cases">Use Cases</Link>
              </li>
              <li>
                <Link href="#">Book a Demo</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
             <h4 className="text-[#64748B] text-xs font-semibold uppercase leading-4 tracking-[1.3px]">Company</h4>
            <ul className="space-y-5 [&_a]:text-[#C1CAD8] [&_a]:text-sm lg:[&_a]:text-base">
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-[#64748B] text-xs font-semibold uppercase leading-4 tracking-[1.3px]">More Information</h4>
            <div className="space-y-5 space-y-5 [&_a]:text-[#C1CAD8] [&_a]:text-sm lg:[&_a]:text-base">
              <p className="flex items-center gap-2"> <CallIcon /> +1 458 745 9658</p>
              <p className="flex items-center gap-2"> <Emailcon /> hello@sovixlabs.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#0F172A] flex flex-col md:flex-row justify-between items-center gap-4 py-5 w-full">
          <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">© 2026 Sovix Labs • All rights reserved.</p>

          <div className="flex gap-6 lg:gap-12 [&_a]:text-[#C1CAD8] [&_a]:text-sm lg:[&_a]:text-base">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
