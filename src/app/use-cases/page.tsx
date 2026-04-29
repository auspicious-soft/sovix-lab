"use client";
import React, { useCallback } from "react";
import FrimsImage from "@/assets/images/firms.jpg";
import TeamsImage from "@/assets/images/teams-image.jpg";
import ClaimsOperations from "@/assets/images/claims-operations.jpg";
import UnderwritingTeams from "@/assets/images/underwriting-teams.jpg";
import ComplianceLegalTeams from "@/assets/images/compliance-legal-teams.jpg";
import Image from "next/image";
import { LessBlackIcon } from "@/assets/svgicons";
import FooterSection from "@/components/ui/FooterSection";

const Page = () => {
  const [active, setActive] = React.useState<string>("inspection");
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  React.useEffect(() => {
    const sections = [
      "inspection",
      "triage",
      "claims",
      "knowledge",
      "compliance",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px", // controls when active changes
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "inspection", label: "Inspection" },
    { id: "triage", label: "Triage" },
    { id: "claims", label: "Claims" },
    { id: "knowledge", label: "Knowledge" },
    { id: "compliance", label: "Compliance" },
  ];
  return (
    <>
      <section className="py-12 md:py-[80px] banner-inner flex flex-col w-full relative z-[1] bg-no-repeat bg-bottom bg-cover">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full">
          <div className="w-full grid items-center grid-cols-1 gap-6 md:gap-10 lg:px-10">
            <div className="flex flex-col gap-5 justify-start items-center">
              <div className="pl-[7px] pr-2.5 py-[7px] bg-slate-900/60 rounded-full outline outline-1 outline-offset-[-1px] outline-slate-800 inline-flex justify-center text-center lg:text-left lg:justify-start items-center flex-wrap gap-2">
                <div className="px-2.5 py-[3px] bg-emerald-500/10 rounded-full inline-flex justify-start items-center gap-1.5">
                  <div className="size-1.5 bg-[#34D399] rounded-full" />
                  <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    USE cases
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="self-stretch justify-center text-slate-50 text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                  Where Sovix goes to work
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="inspection"
        className="flex flex-col w-full py-10 md:py-[60px]"
      >
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [01]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  PROPERTY INSPECTION FIRMS
                </div>
              </div>
            </div>
            <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
              From field notes to final report in under{" "}
              <span className="text-green">20 minutes</span>
            </h2>
          </div>

          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10">
            <div className="w-full flex flex-col gap-6 md:gap-10 py-4">
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  The problem
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Inspectors spend 3–4 hours after every site visit writing up
                  structured reports from handwritten notes, photos, and voice
                  memos. At scale, this is the single largest cost in an
                  inspection firm&apos;s operations — and the bottleneck that
                  limits how many jobs can be taken per week.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  What Sovix does:
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  The AI reads the inspector&apos;s raw notes and photos,
                  extracts structured data (property dimensions, condition
                  grades, deficiency codes, risk flags), and generates a
                  complete, formatted inspection report in the firm&apos;s
                  standard template. The inspector reviews, adjusts if needed,
                  and approves — typically in under 20 minutes.
                </p>
              </div>
              <div className="w-full grid items-start grid-cols-[1fr_1fr] gap-4 lg:gap-10 pt-5 border-t border-[#1E293B]">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    4h → 18m
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Report time
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    +40%
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Inspector capacity
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    100%
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Field completion
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    -73%
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Error rate
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-6 md:gap-8 py-4">
              <Image src={FrimsImage} alt="Frims" className="rounded-[20px]" />
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Who this is for
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Property inspection firms, field service companies supporting
                  underwriters, independent inspection contractors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="triage"
        className="flex flex-col w-full py-10 md:py-[60px] bg-white"
      >
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [02]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Underwriting teams
                </div>
              </div>
            </div>
            <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
              Score every submission in{" "}
              <span className="text-green"> Seconds.</span> <br /> Focus human
              attention on the ones that matter.
            </h2>
          </div>

          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10">
            <div className="w-full flex flex-col gap-6 md:gap-8 py-4">
              <Image src={TeamsImage} alt="Teams" className="rounded-[20px]" />
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Who this is for
                </span>
                <p className="text-[#020617] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Commercial property carriers, MGAs, underwriting support
                  companies, Lloyd&apos;s syndicates.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-6 md:gap-10 py-4">
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  The problem
                </span>
                <p className="text-[#020617]/80 text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Underwriting teams receive hundreds of new submissions per
                  week. Junior staff spend hours manually reading each one,
                  extracting key data, and routing it to the right underwriter —
                  before any actual underwriting has begun. High-quality
                  submissions get delayed. Low-quality ones consume the same
                  amount of time.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  What Sovix does:
                </span>
                <p className="text-[#020617]/80 text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Every incoming submission is automatically parsed, key fields
                  extracted (property type, location, construction, prior
                  losses, coverage requested), and scored against your
                  historical bind/decline patterns and risk appetite.
                  Submissions are triaged into clear buckets — straight-through
                  processing candidates, referrals for senior review, and
                  automatic declinations — with the supporting reasoning shown
                  for each decision.
                </p>
              </div>
              <div className="w-full grid items-start grid-cols-[1fr_1fr] gap-4 lg:gap-10 pt-5 border-t border-[#1E293B]/20">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#020617] flex items-center  align-center">
                    4h →{" "}
                    <div className="ml-1">
                      <LessBlackIcon />
                    </div>{" "}
                    60s
                  </h3>
                  <p className="text-[#1E293B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Triage time
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#020617]">
                    35–55%
                  </h3>
                  <p className="text-[#1E293B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Straight-through rate
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#020617]">
                    100%
                  </h3>
                  <p className="text-[#1E293B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Senior focus
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#020617]">
                    -60%
                  </h3>
                  <p className="text-[#1E293B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Quote cycle time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="claims" className="flex flex-col w-full py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [03]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Claims operations
                </div>
              </div>
            </div>
            <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
              Read <span className="text-green">Every Document</span> in a claim
              file — and know what matters.
            </h2>
          </div>

          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10">
            <div className="w-full flex flex-col gap-6 md:gap-10 py-4">
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  The problem
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  A complex property claim can involve dozens of documents: the
                  policy schedule, inspection reports, adjuster notes,
                  contractor estimates, legal correspondence, photographs, and
                  third-party engineering reports. Claims handlers spend days
                  reading and cross-referencing these documents before they can
                  assess coverage, liability, or quantum.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  What Sovix does:
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Sovix ingests the entire claim file, extracts every material
                  fact, cross-references the policy wording against the reported
                  loss, flags coverage questions, and surfaces the three to five
                  factors that will determine the outcome of the claim. The
                  claims handler receives a structured summary with every
                  assertion linked back to the source document and page number.
                </p>
              </div>
              <div className="w-full grid items-start grid-cols-[1fr_1fr] gap-4 lg:gap-10 pt-5 border-t border-[#1E293B]">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    2–3 days → 2–3h
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Review time
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    89%
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Coverage flags
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    -18%
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Leakage reduction
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    +40%
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Handler capacity
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-6 md:gap-8 py-4">
              <Image
                src={ClaimsOperations}
                alt="Claims Operations"
                className="rounded-[20px]"
              />
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Who this is for
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Claims departments at carriers, third-party administrators,
                  reinsurers, and legal teams handling large loss files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="knowledge"
        className="flex flex-col w-full py-10 md:py-[60px] bg-white"
      >
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [04]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Underwriting & risk teams
                </div>
              </div>
            </div>
            <h2 className="text-[#020617] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
              The answer is already in your data.{" "}
              <span className="text-green">Sovix finds it.</span>
            </h2>
          </div>

          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10">
            <div className="w-full flex flex-col gap-6 md:gap-8 py-4">
              <Image
                src={UnderwritingTeams}
                alt="Underwriting Teams"
                className="rounded-[20px]"
              />
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Who this is for
                </span>
                <p className="text-[#020617] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Any underwriting or risk team with more than two years of
                  historical data and more than five people — the ROI compounds
                  with archive size and team scale.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-6 md:gap-10 py-4">
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  The problem
                </span>
                <p className="text-[#020617]/80 text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Every experienced underwriter carries years of precedents,
                  decisions, and market knowledge in their head. When they
                  leave, that knowledge leaves with them. Even while they are
                  there, junior team members cannot access it without asking —
                  and senior underwriters cannot answer every question without
                  it disrupting their own work.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  What Sovix does:
                </span>
                <p className="text-[#020617]/80 text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Sovix indexes your entire historical decision archive — every
                  bound policy, declined submission, claims outcome, inspection
                  finding, and underwriting note — and makes it queryable in
                  plain language. Any team member can ask &quot;What did we do
                  the last time we saw a flat-roof commercial property with a
                  prior water damage claim in this postcode?&quot; and receive
                  an accurate, cited answer in seconds.
                </p>
              </div>
              <div className="w-full grid items-start grid-cols-[1fr_1fr] gap-4 lg:gap-10 pt-5 border-t border-[#1E293B]/20">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#020617] flex items-center  align-center">
                    4h →{" "}
                    <div className="ml-1">
                      <LessBlackIcon />
                    </div>{" "}
                    90s
                  </h3>
                  <p className="text-[#1E293B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Time to insight
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#020617]">
                    -35%
                  </h3>
                  <p className="text-[#1E293B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Ramp time
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#020617]">
                    +Consistency
                  </h3>
                  <p className="text-[#1E293B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Decision quality
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#020617]">
                    -60%
                  </h3>
                  <p className="text-[#1E293B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Interruptions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="compliance"
        className="flex flex-col w-full py-10 md:py-[60px]"
      >
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className=" text-[#7C8693] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">
                [05]
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Compliance & legal teams
                </div>
              </div>
            </div>
            <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
              Ask your entire regulatory library a{" "}
              <span className="text-green">Question.</span>
            </h2>
          </div>

          <div className="w-full grid items-center grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 lg:gap-10">
            <div className="w-full flex flex-col gap-6 md:gap-10 py-4">
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  The problem
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Insurance compliance teams work across dozens of regulatory
                  frameworks — state-level filing requirements, NAIC guidelines,
                  GDPR, HIPAA, Lloyd&apos;s minimum standards — and the
                  documents are long, dense, and constantly updated. Finding a
                  specific requirement, confirming whether a proposed product
                  change is compliant, or answering a regulator&apos;s question
                  in time is slow and error-prone.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  What Sovix does:
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Sovix ingests your full regulatory library — internal
                  compliance manuals, external regulatory texts, filed policy
                  forms, and board-approved guidelines — and makes it queryable.
                  Compliance officers can ask specific questions and receive
                  precise, cited answers from the actual source text. When
                  regulations update, the library updates, and Sovix flags which
                  existing products or processes are affected.
                </p>
              </div>
              <div className="w-full grid items-start grid-cols-[1fr_1fr] gap-4 lg:gap-10 pt-5 border-t border-[#1E293B]">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC] flex items-center  align-center">
                    3-4h →{" "}
                    <div className="ml-1">
                      <LessBlackIcon />
                    </div>{" "}
                    10m
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Query time
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    2×
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Team capacity
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    ↑ accuracy
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Leakage reduction
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-sm md:text-base md:text-xl text-[#F8FAFC]">
                    -50%
                  </h3>
                  <p className="text-[#64748B] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] w-full">
                    Audit prep time
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-6 md:gap-8 py-4">
              <Image
                src={ComplianceLegalTeams}
                alt="Comp lianceLegal Teams"
                className="rounded-[20px]"
              />
              <div className="flex flex-col gap-4">
                <span className="justify-center text-[#34D399] text-[10px] md:text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Who this is for
                </span>
                <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[590px] w-full">
                  Compliance officers, legal teams, product development teams at
                  carriers, MGAs, and insurance intermediaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />

      {/* Bottom Sticky Nav */}
      <div className="fixed bottom-8 left-0 w-full z-50 flex justify-between items-center px-2">
        <div className="mx-auto p-1 bg-[#051610]/60 rounded-[22px] outline outline-1 outline-offset-[-1px] outline-[#00e5a0]/20 backdrop-blur-[3px] inline-flex justify-start items-start">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-xs md:text-base leading-[26px] font-medium px-2 py-1 md:px-4 md:py-2 cursor-pointer rounded-full transition ${
                active === item.id
                  ? "text-slate-950 bg-[#30cc94]"
                  : "text-[#c1cad8] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
