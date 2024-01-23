import React from 'react'

const Input = ({ type, onChange, name, value }) => {
   return (
      <input
         value={value}
         required
         name={name}
         type={type}
         onChange={onChange}
         className='border border-slate-300 text-base md:text-xl p-2 rounded-md'
      />
   )
}

export default Input