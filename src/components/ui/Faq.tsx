"use client";

import { MinusIcon, PlusIcon } from "@/assets/svgicons";
import { useState } from "react";

const faqs = [
  {
    question: "Does Sovix use our data to train external models?",
    answer:
      "No. Sovix runs entirely within your environment. Your data is never used to train external models or shared with third-party APIs.",
  },
  {
    question: "How secure is our data with Sovix?",
    answer: "Your data stays within your infrastructure with full control.",
  },
  {
    question: "Can we integrate Sovix with existing tools?",
    answer: "Yes, Sovix supports integration with most enterprise systems.",
  },
  {
    question: "Is there a setup required?",
    answer: "Minimal setup is required depending on your environment.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0); // first open by default

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-[#020617]/16 py-5 md:py-10 cursor-pointer"
          onClick={() => toggle(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-base md:text-xl lg:text-2xl font-bold tracking-[-1px] text-[#020617]">
              {faq.question}
              <sup className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] ml-1">
                0{index + 1}
              </sup>
            </h3>

            <span className="text-xl">
              {activeIndex === index ? <MinusIcon /> : <PlusIcon /> } 
            </span>
          </div>

          {activeIndex === index && (
            <p className="mt-2 md:mt-4 text-[#020617] text-sm md:text-base font-normal leading-[26px] w-full lg:px-4">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}