"use client";

type CardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const TrustArchitecture = ({ title, description, children }: CardProps) => {
  return (
    <div
      className="group relative p-7 rounded-xl border border-[#1E293B] 
      bg-[#0F172A]/60 overflow-hidden transition-all duration-500 
      hover:border-[#6A7587]"
    >
      {/* 🔥 Hover background glow (kept same effect, adjusted color) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[34px] h-[34px] bg-[#10B981]/10 rounded-full 
          opacity-0 scale-0 
          group-hover:opacity-100 group-hover:scale-[12] 
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
        <div className=" mb-3">{children}</div>

        {/* Title */}
        <h3 className="text-[#F8FAFC] text-lg font-bold mb-1.5">{title}</h3>

        {/* Description */}
        <p className="text-[#C1CAD8] text-sm leading-6">{description}</p>
      </div>
    </div>
  );
};

export default TrustArchitecture;
