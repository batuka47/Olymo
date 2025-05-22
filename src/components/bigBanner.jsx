import { Link } from 'react-router-dom'
import { useState } from 'react'

function BigBanner(props) {
  // Determine the classes based on the theme
  const bgClass = props.theme === 'dark' ? 'bg-black' : 'bg-white';
  const textClass = props.theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div key={props.id} className='sm:h-[550px] mulish w-9/10 flex flex-col-reverse sm:flex-row items-center justify-center sm:border-0 border-y-[1px] border-gray-200'>
        <div className={`sm:w-1/2 w-full sm:${bgClass} h-full flex justify-center items-center`}>
            <Link to={props.path} className='w-full h-full flex flex-col sm:justify-center sm:items-center' onClick={() => window.scrollTo(0, 0)}>
                <h1 className={`font-semibold mt-2 sm:text-center capitalize hidden sm:block ${textClass}`}>{props.category}</h1>
                <h1 className={`font-bold sm:text-2xl text-xl w-full sm:w-auto yeseva mt-2 sm:text-center sm:${textClass}`}>{props.title}</h1>
                <p className={`font-thin w-full sm:w-2/3 text-sm my-2 sm:text-center sm:${textClass}`}>{props.description}</p>
                <p className={`font-semibold text-sm mb-2 sm:text-center hidden sm:block ${textClass}`}>By: {props.author}</p>
                <div className={`h-8 w-32 text-xs hidden sm:flex justify-center items-center rounded-4xl border-2 border-solid border-[#${props.border}]`}>Дэлгэрэнгүй үзэх</div>
                <div className='sm:hidden flex justify-between items-center'>
                <p className={`font-semibold text-sm mb-2 sm:text-center sm:${textClass}`}>By: {props.author}</p>   
                <p className={`font-semibold capitalize text-sm sm:text-center sm:${textClass}`}>{props.category}</p>
                </div>
            </Link>
        </div>
        <Link to={props.path} className='sm:w-1/2 w-full sm:h-full' onClick={() => window.scrollTo(0, 0)}>
            <div className='w-full sm:h-full'>
                <img src={props.img} alt={props.title} className='object-cover w-full h-[250px] sm:h-full'/>
            </div>
        </Link>
    </div>
  )
}
export default BigBanner