import { Link } from 'react-router-dom'
import { useState } from 'react'

function Card(props) {
  return (
    <div key={props.id} className="mulish h-28 sm:h-auto default-black-text sm:w-[260px] w-full flex flex-col items-center justify-center">
        <Link to={props.path} onClick={() => window.scrollTo(0, 0)} className='flex p-2 sm:p-0 h-full flex-row sm:border-0 sm:flex-col border-y-[1px] border-gray-200'>
          <img src={props.img} alt={props.title} className='w-24 object-cover h-24 sm:h-auto sm:w-full rounded-xl sm:rounded-none'/>
          <div className='flex flex-col justify-between px-4 sm:px-0'>
            <h1 className='font-semibold text-sm sm:text-lg sm:mt-2'>{props.title}</h1>
            <p className='font-thin text-sm/tight my-2 hidden sm:block'>{props.description}</p>
            <div className='flex flex-row justify-between'>
              <p className=' text-sm sm:text-md'>By {props.author}</p>
              <p className=' text-sm sm:text-md block sm:hidden'>{props.date}</p>
            </div>
          </div>
        </Link>
    </div>
  )
}
export default Card