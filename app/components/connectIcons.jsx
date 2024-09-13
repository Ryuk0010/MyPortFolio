'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconBrandDiscord,
    IconBrandSpotify,
    IconCornerDownRightDouble,
  } from "@tabler/icons-react";
  import { Linkedin,
} from 'lucide-react';
   
  export function FloatingDockDemo() {
    const links = [
        {
            title: "My Socials",
            icon: (
              <IconCornerDownRightDouble className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
          },
      {
        title: "Github",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://github.com/Ryuk0010",
        target: "_blank",
      },
   
      {
        title: "Discord",
        icon: (
          <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
        target: "_blank",
      },
      {
        title: "Twitter",
        icon: (
          <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://x.com/ryuk_0r",
        target: "_blank",
      },
      {
        title: "Linkedin ",
        icon: (
          <Linkedin  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/mousam-bachhar-379bb9258/",
        target: "_blank",
      },

      {
        title: "Spotify",
        icon: (
          <IconBrandSpotify className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://open.spotify.com/user/qgcdhv4f1c42lv1tdkbvum9fw",
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