import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='w-full flex flex-col justify-end items-end relative bottom-[60px]'>
        <div className='flex'>
            <Link to="/terms" className='text-primary mx-3 font-light text-sm'>Terms & conditions</Link>
            <Link to="/privacy" className='text-primary mx-4 font-light text-sm'>Privacy</Link>
        </div>
        <p className='text-primary my-1 mx-4 font-light text-sm'>Designed by  <span className='font-bold text-md'>Tappin</span></p>
    </div>
  )
}
