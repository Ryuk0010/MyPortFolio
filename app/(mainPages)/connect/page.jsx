
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { TextHoverEffectDemo } from "@/app/components/TextHoverConnect";
import { FloatingDockDemo } from "@/app/components/connectIcons";
import { CodingProfiles } from "@/app/components/connectionCoding";

export default function Connect() {
  return (<div className="bg-slate-950 w-screen h-screen overflow-x-hidden overflow-y-hidden">
        <div>
            <NavbarDemo/>
            <div className="flex my-12 md:flex-row md:justify-between w-screen items-center">
            <div className="md:-mt-24 flex-1 flex justify-center md:justify-start">
              <FloatingDockDemo />
            </div>

            <div className="md:-mt-24 flex-1 flex justify-center md:justify-end">
              <CodingProfiles />
            </div>
          </div>
            <div className="-mt-96 md:-mt-32">
                <TextHoverEffectDemo/>
            </div>
            <div className="-mt-72 md:-mt-44 ml-8 text-white text-sm">
              Made By Mousam
            </div>
            
        </div>
        
    </div>
  );
}
