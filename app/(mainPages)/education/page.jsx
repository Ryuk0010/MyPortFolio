
import { ThreeDCardDemo } from "@/app/components/CollegeCard";
import { FlipWordsDemo } from "@/app/components/flipwords";
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { GlobeDemo } from "@/app/components/gitGlobe";
import { LayoutGridDemo } from "@/app/components/layoutGrid";

export default function Education() {
    return (
      <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-slate-950 text-white pt-28">
        <NavbarDemo/>
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-4">
      <div className="flex-1 mb-4 lg:mb-0">
        <GlobeDemo />
      </div>
      <div className="flex-1 text-white text-5xl flex items-center justify-center lg:justify-start">
        <FlipWordsDemo />
      </div>
    </div>
    <div className="flex flex-col items-center w-full h-full md:flex-row md:justify-center md:w-full md:h-auto">
      <div className="text-3xl md:text-5xl font-bold mb-4 md:mb-0">
        Degree
      </div>
      <div className="w-full max-w-md md:max-w-none">
        <ThreeDCardDemo />
      </div>
    </div>

        <div className="flex justify-center mt-20 mb-20">
          <div className="text-5xl font-bold mr-96 -ml-96">
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
  