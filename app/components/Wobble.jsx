"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Photo from '@/image/Mousam-image.jpg';

export function WobbleCardDemo() {
  return (
    (<div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-48">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px] lg:min-h-[200px] flex items-center justify-center">
        <Image
          src={Photo}
          width={300}
          height={300}
          alt="linear demo image"
          className="object-contain rounded-2xl" />
      </WobbleCard>

    </div>)
  );
}
