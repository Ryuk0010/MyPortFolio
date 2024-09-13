import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["React", "Next.js", "Express", "Prisma", "Postgrsql", "Hono", "MongoDB", "Docker", "Node.Js", "Tailwind" , "Typescript" ,"JavaScript"];

  return (
    (<div className="h-[40rem] flex justify-center items-center px-4">
      <div
        className="text-7xl mx-auto font-normal text-white dark:text-neutral-400 ">
        Education and Certificates
        <br></br>
        <br></br>
        <div className="text-4xl">
          Technologies I am familiar with 
        </div>
        
        <FlipWords words={words} /> <br />
        
      </div>
    </div>)
  );
}
