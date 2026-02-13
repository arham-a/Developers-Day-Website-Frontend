"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { HomeIcon, CubeIcon, CalendarIcon, UserGroupIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", href: "/", icon: HomeIcon },
    { name: "MODULES", href: "/modules", icon: CubeIcon },
    { name: "EVENT_DETAILS", href: "/event-details", icon: CalendarIcon },
    { name: "OUR_TEAM", href: "/our-team", icon: UserGroupIcon },
    { name: "CONTACT_US", href: "/contact-us", icon: EnvelopeIcon },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-dark-red border-b border-[#382929]"
      maxWidth="xl"
      height="5rem"
      classNames={{
        wrapper: "container mx-auto px-4 md:px-6 h-20",
        item: "text-white data-[active=true]:text-white",
        menu: "bg-dark-red",
      }}
    >
      {/* Brand and Toggle */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="DevDay Logo" width={33} height={49} className="object-contain" />
            <p className="font-bold text-white text-lg">DEVDAY '26</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Menu Toggle - Right Side */}
      <NavbarContent justify="end" className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.href}
              className="text-white hover:text-gray-200 text-base transition-colors font-bold"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Register Button - Desktop Only */}
      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem>
          <Button
            as={Link}
            href="/register"
            className="bg-red-primary hover:bg-red-700 text-lg text-white font-bold gap-10 px-8"
            radius="none"
          >
            REGISTER_NOW
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-dark-red pt-6 flex flex-col items-center">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavbarMenuItem key={`${item.name}-${index}`} className="w-full flex justify-center">
              <Link
                className="text-white hover:text-gray-200 flex items-center gap-3 py-2"
                href={item.href}
                size="lg"
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem className="w-full flex justify-center mt-4">
          <Button
            as={Link}
            href="/register"
            className="bg-red-primary hover:bg-red-700 text-lg text-white font-bold px-8"
            radius="none"
          >
            REGISTER_NOW
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
