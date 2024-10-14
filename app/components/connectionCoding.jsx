'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

import {
    IconCornerDownRightDouble,
    IconClipboardText
  } from "@tabler/icons-react";

  import CIcon from '@coreui/icons-react';
  import  { cibLeetcode }  from '@coreui/icons';
  import { SiGeeksforgeeks } from "react-icons/si";
   
  export function CodingProfiles() {
    const links = [
        {
            title: "My Coding Profiles",
            icon: (
              <IconCornerDownRightDouble className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
          },
          {
            title: "Leetcode",
            icon: (
              <CIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" icon={cibLeetcode} />
            ),
            href: "https://leetcode.com/u/Ryuk01/",
            target: "_blank",
            target: "_blank"
          },
      {
        title: "GfG",
        icon: (
          <SiGeeksforgeeks className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
        target: "_blank",
      },
      {
        title: "Resume",
        icon: (
          <IconClipboardText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://drive.google.com/file/d/1DblWnnrPGr98DsKvI3GOGnQIZPRGg6rt/view?usp=drive_link",
        target: "_blank",
      },
    ];
    return (
      <div className="flex items-center justify-center h-[35rem] w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    );
  }