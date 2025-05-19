import { Link, useLocation } from 'react-router-dom'

function PhoneHeader() {
  return (
    <div className='flex justify-center items-center w-full h-20 sm:hidden mulish '>
      <div className={`h-10 w-9/10 rounded-xl flex-row items-center justify-between flex  px-6 z-10 bg-gradient-to-r from-0% from-[#1E3083] to-100% to-[#7209B7]`}>
        <img src="/menu.svg" alt="search" className='scale-150'/>
          <Link to={'/'} className="">
              <img src="/fullLogoWhite.svg" alt="logo" className='h-12 scale-50' />
          </Link>
          <img src="/searchWhite.svg" alt="search" className='scale-75'/>
      </div>
    </div>
  )
}

export default PhoneHeader