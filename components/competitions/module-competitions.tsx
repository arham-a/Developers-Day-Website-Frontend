"use client";

import CompetitionCard from "./competition-card";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CpuChipIcon,
  CircleStackIcon,
  ClockIcon,
  UserIcon,
  XCircleIcon,
  FireIcon,
  BoltIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

const CODE_ICON = (
  <span className="font-mono font-bold text-lg leading-none">{"< >"}</span>
);
const BOLT_ICON = <BoltIcon className="w-5 h-5" />;

const competitions = [
  {
    title: "COMPETITIVE\nPROGRAMMING",
    titleIcon: CODE_ICON,
    image: '/competitions/competitive.jpg',
    description:
      "Engage in rigorous problem-solving battles focusing on optimal algorithms and data structures. Prove your mastery in timed individual rounds.",
    features: [
      {
        icon: <CpuChipIcon className="w-4 h-4" />,
        label: "ALGORITHMS",
        sublabel: "Complex problem solving",
      },
      {
        icon: <CircleStackIcon className="w-4 h-4" />,
        label: "DATA STRUCTURES",
        sublabel: "Efficient implementation",
      },
      {
        icon: <ClockIcon className="w-4 h-4" />,
        label: "TIMED ROUNDS",
        sublabel: "Strict limits",
      },
      {
        icon: <UserIcon className="w-4 h-4" />,
        label: "INDIVIDUAL",
        sublabel: "Solo prowess",
      },
    ],
    variant: "filled" as const,
    registerHref: "/register",
  },
  {
    title: "CODE\nSPRINT",
    titleIcon: BOLT_ICON,
    image: '/competitions/competitive.jpg',
    description:
      "A high-intensity format where speed meets accuracy. Survive elimination rounds of increasing difficulty to claim victory.",
    features: [
      {
        icon: <XCircleIcon className="w-4 h-4" />,
        label: "ELIMINATION",
        sublabel: "Survival mode",
      },
      {
        icon: <FireIcon className="w-4 h-4" />,
        label: "DIFFICULTY",
        sublabel: "Escalating challenge",
      },
      {
        icon: <BoltIcon className="w-4 h-4" />,
        label: "VELOCITY",
        sublabel: "Speed + Accuracy",
      },
      {
        icon: <SignalIcon className="w-4 h-4" />,
        label: "INTENSITY",
        sublabel: "High pressure",
      },
    ],
    variant: "outline" as const,
    registerHref: "/register",
  }, {
    title: "COMPETITIVE\nPROGRAMMING",
    titleIcon: CODE_ICON,
    image: '/competitions/competitive.jpg',
    description:
      "Engage in rigorous problem-solving battles focusing on optimal algorithms and data structures. Prove your mastery in timed individual rounds.",
    features: [
      {
        icon: <CpuChipIcon className="w-4 h-4" />,
        label: "ALGORITHMS",
        sublabel: "Complex problem solving",
      },
      {
        icon: <CircleStackIcon className="w-4 h-4" />,
        label: "DATA STRUCTURES",
        sublabel: "Efficient implementation",
      },
      {
        icon: <ClockIcon className="w-4 h-4" />,
        label: "TIMED ROUNDS",
        sublabel: "Strict limits",
      },
      {
        icon: <UserIcon className="w-4 h-4" />,
        label: "INDIVIDUAL",
        sublabel: "Solo prowess",
      },
    ],
    variant: "filled" as const,
    registerHref: "/register",
  },
];

/* ── animation variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export interface ModuleCompetitionsProps {
  id: string;
  icon: any;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export default function ModuleCompetitions({ id, icon, title, description, color, bgColor }: ModuleCompetitionsProps) {
  return (
    <section
      style={{ '--color': color, '--bg-color': bgColor } as React.CSSProperties}
      className="bg-[var(--bg-color)] text-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex gap-4 sm:gap-5 items-stretch mb-10 sm:mb-14"
        >
          {/* Vertical accent line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="w-1 bg-[var(--color)] self-stretch flex-shrink-0"
          />

          {/* Content */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full">
            {/* Row 1: Heading + Icon */}
            <div className="flex items-center justify-between gap-3 sm:gap-6">
              <div>
                {(() => {
                  const w = title.split(/[\s_\n]+/).filter(Boolean);
                  const last = w.pop();
                  return (
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight">
                      {w.join(" ")}
                      {w.length > 0 && <br />}
                      <span className="text-[var(--color)]">{last}</span>
                    </h1>
                  );
                })()}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
                className="flex-shrink-0 select-none"
              >
                <Image
                  src={icon}
                  alt={id}
                  width={100}
                  height={100}
                  className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              </motion.div>
            </div>

            {/* Row 2: Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
              className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed uppercase tracking-widest max-w-xl"
            >
              PROVE YOUR WORTH IN THE DIGITAL ARENA. TWO TRACKS. HIGH STAKES. PURE CODE.
              <br className="hidden sm:block" />
              {" "}SELECT YOUR PROTOCOL AND EXECUTE.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {competitions.map((comp,idx) => (
            <motion.div key={comp.title+idx} variants={cardVariants}>
              <CompetitionCard {...comp} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

