"use client"; //important for framer motion to work
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import heroImage from "./assets/hero.png";
// import clubArr from "./clubData";
import Header from "./header";

import cae from "./assets/logo/cae.png";
import cfa from "./assets/logo/CFA Club Logo.jpg";
import concreate from "./assets/logo/concreate logo (new).jpg";
import electr from "./assets/logo/Copy of electronics club (18).png";
import cyn from "./assets/logo/Cynaptics club 20230325_104746.jpg";
import gdsc from "./assets/logo/GDSC-IITI-Logo.png";
import ivdc from "./assets/logo/IVDC Club 20230426_231624.jpg";
import meta from "./assets/logo/MetaCryst Logo1.png";
import pclub from "./assets/logo/Pclub.png";
import quantum from "./assets/logo/quantum computing.jpg";
import robo from "./assets/logo/ROBOTICS CLUB_.jpg";
import snt from "./assets/logo/Science and technology council 23-24 20230515_112204 (1) (1).jpg";
import astro from "./assets/logo/The_Astronomy_Club.jpg";
import webgym from "./assets/logo/Web_Team_Logo.png";
import { before } from "node:test";

export default function Hero() {
  const clubArr = [
    {
      title: "CAE",
      imageSrc: cae,
    },
    {
      title: "CFA",
      imageSrc: cfa,
    },
    {
      title: "Concreate",
      imageSrc: concreate,
    },
    {
      title: "Cynaptics",
      imageSrc: cyn,
    },
    {
      title: "Electronics Club",
      imageSrc: electr,
    },
    {
      title: "GDSC",
      imageSrc: gdsc,
    },
    {
      title: "IVDC-Intelligent Vehicle Design Club",
      imageSrc: ivdc,
    },
    {
      title: "Metacryst",
      imageSrc: meta,
    },
    {
      title: "The Programming Club",
      imageSrc: pclub,
    },
    {
      title: "Quantum Computing",
      imageSrc: quantum,
    },
    {
      title: "Gymkhana Web Team",
      imageSrc: webgym,
    },
    {
      title: "Robotics Club",
      imageSrc: robo,
    },
    {
      title: "Astronomy Club",
      imageSrc: astro,
    },
    {
      title: "Science and Technology Council",
      imageSrc: snt,
    },
  ];
  return (
    <>
      <div
        id="hero-bg"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
        }}
        className="overflow-x-hidden relative h-[100vh] "
      >
        <Image
          src={heroImage}
          alt="Hero Background"
          className="w-full border-2 border-black  h-auto absolute z-[-1] bg-blend-darken blur-sm scale-1.2"
          layout="fill"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "-100vh", opacity: 0, scale: 1.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
          stiffness: 120,
          damping: 10 }}
        >
          <Header item={"Our Clubs"} />
        </motion.div>
      </div>

      <div
        id="main-container"
        className="bg-gradient-to-r from-pink-100 from-10% via-blue-100 via-30% to-purple-100 to-90%"
        //absolute bg-[radial-gradient(#65d3d4_1.4px,#cef7ff_1.2px)] [background-size:36px_36px] -- OLD BG
      >
        <ScrollReveal>
          <div className="flex items-center justify-center">
            <motion.h1
              className="text-white mt-10 xs:text-xs
               xs:text-base uppercase p-4 rounded-md text-center bg-gradient-to-r text-xl w-[27vw] h-[10.25vh] from-indigo-600 to-sky-400 font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              id="techClub"
            >
              Technical Clubs 
            </motion.h1>
          </div>
        </ScrollReveal>

        <div
          id="council"
          className="flex mt-30 flex-wrap place-content-center gap-2  "
        >
          {clubArr.map((item, index) => (
            <div
              className={`w-[50vh] h-[25vw]  sm:w-[55vh] md:w-[80vh] sm:h-[40vw] md:h-[44vw] lg:w-[50vh] lg:h-[30vw] z-10 bg-transparent border-black pt-20 xs:h-[80vw] scroll-smooth`}
              key={index}
            >
              <ScrollReveal>
                {/* <div className="flex justify-end px-4 pt-4">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                  <span className="sr-only">Open dropdown</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                  </svg>
              </button>
        
              <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                  </li>
                  <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                  </li>
                  <li>
                      <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                  </li>
                  </ul>
              </div>
              </div> */}
                <div className="flex flex-col items-center pb-10">
                  <motion.div
                    whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                    transition={{ duration: 0.5 }}
                    className="img-cont xs:w-9 lg:w-40 lg:h-40 sm:w-60 sm:h-60 md:w-45 md:h-45 md:flex-auto md:space-x-9 sm:flex-1 flex items-center justify-center lg:mb-5 sm:m-4 md:m-2 cursor-pointer hover:shadow-xl "
                    whileTap={{ scale: 0.9, filter: "brightness(0.85)" }}
                  >
                    <Image
                      className=" lg:w-[100%] lg:h-[100%] sm:w-[80%] sm:h-[80%] md:w-[90%] md:mt-5 md:h-[90%] mt-3"
                      src={item.imageSrc.src}
                      alt={item.title}
                      width={134}
                      height={134}
                      unoptimized // "unoptimized" -- very CRUCIAL
                    />
                    
                  </motion.div>
                  <div className="heading-cont lg:w-60 lg:h-12 sm:w-40 sm:h-8 md:w-50 md:h-10 flex items-center justify-center ">
                    <h5 className="mb-1 lg:text-xl sm:text-sm md:text-md lg:font-medium text-center text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </div>
                  <div className="w-50 h-12 mb-10 mt-1 flex items-center justify-center cursor-pointerS">
                    <motion.button
                      className="px-4 py-2 scale-1.1 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg cursor-pointer md:block lg:block xl:block scroll-smooth sm:hidden"
                      whileTap={{ filter: "brightness(1.2)" }}
                    >
                      See more
                    </motion.button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
