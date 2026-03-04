"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type BlockId =
  | "ee_block"
  | "ee_canteen"
  | "ee_lawn"
  | "mosque"
  | "cs_dhaba"
  | "entrance_garden"
  | "basketball_court"
  | "multipurpose"
  | "sports_room"
  | "futsal_court"
  | "cs_lawn"
  | "cs_block";

interface BlockInfoLine {
  name: string;
  location: string;
}

const BLOCK_INFO: Record<BlockId, { title: string; events: BlockInfoLine[] }> = {
  ee_block: {
    title: "EE_BLOCK",
    events: [
      { name: "EVENT_1_NAME", location: "EE-101" },
      { name: "EVENT_2_NAME", location: "EE-109" },
      { name: "EVENT_3_NAME", location: "LAB-1" },
      { name: "EVENT_4_NAME", location: "LAB-2" },
    ],
  },
  ee_canteen: {
    title: "EE_CANTEEN",
    events: [
      { name: "EVENT_1_NAME", location: "FOOD_COURT" },
      { name: "EVENT_2_NAME", location: "TEAM_MEETUP" },
    ],
  },
  ee_lawn: {
    title: "EE_LAWN",
    events: [
      { name: "EVENT_1_NAME", location: "BOOTH_A1" },
      { name: "EVENT_2_NAME", location: "BOOTH_A2" },
      { name: "EVENT_3_NAME", location: "CHAIR-ROW_03" },
    ],
  },
  mosque: {
    title: "MOSQUE",
    events: [
      { name: "EVENT_1_NAME", location: "PRAYER_SLOT_1" },
      { name: "EVENT_2_NAME", location: "PRAYER_SLOT_2" },
    ],
  },
  cs_dhaba: {
    title: "CS_DHABA",
    events: [
      { name: "EVENT_1_NAME", location: "R-109" },
      { name: "EVENT_2_NAME", location: "LAB-3" },
      { name: "EVENT_3_NAME", location: "E4" },
      { name: "EVENT_4_NAME", location: "E2" },
      { name: "EVENT_5_NAME", location: "E3" },
      { name: "EVENT_6_NAME", location: "R-108" },
      { name: "EVENT_7_NAME", location: "FYP LAB" },
      { name: "EVENT_8_NAME", location: "S2" },
    ],
  },
  entrance_garden: {
    title: "ENTRANCE_GARDEN",
    events: [
      { name: "EVENT_1_NAME", location: "CHECK-IN_DESK" },
      { name: "EVENT_2_NAME", location: "PHOTO_WALL" },
    ],
  },
  basketball_court: {
    title: "BASKETBALL_COURT",
    events: [
      { name: "EVENT_1_NAME", location: "HALF_COURT" },
      { name: "EVENT_2_NAME", location: "FULL_COURT" },
    ],
  },
  multipurpose: {
    title: "MULTIPURPOSE_BLOCK",
    events: [
      { name: "EVENT_1_NAME", location: "HALL_A" },
      { name: "EVENT_2_NAME", location: "HALL_B" },
      { name: "EVENT_3_NAME", location: "HALL_C" },
    ],
  },
  sports_room: {
    title: "SPORTS_ROOM",
    events: [
      { name: "EVENT_1_NAME", location: "BRIEFING_ROOM" },
      { name: "EVENT_2_NAME", location: "REFRESH_ZONE" },
    ],
  },
  futsal_court: {
    title: "FUTSAL_COURT",
    events: [
      { name: "EVENT_1_NAME", location: "MATCH_A" },
      { name: "EVENT_2_NAME", location: "MATCH_B" },
    ],
  },
  cs_lawn: {
    title: "CS_LAWN",
    events: [
      { name: "EVENT_1_NAME", location: "OPEN_AIR_1" },
      { name: "EVENT_2_NAME", location: "OPEN_AIR_2" },
    ],
  },
  cs_block: {
    title: "CS_BLOCK",
    events: [
      { name: "EVENT_1_NAME", location: "CS-101" },
      { name: "EVENT_2_NAME", location: "CS-201" },
      { name: "EVENT_3_NAME", location: "LAB-4" },
      { name: "EVENT_4_NAME", location: "ARENA" },
    ],
  },
};

const BLOCK_IDS: BlockId[] = [
  "ee_block",
  "ee_canteen",
  "ee_lawn",
  "mosque",
  "cs_dhaba",
  "entrance_garden",
  "basketball_court",
  "multipurpose",
  "sports_room",
  "futsal_court",
  "cs_lawn",
  "cs_block",
];

interface HoveredBlockState {
  id: BlockId;
  centerX: number;
  top: number;
}

export default function CampusReservationMap() {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [hoveredBlock, setHoveredBlock] =
    useState<HoveredBlockState | null>(null);

  const mapRef = useRef<HTMLDivElement | null>(null);

  // Load SVG
  useEffect(() => {
    let isMounted = true;

    const loadSvg = async () => {
      try {
        const response = await fetch("/map_dev.svg");
        if (!response.ok) return;

        const text = await response.text();
        if (isMounted) {
          setSvgMarkup(text);
        }
      } catch {
        // silently ignore
      }
    };

    loadSvg();

    return () => {
      isMounted = false;
    };
  }, []);

  // Hover logic (FIXED)
  useEffect(() => {
    if (!svgMarkup || !mapRef.current) return;

    const root = mapRef.current;

    const selector = BLOCK_IDS.map((id) => `#${id}`).join(",");

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target) return;

      const blockEl = target.closest(selector) as SVGElement | null;

      if (!blockEl) {
        setHoveredBlock(null);
        return;
      }

      const id = blockEl.id as BlockId;

      const blockRect = blockEl.getBoundingClientRect();

      const centerX = blockRect.left + blockRect.width / 2;
      const top = blockRect.top;

      setHoveredBlock((prev) => {
        if (prev?.id === id) return prev;
        return { id, centerX, top };
      });
    };

    const handleMouseLeave = () => {
      setHoveredBlock(null);
    };

    root.addEventListener("mousemove", handleMouseMove);
    root.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
      root.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [svgMarkup]);

  const info = hoveredBlock ? BLOCK_INFO[hoveredBlock.id] : null;

  return (
    <section className="bg-dark-red text-white py-16 md:py-24 px-4 relative overflow-visible">
      <div className="container mx-auto relative overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-start justify-between mb-8 md:mb-10"
        >
          <div className="flex gap-4">
            <div className="w-1 bg-red-primary flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[0.14em] md:tracking-[0.18em] leading-tight">
              <span className="block sm:inline">EVENT_DAY:</span>
              <span className="ml-2 block sm:inline">CAMPUS_RESERVATIONS</span>
            </h2>
          </div>
          <span className="bg-red-primary text-white text-xs font-mono px-3 py-1 self-start mt-1">
            03
          </span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-0.5 bg-red-primary mb-6 md:mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="campus-map overflow-x-hidden overflow-y-visible mt-6 md:mt-10"
        >
          {svgMarkup ? (
            <div className="flex justify-center">
              <div className="relative w-full min-w-[320px] max-w-6xl">
                {info && hoveredBlock && (
                  <div
                    className="pointer-events-none fixed z-[9999]"
                    style={{
                      left: hoveredBlock.centerX,
                      top: hoveredBlock.top - 8,
                      transform: "translateX(-50%) translateY(-100%)",
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-red-primary text-white font-mono text-xs md:text-sm px-4 md:px-6 py-3 rounded-md shadow-lg">
                        <p className="tracking-widest mb-2">
                          EVENTS_HERE:{" "}
                          <span className="text-black bg-white px-2 py-0.5 ml-1">
                            {info.title}
                          </span>
                        </p>
                        <ul className="space-y-1">
                          {info.events.map((event) => (
                            <li
                              key={`${event.name}-${event.location}`}
                              className="flex justify-between gap-6"
                            >
                              <span className="uppercase">
                                {event.name}
                              </span>
                              <span>{event.location}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-red-primary" />
                    </div>
                  </div>
                )}

                <div
                  ref={mapRef}
                  dangerouslySetInnerHTML={{ __html: svgMarkup }}
                />
              </div>
            </div>
          ) : (
            <p className="text-gray-400 text-sm font-mono">
              Loading campus map…
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}