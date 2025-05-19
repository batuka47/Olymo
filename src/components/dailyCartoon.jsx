import { Link } from 'react-router-dom'
import { useState } from 'react'

function DailyCartoon(props) {
  return (
    <div key={props.id} className='sm:h-[550px] h-auto mulish pl-4 sm:px-10 w-full flex flex-row items-center justify-center'>
        <div className='w-1/2 h-full flex justify-center items-center'>
            <img src='./cartoon.svg' alt="cartoon" className='w-full h-full'/>
        </div>
        <div className='w-1/2 h-full flex justify-between flex-col items-end'>
            <h1 className='font-semibold w-full text-center text-sm sm:text-2xl default-black-text yeseva uppercase'>daily cartoon</h1>
            <img src={props.img} alt="daily cartoon" className='w-4/5 h-4/5'/>
        </div>
    </div>
  )
}
export default DailyCartoon