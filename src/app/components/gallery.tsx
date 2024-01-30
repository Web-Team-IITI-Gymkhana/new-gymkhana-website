import React from 'react'
import Image from 'next/image'
import './gallery.css'
import Mainbg from '../../../public/assests/mainbg.jpg'
import fluxus from '../../../public/assests/fluxus.jpg'
import republic from '../../../public/assests/republic.jpg'
import convocation from '../../../public/assests/convocation.jpg'
import esummit from '../../../public/assests/esummit.jpg'
import tvsm from '../../../public/assests/tvsm.jpg'
import mun from '../../../public/assests/mun.jpg'
export const Gallery = () => {
  return (
    <div className='overflow-hidden'>
        <Image 
            alt='mainbg'
            src={Mainbg}
            quality={100}
           fill
            sizes='100vw'
            style={{
                objectFit:'cover',
                zIndex:'-10',
                opacity:'1', 
            }}
            />
            
        <button className='m-2 sticky flex justify-center size-12'><span>Home</span><i></i></button>
        <div className='flex justify-center mt-3 text-3xl z-10 text-black'>
            <h1 className="z-1 text-white first-letter:text-orange-600 ">GALLERY</h1>
        </div>
        <div className='flex justify-evenly flex-wrap xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 bg-[rgb(150,150,150,0.2)] w-[95vw] h-[80vh] overflow-auto scrollbar-hide p-4'>
            <div className='event_card text-white m-4 w-[325px] h-[50vh] bg-[rgb(241,68,68,0)] my-4 overflow-hidden rounded-3xl hover:shadow-indigo-500/100 transition duration-3000 '>
                <Image src={fluxus} alt='event image' objectFit='cover'quality={100} sizes='100%' className=' w-[100%] h-[100%] hover:h-[50%] transition duration-300 '/>
                <div className='event_card_description bg-[rgba(84,77,180)] w-[100%] h-[100%] hover:h-[50%] transition duration-300'>
                <span className='event_card_title mx-[7vw] '><p className='text-lg text-center'>FLUXUS</p></span>
                <span className='event_card_content p-[1rem]'><p className='text-base p-[0.5rem]'>Fluxus is the annual Techno-Cultural Extravaganza organized by The Indian Institute of Technology, Indore</p></span>
                </div>
            </div>
           
            <div className='event_card text-white m-4 w-[325px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl'>
                <Image src={republic} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] hover:h-[50%] '/>
                <div className='event_card_description bg-[rgb(196,52,52)] w-[100%] h-[100%] hover:h-[50%]'>
                <span className='event_card_title min-[400px]:mx-[6rem] min-[200px]:ml-[3rem] '>REPUBLIC DAY</span><br/>
                <span className='event_card_content'><p className='text-base p-[0.5rem]'>Red, White, and Green: IIT Indore Commemorates Republic Day with Zeal - Students, faculty, and staff unite in a vibrant display of national pride, showcasing cultural diversity and innovation.</p></span>
                </div>
            </div>
            <div className='event_card text-white m-4 w-[325px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl'>
                <Image src={convocation} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] hover:h-[50%] '/>
                <div className='event_card_description bg-[rgb(53,46,178)] w-[100%] h-[100%] hover:h-[50%]'>
                <span className='event_card_title mx-[7vw] '>CONVOCATION</span><br/>
                <span className='event_card_content'><p className='text-base p-[0.5rem]'>IIT Indore Convocation: A Triumph of Knowledge and Achievement - Graduates and scholars gather to celebrate academic milestones, embodying excellence and the spirit of innovation.</p></span>
                </div>
            </div>
            <div className='event_card text-white m-4 w-[325px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl'>
                <Image src={esummit} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] hover:h-[50%] '/>
                <div className='event_card_description bg-[rgb(174,166,49)] w-[100%] h-[100%] hover:h-[50%]'>
                <span className='event_card_title mx-[7vw] '>E-SUMMIT</span><br/>
                <span className='event_card_content'><p className='text-base p-[0.5rem]'>IIT Indore E-Summit: Igniting Entrepreneurial Spirit - A platform fostering innovation and collaboration, empowering aspiring entrepreneurs with knowledge, networking, and opportunities for growth.</p></span>
                </div>
            </div>
            <div className='event_card text-white m-4 w-[325px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl'>
                <Image src={tvsm} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] hover:h-[50%] '/>
                <div className='event_card_description bg-[rgb(200,135,135)] w-[100%] h-[100%] hover:h-[50%]'>
                <span className='event_card_title mx-[7vw] '>TVSM</span><br/>
                <span className='event_card_content'><p className='text-base p-[0.5rem]'>IIT Indore and IIM Indore TVSM: A Cultural Clash of Titans - Annual festivities ignite campus spirit, fostering camaraderie and friendly competition while celebrating diversity through music, dance, and art.</p></span>
                </div>
            </div>
            <div className='event_card text-white m-4 w-[325px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl'>
                <Image src={mun} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] hover:h-[50%] '/>
                <div className='event_card_description bg-[rgb(110,91,91)] w-[100%] h-[100%] hover:h-[50%]'>
                <span className='event_card_title mx-[7vw] '>MUN</span><br/>
                <span className='event_card_content'><p className='text-base p-[0.5rem]'>IIT Indore MUN: Diplomatic Discourse Unveiled - Where global issues meet scholarly debate, fostering critical thinking and diplomatic skills among students, shaping future leaders of international relations.</p></span>
                </div>
            </div>
        </div>
    </div>    
  )
}
