import { Metadata } from "next";
import ProjectXtremePage from "@/components/competitions/project-xtreme-page";

const title = "Project Xtreme | Developer's Day 2026";
const description =
  "Project Xtreme gives students the spotlight to present FYPs and standout products in front of industry professionals, recruiters, and founders.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/modules/project-xtreme",
  },
  openGraph: {
    title,
    description,
    url: "/modules/project-xtreme",
    images: [{ url: "/logo-1.png", alt: "Project Xtreme at Developer's Day 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo-1.png"],
  },
};

export default function ProjectXtremeRoutePage() {
  return <ProjectXtremePage />;
}
