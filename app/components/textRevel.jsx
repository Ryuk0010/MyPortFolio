"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    (<div
      className="flex items-center justify-center bg-slate-950 h-[40rem] rounded-2xl w-full">
      <TextRevealCard text="From blueprint to repository" revealText="From concept to commit">
      </TextRevealCard>
    </div>)
  );
}
