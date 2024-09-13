"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    { text: "Get Creative with Just a Cup of ", className: "text-white" },

    { text: " Coffee.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffect words={words} />
      
    </div>
  );
}
