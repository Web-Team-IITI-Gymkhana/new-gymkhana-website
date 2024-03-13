import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Fluxusmainbg from '../../../public/assests/fluxus/fluxus1.jpg'
import fluxus2 from '../../../public/assests/fluxus/fluxus2.jpg'
import fluxus3 from '../../../public/assests/fluxus/fluxus3.jpg'
import fluxus4 from '../../../public/assests/fluxus/fluxus4.jpg'
import fluxus5 from '../../../public/assests/fluxus/fluxus5.jpg'
import fluxus6 from '../../../public/assests/fluxus/fluxus6.jpg'
import fluxus7 from '../../../public/assests/fluxus/fluxus7.jpg'
import fluxus8 from '../../../public/assests/fluxus/fluxus8.jpg'
import fluxus9 from '../../../public/assests/fluxus/fluxus9.jpg'
import fluxus10 from '../../../public/assests/fluxus/fluxus10.jpg'
import fluxus11 from '../../../public/assests/fluxus/fluxus11.jpg'

const Fluxus = () => {
   return (
      <div>
      <Link href='../gallery'>
         <button className='m-2 p-2 z-10 border-solid border-2 border-white text-white rounded-lg hover:scale-105'>Back</button>
      </Link>
      <Image 
      alt='mainbg'
      src={Fluxusmainbg}
      quality={100}
     fill
      sizes='100vw'
      style={{
          objectFit:'cover',
          zIndex:'-10',
          opacity:'1', 
      }}
      />
      <div className='flex justify-center text-white text-3xl font-sans my-2'>FLUXUS</div>

        <div className='flex justify-evenly flex-wrap xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 bg-[rgb(150,150,150,0.2)] w-[95vw] h-[80vh] overflow-auto scrollbar-hide p-4'>
               <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus2} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus3} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus4} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus5} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus6} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus7} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus8} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus9} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus10} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={fluxus11} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={Fluxusmainbg} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
            </div>
      </div>
    
   )
}
export default Fluxus;