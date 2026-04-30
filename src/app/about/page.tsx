import React from "react";
import SovixText from "@/assets/images/sovix-text.svg";
import Image from "next/image";
import {
  V01Icon,
  V02Icon,
  V03Icon,
  V04Icon,
  V05Icon,
  V06Icon,
} from "@/assets/svgicons";
import TeamSection from "@/components/about/TeamSection";
import FooterSection from "@/components/ui/FooterSection";
const cards = [
  { year: "2021", text: "Founded in San Fransisco" },
  { year: "47", text: "People across 4 time zones" },
  { year: "12", text: "Carrier deployments live" },
  { year: "0", text: "Bytes of client data ever egressed" },
];
const timelineData = [
  {
    year: "2018-2020",
    title: "The problem becomes undeniable",
    description:
      "Marcus Webb, then head of underwriting technology at a Lloyd's syndicate, watches three separate AI pilot projects fail because none of them could operate inside the security perimeter. The vendors all say the same thing: 'your data has to come to us.' The syndicate says no. The pilots die.",
  },
  {
    year: "2021",
    title: "Sovix is founded",
    description:
      "Marcus co-founds Sovix with Priya Nair (ex-AWS infrastructure) and Dr. James Okoro (NLP researcher, Cambridge). The founding thesis: private AI infrastructure for regulated industries, starting with insurance. First office: a converted warehouse in SoMa with six people and one whiteboard.",
  },
  {
    year: "2022",
    title: "First carrier deployment",
    description:
      "Sovix deploys its first production system inside a mid-market P&C carrier in the UK. The model processes 40,000 inspection reports in the first month. Zero data leaves the carrier's AWS environment. The underwriting team asks for two more surfaces within six weeks.",
  },
  {
    year: "2023",
    title: "Series A — $28M",
    description:
      "Sovix deploys its first production system inside a mid-market P&C carrier in the UK. The model processes 40,000 inspection reports in the first month. Zero data leaves the carrier's AWS environment. The underwriting team asks for two more surfaces within six weeks.",
  },
  {
    year: "2024",
    title: "GovCloud launch & air-gap certification",
    description:
      "Sovix becomes the first private AI platform for insurance to achieve air-gap deployment certification. Three US state-backed carriers move to production. The platform now handles over 2M documents per month across all deployments.",
  },
];
const features = [
  {
    version: "V — 01",
    title: "Privacy is architecture, not policy",
    description:
      "Every design decision we make — from model architecture to deployment tooling — flows from a single belief: that the most powerful AI for regulated industries is the AI that operates entirely within the institution's control. Not as a constraint.",
    icon: <V01Icon />,
  },
  {
    version: "V — 02",
    title: "Every decision must be explainable",
    description:
      "A risk decision that can't be traced back to a source and explained to a regulator is a liability, not an insight. We build AI that shows its work — every answer, every recommendation, every flag comes with a citation and a confidence score.",
    icon: <V02Icon />,
  },
  {
    version: "V — 03",
    title: "Domain depth over general capability",
    description:
      "General-purpose AI is impressive in demos. It fails in production underwriting because it doesn't know what a Lloyd's binder is, what TIV means in a CAT model, or why a Schedule A matters. We go deep on insurance so our customers don't have to teach their AI from scratch.",
    icon: <V03Icon />,
  },
  {
    version: "V — 04",
    title: "Your team stays in the loop",
    description:
      "AI that displaces underwriters creates risk. AI that makes underwriters faster and more consistent creates competitive advantage. We build tools that amplify human judgment — not replace it. The underwriter remains the decision-maker. Always.",
    icon: <V04Icon />,
  },
  {
    version: "V — 05",
    title: "Deploy once. Own it permanently.",
    description:
      "We don't do subscription-gated intelligence. When Sovix is deployed in your environment, your team operates and owns it. No model-as-a-service dependency, no usage metering on inference, no leverage over your workflow if you ever choose to move.",
    icon: <V05Icon />,
  },
  {
    version: "V — 06",
    title: "Measure what actually matters",
    description:
      "We track underwriting accuracy, decision speed, and audit trail completeness — not engagement metrics or AI usage rates. Our customers don't pay us to use Sovix more often. They pay us to underwrite better. Those are different incentives and they produce different products.",
    icon: <V06Icon />,
  },
];
const Page = () => {
  return (
    <>
      <section className="py-12 md:py-[100px] flex flex-col w-full relative z-[1] grid-border relative z-1">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:px-14">
            <div className="flex flex-col gap-4 md:gap-6 justify-start items-center lg:items-start ">
              <div className="inline-flex justify-start items-center gap-3">
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    About Sovix Labs
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-6 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="self-stretch justify-center text-slate-50 text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                  We built the <span className="text-green">AI </span> that
                  insurance couldn&apos;t{" "}
                  <span className="text-green">Buy.</span>
                </h1>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Sovix Labs was founded by a team of underwriters,
                  infrastructure engineers, and AI researchers who spent years
                  watching the industry try to bolt public AI onto private risk
                  workflows — and fail every time. So we built the right thing
                  from scratch.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="grid md:grid-cols-2 gap-[14px]">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="group relative p-5 rounded-xl border border-[#1E293B] 
      bg-[#0F172A] overflow-hidden transition-all duration-500 
      hover:border-[#6A7587]"
                  >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="w-[34px] h-[34px] bg-[#10B981]/10 rounded-full 
          opacity-0 scale-0 
          group-hover:opacity-100 group-hover:scale-[12] 
          transition-all duration-500 ease-out"
                      />
                    </div>

                    <div
                      className="relative z-10 flex flex-col gap-3 text-center
        transition-all duration-500 ease-out 
        group-hover:-translate-y-1"
                    >
                      <h3 className="text-green text-3xl md:text-5xl font-bold"> 
                        {card.year}
                      </h3>
                      <p className="text-[#C1CAD8] text-sm leading-6">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="group relative py-5 px-5 md:px-12 rounded-xl border border-[#1E293B] 
                    bg-[#0F172A] overflow-hidden transition-all duration-500 
                    hover:border-[#6A7587]"
              >
                {/* 🔥 Hover background glow (kept same effect, adjusted color) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-[100px] h-[100px] bg-[#10B981]/10 rounded-full 
                        opacity-0 scale-0 
                        group-hover:opacity-100 group-hover:scale-[8] 
                        transition-all duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div
                  className="relative z-10 gap-2 flex flex-col relative 
                transition-all duration-500 ease-out 
                group-hover:-translate-y-1"
                >
                  {/* Description */}
                  <p className="text-[#C1CAD8] text-sm leading-6">
                    The question was never can AI read an insurance document.
                    The question was can it do so without the document leaving
                    the building. That&apos;s what we set out to answer.
                  </p>
                  <span className="text-green text-[10px] font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    - Marcus Webb, Founder & CEO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={SovixText}
          alt="Sovix Text"
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-none -z-1"
        />
      </section>

      <section className="flex flex-col w-full py-10 md:py-[60px] bg-white">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-10">
          <div className="w-full grid items-start grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-5 lg:gap-16">
            <div className="flex flex-col gap-3 md:gap-6 justify-center items-center text-center w-full lg:justify-start lg:text-left lg:items-start lg:sticky top-10">
              <div className="inline-flex justify-start items-center gap-3">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [01]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    Our Story
                  </div>
                </div>
              </div>
              <div className="opacity-20 justify-start text-[#30cc94] font-bold text-[70px] leading-[30px] md:text-[100px] md:leading-[70px]">
                2021
              </div>
              <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                Three years of the wrong tools. One decision to build the{" "}
                <span className="text-green">Right One.</span>
              </h2>
              <p className="text-[#020617]/80 text-sm md:text-base font-normal leading-[26px] w-full">
                The founding team came from Lloyd&apos;s syndicates, AWS
                infrastructure, and ML research. They&apos;d all hit the same
                wall: the AI tools that existed were built for the cloud-native
                world, not for carriers that couldn&apos;t let data leave their
                environment. So they left their jobs and fixed it.
              </p>
            </div>
            <div className="w-full flex flex-col">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-[120px_1fr] border-b border-[#1E293B]/20 last:border-b-0 "
                >
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] md:border-r border-[#1E293B]/20 py-4 md:py-7 px-2.5 ">
                    {item.year}
                  </div>
                  <div className="px-2.5 py-4 pt-0 md:p-7 flex flex-col gap-2.5">
                    <h3 className="text-slate-950 text-base md:text-lg font-bold leading-6">
                      {item.title}
                    </h3>
                    <p className="text-[#020617]/80 text-sm md:text-base font-normal leading-[26px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="claims" className="flex flex-col w-full py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [02]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  What We Believe
                </div>
              </div>
            </div>
            <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
              AI that <span className="text-green">Stays Inside</span> the
              building isn&apos;t a compromise. <br></br>It&apos;s the whole
              point.
            </h2>
            <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] w-full">
              Every design decision we make — from model architecture to
              deployment tooling — flows from a single belief: that the most
              powerful AI for regulated industries is the AI that operates
              entirely within the institution&apos;s control. Not as a
              constraint. As an advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 rounded-xl lg:rounded-[20px] overflow-hidden bg-[#161A29]/30">
            {features.map((item, index) => (
              <div
                key={index}
                className={`p-5 lg:p-9 border-[#30CC94]/10
    border-b last:border-b-0          
    ${index % 3 !== 2 ? "md:border-r" : ""}
    ${index < features.length - 3 ? "md:border-b" : "md:border-b-0"}
  `}
              >
                {/* Version */}
                <p className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] mb-2">
                  {item.version}
                </p>

                {/* Icon */}
                <div className="mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base md:text-lg eading-[26px] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#c1cad8] text-sm font-normal leading-[26px] w-full">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full bg-white py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col">
          <div className="w-full grid items-end grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10 mb-6 md:mb-10 lg:mb-14">
            <div className="flex flex-col gap-3 justify-center items-center text-center lg:justify-start lg:items-start lg:text-left ">
              <div className="inline-flex justify-start items-center gap-3 mb-2.5">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [03]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    Backed By
                  </div>
                </div>
              </div>
              <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                Backed by investors who understand{" "}
                <span className="text-green">regulated industries. </span>
              </h2>
            </div>
            <div>
              <p className="text-[#020617]/80 text-sm md:text-base font-normal leading-[24px] w-full text-center lg:text-left lg:max-w-[516px] ml-auto w-full">
                We raised $28M Series A from investors who have built and scaled
                enterprise software inside financial services and insurance.
                They understand why we build the way we build.
              </p>
            </div>
          </div>
          <div className="grid items-center justify-center grid-cols-2 md:grid-cols-4 bg-[#F9F9F9] rounded-[10px] w-full max-w-6xl">
            <div className="justify-center text-[#64748B] text-lg font-bold leading-5 text-center py-7 px-2.5 border-r border-b md:border-b-0 border-[#020202]/3">
              NORDIC·RE
            </div>
            <div className="justify-center text-[#64748B] text-lg font-bold leading-5 text-center py-7 px-2.5 border-r-0 md:border-r border-b md:border-b-0 border-[#020202]/3">
              ATLAS MUTUAL
            </div>
            <div className="justify-center text-[#64748B] text-lg font-bold leading-5 text-center py-7 px-2.5 border-r border-[#020202]/3">
              IRONHOLD
            </div>
            <div className="justify-center text-[#64748B] text-lg font-bold leading-5 text-center py-7 px-2.5">
              KERNEL INSPECT
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col">
          <div className="w-full grid items-end grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10 mb-6 md:mb-10 lg:mb-14">
            <div className="flex flex-col gap-3 justify-center items-center text-center lg:justify-start lg:items-start lg:text-left ">
              <div className="inline-flex justify-start items-center gap-3 mb-2.5">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [04]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    The Team
                  </div>
                </div>
              </div>
              <h2 className="text-white text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                Built by people who <br></br>
                <span className="text-green">lived the problem.</span>
              </h2>
            </div>
            <div>
              <p className="text-white text-sm md:text-base font-normal leading-[24px] w-full text-center lg:text-left lg:max-w-[630px] ml-auto w-full">
                Every founder and senior engineer at Sovix spent years inside
                the industries we serve — underwriting desks, inspection firms,
                regulatory bodies, and cloud infrastructure teams. We
                didn`&apos;t research the problem. We had it.
              </p>
            </div>
          </div>
          <TeamSection />
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Page;
