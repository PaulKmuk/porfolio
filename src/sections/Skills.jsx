import React from 'react'
import Heading from '../components/Heading'
import programer from "../img/skills.png"
import { iconsTechnology } from '../data'

const Skills = () => {
   return (
      <section id='technologie'  className='bg-gradient-to-r from-slate-200 to-slate-300 w-full text-neutral-900 overflow-hidden'>
         <div className='max-w-[1200px] mx-auto py-10 md:py-20'>

            <Heading label="Technologie"/>

            <p className='text-center py-6 md:py-10 px-6 md:text-lg font-semibold'>Technologie i narzędzia których używam w codziennej pracy</p>

            <div className='py-10 md:flex'>
               <div className='px-6 flex-[1]'>
                  <p className='md:text-lg indent-10 font-medium'>
                     Moje doświadczenie obejmuje HTML, CSS, JavaScript, React, Tailwind oraz Git. Aktualne umiejętności pozwalają mi na swobodne budowanie aplikacji od strony frontendowej. Przykłady moich projektów są dostępne na moim profilu GitHub. Obecnie poszerzam naukę o backend w technologi Node.js/Express w połączeniu z bazą danych MySQL.
                  </p>
                  <div className='px-10 max-w-[400px] mx-auto'>
                     <img src={programer}/>
                  </div>
                  <p className='md:text-lg indent-10 font-medium'>
                     Jestem gotów na intensywną naukę i dostosowanie się do wymagań nowego środowiska pracy. Poszukuję możliwości zdobycia doświadczenia zawodowego i jestem pełen zapału do rozwijania się w świecie programowania.
                  </p>
               </div>
               <div className='px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-[1]'>
                  {iconsTechnology.map((el, index) => (
                     <div key={index} className='flex flex-col items-center'>
                        <div className='w-[80px] h-[80px] md:w-[90px] md:h-[90px] bg-gray-100 p-4 rounded-full drop-shadow-xl'>
                           <img src={el.icon}/>
                        </div>
                        <p className='font-bold text-center pt-2'>{el.label}</p>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>
   )
}

export default Skills