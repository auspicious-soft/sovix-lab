"use client";

type CardProps = {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

const FeatureCard = ({ number, title, description, children }: CardProps) => {
  return (
    <div className="group p-4 lg:p-7 relative bg-white/40 rounded-xl border border-[#F5F5F5] inline-flex justify-start items-center gap-3 lg:gap-5 overflow-hidden  transition-all duration-500 ease-out  hover:border-[#384965]">
      {/* Hover background circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[100px] h-[100px] bg-[#10B981]/10 rounded-full 
    opacity-0 scale-0 
    group-hover:opacity-100 group-hover:scale-[8] 
    transition-all duration-500 ease-out"
        />
      </div>
      <div
        className="flex justify-start items-start flex-col md:flex-row gap-5 relative 
  transition-all duration-500 ease-out 
  group-hover:-translate-y-1"
      >
        <div className="flex justify-start items-center gap-5">
          <div className="justify-center text-[#020617] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[2]">
            {number}
          </div>

          {/* 👇 icon comes here */}
          {children}
        </div>

        <div className="flex flex-col justify-start items-start gap-2 flex-1">
          <h3 className="text-[#020617] text-lg font-semibold capitalize leading-6">
            {title}
          </h3>
          <p className="text-[#020617]/80 text-sm md:text-base font-normal leading-[26px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default FeatureCard;
