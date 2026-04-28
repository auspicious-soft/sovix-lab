import React from "react";
import Button from "@/components/ui/Button";
import SovixSoultionsBanner from "@/assets/images/sovix-solutions-graphic.svg";
import Image from "next/image";
import SurfaceTabs from "@/components/solutions/SurfaceTabs";
import DeploymentOptions from "@/components/solutions/DeploymentOptions";
import CardBox from "@/components/ui/CardBox";
import ButtonArrowWhite from "@/assets/images/white-arrow.svg";
import {
  Compliance1Icon,
  Compliance2Icon,
  Compliance3Icon,
  Compliance4Icon,
  Compliance5Icon,
  TickIcon,
} from "@/assets/svgicons";
import Link from "next/link";
import InspectionSlider from "./InspectionSlider";

const Page = () => {
  return (
    <>
      <section className="py-10 md:py-[60px] banner-section flex flex-col w-full relative z-[1]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between ">
          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[56.5%_43.5%] gap-6 md:gap-10 lg:px-10">
            <div className="flex flex-col gap-5 justify-start items-center lg:items-start ">
              <div className="pl-[7px] pr-2.5 py-[7px] bg-slate-900/60 rounded-full outline outline-1 outline-offset-[-1px] outline-slate-800 inline-flex justify-center text-center lg:text-left lg:justify-start items-center flex-wrap gap-2">
                <div className="px-2.5 py-[3px] bg-emerald-500/10 rounded-full inline-flex justify-start items-center gap-1.5">
                  <div className="size-1.5 bg-[#30cc94] rounded-full" />
                  <span className="justify-center text-[#30cc94] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    PRIVATE AI PLATFORM
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="self-stretch justify-center text-slate-50 text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                  One private AI system. Every workflow your risk team runs.
                </h1>
                <p className="text-[#c1cad8] text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Sovix deploys inside your perimeter and connects to every
                  document, decision, and data source your team already uses —
                  without a single byte leaving your environment.
                </p>
              </div>
              <Button></Button>
            </div>
            <div className="">
              <div className="relative  w-full m-auto ml-auto ">
                <Image
                  src={SovixSoultionsBanner}
                  alt="Sovix Solution Banner"
                  className="m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="four-surgaces-section flex flex-col w-full bg-no-repeat bg-bottom bg-cover py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [01]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  The core platform
                </div>
              </div>
            </div>
            <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
              Four Surfaces.
              <br />
              One <span className="text-green">Unified Intelligence </span>{" "}
              Layer.
            </h2>
          </div>
          <SurfaceTabs />
        </div>
      </section>

      <section className="flex flex-col w-full bg-white py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col">
          <div className="w-full grid items-end grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10 mb-6 md:mb-10 lg:mb-14">
            <div className="flex flex-col gap-3 justify-center items-center text-center lg:justify-start lg:items-start lg:text-left ">
              <div className="inline-flex justify-start items-center gap-3 mb-2.5">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [02]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    Deployment
                  </div>
                </div>
              </div>
              <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                Deployed your way.
                <br /> <span className="text-green">Governed </span> your way.
              </h2>
            </div>
            <p className="text-[#020617]/80 text-base font-normal leading-[24px] w-full text-center lg:text-left">
              Sovix runs inside your AWS, Azure, GovCloud, or on-premise
              environment. We do not operate shared infrastructure. Your data,
              your model weights, your inference — fully air-gappable and
              SRE-controlled.
            </p>
          </div>
          <DeploymentOptions />
        </div>
      </section>
      <section className="flex flex-col w-full  py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
            <div className="flex flex-col gap-3 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex justify-start items-center gap-3 mb-2.5">
                <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [03]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    Compliance
                  </div>
                </div>
              </div>
              <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] max-w-[410px] w-full tracking-[-1px]">
                Built for the auditors, not just the{" "}
                <span className="text-green">engineers.</span>
              </h2>
              <p className="text-[#c1cad8] text-base font-normal leading-[26px] max-w-[590px] w-full">
                Every Sovix deployment ships with a full compliance package:
                data processing agreements, security architecture documentation,
                model governance logs, and per-decision audit trails. Our
                security questionnaire takes under two hours to complete because
                we have already answered it.
              </p>
              <div className="flex flex-col gap-3 mt-5 w-full">
                <span className="justify-center text-[#7C8693] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] text-left">
                  Key capabilities
                </span>
                <ul className="space-y-2 md:space-y-2 w-auto max-w-[356px]">
                  {[
                    "Data processing agreements",
                    "Security architecture documentation",
                    "Model governance logs",
                    "Per-decision audit trails",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[#EFEFEF] text-base font-normal pb-2 border-b border-[#FFFFFF]/5 last:border-b-0"
                    >
                      <span className="mt-1">
                        <TickIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="grid md:grid-cols-2 gap-[14px]">
                <CardBox
                  title="SOC 2 Type II"
                  description="Continuous security, availability & confidentiality controls"
                >
                  <Compliance1Icon />
                </CardBox>
                <CardBox
                  title="ISO 27001"
                  description="International information security management standard"
                >
                  <Compliance2Icon />
                </CardBox>
                <CardBox
                  title="HIPAA"
                  description="Health data handling compliant across all deployment tiers"
                >
                  <Compliance3Icon />
                </CardBox>
                <CardBox
                  title="GDPR"
                  description="EU data protection regulation — all tiers compliant by design"
                >
                  <Compliance4Icon />
                </CardBox>
              </div>
              <div
                className="group relative p-7 rounded-xl border border-[#1E293B] 
      bg-[#0F172A]/60 overflow-hidden transition-all duration-500 
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
                  className="relative z-10 flex flex-col relative 
  transition-all duration-500 ease-out 
  group-hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className=" mb-3">
                    <Compliance5Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#F8FAFC] text-lg font-bold mb-1.5">
                    NAIC Model Law #668
                  </h3>

                  {/* Description */}
                  <p className="text-[#C1CAD8] text-sm leading-6">
                    Insurance Data Security Model Law — governance, audit
                    trails, and incident response built in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full py-10 md:py-[60px] bg-white">
        <div className="max-w-[1122px] mx-auto px-4 flex items-center justify-between w-full flex-col">
          <div className="flex items-center justify-between w-full flex-col relative z-1 lg:p-5">
            <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-5 w-full rounded-2xl  overflow-hidden border border-[#B8B8B8] items-center px-4 md:px-10 py-10 z-1">
              <div className="flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left ">
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Book A Discovery Call
                </div>

                <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                  See Sovix running inside your{" "}
                  <span className="text-green">Reference Environment.</span>
                </h2>
                <p className="text-[#020617]/80 text-base font-normal leading-[24px] w-full">
                  Bring your hardest document. We bring the security
                  questionnaire, the deployment architecture, and a working
                  model trained on data from your sector. 45 minutes. No slides.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-end  item-center">
                <Button>Book a Discovery Call</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="use-cases-section flex flex-col w-full bg-no-repeat bg-bottom bg-cover py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex w-full flex-col gap-6 md:gap-12 lg:gap-20">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5 w-full border-b border-[#FFFFFF]/16 pb-6 items-center">
            <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
              <div className="inline-flex justify-start items-center gap-3">
                <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [04]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0"></div>
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    use Cases
                  </div>
                </div>
              </div>
              <h2 className="text-[#FFFFFF] text-base  md:text-[20px] font-jetbrainsmono uppercase tracking-[1px]">
                Where Sovix goes to work.
              </h2>
            </div>
            <div className="flex items-center justify-center lg:justify-end  item-center">
              <Link
                href="#"
                className={`flex items-center justify-self-start gap-0.5 font-medium text-sm bg-[#FFFFFF]/5 text-[#FFFFFF] border border-[#FFFFFF]/20 px-5 py-2.5 rounded-[6px] hover:bg-[#fff]/20 transition`}
              >
                View Use Cases
                <Image src={ButtonArrowWhite} alt="Button Arrow" />
              </Link>
            </div>
          </div>
          <h3 className="max-w-[523px] w-full justify-start text-slate-50 text-[20px] md:text-[26px] font-bold leading-[32px] md:leading-[42px]">
            Every use case below is in production at a carrier, inspection firm,
            or underwriting support company. No demos, no pilots, no
            hypotheticals.
          </h3>
          <InspectionSlider />
        </div>
      </section>

      <section className="flex flex-col w-full py-10 md:py-[60px] document-intelligence bg-no-repeat bg-center bg-cover">
        <div className="max-w-[1122px] mx-auto px-4 flex items-center justify-between w-full flex-col">
          <div className="above-footer-outer flex items-center justify-between w-full flex-col relative z-1 lg:p-5">
            <div className="overlay-blure-footer"></div>
            <div className="avobe-footer relative grid lg:grid-cols-[1.5fr_1fr] gap-5 w-full rounded-2xl bg-[#0F172A]/10 overflow-hidden border border-[#064E3B]/40 items-center px-4 md:px-10 py-10 lg:px-[64px] lg:py-[64px] z-1">
              <div className="overlay-shadow-footer"></div>
              <div className="flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left ">
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  BOOK A DISCOVERY CALL
                </div>

                <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                  Your use case might not be on this list.
                </h2>
                <p className="text-[#C1CAD8]/80 text-base font-normal leading-[24px] w-full">
                  Every deployment we run starts with a discovery call where we
                  map your specific workflows, documents, and bottlenecks. If
                  the problem involves documents, decisions, and data that
                  cannot leave your building — we have probably solved a version
                  of it before.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-end  item-center">
                <Button>Book a Discovery Call</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
