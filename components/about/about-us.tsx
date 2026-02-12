"use client";

import StatCard from "./stat-card";
import { UserGroupIcon, BuildingLibraryIcon, HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-dark-red text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with Red Line */}
        <div className="flex gap-4 mb-12 md:mb-16">
          <div className="w-1 bg-red-primary flex-shrink-0" />
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">ABOUT_US</h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
              DEVDAY'26 IS A DEVELOPER-FIRST COMPETITION EMPOWERING
              <br />
              INNOVATORS TO BUILD, COMPETE, AND PUSH BOUNDARIES THROUGH REAL-
              <br />
              WORLD CHALLENGES, COLLABORATION, AND CUTTING-EDGE TECHNOLOGY.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-red-primary text-white text-xs font-mono px-3 py-1">V1</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          <StatCard
            stat="4500+"
            title="PARTICIPANTS"
            icon={<Image src="/icons/participants.svg" alt="Competition Tracks" width={40} height={40} />}
            variant="red"
          />
          <StatCard
            stat="25+"
            title="COMPETITION TRACKS"
            icon={<Image src="/icons/competition-tracks.svg" alt="Competition Tracks" width={30} height={30} />}
            variant="dark"
          />
          <StatCard
            stat="30+"
            title="PARTNER INSTITUTIONS"
            icon={<Image src="/icons/partner.svg" alt="Competition Tracks" width={30} height={30} />}
            variant="red"
          />
          <StatCard
            stat="16"
            title="YEARS OF LEGACY"
            icon={<Image src="/icons/legacy.svg" alt="Competition Tracks" width={30} height={30} />}
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
