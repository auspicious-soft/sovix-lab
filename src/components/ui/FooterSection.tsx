import React from 'react';
import Button from './Button';

const FooterSection = () => {
    return (
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
                <p className="text-[#C1CAD8]/80 text-sm md:text-base font-normal leading-[24px] w-full">
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
    );
}

export default FooterSection;
