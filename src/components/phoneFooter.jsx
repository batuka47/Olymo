import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function PhoneFooter() {
  return (
    <div className='bg-[#121212] h-auto pt-10 sm:hidden block default-white-text'>
      <div className='flex-col flex text-sm gap-2 font-thin pb-5 items-center justify-center w-full border-b-[0.5px] border-solid border-white'>
          <Link to="/about">Бидний тухай</Link>
          <Link to="/faq">Түгээмэл асуултууд</Link>
          <Link to="/submit">Сурталчилгаа байршуулах</Link>
          <Link to="/redakts">Редакцийн ёс зүй</Link>
          <Link to="/privacy">Нууцлалын бодлого</Link>
          <Link to="/contact">Холбоо барих</Link>
          <Link to="/merch">Merch</Link>
      </div>
      <div className='flex flex-row justify-center gap-14 w-full items-center py-4'>
        <img src="/fb.svg" alt="fb" className='scale-125' />
        <img src="/insta.svg" alt="insta" className='scale-125'/>
        <img src="/email.svg" alt="email" className='scale-125'/>
      </div>
      <div className='flex flex-row gap-2 text-small items-center w-full justify-center py-5'>
        <img src="/copyright.svg" alt="copyright" className='scale-75'/>
        <p className='text-[#dadada]'>{new Date().getFullYear()} Олимо ХХК</p>
      </div>
    </div>
  )
}

export default PhoneFooter