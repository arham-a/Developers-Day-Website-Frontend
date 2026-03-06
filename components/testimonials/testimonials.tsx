"use client";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./testimonial-card";
import { motion } from "framer-motion";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoScrollPos = useRef(0);
  const isPaused = useRef(false);
  const pauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const testimonials = [
    {
      id: "0001",
      name: "DR. MUHAMMAD TUFAIL",
      role: "VICE CHANCELLOR, NED UNIVERSITY",
      testimonial:
        "It is inspiring to see the continuity of this initiative over the years. I am confident it will bring great opportunities and success for the students and graduates involved.",
    },
    {
      id: "0002",
      name: "M. UMAIR SIDDIQUI",
      role: "VP ENTERPRISE SERVICES, MAZIK GLOBAL",
      testimonial:
        "Having organized events for 10–15 years myself, it's rare to see students execute something with such clarity, alignment, and professionalism. The coordination and management of the event were truly impressive.",
    },
    {
      id: "0003",
      name: "SARAH PERACHA",
      role: "CEO, PERACHA VENTURES",
      testimonial:
        "Today was truly an exceptional experience. The event was very well organized, and the panel discussions provided valuable perspectives.",
    },
    {
      id: "0004",
      name: "DR. ZUBAIR A. SHAIKH",
      role: "PRESIDENT, MAJU",
      testimonial:
        "I feel proud to see how this community has grown over the years. What stands out most is the spirit of innovation—students thinking creatively and building solutions that truly drive progress.",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Auto-scroll loop
    const animate = () => {
      if (!isPaused.current && container) {
        autoScrollPos.current += 1;
        if (autoScrollPos.current >= container.scrollWidth / 2) {
          autoScrollPos.current = 0;
        }
        container.scrollLeft = autoScrollPos.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    // Mouse drag
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      isPaused.current = true;
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      container.scrollLeft = scrollLeft.current - walk;
      autoScrollPos.current = container.scrollLeft;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      container.style.cursor = "grab";
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
      pauseTimeout.current = setTimeout(() => {
        isPaused.current = false;
      }, 1500);
    };

    // Touch drag
    const onTouchStart = (e: TouchEvent) => {
      isPaused.current = true;
      startX.current = e.touches[0].pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const onTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      container.scrollLeft = scrollLeft.current - walk;
      autoScrollPos.current = container.scrollLeft;
    };

    const onTouchEnd = () => {
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
      pauseTimeout.current = setTimeout(() => {
        isPaused.current = false;
      }, 1500);
    };

    container.style.cursor = "grab";
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section className="bg-dark-red-2 text-white py-16 md:py-24 overflow-hidden px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-between items-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">TESTIMONIALS</h2>
          <span className="bg-red-primary text-white text-xs font-mono px-3 py-1">V4</span>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-0.5 bg-red-primary mb-8"
        />
      </div>

      {/* Scrolling Testimonials */}
      <motion.div
        ref={scrollRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex gap-6 overflow-x-scroll select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </motion.div>
    </section>
  );
}