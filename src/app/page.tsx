<<<<<<< HEAD
=======
import { Fullscreen } from "@mui/icons-material";
// import {Button } from "@nextui-org/react";
>>>>>>> 9cd508719fb50a5d952c06812aa0c1265d5e77f0
import Image from "next/image";
import Gallery from "./gallery/page";
import { Fullscreen } from "@mui/icons-material";
import Hero from "./clubs/hero";
<<<<<<< HEAD

// export default function Home() {
//   return <Gallery />

// import {Button } from "@nextui-org/react";

=======
import Message from "./presidentmessage/message";
import Council from "./council/council";
>>>>>>> 9cd508719fb50a5d952c06812aa0c1265d5e77f0
export default function Home() {
  return (
    <>
      <Image
        className="absolute top-3 left-3 z-10 invisible lg:visible"
        src="/main_logo.png"
        width={200}
        height={200}
        objectFit="contain"
        alt="Gymkhana main Logo"
      />
      <Image
        className="absolute top-20 left-20 z-10 invisible xl:visible"
        src="/red_plus.svg"
        width={230}
        height={230}
        objectFit="contain"
        alt="Random plus"
      />
      <div className="hero_section w-full absolute top-0 h-[90vh] bg-[url('/hero_background.png')] -z-10 bg-cover bg-center"></div>
      <div className="flex flex-col bg-opacity-0 h-2/3 xl:px-48 xl:py-40 px-12 py-24">
        <span>
          <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl font-extrabold text-Gold">
            Student's
          </p>
          <p className="lg:inline text-7xl 2xl:text-8xl min-[1800px]:text-9xl lg:ml-6 font-extrabold text-white">
            Gymkhana
          </p>
        </span>
        <br></br>
        <p className="text-6xl font-bold text-white">IIT Indore</p>
        {/* <Button className="w-36 bg-Gold h-12 mt-16 text-md bg-opacity-90" radius="full">Know more</Button> */}
      </div>
      <div className="h-96 bg-slate-100">Random Content...</div>
      <Image
<<<<<<< HEAD
        className="absolute right-0 top-[70vh] z-10 invisible xl:visible"
        src="/blue_dots.svg"
        width={400}
        height={400}
        objectFit="contain"
        alt="Random plus"
      />
      <Hero />
=======
          className="absolute right-0 top-[70vh] z-10 invisible xl:visible"
          src="/blue_dots.svg"
          width={400}
          height={400}
          objectFit="contain"
          alt="Random plus"
        />
        <Message/>
        <Council/>
        <Hero/>
        
>>>>>>> 9cd508719fb50a5d952c06812aa0c1265d5e77f0
    </>
  );
}
