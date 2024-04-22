import {useState, useEffect} from 'react';
import'./style.css'






function Ontsloh(props){
    return (
        <div className='bg_cont'>
            <div>
                <div>
                    <button>{props.button1}</button>
                </div>
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <button>{props.button2}</button>
                </div>
            </div>
            <div className='img'>
                <img src={props.imgUrl} alt=""  width="50%"/>
            </div>
        </div>
    )
}

export default Ontsloh