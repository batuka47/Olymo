import { Link } from 'react-router-dom'
import { useState } from 'react'

function DailyCartoon(props) {
  return (
    <div key={props.id} className='md:h-[550px] 2xl:h-[800px] h-auto mulish px-4 sm:px-20 w-full flex flex-col sm:flex-row items-center justify-center'>
        <div className='sm:w-1/2 w-full h-full flex justify-center items-center'>
            <img src='./cartoon.svg' alt="cartoon" className='w-full h-full'/>
        </div>
        <Link to="/merch" onClick={() => window.scrollTo(0, 0)} className='sm:w-1/2 w-full h-full'>
        <div className='w-full flex h-full justify-between flex-col items-end'>
            <h1 className='font-semibold w-full text-center text-xl mb-10 sm:mb-0 2xl:text-4xl default-black-text yeseva uppercase'>our merch is available</h1>
            <img src="/merchBoth.png" alt="daily cartoon" className='sm:w-4/5 w-full '/>
            <div className='flex flex-row gap-2 justify-center items-center mt-4'>
              <p>Дэлгэрэнгүй үзэх</p>
              <img src="/arrowBlack.svg" alt="arrow" className='w-4 h-4' />
            </div>
        </div>
        </Link>
    </div>
  )
}
export default DailyCartoon