import { useState , useEffect} from 'react'
import './App.css'
import bigImg from  "./assets/image.png"
import Header from './components/Header/Header'
import Ontsloh from './components/body/Ontsloh'
import Recent from './components/body/Recent'
// import News from './components/body/news'


function App() {

  const ontsloh = {
        title: "Олон улсын Математикийн олимпиад зарлагдлаа",
        button1: "Онцлох мэдээ",
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labor et dolore magna aliqua.',
        button2:"Дэлгэрэнгүй үзэх"
  }
  const recent = [
    {
      title: "Lorem ipsum dolor sit amet, consecto  adipiscing elit, sed do eiusmod ",
      button1:"Дэлгэрэнгүй үзэх",
      imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
    },
    {
      title: "Lorem ipsum dolor sit amet, consecto  adipiscing elit, sed do eiusmod ",
      button1:"Дэлгэрэнгүй үзэх",
      imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
    },
    {
      title: "Lorem ipsum dolor sit amet, consecto  adipiscing elit, sed do eiusmod ",
      button1:"Дэлгэрэнгүй үзэх",
      imgUrl: 'https://www.indiantalent.org/uploads/files/International-Science-Olympiad-Logo.webp'
    }
  ]


 
  return (
    <div className='body'>
      <div className='head-con'>
      <Header />
      </div>
      <div className='ontsloh-con'>
        <Ontsloh  title={ontsloh.title} button1={ontsloh.button1}  button2={ontsloh.button2} text={ontsloh.text} imgUrl={bigImg}/>
      </div>
      <div className='recent-con'>
        {
          recent.map((data)=>{
            return <Recent title={data.title} button1={data.button1} img={data.imgUrl}/>
          })
        }
      </div>
    </div>
  )
}

export default App
