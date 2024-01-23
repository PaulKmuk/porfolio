import React from 'react'
import { BsEnvelopeCheckFill, BsEnvelopeDashFill, BsXCircleFill } from "react-icons/bs";

const Modal = ({ errorSend, setShowModal }) => {
   return (
      <div className='fixed bg-blue-200 border-[2px] border-blue-700 bottom-[100px] right-2 md:right-[20px] z-50 flex items-center py-2 px-6 gap-6 rounded-md font-medium slide-in-right-fast'>
         <div className='text-4xl md:text-6xl text-blue-700 '>
            {errorSend ? (<BsEnvelopeDashFill />) : (<BsEnvelopeCheckFill />)}
            
         </div>
         <div className='text-xs md:text-sm'>
            {errorSend 
               ? (
                  <div>
                     <p>Wiadomość nie została wysłana.</p>
                     <p>Spróbuj ponownie później.</p>
                  </div>
               ) : (
                  <div>
                     <p>Twoja wiadomość została wysłana.</p>
                     <p>Odpowiem najszybciej jak to możliwe.</p>
                  </div>
               )}
         </div>
         <div onClick={() => setShowModal(false)} className='text-xl md:text-2xl text-blue-700 cursor-pointer'>
            <BsXCircleFill />
         </div>
      </div>
   )
}

export default Modal