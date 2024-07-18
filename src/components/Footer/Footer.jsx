import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex flex-col justify-end items-end relative bottom-[60px]'>
        <div className='flex'>
            <p className='text-primary mx-3 font-light text-sm'>Terms & conditions</p>
            <p className='text-primary mx-4 font-light text-sm'>Privacy</p>
        </div>
        <p className='text-primary my-1 mx-4 font-light text-sm'>Designed by  <span className='font-bold text-md'>Tappin</span></p>
    </div>
  )
}
