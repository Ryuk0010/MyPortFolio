"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Photo1 from '@/image/cert0.jpg';
import Photo2 from '@/image/cert1.png';
import Photo3 from '@/image/cert2.png';
import Photo4 from '@/image/cert13.png';

// CoolButton component
const CoolButton = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white transition-all duration-300 ease-out rounded-lg shadow-lg group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500"
      >
        <span className="absolute w-48 h-48 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:scale-125 group-hover:opacity-20"></span>
        <span className="relative z-10">{text}</span>
      </button>
    </a>
  );
};

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <Image
              src={card.thumbnail}
              height={1080}
              width={1080}
              className={cn(
                "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
              )}
              alt="thumbnail"
            />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

// Certification details components
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Data Structures and Algorithms
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This certification covers the fundamental concepts of Data Structures 
        and Algorithms, crucial for solving complex computational problems. 
        It delves into topics such as arrays, linked lists, trees, graphs, 
        and various algorithmic paradigms like recursion, dynamic programming, 
        and greedy algorithms. By mastering these skills, learners develop 
        efficient problem-solving techniques that are essential in competitive 
        programming and technical interviews.
      </p>
      <CoolButton text="View Certificate" link="https://d3r0n59fu7ub44.cloudfront.net/certificates/courseCertificate/2024-07-13/course_655b4b7da18dd7f07c4cc402_user_6561fd657c17a01aab7248a5.pdf" />
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">AWS S3 Basics</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This certification introduces the core concepts of Amazon S3 (Simple Storage Service), 
        a key service within the AWS cloud ecosystem. Learners gain hands-on experience 
        with managing scalable object storage, understanding bucket policies, and implementing 
        secure, durable storage solutions.
      </p>
      <CoolButton text="View Certificate" link="https://www.coursera.org/account/accomplishments/certificate/W8E9FWCBNV8M" />
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Introduction to Information Technology and AWS Cloud
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This certification provides an in-depth introduction to Information Technology (IT) 
        fundamentals and cloud computing using AWS.
      </p>
      <CoolButton text="View Certificate" link="https://www.coursera.org/account/accomplishments/certificate/LHDWN49XTZJB" />
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Introduction to Generative AI
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This certification provides a comprehensive overview of Generative AI, 
        exploring the underlying concepts and techniques that enable machines to 
        create content autonomously.
      </p>
      <CoolButton text="View Certificate" link="https://www.coursera.org/account/accomplishments/certificate/T7HZJAF4ACJ5" />
    </div>
  );
};

// Cards array
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Photo1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: Photo2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: Photo3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: Photo4,
  },
];

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
