import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Mainbg from '../../../public/assests/mainbg.jpg'
import republic1 from '../../../public/assests/republic/republic1.jpg'
import republic2 from '../../../public/assests/republic/republic2.jpg'
import republic3 from '../../../public/assests/republic/republic3.jpg'
import republic4 from '../../../public/assests/republic/republic4.jpg'
import republic5 from '../../../public/assests/republic/republic5.jpg'
import republic6 from '../../../public/assests/republic/republic6.jpg'
import republic7 from '../../../public/assests/republic/republic7.jpg'
import republic8 from '../../../public/assests/republic/republic8.jpg'
import republic9 from '../../../public/assests/republic/republic9.jpg'
import republic10 from '../../../public/assests/republic/republic10.jpg'
import republic11 from '../../../public/assests/republic/republic11.jpg'
import republic12 from '../../../public/assests/republic/republic12.jpg'
import republic13 from '../../../public/assests/republic/republic13.jpg'
import republic14 from '../../../public/assests/republic/republic14.jpg'
import republic15 from '../../../public/assests/republic/republic15.jpg'
const Republic = () => {
   return (
      <div>
      <Link href='../gallery'>
         <button className='m-2 p-2 z-10 border-solid border-2 border-white text-white rounded-lg hover:scale-105'>Back</button>
      </Link>
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
      <div className='flex justify-center text-white text-3xl font-sans my-2'>REPUBLIC DAY</div>

        <div className='flex justify-evenly flex-wrap xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 bg-[rgb(150,150,150,0.2)] w-[95vw] h-[80vh] overflow-auto scrollbar-hide p-4'>
               <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic1} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic2} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic3} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic4} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic5} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic6} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic7} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic8} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic9} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic10} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic11} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic12} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic13} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic14} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={republic15} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
            </div>
      </div>
    
   )
}
export default Republic;