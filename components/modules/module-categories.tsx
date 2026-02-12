"use client";

import ModuleCard from "./module-card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";

export default function ModuleCategories() {
  const modules = [
    {
      icon: <Image src="/icons/coding.svg" alt="Coding" width={32} height={32} />,
      title: "CODE_CODING",
      description: "Solve algorithmic challenges and compete in real-time coding competitions.",
      code: "C_01",
    },
    {
      icon: <Image src="/icons/software.svg" alt="Software" width={32} height={32} />,
      title: "SOFTWARE ENGINEERING",
      description: "Architecting resilient systems that withstand the pressure of high-throughput operations.",
      code: "C_02",
    },
    {
      icon: <Image src="/icons/tech.svg" alt="Tech" width={32} height={32} />,
      title: "TECH_QUEST",
      description: "Exploration and tech testing platform digital innovations.",
      code: "C_03",
    },
    {
      icon: <Image src="/icons/build.svg" alt="Build" width={32} height={32} />,
      title: "BUILD_&_BREAK",
      description: "Stress-testing structures through adversarial design and deconstruction.",
      code: "C_04",
    },
    {
      icon: <Image src="/icons/ai.svg" alt="AI" width={32} height={32} />,
      title: "AI_&_DATA",
      description: "Deep neural modeling and predictive analytics processing vast datasets logic warfare.",
      code: "C_05",
    },
  ];

  return (
    <section className="bg-dark-red text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">MODULE_CATEGORIES</h2>
          <span className="bg-red-primary text-white text-xs font-mono px-3 py-1">V2</span>
        </div>

        {/* Red divider */}
        <div className="h-0.5 bg-red-primary mb-8" />

        {/* Module Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <Button
            as={Link}
            href="/modules"
            className="bg-red-primary hover:bg-red-700 text-white font-bold px-6 py-3"
            radius="none"
          >
            VISIT:_ALL_MODULES
          </Button>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-red-primary rounded-none" />
            <div className="w-2 h-2 bg-red-primary rounded-none" />
            <div className="w-2 h-2 bg-red-primary rounded-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
