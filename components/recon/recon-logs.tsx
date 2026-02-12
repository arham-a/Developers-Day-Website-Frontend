"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";

export default function ReconLogs() {
  return (
    <section className="bg-dark-red text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* V3 Badge - Left Corner */}
        <div className="mb-6">
          <span className="bg-red-primary text-white text-xs font-mono px-3 py-1 inline-block">V3</span>
        </div>

        {/* Header - Center Aligned */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">RECON_LOGS:_DEVDAY'25</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            DEVDAY'25 WAS A MASSIVE SUCCESS, WITNESSING EXCEPTIONAL PARTICIPATION, INNOVATIVE SOLUTIONS, INTENSE
            COMPETITION, AND OVERWHELMING COMMUNITY ENGAGEMENT, SETTING A STRONG FOUNDATION FOR AN EVEN BIGGER
            DEVDAY'26.
          </p>
        </div>

        {/* Red divider */}
        <div className="h-0.5 bg-red-primary mb-8" />

        {/* Bento Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 max-w-6xl mx-auto">
          {/* Large image - left - spans 2 rows on desktop */}
          <div className="relative bg-dark-red-2 h-[400px] lg:h-[600px] overflow-hidden">
            {/* Red corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-primary z-10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-primary z-10" />
            
            <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-mono px-2 py-1 z-10">01</div>
            <Image
              src="/images/recon-1.jpg"
              alt="DevDay 25 Event"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-red-primary text-xs font-mono z-10">
              Timeline: 12-04-2025 // 8:00:00 AM PST
            </div>
          </div>

          {/* Right column with 2 smaller images */}
          <div className="flex flex-col gap-4">
            {/* Top right image */}
            <div className="relative bg-dark-red-2 h-[290px] lg:h-[292px] overflow-hidden">
              {/* Red corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-primary z-10" />
              
              <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-mono px-2 py-1 z-10">02</div>
              <Image
                src="/images/recon-2.jpg"
                alt="DevDay 25 Event"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="relative bg-dark-red-2 h-[290px] lg:h-[292px] overflow-hidden">
              {/* Red corner accents */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-primary z-10" />
              
              <div className="absolute top-4 right-2 bg-black/70 text-white text-xs font-mono px-2 py-1 z-10">03</div>
              <Image
                src="/images/recon-3.jpg"
                alt="DevDay 25 Event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm font-mono">Status: Archived</span>
          <div className="flex gap-4">
            <Button
              as={Link}
              href="#"
              className="bg-transparent text-red-primary hover:text-red-700 font-mono text-sm"
              radius="none"
            >
              ← PREV_LINK
            </Button>
            <Button
              as={Link}
              href="#"
              className="bg-transparent text-red-primary hover:text-red-700 font-mono text-sm"
              radius="none"
            >
              NEXT_LINK →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
