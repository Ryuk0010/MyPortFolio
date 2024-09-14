import { AppleCardsCarouselDemo } from "@/app/components/appleCards";
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { SpotlightPreview } from "@/app/components/spotlightCard";


export default function Education() {
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-slate-950 mix-blend-multiply text-white pt-28">
            <NavbarDemo/>
            {/* <SpotlightPreview/> */}
            <div className="flex justify-center">
            <div className="w-1/2 ml-20">
                <SpotlightPreview/>
            </div>
            <div className="flex-col mt-16 w-1/2 ml-10 mix">
            <div>
                <p className="text-3xl font-bold text-slate-500 mb-5">
                    Data Structures & Algorithms Instructor
                </p>
                <p className="text-lg max-w-2xl text-slate-300">
                    Taught DSA at a coaching center, helping students grasp complex algorithmic concepts and improve
                    their problem-solving skills by breaking down intricate topics into digestible lessons, 
                    enabling students to approach coding challenges with confidence.
                </p>
            
            </div>
            <div className="mt-10">
                <p className="text-3xl font-bold text-slate-500 mb-5">
                Full-Stack Web Developer
                </p>
                <p className="text-lg max-w-2xl text-slate-300">
                With a solid foundation in the latest web development technologies, I have built and contributed to 
                various projects utilizing HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, and MongoDB. 
                My work spans across frontend and backend development, creating responsive, efficient, and scalable 
                applications.
                </p>
            
            </div>
            </div>
            </div>
            
            <div className="mt-60">
                <AppleCardsCarouselDemo/>
            </div>
            <div className="text-slate-400 ml-40 font-bold">
                Made By Mousam
            </div>

        </div>
    );
}
