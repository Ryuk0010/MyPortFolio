

import { NavbarDemo } from "@/app/components/floatingNavbar";
import { IconCloudDemo } from "@/app/components/iconsCloudCard";
import { ExpandableCardDemo } from "@/app/components/ProjectsCard";
import { TextRevealCardPreview } from "@/app/components/textRevel";


export default function Education() {
    return (
      <div className="w-full h-full overflow-x-hidden overflow-y-auto lg:space-x-8 bg-slate-950">
        <NavbarDemo/>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
        <IconCloudDemo/>
        <div className="flex-1 mb-2 mx-10 -mt-6">
        <TextRevealCardPreview/>
        <div className="flex-1 mb-4 w-full ">
            <div className="text-slate-500 font-semibold text-xl md:text-5xl lg:-mt-10">
                My Projects
            </div>
            <br></br>
            <div className="text-sm md:text-3xl text-slate-300">
            Here, you&apos;ll find a collection of projects I&apos;ve worked on, reflecting my journey as I explore and learn in the world of development. 
            Each project represents my effort to apply what I&apos;ve learned and solve real problems. I&apos;m continuously growing and improving, and I 
            hope you like these works. Thank you for taking a look!
            </div>
        </div>
        </div>
        </div>
        
        <div className="text-slate-300 font-semibold text-2xl pt-14 md:text-5xl md:mt-48 flex justify-center">
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
  