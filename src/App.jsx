import { useState , useEffect} from 'react'
import './App.css'
import bigImg from  "./assets/image.png"
import Header from './components/Header/Header'
import Ontsloh from './components/body/Ontsloh'

function App() {

  const ontsloh = {
        title: "Олон улсын Математикийн олимпиад зарлагдлаа",
        button1: "Онцлох мэдээ",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labor et dolore magna aliqua.',
        button2:"Дэлгэрэнгүй үзэх",
        imgUrl: './assets/image.png'
  }


 
  return (
    <div className='body'>
      <div className='head-con'>
      <Header />
      </div>
      <div className='ontsloh-con'>
        <Ontsloh  title={ontsloh.title} button1={ontsloh.button1}  button2={ontsloh.button2} text={ontsloh.text} imgUrl={bigImg}/>
      </div>
      
    </div>
  )
}

export default App
