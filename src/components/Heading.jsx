import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({ label }) => {

   useEffect(() => {
      AOS.init()
   },[])

   return (
      <div className='flex items-center w-full gap-6 md:gap-10 h-[40px] px-6 md:px-10'>
         <div  data-aos="fade-right" className='flex-[1] w-full h-full flex items-stard'>
            <div className='bg-blue-700 h-[6px] md:h-[8px] w-full rounded-full'></div>
         </div>
         <h2 className='fontHeader text-2xl md:text-4xl font-bold'>{label}</h2>
         <div data-aos="fade-left" className='flex-[1] w-full h-full flex items-end'>
            <div className='bg-blue-700 h-[6px] md:h-[8px] w-full rounded-full'></div>
         </div>
      </div>
   )
}

export default Heading