import { Link } from 'react-router-dom'
import { useState } from 'react'

function Card(props) {
  return (
    <div className="w-full flex flex-col  items-center justify-center">
        <Link to={props.link}>
        <img src="/placeHolder.svg" alt={props.title} />
        <h1 className='default-black-text'>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.author}</p>
        </Link>
    </div>
  )
}
export default Card