'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandX,
  IconExchange,
  IconTerminal2,
} from "@tabler/icons-react";

import { Linkedin,
        Github,
        FileText,
 } from 'lucide-react';

import CIcon from '@coreui/icons-react';
import  { cibLeetcode }  from '@coreui/icons';
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Github",
      icon: (
        <Github  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Ryuk0010",
      target:"__blank"
    },

    {
      title: "My Resume",
      icon: (
        <FileText  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1FTSylnRsn1u3_cvNvo0EueSs-y69Xbe4/view?usp=drive_link",
      target: "_blank"
    },
    {
      title: "Leetcode",
      icon: (
        <CIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" icon={cibLeetcode} />
      ),
      href: "https://leetcode.com/u/Ryuk01/",
      target: "_blank"
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/ryuk_0r",
      target: "_blank"
    },
    {
      title: "LinkedIn",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mousam-bachhar-379bb9258/",
      target: "_blank",
    },
  ];
  return (
    (<div className="flex items-center justify-center h-[5rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}
