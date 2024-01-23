import React, { useEffect, useState } from 'react'
import ProjectHeader from '../components/ProjectHeader';
import { useParams } from 'react-router-dom';
import { projects } from '../data';
import Heading from '../components/Heading';
import imgDesc from "../img/imgDesc.png"
import Button from '../components/Button';
import responsiveImg from "../img/responsive_img.png"

const ProjectPage = () => {

   const [project, setProject] = useState({})
   const { id } = useParams()

   useEffect(() => {
      window.scrollTo(0, 0)
      const selectProject = projects.find(el => el.id === parseInt(id))
      setProject(selectProject)

   }, []);

   return (
      <div className='w-full bg-gradient-to-r from-slate-200 to-slate-300'>

         <ProjectHeader/>

         <div className='w-full max-w-[1200px] mx-auto py-10 md:py-20 overflow-hidden'>

            {/* ---- PROJECT ----  */}

            <Heading label="Projekt"/>

            <div className='md:flex py-10 md:py-20'>
               <div className='p-4 md:p-6 md:py-10 flex flex-col gap-4 md:gap-10 flex-[2]'>
                  <div className='border-l-[4px] border-blue-700 pl-2 md:pl-4'>
                     <label className='md:text-lg'>Projekt:</label>
                     <p className='font-semibold md:text-xl'>{project.name}</p>
                  </div>
                  <div className='border-l-[4px] border-blue-700 pl-2 md:pl-4'>
                     <label className='md:text-lg'>Opis:</label>
                     <p className='font-bold md:text-xl'>{project.title}</p>
                  </div>
                  <div className='border-l-[4px] border-blue-700 pl-2 md:pl-4'>
                     <label className='md:text-lg'>Technologie:</label>
                     <div className='flex font-bold gap-x-8 gap-y-2 flex-wrap'>
                        {project.technology && project.technology.map((el,index) => (
                           <div key={index} className='flex flex-col items-center w-14'>
                              <img src={el.img}/>
                              <p>{el.label}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className='p-4 md:p-6 flex-[5]'>
                  <img className='w-full border border-slate-950 rounded-2xl' src={project.img}/>
               </div>
            </div>
            
            {/* ---- DESCRIPTION PROJECT ----  */}
            
            <Heading label="Opis"/>

            <div className='py-10 md:py-20 text-neutral-900 md:flex'>

               <div className='flex justify-center items-center flex-[1]'>
                  <img src={imgDesc}/>
               </div>

               <div className='px-6 flex-[1] flex items-center'>
                  <div>
                     <h2 className='text-2xl font-black text-blue-700 py-1'>Co to za aplikacja?</h2>
                     <h2 className='text-xl font-bold'>{project.title}</h2>
                     <p className='py-10 md:text-lg font-semibold'>
                        {project.description}
                     </p>
                     <div className='border-b-[2px] mb-4 border-blue-700 w-full'></div>
                     <div className='md:flex md:gap-10 px-2'>
                        <h2 className='text-xl lg:text-2xl font-semibold text-slate-950 py-1'>Zobacz aplikację:</h2>
                        <div className='flex gap-6 max-md:pt-6'>
                           <a href={project.linkGitHub} target='_blank'>
                              <Button label="GitHub" />
                           </a>
                           {project.linkDemo && (
                              <a href={project.linkDemo} target='_blank'>
                                 <Button label="Demo" />
                              </a>
                           )}
                        </div>
                        <div className='flex gap-4'>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            {/* ---- FUNCTION PROJECT ----  */}

            <Heading label="Funkcje"/>

            <div className='py-10 md:py-20 text-neutral-900 grid md:grid-cols-3 gap-4 md:gap-8 px-4'>
               {project.paragraphs && project.paragraphs.map((el, index) => (
                  <div key={index} className='px-4 py-6 bg-slate-50 shadow-xl rounded-xl'>
                     <div className='rounded-xl overflow-hidden border border-slate-950'>
                        <img src={el.img}/>
                     </div>
                     <div className='flex items-center  border-b border-blue-700 p-4 gap-4'>
                        <el.icon className='text-2xl text-blue-700'/>
                        <h3 className='text-lg md:text-xl font-bold'>{el.title}</h3>
                     </div>
                     <p className='font-semibold pt-4 md:text-lg'>{el.text}</p>
                  </div>
               ))}
            </div>

            {project.responsive && (
               <div className='py-10 md:py-20 text-neutral-900 px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
                  <div>
                     <h2 className='fontHeader text-xl md:text-3xl border-l-[4px] pl-4 md:pl-6 border-blue-700 mb-10'>Rosponsive</h2>
                     <img className="mx-auto " src={responsiveImg}/>
                     <p className='md:text-lg font-semibold py-4'>Aplikacja został zaprojektowana i zbudowany z myślą o różnych rozmiarach ekranów. Co sprawia że dostowywuję się do wszystkich urządzeń i zapewnia swobodną odsługę.</p>
                  </div>
                  {project.responsiveImg.map((el, index) => (
                     <div className='mx-auto' key={index}>
                        <img src={el}/>
                     </div>
                  ))}
               </div>
            )}

         </div>
      </div>
   )
}

export default ProjectPage