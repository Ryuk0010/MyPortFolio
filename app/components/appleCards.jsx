"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import card1 from '@/image/card1.jpg';
import card2 from '@/image/card2.jpg';
import card3 from '@/image/card3.jpg';
import Link from "next/link";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-slate-400 dark:text-neutral-200 font-sans">
        Internship & Work
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = ({ title, description }) => {


    
    const isProjectSection = title === "Experience and Projects";
  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p
        className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto"
      >
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}{" -"}
        </span>
            {"  "}{description}
        
      </p>


      {isProjectSection && (
        <div className="mt-4 md:mt-0 md:ml-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 mt-6"
          >
            <Link href={"/projects"}> View More Projects
            </Link>
           
          </button>
        </div>
      )}
    </div>
  );
};

const BoldText = ({ text }) => (
    <span className="font-bold">{text}</span>
  );

const data = [
  {
    category: "Project",
    title: "Projects and Experience.",
    src: card1,
    content: <DummyContent title="Experience and Projects" description="I am passionate about building innovative web applications that solve real-world problems. 
        Throughout my journey, I’ve worked on a variety of projects that showcase my skills across the full development stack.
        With each project, I’ve honed my problem-solving skills and become proficient in delivering clean, efficient code. 
        Whether it's front-end design, back-end logic, or full-stack development, I enjoy bringing concepts to life with technology." />,
  },
  {
    category: "Work",
    title: "Work and Contribution",
    src: card2,
    content: <DummyContent  title="Work and Contribution" description={
        <>
          I had the opportunity to teach Data Structures and Algorithms (DSA) at <BoldText text="Tech.com" />, 
          where I focused on essential concepts such as <BoldText text="trees" />, <BoldText text="graphs" />, and <BoldText text="recursion" />. In this role, I worked closely 
          with students to help them understand these fundamental topics and apply them to solve complex problems. 
          This experience was both challenging and rewarding, as it allowed me to share my knowledge while developing my own 
          skills in teaching and problem-solving. I found it fulfilling to support students in their learning journey and to 
          contribute to their growth in the field of computer science.
        </>
      }/>,
  },
  {
    category: "Internship",
    title: "Internship Experience",
    src: card3,
    content: <DummyContent className="text-justify" title="Internship Experience" description="While I'm still on the process of gaining more hands-on experience
     in the industry. My journey so far includes being a Data Structures and Algorithms (DSA) instructor and working on various projects. I'm enthusiastic
      about expanding my knowledge and am actively seeking opportunities to further develop my skills and contribute to meaningful projects" />,
  },
];
