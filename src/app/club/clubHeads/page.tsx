"use client"; //important for framer motion to work

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import heroImage from "../../../../public/assests/clubHeads/hero.png";
import Header from "./header";
import testImg from "../../../../public/assests/clubHeads/img.png";
import insta_icon from "../../../../public/assests/clubHeads/social_logo/ig_black.webp";
import li_icon from "../../../../public/assests/clubHeads/social_logo/li_blackLogo.png";
import cae from "../../../../public/assests/clubHeads/photos/CAE.jpg";
import dhruv from "../../../../public/assests/clubHeads/photos/dhruv.png";
import cfa_fin from "../../../../public/assests/clubHeads/photos/cfafin.jpg";
import cfa_overall from "../../../../public/assests/clubHeads/photos/CFA(Overall and Analytics Head).jpg";
import concreate from "../../../../public/assests/clubHeads/photos/Concreate.jpg";
import cyn from "../../../../public/assests/clubHeads/photos/Cynaptics.jpg";
import ivdc from "../../../../public/assests/clubHeads/photos/IVDC.jpg";
import gdsc from "../../../../public/assests/clubHeads/photos/gdsc.jpg";
import pclub_cs from "../../../../public/assests/clubHeads/photos/PClub(Cybersecurity).jpg";
import robo from "../../../../public/assests/clubHeads/photos/Robotics.jpg";
import elec from "../../../../public/assests/clubHeads/photos/elec.jpg";
import astro from "../../../../public/assests/clubHeads/photos/TheAstronomyClub.png";
import aero from "../../../../public/assests/clubHeads/photos/mrunal.jpeg";
import Ayush from "../../../../public/assests/clubHeads/photos/Ayush.png";
import Naren from "../../../../public/assests/clubHeads/photos/PClub(Competitive Programming).jpeg";
import Quantum from "../../../../public/assests/clubHeads/photos/Quantum.jpg";




export default function Hero() {
  const clubArr = [
    {
      club_name: "Aeromodelling",
      head: "Mrunal Nandpure",
      post: "Head",
      img: aero,
      club_insta: "https://www.instagram.com/aeroclub_iiti/",
      club_lin: "https://www.linkedin.com/company/aeromodelling-club-iit-indore/",
      website: "",
    },
    {
      club_name: "Astronomy",
      head: "Keshav Aggarval",
      post: "Head",
      img: astro,
      club_insta:  "https://www.instagram.com/astronomyclub_iiti/",
      club_lin: "https://www.linkedin.com/company/the-astronomy-club-iit-indore/",
      website: "",
    },
    {
      club_name: "CAE",
      head: "Sameer Lakkad",
      img: cae,
      post: "Head",
      club_insta: "https://www.instagram.com/caeclub_iiti/",
      club_lin: "https://www.linkedin.com/company/cae-club-iit-indore/",
      website: "",
    },
    {
      club_name: "CFA(Overall and Analytics Dept.)",
      head: "Prasoon Pandey",
      post: "Head",
      img: cfa_overall,
      club_insta: "https://instagram.com/cfaclub_iiti?igshid=MzRlODBiNWFlZA==",
      club_lin: "https://www.linkedin.com/company/cfa-club-iit-indore/",
      website: "",
    },
    {
      club_name: "CFA(Finance Dept.)",
      head: "Shivam Sharma",
      post: "Head",
      img: cfa_fin,
      club_insta: "https://instagram.com/cfaclub_iiti?igshid=MzRlODBiNWFlZA==",
      club_lin: "https://www.linkedin.com/company/cfa-club-iit-indore/",
      website: "",
    },
    {
      club_name: "Concreate Club",
      head: "Harsh Sharma",
      post: "Head",
      img: concreate,
      club_insta: "https://www.instagram.com/concreate_iiti/",
      club_lin: "https://www.linkedin.com/company/concreate-club-iit-indore/",
      website: "",
    },
    {
      club_name: "Electronics Club",
      head: "Pulkit Gupta",
      post: "Head",
      club_insta: "https://www.instagram.com/electronics_club_iiti/",
      club_lin: "https://www.linkedin.com/company/elecclub-iit-indore/mycompany/",
      website: "",
      img: elec,
    },
    {
      club_name: "Cynaptics",
      head: "Arnav Jain",
      post: "Head",
      img: cyn,
      club_insta: "https://www.instagram.com/cynapticsclubiiti/",
      club_lin: "https://www.linkedin.com/company/cynaptics-club-iit-indore/",
      website: "https://cynaptics.vercel.app/",
    },
    {
      club_name: "GDSC",
      head: "Harsh Sinha",
      post: "Co-Head",
      img: gdsc,
      club_insta: "https://www.instagram.com/gdsc_iiti/",
      club_lin: "https://www.linkedin.com/company/developers-students-club-iit-indore/",
      website: "",
    },
    {
      club_name: "IVDC( Overall and Hardware )",
      head: "Arjun S Nair",
      post: "Head",
      club_insta: "https://www.instagram.com/ivdc_iiti/",
      img: ivdc,
      club_lin: "https://www.linkedin.com/company/ivdc-iiti/",
      website: "",
    },
    
    {
      club_name: "Metacryst",
      head: "Dhruv Jain",
      post: "Head",
      img: dhruv,
      club_insta:
        "https://instagram.com/metacryst_iiti?igshid=MzNlNGNkZWQ4Mg==",
      club_lin: "https://www.linkedin.com/company/metacryst-club-iit-indore/",
      website: "http://metacryst.iiti.ac.in/",
    },
    {
      club_name: "Pclub(Cybersecurity division)",
      head: "Siddhesh Waje",
      img: pclub_cs,
      post: "Head",
      club_insta: "https://www.instagram.com/pclub_iiti/",
     
      club_lin: "https://www.linkedin.com/company/progclub-iiti/",
      website: "http://progclub.iiti.ac.in/",
    },
    {
      club_name: "Pclub(CP division)",
      head: "Naren Sai",
      post: "Head",
      img: Naren,
      club_insta: "https://www.instagram.com/pclub_iiti/",
      club_lin: "https://www.linkedin.com/company/progclub-iiti/",
      website: "http://progclub.iiti.ac.in/",
    },
    {
      club_name: "Pclub(Software development division)",
      head: "Ayush Awasthi",
      post: "Head",
      img: Ayush,
      club_insta: "https://www.instagram.com/pclub_iiti/",
      club_lin: "https://www.linkedin.com/company/progclub-iiti/",
      website: "http://progclub.iiti.ac.in/",
    },
    {
      club_name: "Quantum Computing",
      head: "Mansi Singh",
      img: Quantum,
      post:"Head",
      club_insta: "https://www.instagram.com/quantum_computing_iiti/",
      club_lin: "https://www.linkedin.com/company/quantumcomputingiiti/",
      website: "",
    },
    {
      club_name: "Robotics",
      head: "Bhawna Chaudhary",
      post: "Head",
      img: robo,
      club_insta: "https://instagram.com/roboticsclub_iitindore",
      club_lin: "https://www.linkedin.com/company/robotics-club-iit-indore/",
      website: "",
    },
    
    
  ];
  return (
    <>
    <div className="sm:hidden block h-[50vw] bg-gradient-to-r from-pink-100 from-10% via-blue-100 via-30% to-purple-100 to-90%">

    </div>
      <div
        id="hero-bg"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
        }}
        className="overflow-x-hidden relative h-[0vh] "
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
            damping: 10,
          }}
        >
          <Header item={"Technical Council"} />
        </motion.div>
      </div>

      <div
        id="main-container"
        className="bg-gradient-to-r pb-[10vh] from-pink-100 from-10% via-blue-100 via-30% to-purple-100 to-90%"
      >
        <ScrollReveal>
          {/* <hr className="w-[15vw] pb-10 border-b-2 border-t-0 border-blue-500" />
          <hr className="w-[50vw] ml-[85vw] border-b-2 border-t-0 border-blue-500" /> */}

          <div className="flex items-center justify-center">
            <motion.h1
              className="text-white font-bold sm:mt-10 mt-5 sm:mb-0 mb-[-15vw] text-md uppercase sm:p-4 rounded-md text-center bg-gradient-to-r xs:text-base md:text-xl md:w-[21vw] sm:h-[10.25vh] md:h-[8.25vh]  from-indigo-600 to-sky-400 p-3 font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              id="techClub"
            >
              Club Heads
            </motion.h1>
          </div>
        </ScrollReveal>

        <div
          id="council"
          className="flex mt-30 flex-wrap place-content-center gap-0.5   "
        >
          {clubArr.map((item, index) => (
            <div
              className={`
              sm:w-[25vh] sm:h-[40vw] 
              md:w-[35vh] md:h-[40vw] 
              lg:w-[50vh] lg:h-[30vw] 
              lg:mx-[0vh]
              lg:my-[-3vh]
              md:mx-[2vw]
              md:my-[1vw]
              z-10 bg-transparent border-black pt-20 
              xs:h-[60vw]
              xs:w-[30vh]
              xs:m-3
              xs:mb-8
              xxs:m-4
              xxs:h-[40vw]
              xxs:w-[25vw]
              xxs:mb-[20vw]
              sm:mb-6 
              scroll-smooth              
              `}
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
                <motion.div
                  className="flex flex-col items-center pb-10 cursor-pointer "
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileTap={{ scale: 0.9, filter: "brightness(0.85)" }}
                    className="img-cont lg:w-50 lg:h-50 md:w-40 md:h-40 sm:w-30 sm:h-40 md:flex-auto flex items-center justify-center lg:mb-5 md:m-2 xs:w-40 xs:h-40 cursor-pointer hover:shadow-xl xxs:h-40 "
                  >
                    <Image
                      className=" lg:w-[20vw] sm:w-[20vw] xxs:h-[25vw] sm:mt-1 lg:mt-1 sm:pb-2 md:pb-0 border-2 border-indigo-500 md:mt-1 md:h-[90%] shadow-2xl"
                      src={item.img.src}
                      alt={item.head}
                      width={134}
                      height={134}
                      unoptimized // "unoptimized" -- very CRUCIAL
                    />
                  </motion.div>
                  <div className="heading-cont lg:w-60 lg:h-12 sm:w-40 sm:h-8 md:w-50 md:h-10 xxs:w-[50vw] sm:mt-1 mt-[-2vw] items-center justify-center ">
                    <h4 className="mb-1 lg:text-lg md:text-md text-xs lg:font-medium text-center dark:text-white pt-0.5 sm:mt-1 text-white ">
                      <span className="rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 sm:px-2 ">
                        {item.head}
                      </span>
                    </h4>
                    <div>
                      <h3 className="my-0.5 lg:text-md text-sm md:text-md lg:font-small text-center text-gray-800 underline underline-offset-0.5">
                        {item.post}
                      </h3>
                      <h2 className={`my-0.5 lg:text-md md:text-md lg:font-small text-center ${item.club_name.length>18?'sm:text-sm text-xs px-5  ':'text-sm'} text-gray-800`}>
                        {item.club_name}
                      </h2>
                    </div>
                    <div className="flex items-center justify-center pt-2 gap-3 ">
                      <a href={item.club_lin} target="_blank">
                        <Image
                          src={li_icon}
                          unoptimized
                          alt="Li. Icon"
                          width={25}
                        />
                      </a>

                      <a href={item.club_insta} target="_blank">
                        <Image
                          src={insta_icon}
                          unoptimized
                          alt="Insta Icon"
                          width={24}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="w-50 h-12 mb-10 mt-1 flex items-center justify-center cursor-pointer  ">
                    {/* <motion.button
                      className="px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg cursor-pointer md:block lg:block xl:block scroll-smooth sm:hidden"
                      whileTap={{ filter: "brightness(1.2)" }}
                    >
                      {item.post}
                    </motion.button> */}
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          ))}
        </div>
        {/* <div className="h-[5vh] relative"></div> */}
      </div>
    </>
  );
}
