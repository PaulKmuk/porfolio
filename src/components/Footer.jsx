import React from 'react'
import img_profile from "../img/img_profil.png"
import { icons, linksNavbar } from '../data'

const Footer = () => {
   return (
      <footer className='w-full bg-slate-950'>

         <div className='py-10 md:py-20 max-w-[1200px] md:flex mx-auto'>

            {/* ---- SIDE LEFT ----  */}

            <div className='flex-[3] flex md:border-r border-slate-500'>
               <div className='flex flex-col justify-center items-center max-md:mx-auto md:ml-auto md:mr-20'>
                  <div className='w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] bg-slate-950 rounded-full flex justify-center items-center'>
                     <div className='w-[100px] h-[100px] lg:w-[110px] lg:h-[110px] bg-slate-300 rounded-full flex justify-center items-center'>
                        <div className='w-[90px] h-[90px] lg:w-[100px] lg:h-[100px] bg-slate-950 rounded-full overflow-hidden flex justify-center items-center'>
                           <img className='h-full pt-4 object-bottom object-cover' src={img_profile}/>
                        </div>
                     </div>
                  </div>

                  <h1 className='text-slate-300 bottom-[160px] py-2 text-xl fontItalic text-center'>Paweł Kmuk</h1>

                  <div className='text-center text-xl font-bold flex flex-col gap-2 p-0 text-slate-300'>
                     <h1 className='fontHeader drop-shadow-2xl'>Junior <span className='text-blue-700 textBorder tracking-wider'>Frontend</span></h1>
                     <h1 className='fontHeader'>Developer</h1>
                  </div>
               </div>
            </div>

            {/* ---- SIDE RIGHT ----  */}

            <div className='flex-[5] flex flex-col justify-center items-center md:items-start md:pl-20 py-10'>

               <div className='flex flex-col justify-center items-center text-slate-300'>
                  <div className='text-slate-300 flex gap-4 md:gap-6 border px-4 md:px-6 p-2 md:p-4 rounded-full'>
                     {icons.map((el, index) => (
                        <a 
                           target='_blank'
                           href={el.link}
                           key={index}
                           className='text-xl md:text-2xl cursor-pointer hover:text-blue-700'
                           >
                           <el.icon />
                        </a>
                     ))}
                  </div>
                  <div className='flex gap-2 md:gap-4 py-4 md:py-6 flex-wrap justify-center'>
                     {linksNavbar.map((el, index) => (
                        <a href={el.path} key={index} className='text-sm md:text-base cursor-pointer'>
                           | {el.label} |
                        </a>
                     ))}
                  </div>
                  <p className='text-center text-sm mx-auto'>Copyright ©2024. All Rights Reserved. — Designed with love by <span className='italic font-semibold px-2 text-blue-700 text-center'>p.kmuk</span></p>
               </div>


            </div>
         
         </div>

      </footer>
   )
}

export default Footer