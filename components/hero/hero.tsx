"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import EventInfo from "./event-info";
import Image from "next/image";
import RotatingIcon from "./rotating-icon";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-dark-red text-white py-8 md:py-16 px-4">
      <div className="mx-auto w-full max-w-[80%]">
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block border-2 border-[#D71D22] bg-[#D71D22]/15 px-4 py-2 mb-4"
        >
          <p className="text-[#D71D22] text-xs md:text-sm font-mono tracking-wider">
            SYSTEM_READY:_VERSION_20.26
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6"
              >
                <span className="inline sm:block">DEVDAY</span>
                <span className="inline sm:block ml-2 sm:ml-0">'26</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="w-20 md:w-24 h-1 bg-red-500 mb-6 md:mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
                className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 font-light tracking-wide"
              >
                BRUTE_LOGIC._REFINED_BY
                <br />
                DESIGN.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                as={Link}
                href="/register"
                className="bg-red-primary hover:bg-red-700 text-lg text-white font-bold py-6 px-8"
                radius="none"
                endContent={<ArrowRightIcon className="w-5 h-5" />}
              >
                INITIALIZE_REGISTER
              </Button>
              <Button
                as={Link}
                href="/explore"
                className="bg-dark-red-2 text-white font-bold px-6 md:px-8 py-6 text-base md:text-lg"
                radius="none"
                endContent={
                  <Image
                    src="/icons/bottom-right-arrow.svg"
                    alt="Arrow"
                    width={13}
                    height={13}
                  />
                }
              >
                EXPLORE
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]">
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-full aspect-square border-1 border-red-dark" />
              <div className="relative border-1 border-red-dark w-full aspect-square">
                <Image
                  src="/hero.png"
                  alt="DevDay 26"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                  <RotatingIcon />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Event Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
        >
          <EventInfo />
        </motion.div>
      </div>
    </section>
  );
}
