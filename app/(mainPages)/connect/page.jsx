
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { TextHoverEffectDemo } from "@/app/components/TextHoverConnect";
import { FloatingDockDemo } from "@/app/components/connectIcons";
import { CodingProfiles } from "@/app/components/connectionCoding";

export default function Connect() {
  return (<div className="bg-slate-950 w-screen h-screen overflow-x-hidden overflow-y-hidden ">
        <div>
            <NavbarDemo/>
            <div className="mt-40">
                <TextHoverEffectDemo/>
            </div>
            <div className="flex -mt-72 mx-60">
                    <FloatingDockDemo/>
                    <CodingProfiles/>
            </div>
            
        </div>
        <div className="text-slate-400 ml-40 font-bold -mt-44">
                Made By Mousam
            </div>
    </div>
  );
}
