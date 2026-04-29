import React from "react";
const cards = [
  { year: "2021", text: "Founded in San Fransisco" },
  { year: "47", text: "People across 4 time zones" },
  { year: "12", text: "Carrier deployments live" },
  { year: "0", text: "Bytes of client data ever egressed" },
];

const Page = () => {
  return (
    <>
      <section className="py-12 md:py-[80px]  flex flex-col w-full relative z-[1] grid-border relative z-1">
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
                  We built the <span className="text-green">AI</span> that
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
                      <h3 className="text-green text-5xl font-bold">
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
                              className="group relative py-5 px-12 rounded-xl border border-[#1E293B] 
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
                                className="relative z-10 gap-2 flex flex-col relative 
                transition-all duration-500 ease-out 
                group-hover:-translate-y-1" 
                              >
                  
                                {/* Description */}
                                <p className="text-[#C1CAD8] text-sm leading-6">
                                  The question was never can AI read an insurance document. The question was can it do so without the document leaving the building. That&apos;s what we set out to answer.
                                </p>
                                <span className="text-green text-[10px] font-normal font-jetbrainsmono uppercase tracking-[1px]">- Marcus Webb, Founder & CEO</span>
                              </div>
                            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
