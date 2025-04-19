import React from 'react'

export default function CustomInput({label,type,value,onChange,...props}:any) {
  return (
    <div className='mb-3'>
        <label className='block mb-1 text-white'>{label}</label>
         <input {...props} type={type} value={value} onChange={onChange} className='w-full border  h-12 text-white px-2 focus:border-primary focus:outline-0' />
    </div>
  )
}
