import React from 'react'

const ProjectHeader = () => {
   return (
      <section className='h-[100px] md:h-[200px] w-full flex bg-gradient-to-r from-slate-200 to-slate-300'>  

      <div 
         className='flex-[3] bg-slate-950 flex justify-center items-center slide-in-left'
      >
         {/* <h1 className='text-slate-300 font-bold text-lg md:text-2xl'>Projekt</h1> */}
      </div>


      <div 
         className='flex-[5] max-md:hidden flex items-center slide-in-right'
      >
         <h1 className='text-slate-950 font-bold text-lg md:text-2xl pl-[150px] lg:pl-[200px]'></h1>

      </div>

      </section>
   )
}

export default ProjectHeader