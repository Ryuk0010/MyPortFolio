"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Project1 from '@/image/Project1.png';
import Project2 from '@/image/Project2.png';
import Project3 from '@/image/Project3.png';
import Project from '@/image/card1.jpg';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center bg-slate-500">
      <Navbar className="top-1" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 mx-auto z-50", 
        className,
        "max-w-xl lg:top-10 md:max-w-3xl sm:max-w-full sm:top-4 sm:px-2", // Adjust padding for mobile
        "sm:max-w-[90%] sm:px-2" // Further reduce width and padding for mobile screens
      )}
    >
      <Menu setActive={setActive}>
      <div className="text-base font-medium text-black"> {/* Text size and style adjustments */}
            <a href="/" className="hover:text-gray-700 transition duration-300 ease-in-out">Home</a>
          </div>
          <div className="text-base font-medium text-black"> {/* Text size and style adjustments */}
            <a href="/education" className="hover:text-gray-700 transition duration-300 ease-in-out">Education</a>
          </div>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="md:space-x-6 grid grid-cols-1 md:grid-cols-2 gap-6 p-3 sm:text-xs sm:gap-2 text-sm font-semibold"> {/* Adjusted gap and padding */}
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
              target="_blank"
              src={Project1}
              description="This is a money-handling app that tracks your expenses and provides guidance using AI."
            />
            <ProductItem
              title="Speed Infinite"
              href="https://github.com/Ryuk0010/Car-Rental"
              target="_blank"
              src={Project3}
              description="Frontend of a Car Rental website where users can rent a car."
            />
            <ProductItem
              title="View More"
              href="/projects"
              src={Project}
              description="Visit the Projects Page."
            />
          </div>
        </MenuItem>

        <div className="text-base font-medium text-black"> {/* Text size and style adjustments */}
            <a href="/experience" className="hover:text-gray-700 transition duration-300 ease-in-out">Experience</a>
          </div>

        <MenuItem setActive={setActive} active={active} item="Connect">
          <div className="flex flex-col space-y-3 text-sm sm:text-xs"> {/* Reduced space and font size */}
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
