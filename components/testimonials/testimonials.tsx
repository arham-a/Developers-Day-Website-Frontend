"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: "0001",
      name: "ASJAD BIN REHAN",
      role: "STUDENT AT FAST-NUCES",
      testimonial:
        "DevDay wasn't just a competition; it was a pressure test for real talent. The challenges pushed us to think fast, build smart, and compete like professionals.",
    },
    {
      id: "0002",
      name: "HASAN SAMI",
      role: "STUDENT AT FAST-NUCES",
      testimonial:
        "The level of competition at DevDay genuinely surprised me. From problem statements to judging, everything felt industry-grade and well thought out.",
    },
    {
      id: "0003",
      name: "RAAHIM IRFAN",
      role: "STUDENT AT FAST-NUCES",
      testimonial:
        "DevDay pushed me to think critically and actually delivered. No fluff, no theatrics—just pure problem-solving and innovation.",
    },
    {
      id: "0004",
      name: "ASJAD BIN REHAN",
      role: "STUDENT AT FAST-NUCES",
      testimonial:
        "DevDay wasn't just a competition; it was a pressure test for real talent. The challenges pushed us to think fast, build smart, and compete like professionals.",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-dark-red-2 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">TESTIMONIALS</h2>
          <span className="bg-red-primary text-white text-xs font-mono px-3 py-1">V4</span>
        </div>

        {/* Red divider */}
        <div className="h-0.5 bg-red-primary mb-8" />
      </div>

      {/* Scrolling Testimonials */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden px-4 md:px-6">
        {/* Duplicate testimonials for infinite scroll effect */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
