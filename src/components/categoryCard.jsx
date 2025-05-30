import { Link } from 'react-router-dom'
import { useState } from 'react'

function CategoryCard(props) {
  return (
    <div key={props.id} className="mulish h-[60px] md:h-[100px] default-black-text sm:w-[25vw] w-9/10 ">
        <Link to={props.path} className='flex flex-row items-center justify-center w-full' onClick={() => window.scrollTo(0, 0)}>
        <div className='w-8/12 flex flex-col h-full'>
            <p className='font-semibold default-purple-text uppercase yeseva'>{props.category}</p>
            <h1 className='font-semibold text-[12px]/[10px] 2xl:text-lg'>{props.title}</h1>
            <p className='font-semibold'>By {props.author}</p>
        </div>
        <div className='w-3/12 flex justify-center items-center'>
            <img src={props.img} alt={props.title} className='w-[60px] h-[60px] 2xl:h-[100px] 2xl:w-[100px] object-cover rounded-sm'/>
        </div>
        </Link>
    </div>
  )
}
export default CategoryCard