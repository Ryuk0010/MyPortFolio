
import Image from "next/image";
import { LampDemo } from "@/app/components/lamp";
import { FloatingDockDemo } from "@/app/components/flotingDock";
import { WobbleCardDemo } from "@/app/components/Wobble";
import { TypewriterEffectDemo } from "@/app/components/typewriter";
import { HeroHighlightDemo } from "@/app/components/herroHighlight";
import { NavbarDemo } from "@/app/components/floatingNavbar";
import Card from "@/app/components/Cards";
import Link from "next/link";



export default function Homepage() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-slate-950">
          <NavbarDemo/>
          <div>
            <div className="-mb-40">
              <LampDemo/>
            </div>
            <FloatingDockDemo/>
            <div className=" col-span-2 flex justify-between px-20 mr-20">
              <div className="w-1/2 ml-10">
              <WobbleCardDemo/>
              </div>
              <div className="w-1/2">
              <TypewriterEffectDemo/>
              </div>
            </div>
            <HeroHighlightDemo/>
            <Card/>
        </div>


        <div className="text-slate-400 md:ml-40 font-bold">
                Made By Mousam
            </div>
    </div>
  );
}
