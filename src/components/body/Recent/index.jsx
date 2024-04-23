import {useState, useEffect} from 'react';
import'./style.css'






function Recent(props){
    return (
        <div className='bg_cont'>
            <div className='img'>
                <img src={props.img} alt="Logo"  width="100%"/>
            </div>
            <div className='text'>           
                    <h3>{props.title}</h3>
                    <button className='btn1'>{props.button1}</button>
            </div>
        </div>
    )
}

export default Recent