
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { TextHoverEffectDemo } from "@/app/components/TextHoverConnect";
import { FloatingDockDemo } from "@/app/components/connectIcons";
import { CodingProfiles } from "@/app/components/connectionCoding";

export default function Connect() {
  return (<div className="bg-slate-950 w-screen h-screen overflow-x-hidden md:overflow-y-hidden ">
        <div>
            <NavbarDemo/>
            <div className="flex my-32 md:flex-row md:justify-between w-screen items-center">
            <div className="-my-20 flex-1 flex justify-center md:justify-start">
              <FloatingDockDemo />
            </div>

            <div className="-my-16 flex-1 flex justify-center md:justify-end">
              <CodingProfiles />
            </div>
          </div>
            <div className="-mt-56 md:-my-80">
                <TextHoverEffectDemo/>
            </div>
            
            Made By Mousam
        </div>
        
    </div>
  );
}
