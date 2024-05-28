"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import "./globals.css";
import Council from "./council/council";
import CouncilHead from "../components/Councilhead";
import About from "@/components/about";
import Events from "@/components/events";

import ClubsHomePage from "@/components/ClubsHomePage";
export default function Home() {
 
  function LearnMore() {
    window.location.assign("https://www.iiti.ac.in/");
  }
  return (
    <>
    <div className=" w-full top-0 h-[50rem] bg-[url('/Hero.jpg')] -z-10 bg-cover bg-center">
      <Image
        className="absolute top-12 left-6 z-20 invisible lg:visible bg-contain"
        src="/main_logo.png"
        width={300}
        height={300}
        alt="Gymkhana main Logo"
      />
     
      <div className="flex flex-col bg-opacity-0  xl:px-48 xl:py-40 px-16 py-28 justify-center max-[453px]:items-cemter w-full h-full">
        <span className="w-[80%] mx-auto">
          <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl font-extrabold text-amber-400 max-sm:text-5xl">
            Student's
          </p>
          <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl lg:ml-6 font-extrabold text-white max-sm:text-5xl max-sm:ml-0">
            Gymkhana
          </p>
        </span>
        <br></br>
        <p className="text-6xl lg:text-7xl font-bold text-white w-[78%] mx-auto  max-sm:text-5xl">IIT Indore</p>
        <Button
          className="w-36 bg-amber-400 h-12 mt-16 text-md bg-opacity-90 ml-2 text-white mx-auto"
          radius="full" 
          onClick={LearnMore}
        >
          Know more
        </Button>
      </div>
      </div>
     
      <Council />
      <CouncilHead />
      <About/>
     <ClubsHomePage />
      {/* <Events/> */}
      
      
      
    </>
  );
}