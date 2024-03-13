import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Mainbg from '../../../public/assests/mainbg.jpg'
import e1 from '../../../public/assests/esummit/e1.jpg'
import e2 from '../../../public/assests/esummit/e2.jpg'
import e3 from '../../../public/assests/esummit/e3.jpg'
import e4 from '../../../public/assests/esummit/e4.jpg'
import e5 from '../../../public/assests/esummit/e5.jpg'
import e6 from '../../../public/assests/esummit/e6.jpg'
import e7 from '../../../public/assests/esummit/e7.jpg'
import e8 from '../../../public/assests/esummit/e8.jpg'
import e9 from '../../../public/assests/esummit/e9.jpg'
import e10 from '../../../public/assests/esummit/e10.jpg'
import e11 from '../../../public/assests/esummit/e11.jpg'
import e12 from '../../../public/assests/esummit/e12.jpg'
import e13 from '../../../public/assests/esummit/e13.jpg'
import e14 from '../../../public/assests/esummit/e14.jpg'
import e15 from '../../../public/assests/esummit/e15.jpg'
const Esummit = () => {
   return (
      <div>
      <Link href='../gallery'>
         <button className='m-2 p-2 z-10 border-solid border-2 border-white text-white rounded-lg hover:scale-105'>Back</button>
      </Link>
      <Image 
      alt='mainbg'
      src={e4}
      quality={100}
     fill
      sizes='100vw'
      style={{
          objectFit:'cover',
          zIndex:'-10',
          opacity:'1', 
      }}
      />
      <div className='flex justify-center text-white text-3xl font-sans my-2'>E-SUMMIT</div>

        <div className='flex justify-evenly flex-wrap xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 bg-[rgb(150,150,150,0.2)] w-[95vw] h-[80vh] overflow-auto scrollbar-hide p-4'>
               <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e1} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e2} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e3} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e4} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e5} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e6} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e7} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e8} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e9} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e10} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e11} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e12} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e13} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e14} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={e15} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
            </div>
      </div>
    
   )
}
export default Esummit;