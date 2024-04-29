import {useState, useEffect} from 'react';
import'./style.css'






function Info(props){
    return (
        <div className='bg_cont'>
            <div className='title'>
                <h1 className='titletext'>Шинэлэг  хурдан тодорхой</h1>
            </div>
            <div className='text'>
                <div>
                <h3 className='tetxtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </h3>
                <p className='texttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore int amore ipsum dolor sit amet, consectetur adipiscing elit, sed consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore int amore ipsum et dolore int amore ipsum dolor sit amet, consectetur adipiscing elit, adipiscing elit, sed do eiusmod tempor incididunt ut labore umbre sat et dolore int amore.</p>
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2PRNEIIOi3h2emKqv-tW0W5mobBL2m9KEPwWau3COiA&s" alt="Logo"  width="100%"/>
                </div>
            </div>
            
        </div>
    )
}

export default Info