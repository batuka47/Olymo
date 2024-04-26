import {useState, useEffect} from 'react';
import'./style.css';
import Left from './left'
import Right from './right'
import { MdLibraryBooks } from "react-icons/md";

function News(props){
      const left = [
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
       <div className='BGcon'>
            <div className='left'>
                {
                  left.map((data)=>{
                    return <Left title={data.title} text={data.text} img={data.imgUrl}/>
                  })
                }
                <button>Цааш үзэх <MdLibraryBooks/></button>
            </div>
            <div className='right'>
                <Right/>
            </div>
        </div>
      )
  }
  
  export default News