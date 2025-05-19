import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client';

function PhoneHeader() {
  const navItems = [
    { name: "Онцлох", path: "/" },
    { name: "Боловсрол", path: "/education" },
    { name: "Олимпиад", path: "/olympics" },
    { name: "Дэлхийд", path: "/world" },
    { name: "Спорт", path: "/sports" },
    { name: "Технологи", path: "/technology" },
    { name: "Шинжлэх ухаан", path: "/science" },
    { name: "Эвентүүд", path: "/events" },
    { name: "Бидний тухай", path: "/about" },
  ];


  return (
    <div className='flex justify-center items-center w-full h-28 sm:hidden mulish fixed'>
        <motion.div
        className={`h-20 w-9/10 rounded-2xl   pb-6 top-0 left-0 flex flex-col px-10 z-10 transition-transform duration-300 bg-gradient-to-r from-0% from-[#1E3083] to-100% to-[#7209B7]`}>
        <div className="h-2/3 mt-2 w-full flex flex-row relative items-center justify-end gap-5">
            <Link to={'/'} className="mx-auto">
                <img src="/fullLogoWhite.svg" alt="logo" className='h-12' />
            </Link>
            <img src="/searchWhite.svg" alt="search" className='absolute right-0' />
        </div>
        <motion.nav
            className={`w-full relative default-black-text flex overflow-x-auto scrollbar-hide justify-center space-x-4 mt-2`}>
            {navItems.map((item, index) => (
            <div className="relative" key={index} ref={el => tabRefs.current[index] = el}>
                <Link
                to={item.path}
                className="text-gray-700 transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
                >
                {item.name}
                </Link>
            </div>
            ))}
            <motion.span
            className="absolute left-0 bottom-[2px] h-[1.5px] bg-black"
            initial={{ width: 0, x: 0 }}
            animate={{ width: indicatorWidth, x: indicatorPosition }}
            transition={{ duration: 0.3, ease: "linear" }}
            />
        </motion.nav>
        </motion.div>
    </div>
  )
}

export default PhoneHeader