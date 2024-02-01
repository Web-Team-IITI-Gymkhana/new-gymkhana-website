import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import heroImage from "./assets/hero.png";

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
      <div id="hero-bg" className="overflow-x-hidden relative h-[100vh]">
        <Image
          src={heroImage}
          alt="Hero Background"
          className="w-full border-2 border-black  h-auto absolute z-[-1] bg-blend-darken blur-sm scale-1.2"
          layout="fill"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold border-b-2 border-solid border-blue-500 py-3 animate-glow">
            <span className="text-[#3B82F6]">T</span>echnical Clubs
          </h1>
        </div>
      </div>

      <div
        id="council"
        className="flex flex-wrap place-content-center gap-2  bg-[radial-gradient(#65d3d4_1.4px,#cef7ff_1.2px)] [background-size:36px_36px]"
      >
        {clubArr.map((item, index) => (
          <div
            className={`w-[50vh] h-[25vw] z-10 bg-transparent border-black pt-20`}
            key={index}
          >
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
              <div className="img-cont w-40 h-40 flex items-center justify-center mb-5">
                <Image
                  className="w-[100%] h-[100%]"
                  src={item.imageSrc.src}
                  alt={item.title}
                  width={10}
                  height={10}
                  unoptimized // "unoptimized" -- very CRUCIAL
                />
              </div>
              <div className="heading-cont w-60 h-12 flex items-center justify-center ">
                <h5 className="mb-1 text-xl font-medium text-center text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </div>
              <div className="w-50 h-12 flex items-center justify-center cursor-pointer ">
                <button className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  See more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
