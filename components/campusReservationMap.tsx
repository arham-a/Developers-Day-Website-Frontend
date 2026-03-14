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
    title: "EE_BUILDING",
    events: [
      { name: "DEV & DESIGN", location: "A-Floor/Ground floor" },
      { name: "GENERAL_COMPETITIONS", location: "A-Floor/Ground & C-Floor/2nd" },
      { name: "TECH_QUEST", location: "C-Floor/2nd floor" },
      { name: "CORE_CODING", location: "D-Floor/3rd floor" },
      { name: "BUSINESS", location: "D-Floor/3rd floor" },
      { name: "AI & DATA_SCIENCE", location: "E-Floor/4th floor" },
    ],
  },
  ee_canteen: {
    title: "EE_CANTEEN",
    events: [
      { name: "GENERAL_MEETUP", location: "CANTEEN_AREA" },
      { name: "REFRESHMENT", location: "SEATING_AREA" },
    ],
  },
  ee_lawn: {
    title: "EE_LAWN",
    events: [
      { name: "FOOD_FEST", location: "LAWN_AREA" },
      { name: "FOOD_STALLS", location: "OUTDOOR_ZONE" },
    ],
  },
  mosque: {
    title: "MOSQUE",
    events: [
      { name: "PRAYER_AREA", location: "PRAYER_HALL" },
    ],
  },
  cs_dhaba: {
    title: "CS_DHABA",
    events: [
      { name: "GENERAL_MEETUP", location: "DHABA_AREA" },
      { name: "FOOD_COURT", location: "SEATING_ZONE" },
    ],
  },
  entrance_garden: {
    title: "ENTRANCE_GARDEN",
    events: [
      { name: "CARD_DISTRIBUTION", location: "PR_DESK" },
      { name: "PARTICIPANT_CHECKIN", location: "REGISTRATION" },
    ],
  },
  basketball_court: {
    title: "BASKETBALL_COURT",
    events: [
      { name: "EE_COMPETITIONS", location: "COURT_AREA" },
    ],
  },
  multipurpose: {
    title: "MULTIPURPOSE_BLOCK",
    events: [
      { name: "OPENING_CEREMONY", location: "MAIN_HALL" },
      { name: "CLOSING_CEREMONY", location: "MAIN_HALL" },
      { name: "SEMINARS", location: "HALL_ABC" },
    ],
  },
  sports_room: {
    title: "SPORTS_ROOM",
    events: [
      { name: "BRIEFING", location: "SPORTS_CENTER" },
      { name: "LOGISTICS", location: "COORDINATION" },
    ],
  },
  futsal_court: {
    title: "FUTSAL_COURT",
    events: [
      { name: "SPORTS_EVENTS", location: "COURT" },
    ],
  },
  cs_lawn: {
    title: "CS_LAWN",
    events: [
      { name: "JOB_FAIR", location: "OPEN_AREA" },
      { name: "COMPANY_BOOTHS", location: "LAWN_ZONE" },
    ],
  },
  cs_block: {
    title: "CS_BUILDING",
    events: [
      { name: "DEV & DESIGN", location: "GROUND_FLOOR" },
      { name: "SOFTWARE_ENGINEERING", location: "1st_FLOOR" },
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
  const [selectedBlock, setSelectedBlock] = useState<BlockId | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const mapRef = useRef<HTMLDivElement | null>(null);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load SVG based on device type
  useEffect(() => {
    let isMounted = true;

    const loadSvg = async () => {
      try {
        const svgFile = isMobile ? "/map_mobile.svg" : "/map_dev.svg";
        const response = await fetch(svgFile);
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
  }, [isMobile]);

  // Hover logic for desktop SVG and click logic for mobile
  useEffect(() => {
    if (!svgMarkup || !mapRef.current) return;

    const root = mapRef.current;
    const selector = BLOCK_IDS.map((id) => `#${id}`).join(",");

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      
      const target = e.target as Element;
      if (!target || !mapRef.current) return;

      const blockEl = target.closest(selector) as SVGElement | null;
      if (!blockEl) {
        setHoveredBlock(null);
        return;
      }

      const id = blockEl.id as BlockId;
      const blockRect = blockEl.getBoundingClientRect();
      const mapRect = mapRef.current.getBoundingClientRect();

      const centerX = blockRect.left - mapRect.left + blockRect.width / 2;
      const top = blockRect.top - mapRect.top;

      setHoveredBlock((prev) => {
        if (prev?.id === id) return prev;
        return { id, centerX, top };
      });
    };

    const handleMouseLeave = () => {
      if (isMobile) return;
      setHoveredBlock(null);
    };

    const handleClick = (e: MouseEvent) => {
      if (!isMobile) return;
      
      const target = e.target as Element;
      if (!target || !mapRef.current) return;

      const blockEl = target.closest(selector) as SVGElement | null;
      if (!blockEl) {
        setSelectedBlock(null);
        return;
      }

      const id = blockEl.id as BlockId;
      setSelectedBlock(id);
    };

    root.addEventListener("mousemove", handleMouseMove);
    root.addEventListener("mouseleave", handleMouseLeave);
    root.addEventListener("click", handleClick);

    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
      root.removeEventListener("mouseleave", handleMouseLeave);
      root.removeEventListener("click", handleClick);
    };
  }, [svgMarkup, isMobile]);

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

        {isMobile ? (
          // Mobile: SVG map with building grid navigation
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="space-y-4"
          >
            {svgMarkup ? (
              <>
                {/* Map */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div
                      ref={mapRef}
                      dangerouslySetInnerHTML={{ __html: svgMarkup }}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Building Navigation Buttons */}
                <div className="overflow-x-auto">
                  <div className="flex gap-2 justify-center px-4 pb-2 min-w-max mx-auto">
                    {BLOCK_IDS.map((blockId) => (
                      <motion.button
                        key={blockId}
                        onClick={() => setSelectedBlock(blockId)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-2 rounded-md font-mono text-xs whitespace-nowrap transition-all ${
                          selectedBlock === blockId
                            ? "bg-red-primary text-white font-bold"
                            : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                        }`}
                      >
                        {BLOCK_INFO[blockId].title}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Selected Building Info */}
                {selectedBlock && BLOCK_INFO[selectedBlock] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-red-primary text-white font-mono px-4 py-4 rounded-md space-y-3"
                  >
                    <p className="font-bold tracking-widest text-sm md:text-base">
                      {BLOCK_INFO[selectedBlock].title}
                    </p>
                    <div className="space-y-2">
                      {BLOCK_INFO[selectedBlock].events.map((event) => (
                        <div
                          key={`${event.name}-${event.location}`}
                          className="flex justify-between gap-4 text-xs md:text-sm border-t border-red-600 pt-2"
                        >
                          <span className="uppercase font-semibold flex-1">
                            {event.name}
                          </span>
                          <span className="text-gray-100 whitespace-nowrap">
                            {event.location}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <p className="text-gray-400 text-sm font-mono">
                Loading campus map…
              </p>
            )}
          </motion.div>
        ) : (
          // Desktop: SVG map view
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="campus-map overflow-x-hidden overflow-y-visible mt-3 md:mt-4"
          >
            {svgMarkup ? (
              <div className="flex justify-center">
                <div className="relative w-full min-w-[320px] max-w-6xl overflow-visible">
                  {hoveredBlock && BLOCK_INFO[hoveredBlock.id] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="pointer-events-none absolute z-[9999] left-1/2"
                      style={{
                        left: `${hoveredBlock.centerX * 0.7}px`,
                        top: `${hoveredBlock.top - 16}px`,
                        transform: "translate(-50%, -100%)",
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="bg-red-primary text-white font-mono text-xs md:text-sm px-4 md:px-6 py-3 rounded-md shadow-2xl whitespace-nowrap">
                          <p className="tracking-widest mb-2 font-bold">
                            {BLOCK_INFO[hoveredBlock.id].title}
                          </p>
                          <ul className="space-y-1">
                            {BLOCK_INFO[hoveredBlock.id].events.map((event) => (
                              <li
                                key={`${event.name}-${event.location}`}
                                className="flex justify-between gap-6 text-xs"
                              >
                                <span className="uppercase font-semibold">
                                  {event.name}
                                </span>
                                <span className="ml-4 text-gray-100">
                                  {event.location}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-red-primary" />
                      </div>
                    </motion.div>
                  )}

                  <div
                    ref={mapRef}
                    dangerouslySetInnerHTML={{ __html: svgMarkup }}
                    className="w-full"
                  />
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm font-mono">
                Loading campus map…
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}