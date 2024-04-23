import {useState, useEffect} from 'react';
import'./style.css'






function Ontsloh(props){
    return (
        <div className='bg_cont'>
            <div className='text'>
                    <button className='btn1'>{props.button1}</button>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <button className='btn2'>{props.button2}</button>
            </div>
            <div className='img'>
                <img src={props.imgUrl} alt=""  width="400px"/>
            </div>
        </div>
    )
}

export default Ontsloh