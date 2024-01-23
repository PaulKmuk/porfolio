import React, { useState, useEffect } from 'react'
import { FaXmark } from "react-icons/fa6";
import logoBlack from "../img/logo_black.png"
import logoWhite from "../img/logo_white.png"
import { linksNavbar } from '../data'
import { MdMenu } from "react-icons/md";

const Navigation = () => {

   const [positionY, setPositionY] = useState(parseInt(window.scrollY))
   const [openMenuSide, setOpenMenuSide] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
        const positionY = window.scrollY;
        setPositionY(parseInt(positionY.toFixed(0)));
      };
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <nav className={`fixed z-50 w-full ${positionY >= 100 && "bg-slate-300/90 border-b border-slate-500"} transition-all slide-in-top`}>
         <div className='w-ful max-w-[1200px] mx-auto flex h-16 md:h-20 items-center'>

            <a href='/#' className='md:w-16 w-14 mx-4 slide-in-left'>
               <img src={positionY >= 100 ? logoBlack : logoWhite}/>
            </a>
            <div className="ml-auto text-slate-950  flex gap-6 px-6 lg:text-xl font-semibold items-center slide-in-right max-md:hidden">
               {linksNavbar.map((el, index) => (
                  <a
                     href={el.path}
                     key={index}
                     className='flex items-center'
                  >
                     {el.label}
                  </a>
               ))}
            </div>
            <div onClick={() => setOpenMenuSide(true)} className={`md:hidden  ml-auto mr-6 text-5xl slide-in-right ${positionY >= 100 ? "text-slate-950" : "text-slate-200"}`}>
               <MdMenu />
            </div>

         </div>

         {/* ---- MENU TO SMALL DEVICES ----  */}

         {openMenuSide && (
            <div className='absolute top-0 right-0 w-full h-screen bg-black/80'>
               <div className='w-4/5 h-screen absolute top-0 right-0 bg-slate-300 border-l border-slate-900 flex flex-col slide-in-right-fast'>
                  <div className='flex flex-col gap-5 pl-10 '>
                     <div onClick={() => setOpenMenuSide(false)} className='w-full flex p-6'>
                        <FaXmark className='ml-auto text-3xl mr-6'/>
                     </div>
                     {linksNavbar.map((el, index) => (
                        <a 
                           href={el.path}
                           key={index}
                           className='text-xl font-semibold border-l-[4px] border-blue-700 pl-6 w-full'
                           onClick={() => setOpenMenuSide(false)}
                        >
                           {el.label}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         )}
      </nav>
   )
}

export default Navigation