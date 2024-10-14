import { LampDemo } from "@/app/components/lamp";
import { FloatingDockDemo } from "@/app/components/flotingDock";
import { WobbleCardDemo } from "@/app/components/Wobble";
import { TypewriterEffectDemo } from "@/app/components/typewriter";
import { HeroHighlightDemo } from "@/app/components/herroHighlight";
import { NavbarDemo } from "@/app/components/floatingNavbar";
import Card from "@/app/components/Cards";




export default function Homepage() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-slate-950">
          <NavbarDemo/>
          {/* <FloatingNavDemo/> */}
          <div>
            <div className="-mb-48 -mt-16">
              <LampDemo/>
            </div>
            <FloatingDockDemo/>
            <div className="flex flex-col lg:flex-row justify-evenly px-20">
              <div className="w-full flex-1">
              <TypewriterEffectDemo/>
              </div>
              <div className="flex-1 ">
              <WobbleCardDemo/>
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
