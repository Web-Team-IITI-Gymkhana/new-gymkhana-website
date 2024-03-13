import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Mainbg from '../../../public/assests/mainbg.jpg'
import con1 from '../../../public/assests/convocation/convocation1.jpg'
import con2 from '../../../public/assests/convocation/convocation2.jpg'
import con3 from '../../../public/assests/convocation/convocation3.jpg'
import con4 from '../../../public/assests/convocation/convocation4.jpg'
import con5 from '../../../public/assests/convocation/convocation5.jpg'
import con6 from '../../../public/assests/convocation/convocation6.jpg'
import con7 from '../../../public/assests/convocation/convocation7.jpg'
import con8 from '../../../public/assests/convocation/convocation8.jpg'
import con9 from '../../../public/assests/convocation/convocation9.jpg'
import con10 from '../../../public/assests/convocation/convocation10.jpg'

const Convocation = () => {
   return (
      <div>
      <Link href='../gallery'>
         <button className='m-2 p-2 z-10 border-solid border-4 border-[rgb(57,50,148)] text-[rgb(57,50,148)] font-bold rounded-lg hover:scale-105'>Back</button>
      </Link>
      <Image 
      alt='mainbg'
      src={con8}
      quality={100}
     fill
      sizes='100vw'
      style={{
          objectFit:'cover',
          zIndex:'-10',
          opacity:'0.6', 
      }}
      />
      <div className='flex justify-center text-[rgb(57,50,148)] text-3xl font-sans font-extrabold my-2'>CONVOCATION</div>

        <div className='flex justify-evenly flex-wrap xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 bg-[rgb(150,150,150,0.2)] w-[95vw] h-[80vh] overflow-auto scrollbar-hide p-4'>
               <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con1} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con2} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con3} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con4} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con5} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con6} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con7} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con8} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con9} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[375px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={con10} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
            </div>
      </div>
    
   )
}
export default Convocation;