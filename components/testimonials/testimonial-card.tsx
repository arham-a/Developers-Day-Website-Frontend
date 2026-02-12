"use client";

import Image from "next/image";

interface TestimonialCardProps {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  avatar?: string;
}

export default function TestimonialCard({ id, name, role, testimonial, avatar }: TestimonialCardProps) {
  return (
    <div className="relative bg-dark-red  p-6 w-[380px] h-[230px] flex-shrink-0 flex flex-col overflow-hidden">
      {/* Gray corner edges */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-600" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gray-600" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gray-600" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-600" />

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          {/* Avatar */}
          <div className="w-12 h-12 bg-gray-700 flex items-center justify-center flex-shrink-0">
            {avatar ? (
              <Image src={avatar} alt={name} width={48} height={48} className="object-cover" />
            ) : (
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
          </div>

          {/* Name and Role */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase">{name}</h3>
            <p className="text-red-primary text-xs font-mono uppercase">{role}</p>
          </div>
        </div>

        {/* ID */}
        <span className="text-gray-600 text-xs font-mono">ID: {id}</span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-800 mb-4" />

      {/* Testimonial */}
      <p className="text-gray-400 text-xs leading-relaxed flex-1 overflow-hidden">{testimonial}</p>

      {/* Bottom edge accent */}
      <div className="mt-4 h-1 bg-gray-800" />
    </div>
  );
}
