import React from 'react'
import img_profile from "../img/img_profil.png"
import blob from "../img/blob.gif"
import { icons } from '../data'


const Header = () => {
   
   return ( 
      <section id='#' className='md:h-screen bg-cover w-full md:flex md:bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900'>  


         {/* ---- SIDE FELFT HEADER ---- */}

         <div className='md:flex-[3] bg-slate-950 h-full w-full relative slide-in-left flex flex-col justify-center items-center max-md:h-screen'>

            <div className='w-[260px] h-[260px] lg:w-[280px] lg:h-[280px] bg-slate-950 rounded-full flex justify-center items-center md:absolute top-[50%-140px] -right-[140px]'>
               <div className='w-[220px] h-[220px] lg:w-[240px] lg:h-[240px] bg-slate-300 rounded-full flex justify-center items-center'>
                  <div className='w-[190px] h-[190px] lg:w-[210px] lg:h-[210px] bg-slate-950 rounded-full overflow-hidden flex justify-center items-center'>
                     <img className='h-full pt-4 object-bottom object-cover' src={img_profile}/>
                  </div>
               </div>
            </div>

            <h1 className='md:absolute text-slate-300 bottom-[120px] py-6 text-4xl md:text-6xl fontItalic'>Paweł Kmuk</h1>

            <div className='text-center text-xl md:text-4xl lg:text-7xl font-bold flex flex-col gap-2 p-6 text-slate-300 md:hidden'>
               <h1 className='fontHeader drop-shadow-2xl'>Junior <span className='text-blue-700 textBorder tracking-wider'>Frontend</span></h1>
               <h1 className='fontHeader'>Developer</h1>
            </div>

            <div className='text-slate-300 max-md:mr-0 max-lg:mr-[100px] flex md:flex-col gap-4 md:gap-6 border p-4 md:p-6 rounded-full'>
               {icons.map((el, index) => (
                  <a 
                     href={el.link}
                     target='_blank'
                     key={index}
                     className='text-2xl md:text-4xl cursor-pointer hover:text-blue-700'
                     >
                     <el.icon />
                  </a>
               ))}
            </div>

         </div>


         {/* ---- SIDE RIGHT HEADER ---- */}

         <div className='max-md:hidden flex-[5] h-[400px] md:h-full w-full flex justify-end items-center text-neutral-900 dark:text-slate-300 slide-in-right z-10 '>
            <div className='absolute max-md:w-full md:w-[350px] min-[900px]:w-[400px] lg:w-[500px] min-[1200px]:w-[600px] slide-in-right animated-svg'>
               <img src={blob}/>
            </div>
            <div className='text-right text-2xl md:text-5xl lg:text-7xl font-bold ml-auto flex flex-col gap-2 z-10 pr-20'>
               <h2 className='pb-2 text-xl md:text-3xl lg:text-5xl'>Cześć, jestem Paweł</h2>
               <h1 className='fontHeader drop-shadow-3xl'>Junior <span className='text-blue-700 textBorder tracking-wider'>Frontend</span></h1>
               <h1 className='fontHeader'>Developer</h1>
            </div>
         </div>


      </section>
   )
}

export default Header