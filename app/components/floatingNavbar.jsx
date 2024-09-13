"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Project1 from '../../image/Project1.png';
import Project2 from '../../image/Project2.png';
import Project3 from '../../image/Project3.png';
import Project4 from '../../image/Project4.png';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center bg-slate-500">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Visit Home Page</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Education">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/education">Visit Education Page</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Print"
              href="https://print-ruddy.vercel.app/signup"
              target="_blank"
              src={Project2}
              description="This is a blogging website where users can sign-in or sign-up and after authentication, post blogs."
            />
            <ProductItem
              title="Handy Wallet"
              href="https://github.com/Ryuk0010/Handy-Wallet"
              target="_blank" // Corrected target attribute
              src={Project1}
              description="This is a money-handling app that tracks your expenses and provides guidance using AI."
            />
            <ProductItem
              title="Speed Infinite"
              href="https://github.com/Ryuk0010/Car-Rental"
              target="_blank"
              src={Project3}
              description="Frontend of a Car Rental webside where user can rent a car"
            />
            <ProductItem
              title="View More"
              href="/projects"
              target="_self"
              src={Project4} 
              description="Visit the Projects Page."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Experience">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/experience">About My Work Experience</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Connect">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://x.com/ryuk_0r" target="_blank">Twitter</HoveredLink>
            <HoveredLink href="https://github.com/Ryuk0010" target="_blank">Github</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/mousam-bachhar-379bb9258/" target="_blank">LinkedIn</HoveredLink>
            <HoveredLink href="/connect">More+</HoveredLink>
            

          </div>
        </MenuItem>

      </Menu>
    </div>
  );
}
