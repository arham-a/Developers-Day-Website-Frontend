"use client";
import { teamsData } from "./teams-data";
import { useState, useEffect } from "react";

export default function Ticker({ categoryId, color, bgColor }) {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        console.log("categoryId", categoryId);
        setTeams([...teamsData[categoryId], ...teamsData[categoryId]]);
    }, [categoryId]);
    return (
        <div className="flex items-center border-b border-white/10 bg-[#0a0a0a] py-[0.55rem] overflow-hidden whitespace-nowrap">
            <div
                className=" inline-block uppercase tracking-[0.15em] text-[var(--color)] text-[0.6rem] lg:text-xs"
                style={{ animation: "tick 25s linear infinite" }}
            >
                {teams?.map((item, i) => (
                    <span key={i} className="mx-10">
                        {item.name}:{" "}
                        <span className="text-[white] font-normal">{item.teamMembers}</span>
                    </span>
                ))}
            </div>

            <style>{`
        @keyframes tick {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}