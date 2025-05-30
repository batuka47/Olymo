import { Link } from 'react-router-dom'
import { useState } from 'react'

function Advertisement(props) {
  return (
    <div key={props.id} className="default-black-text sm:w-1/2 sm:my-20 my-10 w-9/10">
        <a href={props.link}>
        <img src={props.img} alt={props.title} className='w-full rounded-2xl h-[80px] 2xl:h-[120px] object-cover'/>
        </a>
    </div>
  )
}
export default Advertisement