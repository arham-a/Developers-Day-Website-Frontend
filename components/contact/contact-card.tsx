"use client";

import { ReactNode } from "react";

interface ContactCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ContactCard({ title, subtitle, children }: ContactCardProps) {
  return (
    <div className="relative bg-dark-red-1  p-6 md:p-8">
      {/* Red corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-primary" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-primary" />

      {/* Header */}
      <div className="mb-6">
        {subtitle && <p className="text-red-primary text-xs font-mono uppercase mb-2">{subtitle}</p>}
        <h3 className="text-white text-xl md:text-2xl font-bold uppercase">{title}</h3>
      </div>

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
