
import { ThreeDCardDemo } from "@/app/components/CollegeCard";
import { FlipWordsDemo } from "@/app/components/flipwords";
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { GlobeDemo } from "@/app/components/gitGlobe";
import { LayoutGridDemo } from "@/app/components/layoutGrid";

export default function Education() {
    return (
      <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-slate-950 text-white pt-28">
        <NavbarDemo/>
        <div className="flex grid-cols-2">
          <div className="w-2/3">
          <GlobeDemo/>
          </div>
          <div className="text-white text-5xl">
              <FlipWordsDemo/>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-5xl font-bold">
            Degree
          </div>
          <ThreeDCardDemo/>
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
  