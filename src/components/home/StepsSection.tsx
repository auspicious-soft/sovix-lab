"use client";

import React from "react";
import Image from "next/image";
import Data from "@/assets/images/data.jpg";
import trainAi from "@/assets/images/train-ai.jpg";
import DeployCloud from "@/assets/images/cloud.jpg";
import DeliverInsights from "@/assets/images/deliver.jpg";

const steps = [
  {
    step: "STEP 1",
    title: "Connect Data",
    desc: "Securely link your structured and unstructured data sources via encrypted connectors.",
    img: Data,
  },
  {
    step: "STEP 2",
    title: "Train AI",
    desc: "Fine-tune foundational models using our proprietary RAG and LoRA methodologies.",
    img: trainAi,
  },
  {
    step: "STEP 3",
    title: "Deploy Cloud",
    desc: "Instantiate the model instances within your dedicated infrastructure for maximum security.",
    img: DeployCloud,
  },
  {
    step: "STEP 4",
    title: "Deliver Insights",
    desc: "Roll out custom AI applications to your workforce through our unified interface or API.",
    img: DeliverInsights,
  },
];

const StepsSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((item, index) => {
        const isHighlighted = index === 0 || index === 2;
        const isLast = index === steps.length - 1;

        return (
          <div
            key={index}
            className={`flex flex-col pb-4 md:pb-0 md:pr-4 gap-5 lg:gap-7 ${!isLast ? "md:border-r md:border-[#DEDEDE] border-b border-[#DEDEDE] md:border-b-0" : ""}`}
          >
            {/* Step Label */}
            <div className="">
              <span
                className={`
            inline-block px-3.5 py-1.5 bg-[#F4F5F7] border border-[#EBEBEB] rounded-[6px] font-jetbrainsmono tracking-[1px] text-xs text-[#020617]
            ${isHighlighted ? "!bg-[#020617] !text-white !border-[#020617]" : ""}
          `}
              >
                {item.step}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-[#020617] font-bold mb-2 text-base">
                {item.title}
              </h3>
              <p className="mb-4 text-[#020617]/80 text-base leading-[26px]">
                {item.desc}
              </p>

              {/* Image */}
              <div className="mt-auto">
                <div className="relative w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepsSection;
