import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./ui/carousel";
  import { useRef } from "react";
  import { Card, CardContent } from "@/components/ui/card";
  import Autoplay from "embla-carousel-autoplay";
  import Image from 'next/image'
export default function Events(){
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
 return(

<section
        className="bg-[url(/bg.jpg)] bg-cover bg-center px-8 md:px-32 py-4 md:py-4"
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
 );
}