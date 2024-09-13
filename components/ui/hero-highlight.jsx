"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate, useInView } from "framer-motion";
import React, { useRef } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    (<div
      className={cn(
        "relative h-[10rem] flex items-center bg-slate-950 dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}>

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>)
  );
};

export const Highlight = ({
  children,
  className
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

  return (
    <motion.span
      ref={ref}
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={inView ? { backgroundSize: "100% 100%" } : {}}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
