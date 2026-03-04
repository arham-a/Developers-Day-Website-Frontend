"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import AnimatedToggle from "./animated-toggle";
import { motion } from "framer-motion";

export default function RegistrationBanner() {
  return (
    <section className="bg-red-primary text-white py-20 md:py-32 px-4">
      <div className="container mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 uppercase"
        >
          INITIALIZE
          <br />
          REGISTRATION
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-white text-sm md:text-base max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Step into the arena at DevDay&apos;26, compete with the best, build under
          pressure,
          <br className="hidden md:block" />
          prove your skills, and claim your place among the top developers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
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
        </motion.div>

        {/* Animated Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center"
        >
          <AnimatedToggle />
        </motion.div>
      </div>
    </section>
  );
}
