import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Map from "../components/Map"
import Button from '../components/Button';
import Modal from '../components/Modal';
import Input from '../components/Input';
import axios from 'axios';

const Contact = () => {

   const [message, setMessage] = useState({
      name: "",
      email: "",
      title: "",
      text: "",
   })
   const [errorSend, setErrorSend] = useState(false)
   const [showModal, setShowModal] = useState(false)

   useEffect(() => {
      setTimeout(() => {
         setShowModal(false)
      }, 10000);
   },[showModal])

   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         await axios.post("https://formspree.io/f/xqkreaqj", message)
         setErrorSend(false)
         setMessage({
            name: "",
            email: "",
            title: "",
            text: "",
         })
      } catch (error) {
         console.log(error);
         setErrorSend(true)
      }
      setShowModal(true)
   }

   const handleChangeInputs = (e) => {
      setMessage(prev => ({ ...prev, [e.target.name]: e.target.value }))
   }
   


   return (
      <section id='kontakt' className='relative bg-gradient-to-r from-slate-200 to-slate-300 w-full text-neutral-900 overflow-hidden'>
         <div className='max-w-[1200px] mx-auto py-10 md:py-20'>

            <Heading label="Kontakt"/>

            <div className='p-6 md:p-10 md:py-20 flex flex-col md:flex-row gap-10 md:gap-10'>

               {/* ---- CONTACT INFO ----  */}

               <div className='border-y-[4px] bg-slate-100 border-blue-700 shadow-xl flex-[3] py-6'>

                  <div className='flex items-center p-2 md:p-4 gap-4'>
                     <div className='text-2xl md:text-4xl text-blue-700 bg-blue-200 rounded-full p-4'>
                        <FaLocationDot />
                     </div>
                     <div>
                        <p className='text-lg md:text-xl font-bold'>Adres:</p>
                        <p className='text-sm md:text-lg font-medium'>Rzeszów, woj. Podkarpackie</p>
                     </div>
                  </div>
                  <div className='flex items-center p-2 md:p-4 gap-4'>
                     <div className='text-2xl md:text-4xl text-blue-700 bg-blue-200 rounded-full p-4'>
                        <FaPhone />
                     </div>
                     <div>
                        <p className='text-lg md:text-xl font-bold'>Telefon:</p>
                        <a href="tel:508234256" className='text-sm md:text-lg font-medium'>508-234-256</a>
                     </div>
                  </div>
                  <div className='flex items-center p-2 md:p-4 gap-4'>
                     <div className='text-2xl md:text-4xl text-blue-700 bg-blue-200 rounded-full p-4'>
                        <MdEmail />
                     </div>
                     <div>
                        <p className='text-lg md:text-xl font-bold'>Email:</p>
                        <p className='text-sm md:text-lg font-medium flex'>kmuk.pawel@gmail.com</p>
                     </div>
                  </div>

                  <div className='p-4'>
                     <div className='h-[300px] bg-slate-600 overflow-hidden'>
                        <Map />
                     </div>
                  </div>

               </div>

               {/* ---- CONTACT FORM ----  */}

               <div className='max-h-[600px] border-y-[4px] bg-slate-100 border-blue-700 shadow-xl flex-[5] overflow-hidden py-5 md:py-10 px-4 md:px-6'>
                  <form onSubmit={(e) => handleSubmit(e)}>

                     <div className='flex flex-col md:flex-row pb-4 md:pb-6 gap-4 md:gap-4'>
                        <div className='flex flex-col gap-2 flex-[1]'>
                           <label className='font-medium'>
                              Imię:
                           </label>
                           <Input required value={message.name} onChange={(e) => handleChangeInputs(e)} name="name" type='text'/>
                        </div>
                        <div className='flex flex-col gap-2 flex-[1]'>
                           <label className='font-medium'>
                              Email:
                           </label>
                           <Input value={message.email} required onChange={(e) => handleChangeInputs(e)} name="email" type='email'/>
                        </div>
                     </div>

                     <div className='flex flex-col gap-2 pb-4 md:pb-6'>
                        <label className='font-medium'>Temat:</label>
                        <Input value={message.title} required onChange={(e) => handleChangeInputs(e)} name="title" type='text'/>
                     </div>
                     <div className='flex flex-col gap-2 pb-4 md:pb-6'>
                        <label className='font-medium'>Wiadomość:</label>
                        <textarea value={message.text} required onChange={(e) => handleChangeInputs(e)} name="text" className='border border-slate-300 text-base md:text-xl p-2 min-h-[200px] md:min-h-[300px] rounded-md' type='text'/>
                     </div>

                     <div className='w-full flex justify-center'>
                        <Button label='Wyślij wiadomość'/>
                     </div>
                     
                  </form>
               </div>

            </div>

         </div>
         {showModal && (<Modal setShowModal={setShowModal} errorSend={errorSend} />)}
      </section>
   )
}

export default Contact