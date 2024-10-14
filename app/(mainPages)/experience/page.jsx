import { AppleCardsCarouselDemo } from "@/app/components/appleCards";
import { NavbarDemo } from "@/app/components/floatingNavbar";
import { SpotlightPreview } from "@/app/components/spotlightCard";


export default function Education() {
    return (
        <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-slate-950 text-white pt-24">
            <NavbarDemo/>
            <div className="flex flex-col lg:flex-row lg:space-x-8 p-4">
            <div className="flex-1 mb-4 lg:mb-0 -ml-5 -mr-5">
                <SpotlightPreview/>
            </div>
            <div className="flex-1 mt-40 my-16">
            <div>
                <p className="text-2xl md:text-4xl font-extrabold text-slate-500 mb-5 w-full">
                    Data Structures & Algorithms Instructor
                </p>
                <p className="text-lg max-w-2xl text-slate-300 text-justify">
                    Taught DSA at a coaching center, helping students grasp complex algorithmic concepts and improve
                    their problem-solving skills by breaking down intricate topics into digestible lessons, 
                    enabling students to approach coding challenges with confidence.
                </p>
            
            </div>
            <div className="mt-10">
                <p className="text-2xl md:text-4xl font-extrabold text-slate-500 mb-5">
                Full-Stack Web Developer
                </p>
                <p className="text-lg max-w-2xl text-slate-300 text-justify">
                With a solid foundation in the latest web development technologies, I have built and contributed to 
                various projects utilizing HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, and MongoDB. 
                My work spans across frontend and backend development, creating responsive, efficient, and scalable 
                applications.
                </p>
            
            </div>
            </div>
            </div>
            
            <div className="mt-5 md:mt-56 flex justify-center">
                <AppleCardsCarouselDemo/>
            </div>
            <div className="text-slate-400 ml-40 font-bold">
                Made By Mousam
            </div>

        </div>
    );
}
