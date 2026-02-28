"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedInUrl: string;
  gradientVariant: "red" | "cyan";
  isMiddle?: boolean;
}

export default function TeamCard({ name, role, image, linkedInUrl, gradientVariant, isMiddle }: TeamCardProps) {
  const roleColorClass =
    gradientVariant === "red" ? "text-[#ED5554]" : "text-[#00F0FF]";
  const gradientStyle =
    gradientVariant === "red"
      ? "radial-gradient(ellipse 90% 80% at 85% 85%, rgba(237,85,84,0.5) 0%, transparent 60%)"
      : "radial-gradient(ellipse 90% 80% at 85% 85%, rgba(0,240,255,0.5) 0%, transparent 60%)";

  return (
    <div
      className={`relative bg-[#232323] border border-gray-700/50 overflow-hidden flex flex-col min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[520px] ${isMiddle ? "min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[520px]" : "min-h-[380px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[450px]"}`}
    >
      {/* Gradient background - full card, behind all content, centered on image area (bottom-right) */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: gradientStyle }}
        aria-hidden
      />

      {/* Card content */}
      <div className="relative z-10 p-6 pt-12 sm:p-8 sm:pt-16 flex-1 flex flex-col">
        <p className={`text-xl font-mono uppercase tracking-wider mb-1 ${roleColorClass}`}>
          {role}
        </p>
        <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-bold uppercase mb-4 sm:mb-6 mt-6 sm:mt-8">{name}</h3>
      </div>

      {/* Bottom row: Button left, Image right - image sits on top of gradient */}
      <div className="relative z-10 p-4 pr-0 pb-0 sm:pr-0 sm:pb-0 sm:p-6 flex items-end justify-between gap-3 sm:gap-4">
        <Button
          as={Link}
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-12 bg-[#353535] hover:bg-gray-700 text-white font-mono text-sm"
          radius="full"
          endContent={<ArrowUpRightIcon className="w-4 h-4" />}
        >
          LinkedIn
        </Button>
        <div
          className="relative flex-shrink-0 flex items-end justify-end w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]"
        >
          <Image
            src={image}
            alt={name}
            width={1000}
            height={1000}
            className="object-contain object-bottom w-full h-auto grayscale min-h-[200px] sm:min-h-[240px]"
          />
        </div>
      </div>
    </div>
  );
}
