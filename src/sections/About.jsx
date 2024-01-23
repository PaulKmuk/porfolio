import React from 'react'
import 'aos/dist/aos.css';
import Button from '../components/Button';
import Heading from '../components/Heading';
import programer from "../img/programer.png"
import cv from "../files/pawel_kmuk.pdf"

const About = () => {

   return (
      <section id='o-mnie' className='bg-gradient-to-r from-slate-200 to-slate-300 w-full text-neutral-900 overflow-hidden'>
         <div className='max-w-[1200px] mx-auto py-10 md:py-20'>

            <Heading label="O mnie"/>

            <div className='py-10 md:py-20 text-neutral-900 md:flex'>

               <div className='flex justify-center items-center flex-[1]'>
                  <img src={programer}/>
               </div>

               <div className='px-6 flex-[1] flex items-center'>
                  <div>
                     <h2 className='text-2xl font-black text-blue-700 py-1'>Kim jestem?</h2>
                     <h2 className='text-xl font-bold'>Junior Frontend Developer</h2>
                     <p className='py-4 md:py-6 indent-10 font-medium'>
                        Nazywam się Paweł Kmuk, a moja pasja do programowania rozpoczęła się około 8 lat temu, gdy pisałem swoje pierwsze, proste programy okienkowe w Javie. Po długiej przerwie, wróciłem do programowania w styczniu 2023 roku. Moją naukę rozpocząłem od HTML, CSS, i JavaScript, a następnie technologie poszerzyłęm o React i Tailwind. Pomimo braku doświadczenia komercyjnego, potrafię tworzyć projekty w wyżej wymienionych technologiach, które udostępniam na GitHub i swoim portfolio.
                     </p>
                     <p className='py-4 md:py-6 indent-10 font-medium'>
                        Obecnie dalej skupiam się na rozwijaniu umiejętności frontendowych, ale planuję poszerzyć swoją wiedzę o backend. Zaczynam tworzyć proste aplikacje oparte na Node.js i bazie danych MySQL. Chcę dostosować swoją dalszą naukę do oczekiwań potencjalnego pracodawcy. Poszukuję swojej pierwszej pracy, zdając sobie sprawę, że może brakować mi doświadczenia komercyjnego. Jednakże jestem pełen determinacji i gotów na poszerzanie swoich umiejętności.
                     </p>
                     <div className='border-b-[2px] mb-4 border-blue-700 w-full'></div>
                     <div className='md:flex justify-between px-2'>
                        <div className='flex gap-4'>
                           <label className='font-bold'>Name:</label>
                           <p>Paweł Kmuk</p>
                        </div>
                        <div className='flex gap-4'>
                           <label className='font-bold'>Email:</label>
                           <p className='text-blue-700'>kmuk.pawel@gmail.com</p>
                        </div>
                     </div>
                     <div className='py-4'>
                        <a href={cv} download="pawel_kmuk.pdf">
                           <Button label="Download CV"/>
                        </a>
                     </div>
                  </div>
               </div>

            </div>

         </div>
      </section>
   )
}

export default About