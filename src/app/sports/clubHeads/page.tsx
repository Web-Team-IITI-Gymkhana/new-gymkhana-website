"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import heroImage from "../../../../public/assests/sports/image (1).jpg";
// import clubArr from "./clubData";
import testImg from "../../../../public/assests/clubHeads/img.png";
import insta_icon from "../../../../public/assests/clubHeads/social_logo/ig_black.webp";
import li_icon from "../../../../public/assests/clubHeads/social_logo/li_blackLogo.png";
import site_icon from "../../../../public/assests/clubHeads/social_logo/site.webp";

import Header from "./header";
import badminton from "../../../../public/assests/sports_head/Badminton.jpg";
import chess from "../../../../public/assests/sports_head/chess.jpg";
import cricket from "../../../../public/assests/sports_head/cricket.jpg";
import football from "../../../../public/assests/sports_head/football.jpg";
import squash from "../../../../public/assests/sports_head/squash.jpg";
import tt from "../../../../public/assests/sports_head/tt.jpg";
import aviral from "../../../../public/assests/sports_head/Aviral.jpg";
import mukul from "../../../../public/assests/sports_head/mukul.jpg";

// import test, { before } from "node:test";

export default function Hero() {
  const clubArr = [
    {
      club_name: "Athletics Club",
      head: "Mukul Ghunawat",
      post: "Head",
      img: mukul,
      club_insta: "#",
      club_lin: "#",
      website: "#",
    },
    {
      club_name: "Badminton Club",
      head: "Anshul Rathodia",
      post: "Head",
      img: badminton,
      club_insta: "https://www.instagram.com/badmintonclub_iiti/",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    {
      club_name: "Chess Club",
      head: "Saket Thamke",
      post: "Head",
      img: chess,
      club_insta: "https://www.instagram.com/theberserkers_iiti/",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    {
      club_name: "Cricket Club",
      head: "Yogesh Patidar",
      post: "Head",
      img: cricket,
      club_insta: "https://www.instagram.com/cricket_iiti/",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    {
      club_name: "Football Club",
      head: "Biradhar Saketh",
      post: "Head",
      img: football,
      club_insta: "https://www.instagram.com/football_club_iiti/",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    
    {
      club_name: "Squash Club",
      head: "Yash Khare",
      post: "Head",
      img: squash,
      club_insta: "#",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
    },
    
    
    {
      club_name: "Tennis Club",
      head: "Aviral Sharma",
      post: "Head",
      img: aviral,
      club_insta: "https://www.instagram.com/tennis_iiti/",
      club_lin: "#",
      website: "",
    },
    {
      club_name: "Table Tennis Club",
      head: "Samrudhhee",
      post: "Head",
      img: tt,
      club_insta: "https://www.instagram.com/table_tennis_iiti/",
      club_lin: "#",
      website: "http://people.iiti.ac.in/~sports/",
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
               
                <motion.div
                  className="flex flex-col items-center pb-5 cursor-pointer "
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileTap={{ scale: 0.9, filter: "brightness(0.85)" }}
                    className="img-cont lg:w-40 lg:h-40 md:w-40 md:h-40 sm:w-30 sm:h-40 md:flex-auto flex items-center justify-center lg:mb-5 md:m-2 xs:w-40 xs:h-40 cursor-pointer hover:shadow-xl xxs:h-40 "
                  >
                    <Image
                      className=" lg:w-[20vw] sm:w-[20vw] xxs:h-[25vw] sm:mt-3 lg:mt-2 sm:pb-5 md:pb-0 border-2 border-indigo-500 md:mt-5 md:h-[90%] shadow-2xl"
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
                  {/* <div className="w-20 h-12 mb-[-15vw] mt-1 flex items-center justify-center cursor-pointer  "> */}
                    {/* <motion.button
                      className="px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-lg cursor-pointer md:block lg:block xl:block scroll-smooth sm:hidden"
                      whileTap={{ filter: "brightness(1.2)" }}
                    >
                      {item.post}
                    </motion.button> */}
                  {/* </div> */}
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
