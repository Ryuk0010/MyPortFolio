"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Project1 from '@/image/Project1.png';
import Project2 from '@/image/Project2.png';
import Project3 from '@/image/Project3.png';
import Project5 from '@/image/Project5.png';
import GithubLogo from '/image/github.jpeg';


export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-500 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0  grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[600px]  h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={1920}
                height={1920}
                src={active.photo}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200 text-xl">
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-blue-700 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul className="mx-auto w-full gap-4">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${card.title}-${id}`}
          key={`card-${card.title}-${id}`}
          onClick={() => setActive(card)}
          className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-slate-400 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
          <div className="flex gap-4 flex-col md:flex-row ">
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <Image
                width={1920}
                height={1920}
                src={card.photo}
                alt={card.title}
                className="h-44 w-full md:h-52 md:w-96 rounded-lg object-cover object-top" />
            </motion.div>
            <div className="">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-white dark:text-neutral-200 text-center md:text-left">
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-white dark:text-neutral-400 text-center md:text-left">
                {card.description}
              </motion.p>
            </div>
          </div>
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            className="px-4 py-2 text-sm rounded-full font-bold bg-white hover:bg-blue-700 hover:text-white text-black mt-4 md:mt-0">
            {card.ctaText}
          </motion.button>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    description: "TechStack - React, Typescript, Postgrsql",
    title: "Print",
    photo: Project2, // Use the imported image
    ctaText: "Link",
    ctaLink: "https://print-ruddy.vercel.app/signup",
    content: () => {
      return (
        (<p>This blogging platform is built using a modern tech stack that includes React, TypeScript, PostgreSQL, and Hono. The frontend is designed with React and styled using Tailwind CSS, ensuring a responsive and user-friendly interface.

          The backend leverages Hono, a lightweight and performant web framework, to handle routing and server-side logic. For data storage, PostgreSQL is used, providing a robust and scalable database solution.
          
          To enhance security, the platform incorporates authentication with Zod, a TypeScript-first schema validation library, ensuring secure and reliable user login and registration processes.
          
          The entire application is hosted on Cloudflare, benefiting from its global CDN and robust performance features.
            <br/>
            <br/>
            </p>)
      );
    },
  },
  {
    description: "TechStack - React, CSS",
    title: "E-Shopper",
    photo: Project5,
    ctaText: "Link",
    ctaLink: "https://github.com/Ryuk0010/Shopper",
    content: () => {
      return (
        (<p>This shopping frontend is developed using React and styled with CSS, creating a visually appealing and responsive interface for a seamless user experience. 
          The application features a clean and intuitive design, allowing users to easily browse and search for products.
          Display of products with detailed information, including images, prices, and descriptions.
          Ensures that the interface looks great on all devices, from desktops to mobile phones by implementing responsive design.
          This project demonstrates a solid understanding of React and CSS, providing a user-friendly shopping experience.
        </p>)
      );
    },
  },

  {
    description: "TechStack - HTML, CSS, Js",
    title: "CPU Scheduling Algorithm Visualizer",
    photo: Project3,
    ctaText: "Link",
    ctaLink: "https://csa-three.vercel.app/",
    content: () => {
      return (
        (<p>The CPU Scheduling Algorithm Visualizer is an interactive tool designed to simulate various CPU scheduling algorithms like 
          First Come First Serve (FCFS), Shortest Job First (SJF), and Round Robin (RR). This visualizer provides a graphical interface 
          to help users understand how different scheduling techniques prioritize tasks in a CPU.
          The platform is built with HTML, CSS, and JavaScript, offering an intuitive experience for students and professionals to 
          explore the behavior of different algorithms in real-time. Users can input processes, their arrival times, making it easier to grasp complex concepts.
        </p>)
      );
    },
  },
  {
    description: "TechStack - Next.js, Postgrsql, Tailwind",
    title: "Handy Wallet",
    photo: Project1,
    ctaText: "Link",
    ctaLink: "https://github.com/Ryuk0010/Handy-Wallet",
    content: () => {
      return (
        (<p>This finance management website is built with a modern tech stack including Next.js, PostgreSQL, Drizzle, and 
          Tailwind CSS. The platform is designed to provide users with comprehensive financial management tools and personalized financial advice powered by AI.

          Using Next.js, the site offers a fast and dynamic user experience with server-side rendering and static 
          site generation capabilities. PostgreSQL serves as the robust and reliable database solution, efficiently handling user data 
          and financial information. Drizzle is used to manage the interaction between the frontend and backend, ensuring smooth data handling and real-time updates.
          
          Tailwind CSS is employed to create a clean and responsive design, enhancing the overall user experience with intuitive navigation and visually appealing layouts.
          
          The AI-powered financial advice feature provides users with tailored recommendations and insights based on their financial data, helping them make informed decisions.
        </p>)
      );
    },
  },
  {
    description: "",
    title: "View My Other Projects on Github",
    photo: GithubLogo,
    ctaText: "Link",
    ctaLink: "https://github.com/Ryuk0010/",
    content: () => {
      return (
        (<p>
          Feel free to explore my repositories to get a sense of my coding style and the variety of projects I&apos;ve worked on.
        </p>)
      );
    },
  },
  
];
