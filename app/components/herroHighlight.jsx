"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    (<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-4 my=t-52 md:text-4xl lg:text-5xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
        Here is what
        {" "}
        <Highlight className="text-black dark:text-white">
          I do.
        </Highlight>
      </motion.h1>
    </HeroHighlight>)
  );
}
