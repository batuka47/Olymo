import { Link } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center">
      <div className="bg-[url('/welcome.svg')] bg-cover bg-center h-[100vh] w-full px-10">
        <div className="h-14 w-full flex flex-row relative items-center justify-end gap-5">
          <Link to={'/'} className="mx-auto">
              <img src="/fullLogoWhite.svg" alt="logo" className='h-14' />
          </Link>
          <button className='default-purple w-24 h-7 absolute right-12 default-white-text flex justify-center items-center rounded-sm'>Нэвтрэх</button>
          <img src="/searchWhite.svg" alt="search" className='absolute right-0' />
        </div>
        <h1 className="default-white-text -mt-14 text-5xl yeseva w-3/4 h-full flex justify-center items-center">Таны боловсролын <br /> мэдээллийн шинэ <br />шийдэл</h1>
      </div>
      <div className='h-[100000px]'>

      </div>
    </div>
  )
}

export default Home