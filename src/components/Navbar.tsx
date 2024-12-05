"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarFn className="top-2" />
      
    </div>
  );
}

function NavbarFn({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        
      <Menu setActive={setActive}>

       <Link href='/'><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
{/* 
        <MenuItem setActive={setActive} active={active} item="Home">
        <Link href='/' className="hover:opacity-[0.9]">Home</Link>
        </MenuItem>       */}


       
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <Link href='/contact'><MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem></Link>

       
        {/* <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
