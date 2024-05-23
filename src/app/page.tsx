"use client";
import { useRef } from "react";
import { Button } from "@nextui-org/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import "./globals.css";
import Council from "./council/council";
import CouncilHead from "../components/Councilhead";
import About from "@/components/about";

import ClubsHomePage from "@/components/ClubsHomePage";
export default function Home() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  function LearnMore() {
    window.location.assign("https://www.iiti.ac.in/");
  }
  return (
    <>
      <Image
        className="absolute top-8 left-4 z-20 invisible lg:visible bg-contain"
        src="/main_logo.png"
        width={200}
        height={200}
        alt="Gymkhana main Logo"
      />
      <div className="hero_section w-full absolute top-0 h-[90vh] bg-[url('/hero_background.png')] -z-10 bg-cover bg-center"></div>
      <div className="flex flex-col bg-opacity-0 h-2/3 xl:px-48 xl:py-40 px-16 py-28 justify-center max-[453px]:items-cemter">
        <span>
          <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl font-extrabold text-amber-400 max-sm:text-5xl">
            Student's
          </p>
          <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl lg:ml-6 font-extrabold text-white max-sm:text-5xl max-sm:ml-0">
            Gymkhana
          </p>
        </span>
        <br></br>
        <p className="text-6xl font-bold text-white ml-2 max-sm:text-5xl">IIT Indore</p>
        <Button
          className="w-36 bg-amber-400 h-12 mt-16 text-md bg-opacity-90 ml-2 text-white"
          radius="full" 
          onClick={LearnMore}
        >
          Know more
        </Button>
      </div>
     
      <Council />
      <CouncilHead />
      <About/>
     <ClubsHomePage />
      <section
        className="bg-zinc-900 px-8 md:px-32 py-4 md:py-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='96' viewBox='0 0 60 96'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233f3f46' fill-opacity='0.4'%3E%3Cpath d='M36 10a6 6 0 0 1 12 0v12a6 6 0 0 1-6 6 6 6 0 0 0-6 6 6 6 0 0 1-12 0 6 6 0 0 0-6-6 6 6 0 0 1-6-6V10a6 6 0 1 1 12 0 6 6 0 0 0 12 0zm24 78a6 6 0 0 1-6-6 6 6 0 0 0-6-6 6 6 0 0 1-6-6V58a6 6 0 1 1 12 0 6 6 0 0 0 6 6v24zM0 88V64a6 6 0 0 0 6-6 6 6 0 0 1 12 0v12a6 6 0 0 1-6 6 6 6 0 0 0-6 6 6 6 0 0 1-6 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <p className="text-6xl font-sans font-bold text-white my-4 text-center">Events</p>
        <div className="flex flex-col items-center my-10">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[70%] "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <Card className="border-0 ">
                  <div className="flex lg:flex-row flex-col mx-4  ">
                    <Image
                      src="/HomePage/AT.gif"
                      width={0}
                      height={0}
                      style={{ width: "auto", maxWidth: "50%" }}
                      alt="fluxus"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-2xl font-bold text-center lg:text-start">Fluxus</p>
                      <p className="w-[90%] text-xl">
                        Fluxus is a registered entity of the Indian Institute of
                        Technology Indore since 2011 and is an event entirely
                        organized by the student community of the college.Fluxus
                        strives to promote technical innovation and artistic
                        spirit among everyone who is associated with the
                        festival. Fluxus is a part of IIT Indore and is a
                        legally recognized organization of the Institute.
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="border-0">
                  <div className="flex lg:flex-row flex-col mx-4">
                    <Image
                      src="/HomePage/eu.gif"
                      width={0}
                      height={0}
                      style={{ width: "auto", maxWidth: "50%" }}
                      alt="fluxus"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-2xl font-bold">Euristica</p>
                      <p className="w-[90%] text-xl">
                        Euristica, the annual coding festival of our college.
                        Euristica'18 and Euristica'19 was an immense success.
                        The next iteration of Euristica will be grander than
                        ever before. We will be conducting a variety of events
                        ranging from Competitive Programming and Application
                        Development to Cyber Security and Machine Learning.
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className=" border-0">
                  <div className="flex lg:flex-row flex-col mx-4">
                    <Image
                      src="/HomePage/MUN.gif"
                      width={0}
                      height={0}
                      style={{ width: "auto", maxWidth: "50%" }}
                      alt="fluxus"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-2xl font-bold">MUN-IITI</p>
                      <p className="w-[90%] text-xl">
                        IITI is back again with the focus of giving a platform
                        to young, budding pioneers and pacesetters, aims to
                        address some of the very grave problems engulfing the
                        world. MUN IITI 3.0 profers an engaging opportunity for
                        delegates itying for meaningful deliberaton.
                        <br></br>Our pool of dedicated MUN team will bring forth
                        the most engaging motions aimed to facilitate the
                        highest quality of debate.
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10" />
            <CarouselNext className="w-10 h-10"/>
          </Carousel>
        </div>
      </section>
      
      
    </>
  );
}