import Button from "@/components/ui/Button";
import BannerGraph from "@/assets/images/banner-graph.svg";
import SovixCore from "@/assets/images/sovix-core.svg";
import SovixCoreCricle from "@/assets/images/sovix-core-cricle.svg";
import DocumentIntelligence from "@/assets/images/document-intelligence.svg";
import AIGuidance from "@/assets/images/AI-guidance.svg";
import Image from "next/image";
import FeatureCard from "@/components/home/FeatureCard";
import {
  AWSIcon,
  ComplianceReadyIcon,
  CroosIcon,
  DataCannotIcon,
  FragmentedIcon,
  InternalQAIcon,
  LessIcon,
  ThirdPartyIcon,
  TickIcon,
  UnstructuredEvidenceIcon,
  WorkflowAutomationIcon,
  ZeroDataIcon,
} from "@/assets/svgicons";
import StepsSection from "@/components/home/StepsSection";
import SurfacesCard from "@/components/home/SurfacesCard";
import CardBox from "@/components/ui/CardBox";

export default function Home() {
  return (
    <>
      <section className="py-10 md:py-[60px] banner-section flex flex-col w-full relative z-[1]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between ">
          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[56.5%_43.5%] gap-10 lg:px-10">
            <div className="flex flex-col gap-5 justify-start items-center lg:items-start ">
              <div className="pl-[7px] pr-2.5 py-[7px] bg-slate-900/60 rounded-full outline outline-1 outline-offset-[-1px] outline-slate-800 inline-flex justify-center text-center lg:text-left lg:justify-start items-center flex-wrap gap-2">
                <div className="px-2.5 py-[3px] bg-emerald-500/10 rounded-full inline-flex justify-start items-center gap-1.5">
                  <div className="size-1.5 bg-[#30cc94] rounded-full" />
                  <span className="justify-center text-[#30cc94] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    PRIVATE AI · v4.2
                  </span>
                </div>
                <div className="justify-center text-[#c1cad8] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Deployed inside 40+ enterprise perimeters
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="self-stretch justify-center text-slate-50 text-[32px] leading-[42px] md:text-[46px] lg:text-[66px] font-bold md:leading-[60px] lg:leading-[80px] md:tracking-[-2px]">
                  Private AI — built for{" "}
                  <span className="text-green">Risk</span> and{" "}
                  <span className="text-green">Underwriting</span> Operations
                </h1>
                <p className="text-[#c1cad8] text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Bring AI to your data, not the other way around. Deploy
                  secure, on-prem or cloud-based models trained on your internal
                  documents and workflows. Enable faster analysis, streamline
                  underwriting and inspection processes.
                </p>
              </div>
              <Button></Button>
              <div className="flex flex-wrap gap-4 justify-between w-full max-w-[546px] border-t border-[#1E293B] mt-5 pt-5 text-center">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] md:text-[20px] font-bold leading-8 text-[#F8FAFC]">
                    30 DAYS
                  </h2>
                  <p className="text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] text-[#64748B] leading-[17px] max-w-[100px] md:max-w-full">
                    TIME TO DEPLOY
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] md:text-[20px]  font-bold leading-8 text-[#F8FAFC] flex items-center justify-center align-center">
                    <LessIcon /> 60s
                  </h2>
                  <p className="text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] text-[#64748B] leading-[17px] max-w-[100px] md:max-w-full">
                    P95 DOCUMENT PROCESSING
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] md:text-[20px]  font-bold leading-8 text-[#F8FAFC]">
                    0 BYTES
                  </h2>
                  <p className="text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] text-[#64748B] leading-[17px] max-w-[100px] md:max-w-full">
                    DATA EGRESS
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="banner-graph relative max-w-[452px] w-full m-auto lg:ml-auto mb-3.5">
                <Image src={BannerGraph} alt="BannerGraph" />
              </div>
              <div className="relative max-w-[452px] w-full m-auto lg:ml-auto flex gap-1.5 flex-wrap">
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
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full border-t border-[#0F172A] py-10">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="flex justify-between gap-4 w-full items-center flex-col lg:flex-row">
            <div className="justify-center text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase leading-[18px] tracking-[1px]">
              TRUSTED INSIDE THE PERIMETERS OF
            </div>
            <div className="flex  gap-4 max-w-[710px] w-full flex-wrap justify-center md:justify-between">
              <div className="justify-center text-[#64748B] text-lg font-bold leading-5">
                NORDIC·RE
              </div>
              <div className="justify-center text-[#64748B] text-lg font-bold leading-5">
                ATLAS MUTUAL
              </div>
              <div className="justify-center text-[#64748B] text-lg font-bold leading-5">
                IRONHOLD
              </div>
              <div className="justify-center text-[#64748B] text-lg font-bold leading-5">
                KERNEL INSPECT
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full bg-white py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="w-full grid items-start grid-cols-1 lg:grid-cols-[1fr_1.47fr] gap-10 lg:gap-16">
            <div className="flex flex-col gap-3 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex justify-start items-center gap-3 mb-2.5">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [01]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    THE PROBLEM
                  </div>
                </div>
              </div>
              <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                Risk teams <span className="text-green">drown </span> in
                documents — and AI hasn&apos;t helped.
              </h2>
              <p className="text-[#020617]/80 text-base font-normal leading-[24px] w-full">
                The last decade built dashboards. The next one must read, reason
                and decide — without ever letting your data leave the building.
              </p>
            </div>
            <div className="flex gap-4 w-full flex-col">
              <FeatureCard
                number="01"
                title="Fragmented risk signals"
                description="Underwriters manually reconcile documents, inspections and claims across 10+ disconnected systems. Signal is lost; bias enters."
              >
                <FragmentedIcon />
              </FeatureCard>
              <FeatureCard
                number="02"
                title="Unstructured evidence"
                description="Inspection photos, PDFs, field notes and third-party reports never reach your analytics layer — only dashboards do."
              >
                <UnstructuredEvidenceIcon />
              </FeatureCard>
              <FeatureCard
                number="03"
                title="Data cannot leave"
                description="Regulated carriers and inspection firms cannot ship PII/PHI to public LLM APIs. So AI stays at the demo stage."
              >
                <DataCannotIcon />
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>
      <section className="approch-section flex flex-col w-full bg-no-repeat bg-bottom bg-cover py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [02]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  THE Approach
                </div>
              </div>
            </div>
            <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
              Traditional AI rents intelligence. <br />
              <span className="text-green">Sovix </span> installs it.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 w-full mt-6 md:mt-10">
            {/* Left Card */}
            <div className="rounded-2xl bg-[#000000]/3 overflow-hidden border border-[#1E293B]">
              <h3 className=" bg-[#021320] py-3 px-5 md:py-5 md:px-7 text-[#64748B] text-lg md:text-[22px] font-semibold leading-[26px]">
                Traditional AI Stack
              </h3>

              <ul className="space-y-3 md:space-y-5 py-3 px-5 md:py-5 md:px-7">
                {[
                  "Prompts + PI leave your VPC",
                  "Third-party API terms of service",
                  "Opaque model updates — silent drift",
                  "No audit trail per decision",
                  "Per-token billing, unbounded cost",
                  "Shared tenancy with competitors",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#C1CAD8] text-base font-normal line-through "
                  >
                    <span className="mt-1">
                      <CroosIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card */}
            <div className="rounded-2xl bg-[#000000]/3 overflow-hidden border border-[#1E293B]">
              <h3 className="text-lg bg-[#021320] py-3 px-5 md:py-5 md:px-7 text-green md:text-[22px] font-semibold leading-[26px]">
                Sovix Private AI
              </h3>

              <ul className="space-y-3 md:space-y-5 py-3 px-5 md:py-5 md:px-7">
                {[
                  "Runs inside your AWS / Azure / on-prem",
                  "Zero data egress — contractually enforced",
                  "Model versions pinned by your SRE team",
                  "Per-decision citations & audit logs",
                  "Flat infrastructure billing, no token tax",
                  "Single-tenant, air-gappable",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#EFEFEF] text-base font-normal "
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

          <div className="grid lg:grid-cols-[1fr_1.21fr] gap-5 w-full mt-5 rounded-2xl bg-[#000000]/3 overflow-hidden border border-[#1E293B] items-center  px-4 md:px-10 py-10 lg:px-[60px] lg:py-10">
            <div className="flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left ">
              <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                ARCHITECTURE · ISOLATED
              </div>

              <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                A complete <span className="text-green">AI System</span> for
                Risk and Underwriting Operations
              </h2>
              <p className="text-[#C1CAD8]/80 text-base font-normal leading-[24px] w-full">
                The last decade built dashboards. The next one must read, reason
                and decide — without ever letting your data leave the building.
              </p>
              <Button></Button>
            </div>
            <div className="relative">
              <Image
                src={SovixCoreCricle}
                alt="Sovix Core Cricle"
                className="w-full"
              />
              <svg
                className="absolute inset-0"
                width="620"
                height="417"
                viewBox="0 0 620 417"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_309_719)">
                  <line
                    className="line to-center-reverse"
                    x1="301.695"
                    y1="192.773"
                    x2="301.695"
                    y2="586.373"
                  />
                </g>

                <g clipPath="url(#clip1_309_719)">
                  <line
                    className="line to-center-reverse"
                    x1="300.305"
                    y1="217.808"
                    x2="300.305"
                    y2="-175.792"
                  />
                </g>

                <g clipPath="url(#clip2_309_719)">
                  <line
                    className="line to-center-reverse"
                    x1="330.735"
                    y1="227.998"
                    x2="684.183"
                    y2="401.189"
                  />
                </g>

                <g clipPath="url(#clip3_309_719)">
                  <line
                    className="line to-center-reverse"
                    x1="274.768"
                    y1="204.474"
                    x2="-66.0994"
                    y2="7.67443"
                  />
                </g>

                <g clipPath="url(#clip4_309_719)">
                  <line
                    className="line to-center-reverse"
                    x1="332.652"
                    y1="201.748"
                    x2="687.826"
                    y2="32.1255"
                  />
                </g>

                <g clipPath="url(#clip5_309_719)">
                  <line
                    className="line to-center-reverse"
                    x1="272.459"
                    y1="216.274"
                    x2="-68.4081"
                    y2="413.074"
                  />
                </g>

                <defs>
                  <clipPath id="clip0_309_719">
                    <rect
                      width="201.668"
                      height="4.17244"
                      transform="translate(303 192.773) rotate(90)"
                    />
                  </clipPath>
                  <clipPath id="clip1_309_719">
                    <rect
                      width="201.668"
                      height="4.17244"
                      transform="translate(299 217.808) rotate(-90)"
                    />
                  </clipPath>
                  <clipPath id="clip2_309_719">
                    <rect
                      width="223.921"
                      height="4.17243"
                      transform="translate(331.309 226.826) rotate(26.105)"
                    />
                  </clipPath>
                  <clipPath id="clip3_309_719">
                    <rect
                      width="223.921"
                      height="4.17243"
                      transform="translate(274.115 205.604) rotate(-150)"
                    />
                  </clipPath>
                  <clipPath id="clip4_309_719">
                    <rect
                      width="223.921"
                      height="4.17243"
                      transform="translate(332.09 200.571) rotate(-25.5281)"
                    />
                  </clipPath>
                  <clipPath id="clip5_309_719">
                    <rect
                      width="223.921"
                      height="4.17243"
                      transform="translate(273.111 217.404) rotate(150)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Image
                src={SovixCore}
                alt="Sovix Core"
                className="absolute inset-0 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full bg-white py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="w-full grid items-start grid-cols-1 gap-6 md:gap-10 lg:gap-16">
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <div className="inline-flex justify-start items-center gap-3 mb-2.5">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [03]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    THE Blueprint
                  </div>
                </div>
              </div>
              <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                Seamless Integration in{" "}
                <span className="text-green">4 Steps. </span>
              </h2>
            </div>
            <StepsSection />
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [04]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  TRUST ARCHITECTURE
                </div>
              </div>
            </div>
            <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] max-w-[890px] w-full tracking-[-1px]">
              Built for Carriers who cannot afford a Breach, a Leak, or a
              Surprise. <span className="text-green">Surprise.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
            <CardBox
              title="Zero data egress"
              description="Your prompts, documents and embeddings never leave your perimeter — contractually."
            >
              <ZeroDataIcon />
            </CardBox>
            <CardBox
              title="AWS · Azure · On-prem"
              description="Deploys to GovCloud, sovereign regions and fully air-gapped environments."
            >
              <AWSIcon />
            </CardBox>
            <CardBox
              title="Compliance-ready"
              description="SOC 2 Type II, ISO 27001, GDPR, HIPAA-ready controls; NAIC Model #668 aligned."
            >
              <ComplianceReadyIcon />
            </CardBox>
            <CardBox
              title="No third-party APIs"
              description="Own weights, own inference, own audit trail. Nothing phones home."
            >
              <ThirdPartyIcon />
            </CardBox>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full bg-white py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col">
          <div className="w-full grid items-end grid-cols-1 lg:grid-cols-[1.37fr_1fr] gap-3 lg:gap-10 mb-6 md:mb-10 lg:mb-14">
            <div className="flex flex-col gap-3 justify-center items-center text-center lg:justify-start lg:items-start lg:text-left ">
              <div className="inline-flex justify-start items-center gap-3 mb-2.5">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [05]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    CAPABILITIES
                  </div>
                </div>
              </div>
              <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                One platform. <span className="text-green">Four critical </span>{" "}
                surfaces.
              </h2>
            </div>
            <p className="text-[#020617]/80 text-base font-normal leading-[24px] w-full text-center lg:text-left">
              Each capability is independently deployable and speaks to the
              others over an internal service mesh — no data leaves the cluster.
            </p>
          </div>

          <div className="group w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center rounded-2xl overflow-hidden border border-[#F5F5F5] transition-all duration-500 ease-out  hover:border-[#384965]">
            <div className="flex flex-col gap-2 justify-start items-start text-left px-4 py-6 md:p-12 ">
              <div className="inline-flex justify-start items-center gap-3 mb-2">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [01]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    Document Intelligence
                  </div>
                </div>
              </div>
              <h3 className="text-[#020617] text-[20px] md:text-[24px] leading-6  md:leading-8 font-bold max-w-[432px] w-full">
                Read everything, trust the extraction.
              </h3>
              <p className="text-[#020617]/80 text-base font-normal leading-[24px] text-left max-w-[432px] w-full">
                OCR, table parsing, structured extraction and cross-document
                reasoning with citations back to the source page.
              </p>
            </div>
            <div className="bg-[#10B981]/10 flex justify-center items-center px-4 py-6 md:p-6">
              <Image
                src={DocumentIntelligence}
                alt="Document Intelligence"
                className=" relative transition-all duration-500 ease-out group-hover:-translate-x-10"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] my-5 gap-5">
            <SurfacesCard
              number="02"
              title="Internal Q&A"
              description="Natural language over your policies, guidelines and historical decisions. Citations per answer."
            >
              <InternalQAIcon />
            </SurfacesCard>
            <SurfacesCard
              number="03"
              title="Workflow automation"
              description="Triage queues, exception handling and approval routing without exporting data to SaaS."
            >
              <WorkflowAutomationIcon />
            </SurfacesCard>
          </div>
          <div className=" group w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center rounded-2xl overflow-hidden border border-[#F5F5F5] transition-all duration-500 ease-out  hover:border-[#384965]">
            <div className="bg-[#10B981]/10 flex justify-center items-center px-4 py-6 md:p-6 lg:min-h-[314px]">
              <Image
                src={AIGuidance}
                alt="Document Intelligence"
                className=" relative transition-all duration-500 ease-out group-hover:translate-x-10"
              />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start text-left px-4 py-6 md:p-12 ">
              <div className="inline-flex justify-start items-center gap-3 !mb-2 max-w-[432px] w-full lg:m-auto">
                <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                  [04]
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    AI Guidance
                  </div>
                </div>
              </div>
              <h3 className="text-[#020617] text-[20px] md:text-[24px] leading-6  md:leading-8 font-bold max-w-[432px] w-full lg:m-auto">
                Turn data into decisions you can trust
              </h3>
              <p className="text-[#020617]/80 text-base font-normal leading-[24px] text-left max-w-[432px] w-full lg:m-auto">
                Combine multiple data points, signals, and historical context to
                generate clear, explainable decisions. Sovix evaluates risk in
                real time, highlights key factors, and provides
                confidence-backed outcomes
              </p>
            </div>
          </div>
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
                  See Sovix running inside your reference environment.
                </h2>
                <p className="text-[#C1CAD8]/80 text-base font-normal leading-[24px] w-full">
                  45-minute technical deep-dive with a solutions architect. We
                  bring the security questionnaire, you bring the hardest
                  document you have.
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
}
