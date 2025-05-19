import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Footer() {
  return (
    <div className='bg-[#121212] sm:block hidden default-white-text pt-20 px-40'>
      <div className='flex-row flex gap-40 items-center justify-center pb-16 border-b-[0.5px] border-solid border-white'>
        <img src="/fullLogoWhite.svg" alt="logo" className='w-1/4' />
        <div className='w-3/4 flex flex-col'>
          <h1 className='text-xl font-bold yeseva mb-3'>Ангилал</h1>
          <div className='w-full flex flex-row gap-20'>
            <div className='flex flex-col font-thin gap-1 text-sm'>
              <Link>Онцлох</Link>
              <Link>Боловсрол</Link>
            </div>
            <div className='flex flex-col font-thin gap-1 text-sm'>
              <Link>Олимпиад</Link>
              <Link>Дэлхийд</Link>
            </div>
            <div className='flex flex-col font-thin gap-1 text-sm'>
              <Link>Спорт</Link>
              <Link>Технологи</Link>
            </div>
            <div className='flex flex-col font-thin gap-1 text-sm'>
              <Link>Эвентүүд</Link>
              <Link>Шинжлэх ухаан</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-row flex gap-40 px-16 items-center justify-between pt-8 pb-8 border-b-[0.5px] border-solid border-white'>
        <div className='flex flex-col font-thin gap-1 text-sm'>
          <Link>Бидний тухай</Link>
          <Link>Түгээмэл асуултууд</Link>
        </div>
        <div className='flex flex-col font-thin gap-1 text-sm'>
          <Link>Сурталчилгаа байршуулах</Link>
          <Link>Редакцийн ёс зүй</Link>
        </div>
        <div className='flex flex-col font-thin gap-1 text-sm'>
          <Link>Нууцлалын бодлого</Link>
          <Link>Холбоо барих</Link>
        </div>
      </div>
      <div className='flex flex-row px-16 py-6 items-center gap-2'>
        <img src="/copyright.svg" alt="copyright" />
        <p>2024 Олимо ХХК</p>
        <div className='bg-white w-1 h-1 rounded-full'></div>
        <p>Бүх эрх хуулиар хамгаалагдсан</p>
      </div>
    </div>
  )
}

export default Footer