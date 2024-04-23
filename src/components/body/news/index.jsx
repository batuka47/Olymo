import {useState, useEffect} from 'react';
import'./style.css';
import Left from './left'
import Right from './right'


function News(props){
      const recent = [
          {
            title: "Lorem ipsum Математикийн олимпиад зарлагдлаа",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
            imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
          },
          {
            title: "Lorem ipsum Математикийн олимпиад зарлагдлаа",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
            imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
          },
          {
            title: "Lorem ipsum Математикийн олимпиад зарлагдлаа",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
            imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
          },
          {
            title: "Lorem ipsum Математикийн олимпиад зарлагдлаа",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
            imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
          },
          {
            title: "Lorem ipsum Математикийн олимпиад зарлагдлаа",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
            imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
          },
          {
            title: "Lorem ipsum Математикийн олимпиад зарлагдлаа",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
            imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
          },
        ]
      return (
       <>
            <div className='recent-con'>
                {
                recent.map((data)=>{
                    return <Left title={data.title} button1={data.button1} img={data.imgUrl}/>
                })
                }
            </div>
            <div>
                <Right/>
            </div>
        </>
      )
  }
  
  export default News