import React from 'react'
import Heading from '../components/Heading'
import Button from "../components/Button"
import { projects } from '../data'
import { FaWindowMinimize, FaWindowMaximize, FaWindowClose } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Project = () => {

   const windowsIcons = [ <FaWindowMinimize />, <FaWindowMaximize />, <FaWindowClose /> ]
   const navigate = useNavigate()

   return (
      <section id='projekty' className='bg-gradient-to-r from-slate-200 to-slate-300 w-full text-neutral-900 overflow-hidden'>
         <div className='max-w-[1200px] mx-auto py-10 md:py-20'>

            <Heading label="Projekty"/>

            <div className='py-10 md:py-20 grid sm:grid-cols-2 md:grid-cols-3 px-6 gap-4 sm:gap-6 md:gap-8'>
               {projects.map((el, index) => (
                  <div key={index} className='bg-slate-100 p-4 md:p-6 rounded-xl shadow-xl relative overflow-hidden cursor-pointer'>
                     <div className='border-r-[4px] border-l-[4px] border-b-[4px] border-slate-300'>
                        <div className='flex h-[24px] bg-slate-300 w-full justify-end items-center gap-2'>
                           {windowsIcons.map((element, index) => (
                              <div key={index} className='text-slate-800 text-xl'>
                                 {element}
                              </div>
                           ))}
                        </div>
                        <img src={el.img}/>
                     </div>
                     <div className='flex items-end'>
                        <div className='flex-[1]'>
                           <h4 className='font-bold md:text-lg py-2'>{el.name}</h4>
                           <h4>{el.title}</h4>
                        </div>
                        <div className='flex-[1] h-full flex justify-end items-end'>
                           <Button label="Zobacz" onClick={() => navigate(`/projekt/${el.id}`)}/>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </section>
   )
}

export default Project