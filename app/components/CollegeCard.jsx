"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Photo from '@/image/collegeLogo.png'

export function ThreeDCardDemo() {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={Photo}
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem>

          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://iem.edu.in/"
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold">
            Visit
          </CardItem>
        </div>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          I am a Final Year Undergraduate Student at IEM Kolkata
        </CardItem>
        <br/>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
            <div>
                Information Technology
            </div>
            <div>
                2021 - 2025
            </div>
          
        </CardItem>
        <br/>
        <CardItem
          translateZ="50"
          className="text-l font-bold text-neutral-600 dark:text-white">
          CGPA - 9.10 (till current sem)
        </CardItem>
      </CardBody>
    </CardContainer>)
  );
}

export function HoveredLink({ href, target, children }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="hover:underline"
    >
      {children}
    </a>
  );
}
