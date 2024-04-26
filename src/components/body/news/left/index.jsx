import {useState, useEffect} from 'react';
import'./style.css'
import { MdLibraryBooks } from "react-icons/md";




function Left(props){
    return (
        <div className='bg_cont'>
            <div className='img'>
                <img src={props.img} alt="Logo"  width="100%"/>
            </div>
            <div className='text-con'>           
                    <h3>{props.title}</h3>
                    <p className='text'>{props.text}</p>
            </div>
            
        </div>
    )
}

export default Left