"use client";

import { useEffect, useRef, useState } from "react";
import { categoryData } from "./teams-data"

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

interface Person {
    role: string;
    name: string;
    initials: string;
    linkedin: string;
    studentId: string;
}

const DiamondPip = ({ dim = false }: { dim?: boolean }) => (
    <div
        className="w-2 h-2 sm:w-3 sm:h-3 shrink-0"
        style={{
            background: "var(--color)",
            clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
        }}
    />
);

function PersonCard({ person }: { person: Person }) {
    const isHead = person.role === "Category Head" || person.role === "Director";
    return (
        <div className="w-full sm:w-[45%] lg:w-[30%] border border-white/[0.2] group relative flex flex-col gap-3.5 sm:gap-4 p-6 sm:p-7 transition-colors duration-150 hover:bg-white/[0.03]">
            {/* top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color)] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 w-full " />

            {/* role row */}
            <div className="flex items-center gap-2 ">
                <DiamondPip dim={!isHead} />
                <span
                    className={`text-[0.5rem] sm:text-[0.65rem] uppercase tracking-[.2em] ${isHead ? "text-[var(--color)] font-bold" : "text-white/80"
                        }`}
                >
                    {person.role}
                </span>
            </div>

            {/* identity */}
            <div className="flex items-start justify-between gap-4 flex-1">
                <div>
                    <div className="font-black text-[0.9rem] sm:text-[1.15rem] tracking-[.04em] uppercase text-white leading-snug">
                        {person.name}
                    </div>
                    <div className="text-[0.55rem] sm:text-[0.65rem] text-white/80 tracking-[.07em] mt-1 sm:mt-1.5">
                        {person.studentId}
                    </div>
                </div>
                <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 border border-white/[0.07] flex items-center justify-center text-[0.68rem] sm:text-[0.85rem] font-bold text-[var(--color)] tracking-[.04em] transition-colors group-hover:border-[var(--color)]">
                    {person.initials}
                </div>
            </div>

            {/* linkedin */}
            {person.linkedin && (
                <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 border border-white/[0.07] text-white/80 text-[0.5rem] sm:text-[0.6rem] uppercase tracking-[.12em] font-mono transition-all duration-150 hover:border-[#0a66c2] hover:text-[#5ba4e0] hover:bg-[rgba(10,102,194,0.06)] no-underline group/link"
                >
                    <LinkedInIcon />
                    <span className="flex-1">LINKEDIN_PROFILE</span>
                    <span className="text-[0.55rem] sm:text-[0.65rem] transition-transform duration-200 group-hover/link:translate-x-0.5">
                        →
                    </span>
                </a>)}

            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--color)]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--color)]" />
        </div >
    );
}


// ── MAIN EXPORT ─────────────────────────────────────────
export default function CategoryHeads({
    categoryId,
    color,
    bgColor,
}: {
    categoryId: string;
    color: string;
    bgColor: string;
}) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    const [people, setPeople] = useState<Person[]>([]);
    useEffect(() => {
        const people = categoryData[categoryId as keyof typeof categoryData] || [];
        setPeople(people);
    }, [categoryId]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="transition-all duration-500"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
            }}
        >
            <div className="flex flex-wrap justify-center gap-6">
                {people.map((person) => (
                    <PersonCard key={person.name} person={person} />
                ))}
            </div>
        </section>
    );
}