import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Mainbg from '../../../public/assests/mainbg.jpg'
import mun1 from '../../../public/assests/mun/mun1.jpg'
import mun2 from '../../../public/assests/mun/mun2.jpg'
import mun3 from '../../../public/assests/mun/mun3.jpg'
import mun4 from '../../../public/assests/mun/mun4.jpg'
import mun5 from '../../../public/assests/mun/mun5.jpg'
import mun6 from '../../../public/assests/mun/mun6.jpg'
import mun7 from '../../../public/assests/mun/mun7.jpg'
import mun8 from '../../../public/assests/mun/mun8.jpg'
import mun9 from '../../../public/assests/mun/mun9.jpg'
import mun10 from '../../../public/assests/mun/mun10.jpg'

const Mun = () => {
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
      <div className='flex justify-center text-white text-3xl font-sans my-2'>IITIMUN</div>

        <div className='flex justify-evenly flex-wrap xl:mx-10 lg:mx-8 md:mx-6 sm:mx-4 mx-2 bg-[rgb(150,150,150,0.2)] w-[95vw] h-[80vh] overflow-auto scrollbar-hide p-4'>
               <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun1} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun2} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun3} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun4} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun5} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun6} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun7} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun8} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun9} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
                <div className='event_card text-white m-4 w-[400px] h-[50vh] bg-[rgb(241,68,68)] my-4 overflow-hidden rounded-3xl hover:scale-105 transition duration-300'>
                <Image src={mun10} objectFit='cover' quality={100} sizes='100%' alt='event image' className=' w-[100%] h-[100%] '/>
                </div>
            </div>
      </div>
    
   )
}
export default Mun;