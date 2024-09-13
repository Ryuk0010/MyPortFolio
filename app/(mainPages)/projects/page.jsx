

import { NavbarDemo } from "@/app/components/floatingNavbar";
import { IconCloudDemo } from "@/app/components/iconsCloudCard";
import { ExpandableCardDemo } from "@/app/components/ProjectsCard";
import { TextRevealCardPreview } from "@/app/components/textRevel";


export default function Education() {
    return (
      <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-slate-950 text-white pt-28">
        <NavbarDemo/>
        <div className="flex">
        <IconCloudDemo/>
        <div className="mx-10 -mt-28">
        <TextRevealCardPreview/>
        <div className="mx-40 -mt-20">
            <div className="text-slate-500 font-semibold text-3xl">
                My Projects
            </div>
            <div className="font-medium text-slate-300">
            Here, you&apos;ll find a collection of projects I&apos;ve worked on, reflecting my journey as I explore and learn in the world of development. 
            Each project represents my effort to apply what I&apos;ve learned and solve real problems. I&apos;m continuously growing and improving, and I 
            hope you find these examples of my work insightful and engaging. Thank you for taking a look!
            </div>
        </div>
        </div>
        </div>
        
        <div className="text-slate-300 font-semibold text-5xl ml-60 mt-48">
            Projects
        </div >
        <div className="w-full flex justify-center mt-10">
            <div>
             <ExpandableCardDemo />
            </div>
      </div>


      <div className="text-slate-400 ml-40 font-bold">
                Made By Mousam
            </div>
      </div>
    );
  }
  