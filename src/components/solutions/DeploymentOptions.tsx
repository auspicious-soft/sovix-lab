"use client";

const badgeStyles: Record<string, string> = {
  api: "bg-[#34D399]/20 border-[#00E5A0]", 
  zero: "bg-[#D3D334]/20 border-[#E5A800]",
  locked: "bg-[#DBDBDB]/20 border-[#E1E1E1]",
};

const options = [
  {
    id: "01",
    tag: "[01] AWS · AZURE",
    title: "Private Cloud",
    description:
      "Deploy inside your existing AWS or Azure account. Your VPC, your keys, your security groups. Sovix manages the model layer; your team controls everything else.",
    badge: "API ONLY",
    type: "api",
  },
  {
    id: "02",
    tag: "[02] YOUR HARDWARE",
    title: "On-Premise",
    description:
      "For carriers and inspection firms that cannot use cloud infrastructure. Full on-premise deployment with model weights delivered by secure transfer and zero external dependencies post-installation.",
    badge: "ZERO",
    type: "zero",
  },
  {
    id: "03",
    tag: "[03] FULL ISOLATION",
    title: "GovCloud / Air-Gapped",
    description:
      "For regulated environments requiring complete network isolation. Sovix can be deployed with no outbound internet access, no telemetry, and no external model calls — ever.",
    badge: "PHYSICALLY IMPOSSIBLE",
    type: "locked",
  },
];

export default function DeploymentOptions() { 
  return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 lg:px-20 w-full">
          
          {options.map((item, index) => (
           <div
  key={item.id}
  className={`p-6 flex flex-col justify-between py-6 md:py-10 px-4 md:pr-7 md:pl-4
    border-[#dedede]
    border-t border-t-transparent
    transition-all duration-300

    hover:border-t-[#00E5A0]
    hover:bg-[#F9F9F9]
    hover:rounded-xl

    ${index !== options.length - 1 ? "md:border-r" : ""}
    ${index !== options.length - 1 ? "border-b md:border-b-0" : ""}
  `}
>
              <div>
                <p className=" text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px] mb-3">
                  {item.tag}
                </p>

                <h3 className="text-[#020617] text-lg font-bold mb-5 pb-5 border-b border-[#DEDEDE]"> 
                  {item.title}
                </h3>

                <p className="text-sm text-[#020617]/80 leading-[26px] max-w-52 w-full">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#DEDEDE] gap-3">
                <span className="text-[#475569] text-xs font-normal font-jetbrainsmono uppercase leading-4 tracking-[1px]">[{item.id}]</span>

                <span
                  className={`text-xs text-[#020617] border px-3.5 py-1 rounded-md text-center ${
                    badgeStyles[item.type]
                  }`}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}

        </div>
  );
}