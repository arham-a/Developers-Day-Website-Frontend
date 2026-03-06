"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 26, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -18, scale: 0.985 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative will-change-transform overflow-x-hidden"
      >
        {/* Red sweep bar across top on route change */}
        <motion.div
          key={`${pathname}-bar`}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="pointer-events-none absolute left-0 top-0 h-[1px] md:h-[2px] w-full bg-gradient-to-r from-transparent via-red-primary to-transparent"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


