"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import EventInfo from "./event-info";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-64px)] bg-dark-red text-white py-8 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* Version Badge - Outside the grid */}
                <div className="inline-block border-2 border-red-500 px-4 py-2 mb-4">
                    <p className="text-red-500 text-xs md:text-sm font-mono tracking-wider">
                        SYSTEM_READY:_VERSION_20.26
                    </p>
                </div>

                {/* Main Content Grid - Same Height Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* Title */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6">
                                <span className="inline sm:block">DEVDAY</span>
                                <span className="inline sm:block ml-2 sm:ml-0">'26</span>
                            </h1>
                            <div className="w-20 md:w-24 h-1 bg-red-500 mb-6 md:mb-8" />

                            {/* Tagline */}
                            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 font-light tracking-wide">
                                BRUTE_LOGIC._REFINED_BY
                                <br />
                                DESIGN.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
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
                                className="bg-dark-red-2 text-white font-semibold px-6 md:px-8 py-6 text-base md:text-lg"
                                radius="none"
                                endContent={<span className="text-xl">↓</span>}
                            >
                                EXPLORE
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Image with Layered Border */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]">
                            {/* Background Border Layer */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-full aspect-square border-1 border-red-dark" />
                            
                            {/* Main Image Container */}
                            <div className="relative border-1 border-red-dark w-full aspect-square">
                                <Image
                                    src="/hero.png"
                                    alt="DevDay 26"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Info Component */}
                <EventInfo />
            </div>
        </section>
    );
}
