
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { TextHoverEffectDemo } from "@/app/components/TextHoverConnect";
import { FloatingDockDemo } from "@/app/components/connectIcons";
import { CodingProfiles } from "@/app/components/connectionCoding";

export default function Connect() {
  return (<div className="bg-slate-950 w-screen h-screen overflow-x-hidden overflow-y-hidden ">
        <div>
            <NavbarDemo/>
            <div className="flex justify-between -mt-24 w-screen h-20 mb-14">
                  <div className=" ml-96">
                    <FloatingDockDemo/>
                  </div>
                        
                    <div className="mr-96">
                      <CodingProfiles/>
                    </div>
                    
            </div>
            <div className="md:mt-56">
                <TextHoverEffectDemo/>
            </div>
            
            Made By Mousam
        </div>
        
    </div>
  );
}
