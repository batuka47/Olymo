import {useState, useEffect} from 'react';
import'./style.css'
import { FaBook } from "react-icons/fa6";
import { FaRegSmileWink } from "react-icons/fa";
import { Fa1 } from "react-icons/fa6"
import { Fa2 } from "react-icons/fa6"
import { Fa3 } from "react-icons/fa6"


function Right(props){
    return (
        <div className='bg_cont'>
            <div className='con1'>
                <h2><FaBook/>Сонин сайхан </h2>
                <img src="https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp" alt="Logo"  width="100%"/>
                <h2><FaRegSmileWink/>Олимпиадын ертөнцөөр...</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PRNEIIOi3h2emKqv-tW0W5mobBL2m9KEPwWau3COiA&s" alt="Logo"  width="100%"/>
            </div>
            <div className='con2'>
                <div className='line1'>
                <p><Fa1 size="45px" color='blueviolet'/></p><p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiud tempor ut labore ih jampu</p>
                </div>
                <div className='line1'>
                <p><Fa2 size="45px" color='blueviolet'/></p><p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiud tempor ut labore ih jampu</p>
                </div>
                <div className='line1'>
                <p><Fa3 size="45px" color='blueviolet'/></p><p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiud tempor ut labore ih jampu</p>
                </div>
            </div>
        </div>
    )
}

export default Right