import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AboutUs } from "@/components/about";
import { ModuleCategories } from "@/components/modules";
import { ReconLogs } from "@/components/recon";
import { Testimonials } from "@/components/testimonials";
import { RegistrationBanner } from "@/components/registration";
import CampusReservationMap from "@/components/campusReservationMap";

const title = "Developer's Day 2026 | FAST NUCES Karachi";
const description =
  "Join Developer's Day 2026 at FAST NUCES Karachi for coding competitions, networking, and innovation-led experiences.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    images: [{ url: "/logo-1.png", alt: "Developer's Day 2026 logo-1 banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo-1.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ModuleCategories />
      <CampusReservationMap />
      <ReconLogs />
      <Testimonials />
      <RegistrationBanner />
    </>
  );
}
