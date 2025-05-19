import { Link } from 'react-router-dom'
import { useState } from 'react'

function EventCard(props) {
  return (
    <div key={props.id} className="mulish p-5 rounded-4xl border-2 gap-10 border-gray-200 h-64 default-black-text w-[90%] flex flex-row">
        <img src={props.img} alt={props.title} className='h-full w-1/4 object-cover rounded-3xl  '/>
        <div className='flex flex-col justify-between w-1/2'>
          <div>
            <div className='font-semibold bg-gray-200 text-gray-600 rounded-2xl w-32 text-center h-6 capitalize my-2'>{props.mainCategory}</div>
            <h1 className='font-semibold text-2xl mt-2'>{props.title}</h1>
            <p className='font-thin my-2'>{props.description}</p>
          </div>
          <div className='flex flex-row justify-between items-end'>
            <div>
              <p className=' text-sm'>By {props.author}</p>
              <p className=' text-sm'>By {props.location}</p>
            </div>
            <p className='font-thin text-sm'>By {props.date}</p>
          </div>
        </div>
        <div className='w-1/4 flex flex-col items-center justify-center gap-4'>
        <Link to={props.path}>
          <div className='w-24 h-7 bg-black default-white-text rounded-2xl text-center'>
            Lorem
          </div>
        </Link>
        <Link to={props.path}>
          <div className='w-24 h-7 bg-gray-200 text-gray-500 rounded-2xl text-center'>
            Lorem
          </div>
        </Link>
        </div>
    </div>
  )
}
export default EventCard