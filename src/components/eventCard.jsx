import { Link } from 'react-router-dom'
import { useState } from 'react'

function EventCard(props) {
  return (
    <div key={props.id} className="mulish p-2 sm:p-5 sm:rounded-4xl border-b-2 sm:border-2 border-gray-200 h-36 sm:h-64 default-black-text w-full sm:w-[90%]">
      <Link to={props.path} className='w-full h-full flex flex-row sm:gap-10 gap-5'>
        <img src={props.img} alt={props.title} className='sm:h-full sm:w-1/4 w-32 h-32 object-cover rounded-3xl  '/>
        <div className='flex flex-col justify-between w-full sm:w-3/4'>
          <div>
            <div className='font-semibold bg-gray-200 text-black rounded-2xl w-24 sm:w-32 text-center h-6 capitalize my-2'>{props.mainCategory}</div>
            <h1 className='font-semibold sm:text-2xl mt-2'>{props.title}</h1>
            <p className='font-thin my-2 hidden sm:block'>{props.description}</p>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div>
              <p className=' text-sm'>By {props.author}</p>
              <p className='hidden sm:block text-sm'>{props.location}</p>
            </div>
            <p className='font-thin text-sm sm:block hidden '>{props.date}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default EventCard