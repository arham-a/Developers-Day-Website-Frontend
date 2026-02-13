"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import AnimatedToggle from "./animated-toggle";

export default function RegistrationBanner() {
  return (
    <section className="bg-red-primary text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 uppercase">
          INITIALIZE
          <br />
          REGISTRATION
        </h2>

        {/* Description */}
        <p className="text-white text-sm md:text-base max-w-3xl mx-auto mb-12 leading-relaxed">
          Step into the arena at DevDay'26, compete with the best, build under pressure,
          <br className="hidden md:block" />
          prove your skills, and claim your place among the top developers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            as={Link}
            href="/register"
            className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-4 min-w-[230px] text-base"
            radius="none"
          >
            SECURE_ACCESS
          </Button>
          <Button
            as={Link}
            href="/modules"
            className="bg-white hover:bg-gray-100 text-black font-bold px-8 py-4 min-w-[230px] text-base"
            radius="none"
          >
            EXPLORE_MODULES
          </Button>
        </div>

        {/* Animated Toggle */}
        <div className="flex justify-center">
          <AnimatedToggle />
        </div>
      </div>
    </section>
  );
}
