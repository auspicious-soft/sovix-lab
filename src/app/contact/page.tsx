import {
  CallGreenIcon,
  ContactTextIcon,
  EmailGreenIcon,
  IntelligenceTextIcon,
  LocationGreenIcon,
  OperationsTextIcon,
  PrivateAiTextIcon,
  SocialIcon,
} from "@/assets/svgicons";
import ContactForm from "@/components/ui/ContactForm";
import Faq from "@/components/ui/Faq";
import FooterSection from "@/components/ui/FooterSection";
import React from "react";

const Page = () => {
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
                    Get in touch
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="self-stretch justify-center text-slate-50 text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px]">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  BOOK A DISCOVERY CALL
                </div>
              </div>
            </div>
            <h2 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-bold leading-[36px] md:leading-[50px] tracking-[-1px] max-w-[580px] w-full">
              <span className="text-green"> 45 minutes</span> with a solutions
              architect.
            </h2>
            <p className="text-[#c1cad8] text-sm md:text-base font-normal leading-[26px] max-w-[680px] w-full">
              Share your environment, compliance posture and hardest document.
              We&apos;ll come back with a reference architecture, deployment
              plan and signed mutual NDA within 48 hours.
            </p>
          </div>

          <div className="w-full grid items-start grid-cols-1 lg:grid-cols-[1fr_1.47fr] gap-3 lg:gap-10">
            <div className="w-full flex flex-col gap-5 md:gap-7  bg-[#0F172A]/60 border border-[#00E5A0]/20 rounded-2xl px-4 md:px-8 py-8">
              <div className="flex flex-col gap-6 border-b border-[#3A3A3A] pb-4">
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Direct
                </div>
                <div className="flex gap-2">
                  <EmailGreenIcon />
                  <div className="flex flex-col gap-1">
                    <div className="text-[#C1CAD8] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                      Other ways to connect
                    </div>
                    <a
                      className="text-[#FFFFFF] text-sm md:text-base font-semibold"
                      href="mailto:sales@aegis.ai"
                    >
                      sales@aegis.ai
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <CallGreenIcon />
                  <div className="flex flex-col gap-1">
                    <div className="text-[#C1CAD8] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                      ENTERPRISE DESK
                    </div>
                    <a
                      href="tel:+14784587896"
                      className="text-[#FFFFFF] text-sm md:text-base font-semibold"
                    >
                      +1 478 458 7896
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <LocationGreenIcon />
                  <div className="flex flex-col gap-1">
                    <div className="text-[#C1CAD8] text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                      Our Location
                    </div>
                    <p className="text-[#FFFFFF] text-sm md:text-base font-semibold max-w-[200px] w-full">
                      535 Mission St, 14th Floor
                      <br /> San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <a
                    className="text-[#C1CAD8] text-sm md:text-base font-semibold flex gap-1 items-center"
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                    LINKEDIN <SocialIcon />
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    className="text-[#C1CAD8] text-sm md:text-base font-semibold flex  gap-1 items-center"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    INSTAGRAM <SocialIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-5 md:gap-7  bg-[#0F172A]/60 border border-[#00E5A0]/20 rounded-2xl px-4 md:px-8 py-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full py-10 md:py-[60px] bg-white">
        <div className="max-w-326.5 mx-auto px-4 flex items-center justify-between w-full flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start border-b border-[#020202]/20 pb-6">
            <div className="inline-flex justify-start items-center gap-3 mb-2.5">
              <div className="flex justify-start items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0" />
                <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                  Frequently Asked Questions
                </div>
              </div>
            </div>
            <h2 className="text-[#020617] text-xl font-jetbrainsmono uppercase tracking-[1px] w-full">
              We are all about results.
            </h2>
          </div>
          <Faq />
        </div>
      </section>
      <section className="flex flex-col w-full py-10 md:py-[60px]">
        <div className="max-w-326.5 mx-auto px-4 flex w-full flex-col gap-6 md:gap-12 lg:gap-20">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5 w-full border-b border-[#FFFFFF]/16 pb-6 items-center">
            <div className="flex flex-col gap-3 justify-center items-center text-center w-full md:justify-start md:text-left md:items-start">
              <div className="inline-flex justify-start items-center gap-3">
                <div className="flex justify-start items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-500/60 from 33% to-emerald-500/0"></div>
                  <div className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px]">
                    Compliance
                  </div>
                </div>
              </div>
              <h2 className="text-[#FFFFFF] text-base md:text-[20px] font-jetbrainsmono uppercase tracking-[1px]">
                Learn about our mission and values.
              </h2>
            </div>
          </div>
          <h3 className="max-w-[640px] w-full justify-start text-slate-50 text-[22px] md:text-[26px] lg:text-4xl font-bold leading-[36px] md:leading-[42px] lg:leading-[48px] tracking-[1px] text-center md:text-left">
            We are where <span className="text-green">Private AI</span>{" "}
            <span className="inline-flex align-middle">
              <PrivateAiTextIcon />
            </span>{" "}
            meets real <span className="text-green">Operations</span>{" "}
            <span className="inline-flex align-middle">
              <OperationsTextIcon />
            </span>
            , where Data becomes{" "}
            <span className="text-green">Intelligence</span>{" "}
            <span className="inline-flex align-middle">
              <IntelligenceTextIcon />
            </span>
            , workflows become systems, and decisions{" "}
            <span className="text-green">Connect</span>{" "}
            <span className="inline-flex align-middle">
              <ContactTextIcon />
            </span>{" "}
            with outcomes.
          </h3>
          <video
            src="/images/slider-video.mp4"
            className="w-full object-cover aspect-[16/7] rounded-2xl md:rounded-4xl"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Page;
