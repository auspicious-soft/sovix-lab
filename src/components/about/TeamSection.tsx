"use client";

const team = [
  {
    name: "Marcus Webb",
    role: "CEO & CO-FOUNDER",
    bio: "Previously VP of Underwriting Technology at a Lloyd's syndicate, where he led three failed AI pilots before founding Sovix. Spent 12 years in insurance technology across London, Singapore, and New York. Holds a degree in actuarial science from LSE. Built Sovix because he was tired of explaining to vendors why the data couldn't leave the building.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Priya Nair",
    role: "CTO & CO-FOUNDER",
    bio: "8 years at AWS building private cloud infrastructure for regulated industries. Designed the zero-egress architecture that powers every Sovix deployment.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Dr. James Okoro",
    role: "CHIEF SCIENTIST",
    bio: "NLP researcher from Cambridge. Published work on document reasoning in low-resource domains. Leads all model research inside Sovix.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Sofia Reyes",
    role: "CTO & CO-FOUNDER",
    bio: "8 years at AWS building private cloud infrastructure for regulated industries. Designed the zero-egress architecture that powers every Sovix deployment.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Arjun Thapar",
    role: "CTO & CO-FOUNDER",
    bio: "8 years at AWS building private cloud infrastructure for regulated industries. Designed the zero-egress architecture that powers every Sovix deployment.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Lena Brandt",
    role: "CTO & CO-FOUNDER",
    bio: "8 years at AWS building private cloud infrastructure for regulated industries. Designed the zero-egress architecture that powers every Sovix deployment.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  },
  {
    name: "Jordan Brown",
    role: "CTO & CO-FOUNDER",
    bio: "8 years at AWS building private cloud infrastructure for regulated industries. Designed the zero-egress architecture that powers every Sovix deployment.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
];

export default function TeamSection() {
  const [marcus, priya, james, ...bottomRow] = team;

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4">
        {/* ── Marcus — UNCHANGED ── */}
        <div
          className="group overflow-hidden bg-[#161A29]/30 rounded-2xl grid md:grid-cols-2
          relative transition-all duration-500"
        >
          <img
            src={marcus.image}
            alt={marcus.name}
            className="w-full md:h-full object-cover object-top aspect-[1/0.7] md:aspect-[1/1.4]"
          />
          <div className="flex flex-col justify-center relative overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[68px] h-[68px] bg-[#10B981]/10 rounded-full
                opacity-0 scale-0
                group-hover:opacity-100 group-hover:scale-[12]
                transition-all duration-500 ease-out"
              />
            </div>
            <div
              className="flex flex-col justify-center p-4 md:p-7 z-10
              relative transition-all duration-500 ease-out group-hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-white mb-2.5">
                {marcus.name}
              </h3>
              <p className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] mb-2.5">
                {marcus.role}
              </p>
              <p className="text-sm leading-6 text-[#FFFFFF]">{marcus.bio}</p>
            </div>
          </div>
        </div>

        {/* ── Priya + James — UNCHANGED ── */}
        <div className="grid md:grid-cols-2 gap-4 relative">
          {/* Priya */}
          <div
            className="group overflow-hidden bg-[#161A29]/30 rounded-2xl
            relative transition-all duration-500"
          >
            <div className="overflow-hidden relative z-10">
              <img
                src={priya.image}
                alt={priya.name}
                className="w-full object-cover object-top aspect-[1/0.7]"
              />
            </div>
            <div className="flex flex-col justify-center relative transition-all duration-500">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-[68px] h-[68px] bg-[#10B981]/10 rounded-full
                  opacity-0 scale-0
                  group-hover:opacity-100 group-hover:scale-[12]
                  transition-all duration-500 ease-out"
                />
              </div>
              <div
                className="flex flex-col justify-center p-4 md:p-7 z-10
                relative transition-all duration-500 ease-out group-hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {priya.name}
                </h3>
                <p className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] mb-2.5">
                  {priya.role}
                </p>
                <p className="text-sm leading-6 text-[#FFFFFF]">{priya.bio}</p>
              </div>
            </div>
          </div>

          {/* James */}
          <div
            className="group overflow-hidden bg-[#161A29]/30 rounded-2xl
            relative transition-all duration-500"
          >
            <div className="overflow-hidden relative z-10">
              <img
                src={james.image}
                alt={james.name}
                className="w-full object-cover object-top aspect-[1/0.7]"
              />
            </div>
            <div className="flex flex-col justify-center relative transition-all duration-500">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-[68px] h-[68px] bg-[#10B981]/10 rounded-full
                  opacity-0 scale-0
                  group-hover:opacity-100 group-hover:scale-[12]
                  transition-all duration-500 ease-out"
                />
              </div>
              <div
                className="flex flex-col justify-center p-4 md:p-7 z-10
                relative transition-all duration-500 ease-out group-hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {james.name}
                </h3>
                <p className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] mb-2.5">
                  {james.role}
                </p>
                <p className="text-sm leading-6 text-[#FFFFFF]">{james.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom row — same classes as Priya/James ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {bottomRow.map((member) => (
          <div
            key={member.name}
            className="group overflow-hidden bg-[#161A29]/30 rounded-2xl
            relative transition-all duration-500"
          >
            <div className="overflow-hidden relative z-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover object-top aspect-[1/0.7]"
              />
            </div>
            <div className="flex flex-col justify-center relative transition-all overflow-hidden duration-500">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-[68px] h-[68px] bg-[#10B981]/10 rounded-full
                  opacity-0 scale-0
                  group-hover:opacity-100 group-hover:scale-[12]
                  transition-all duration-500 ease-out"
                />
              </div>
              <div
                className="flex flex-col justify-center p-4 md:p-7 z-10
                relative transition-all duration-500 ease-out group-hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {member.name}
                </h3>
                <p className="text-green text-xs font-normal font-jetbrainsmono uppercase tracking-[1px] mb-2.5">
                  {member.role}
                </p>
                <p className="text-sm leading-6 text-[#FFFFFF]">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}