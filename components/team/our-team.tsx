"use client";

import TeamCard from "./team-card";

const teamMembers = [
  {
    name: "Muhammad Hasnain",
    role: "Vice President",
    image: "/team/team1.png",
    linkedInUrl: "#",
    gradientVariant: "red" as const,
    isMiddle: false,
  },
  {
    name: "Neha Amir",
    role: "President",
    image: "/team/team2.png",
    linkedInUrl: "#",
    gradientVariant: "cyan" as const,
    isMiddle: true,
  },
  {
    name: "Shoaib Raza",
    role: "General Secretary",
    image: "/team/team2.png",
    linkedInUrl: "#",
    gradientVariant: "red" as const,
    isMiddle: false,
  },
];

export default function OurTeam() {
  return (
    <section className="bg-dark-red text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex gap-4 mb-12 md:mb-16">
          <div className="w-1 bg-red-primary flex-shrink-0" />
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">OUR_TEAM</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              MEET THE LEADERSHIP BEHIND DEVDAY.
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
