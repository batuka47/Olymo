import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Footer() {
  return (
    <div className='bg-[#121212] sm:block hidden default-white-text pt-20 px-40'>
      <div className='flex-row flex gap-40 items-center justify-center pb-16 border-b-[0.5px] border-solid border-white'>
        <img src="/fullLogoWhite.svg" alt="logo" className='w-1/4' />
        <div className='w-3/4 flex flex-col'>
          <h1 className='text-xl 2xl:text-3xl font-bold yeseva mb-3'>Ангилал</h1>
          <div className='w-full text-sm 2xl:text-xl flex flex-row gap-20'>
            <div className='flex flex-col font-thin gap-1'>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Онцлох</Link>
              <Link to="/education" onClick={() => window.scrollTo(0, 0)}>Боловсрол</Link>
            </div>
            <div className='flex flex-col font-thin gap-1'>
              <Link to="/olympiad" onClick={() => window.scrollTo(0, 0)}>Олимпиад</Link>
              <Link to="/world" onClick={() => window.scrollTo(0, 0)}>Дэлхийд</Link>
            </div>
            <div className='flex flex-col font-thin gap-1'>
              <Link to="/sports" onClick={() => window.scrollTo(0, 0)}>Спорт</Link>
              <Link to="/technology" onClick={() => window.scrollTo(0, 0)}>Технологи</Link>
            </div>
            <div className='flex flex-col font-thin gap-1'>
              <Link to="/events" onClick={() => window.scrollTo(0, 0)}>Эвентүүд</Link>
              <Link to="/science" onClick={() => window.scrollTo(0, 0)}>Шинжлэх ухаан</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-row flex text-sm 2xl:text-xl gap-40 px-16 items-center justify-between pt-8 pb-8 border-b-[0.5px] border-solid border-white'>
        <div className='flex flex-col font-thin gap-1'>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)}>Бидний тухай</Link>
          <Link to="/faq" onClick={() => window.scrollTo(0, 0)}>Түгээмэл асуултууд</Link>
        </div>
        <div className='flex flex-col font-thin gap-1'>
          <Link to="/submit" onClick={() => window.scrollTo(0, 0)}>Сурталчилгаа байршуулах</Link>
          <Link to="/redakts" onClick={() => window.scrollTo(0, 0)}>Редакцийн ёс зүй</Link>
        </div>
        <div className='flex flex-col font-thin gap-1'>
          <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>Нууцлалын бодлого</Link>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Холбоо барих</Link>
        </div>
        <div className='flex flex-col font-thin gap-1'>
          <Link to="/merch" onClick={() => window.scrollTo(0, 0)}>Merch</Link>
        </div>
      </div>
      <div className='flex text-sm 2xl:text-lg flex-row px-16 py-6 items-center gap-2'>
        <img src="/copyright.svg" alt="copyright" />
        <p>{new Date().getFullYear()} Олимо ХХК</p>
        <div className='bg-white w-1 h-1 rounded-full'></div>
        <p>Бүх эрх хуулиар хамгаалагдсан</p>
      </div>
    </div>
  )
}

export default Footer