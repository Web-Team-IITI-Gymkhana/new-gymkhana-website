import react from "react";
import Image from "next/image";
import presidentimg from "../../../public/assests/presidentimg.jpg"
import { url } from "inspector";
export default function Message(){
    return(
      <div className="maindiv p-2">
      <div className="h-[8vh] text-center pt-2.5 text-white font-black text-3xl max-[350px]:text-xl">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-700">
        PRESIDENT'S MESSAGE
        </span>
        </div>
        <div className="content min-[750px]:h-[80vh] mt-1 bg-[url('/messagebg.jpg')] -z-10 bg-cover bg-center min-[750px]:flex p-2 min-[750px]:p-5 max-[750px]:block ">
            <div className="img flex-row min-[750px]:w-[35vw]">
                <Image src={presidentimg} alt="presidentimg" className="h-[40vh] min-[750px]:w-[20vw] lg:rounded-full ml-0 min-[750px]:ml-10  mt-[5rem] min-[750px]:mt-5 max-[750px]:w-[65vw] max-[750px]:h-[55vw] max-[750px]:ml-[12vw] max-[750px]:mt-[2rem] max-[300px]:ml-[8vw] "></Image>
                <div className="text-center text-white font-bold mr-10 mt-10 max-[750px]:ml-[10vw] max-[750px]:mt-[2rem] max-[300px]:mt-[1rem]  max-[750px]:mb-[1rem]">
                        Arpit Singh<br></br>President<br></br>IITI Gymkhana
                </div>
            </div>
            <div className="bg-[rgba(172,170,170,0.5)] text-white font-semibold font-serif overflow-hidden min-[750px]:w-[65vw] max-[750px]:w-80vw p-2 rounded-lg"> 
            The President’s Office, established within the Students’ Gymkhana in 2016-17, serves as the cornerstone for student leadership and engagement at our institution. Tasked with a broad spectrum of responsibilities, this office is dedicated to facilitating the President’s duties, orchestrating diverse events, and ensuring active participation in various committee meetings. It stands at the helm of managing pivotal assets such as the Students’ Activity Center and Students’ Server, alongside overseeing the Gymkhana’s financial matters. Moreover, the office plays a crucial role in the planning and execution of signature events like Gymkhana Day and Riwayat/Melange, enriching the campus culture. Through the formation of dynamic committees throughout the academic year, the President’s Office strives to foster a vibrant student community, empower student voices, and enhance the overall student experience at our institution.
                The President’s Office, established within the Students’ Gymkhana in 2016-17, serves as the cornerstone for student leadership and engagement at our institution. Tasked with a broad spectrum of responsibilities, this office is dedicated to facilitating the President’s duties, orchestrating diverse events, and ensuring active participation in various committee meetings. It stands at the helm of managing pivotal assets such as the Students’ Activity Center and Students’ Server, alongside overseeing the Gymkhana’s financial matters. Moreover, the office plays a crucial role in the planning and execution of signature events like Gymkhana Day and Riwayat/Melange, enriching the campus culture. Through the formation of dynamic committees throughout the academic year, the President’s Office strives to foster a vibrant student community, empower student voices, and enhance the overall student experience at our institution.
            </div>
        </div>
        </div>
        
        
    )
}