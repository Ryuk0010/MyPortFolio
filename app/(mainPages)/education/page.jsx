
import { ThreeDCardDemo } from "@/app/components/CollegeCard";
import { FlipWordsDemo } from "@/app/components/flipwords";
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { GlobeDemo } from "@/app/components/gitGlobe";
import { LayoutGridDemo } from "@/app/components/layoutGrid";

export default function Education() {
    return (
      <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-slate-950 text-white pt-28">
        <NavbarDemo/>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="flex-1 mb-4 -mt-28">
        <GlobeDemo />
      </div>
      <div className="flex-1 text-white -mt-5 text-5xl flex items-center justify-center lg:justify-start">
        <FlipWordsDemo />
      </div>
    </div>
        <div className="max-w-1/2 flex justify-center md:justify-center md:pl-0 md:mt-20 md:mb-20 ">
        <div className="text-3xl md:text-5xl md:mt-16 font-bold">
          Degree
        </div>
          
        </div>
      <div className="flex flex-col items-center w-full h-full md:flex-row md:justify-center md:w-full md:h-auto">

      <div className="w-3/4 h-1/2 md:w-full md:h-full max-w-md md:max-w-none">
        <ThreeDCardDemo />
      </div>
    </div>

        <div className="flex justify-center md:pl-0 md:mt-20 md:mb-20 ">
          <div className="text-3xl md:text-5xl font-bold">
            Certificates
          </div>
          
        </div>
        <div className="-mt-24">
        <LayoutGridDemo/>
        </div>
      
        <div className="text-slate-400 ml-40 font-bold">
                Made By Mousam
            </div>
      </div>
    );
  }
  