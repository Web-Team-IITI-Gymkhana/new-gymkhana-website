import React from "react";
import Image from "next/image";
import Logo from "../../../public/IITI3.jpg";
import Acadlogo from "../../../public/acadlogo.jpg";
import Cultlogo from "../../../public/cultlogo.jpg";
import sntlogo from "../../../public/SNT.jpg"
export default function Council(){
    return(
        <div className="overflow-hidden flex flex-row max-[950px]:flex-col py-20 bg-[url(/bg7.jpg)] bg-cover bg-center">
            <div className="flex flex-col p-2 w-[40%] max-[950px]:w-[100%]">
            <div className="h-[25vh] max-[950px]:h-0"></div>
            <div className="p-2 text-center items-center overflow-hidden  max-[950px]:h-auto ">
            <p className="font-extrabold text-6xl mt-12 max-sm:text-4xl">COUNCILS</p>
            <p className="font-normal text-lg mt-6 px-4 text-gray-700">The four Councils along with cells carry out the executive responsibilities of the Students’ Gymkhana. Each council executes affairs pertaining to an overarching purpose. The Councils comprise Clubs, Hobby Groups, and Institute Teams, which cater to specific activities.</p>
            </div>
            <div className="h-[25vh] max-[950px]:h-0"></div>
            </div>
            <div className="overflow-hidden w-[60%] max-[950px]:w-[100%] p-2">
                    <div className="p-5 mb-1 flex max-[450px]:flex-col">
                    <div className="min-w-[120px] max-[450px]:mb-3 max-[550px]:w-[5vw] max-[550px]:min-w-[80px] max-[550px]:max-h-[11vh] w-[8vw] max-h-[16vh] text-center items-center rounded-full mr-1 bg-black">
                        <Image src={sntlogo} alt="/" className="h-[15vh] max-[550px]:h-[10vh] rounded-full max-[450px]:shadow-[0_7px_1px_rgb(0,0,0)] "></Image> 
                        </div>
                    <div className="w-[45vw] max-[450px]:w-[85vw] max-[950px]:w-[70vw] max-[950px]:min-h-[15vh] h-auto min-h-[16vh] rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-400 overflow-hidden">
                    <p className="text-white font-bold font-serif text-xl pt-2 pl-4">Science and Technology Council</p>
                        <p className="text-white font-light text-sm mt-1  pl-4">The SnT Council of IIT Indore is a community of science and technology enthusiasts who love to explore the unthinkable.</p>
                        </div>
                    </div>
                    <div className="p-5 mb-1 flex ml-12 max-[550px]:ml-2 max-[450px]:flex-col">
                    <div className="min-w-[120px] max-[450px]:mb-3 max-[550px]:w-[5vw] max-[550px]:min-w-[80px] max-[550px]:max-h-[11vh]  w-[8vw] max-h-[16vh] text-center items-center rounded-full mr-1 bg-black">
                        <Image src={Cultlogo} alt="/" className="h-[15vh] max-[550px]:h-[10vh] rounded-full max-[450px]:shadow-[0_7px_1px_rgb(0,0,0)]"></Image> 
                    </div>
                    <div className="w-[45vw] max-[450px]:w-[85vw] max-[950px]:w-[70vw] max-[950px]:min-h-[15vh] h-auto min-h-[16vh] rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-400 overflow-hidden">
                        <p className="text-white font-bold font-serif text-xl pt-2 pl-4">Cultural Council</p>
                        <p className="text-white font-light text-sm mt-1  pl-4">The Cultural Council of IIT Indore orchestrates a diverse array of cultural events throughout the year, fostering artistic expression and community engagement among students and faculty alike.</p>
                        </div>
                    </div>
                    <div className="p-5 flex ml-12 max-[550px]:ml-2 max-[450px]:flex-col">
                    <div className="min-w-[120px] max-[450px]:mb-3 max-[550px]:w-[5vw] max-[550px]:min-w-[80px] max-[550px]:max-h-[11vh]  w-[8vw] max-h-[16vh] text-center items-center rounded-full mr-1 bg-black">
                        <Image src={Logo} alt="/" className="h-[15vh] max-[550px]:h-[10vh] rounded-full max-[450px]:shadow-[0_7px_1px_rgb(0,0,0)]"></Image> 
                    </div>
                    <div className="w-[45vw] max-[450px]:w-[85vw] max-[950px]:w-[70vw] max-[950px]:min-h-[15vh] h-auto min-h-[16vh] rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-400 overflow-hidden">
                    <p className="text-white font-bold font-serif text-xl pt-2 pl-4">Sports Council</p>
                        <p className="text-white font-light text-sm mt-1  pl-4">The Sports Council is the voice and face of IIT Indore sports community, responsible for management and conduction of all sporting events in the campus.</p>
                        </div>
                    </div>
                    <div className="p-5 mb-1 flex max-[450px]:flex-col">
                    <div className="min-w-[120px] max-[450px]:mb-3 max-[550px]:w-[5vw] max-[550px]:min-w-[80px] max-[550px]:max-h-[11vh] max-lg:w-[8.5vw] w-[8vw] max-h-[16vh] text-center items-center rounded-full mr-1 bg-black">
                        <Image src={Acadlogo} alt="/" className="h-[15vh] max-[550px]:h-[10vh] rounded-full max-[450px]:shadow-[0_7px_1px_rgb(0,0,0)]"></Image> 
                    </div>
                    <div className="w-[45vw] max-[450px]:w-[85vw] max-[950px]:w-[70vw] max-[950px]:min-h-[15vh] h-auto min-h-[16vh] rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-400 overflow-hidden p-1">
                        <p className="text-white font-bold font-serif text-xl pt-2 pl-4">Academic Council</p>
                        <p className="text-white font-light text-sm mt-1  pl-4">The Academics Council has been trusted with the responsibility of managing executive activities in two of the most crucial aspects of student life - Academics and Career.</p>
                        </div>
                    </div>
            </div>
            
        </div>
    );
};