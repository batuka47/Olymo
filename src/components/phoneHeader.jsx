import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function PhoneHeader({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();
  const t = [
    { name: "Онцлох", path: "/", icon: "/home.svg", activeIcon:"/activeHome.svg" },
    { name: "Боловсрол", path: "/education", icon:"/education.svg", activeIcon:"/activeEducation.svg" },
    { name: "Олимпиад", path: "/olympiad", icon:"/olympiad.svg", activeIcon:"/activeOlympiad.svg" },
    { name: "Дэлхийд", path: "/world", icon:"/world.svg", activeIcon:"/activeWorld.svg" },  
    { name: "Спорт", path: "/sports", icon:"/sports.svg", activeIcon:"/activeSports.svg" },
    { name: "Технологи", path: "/technology", icon:"/technology.svg", activeIcon:"/activeTechnology.svg" },
    { name: "Шинжлэх ухаан", path: "/science", icon:"/science.svg", activeIcon:"/activeScience.svg" },
    { name: "Эвентүүд", path: "/events", icon:"/events.svg", activeIcon:"/activeEvents.svg" },
    { name: "Бидний тухай", path: "/about", icon:"/aboutUs.svg", activeIcon:"/activeAboutUs.svg" },
  ];
  const navItems2 = [
    { name: "Түгээмэл асуултууд", path: "/faq", icon: "/FAQ.svg", activeIcon:"/activeFAQ.svg" },
    { name: "Сурталчилгаа байршуулах", path: "/submit", icon:"/surtchilgaa.svg", activeIcon:"/activeSurtchilgaa.svg" },
    { name: "Хамтарч ажиллах", path: "/hamtrah", icon:"/hamtrah.svg", activeIcon:"/activeHamtrah.svg" },
    { name: "Редакцийн ёс зүй", path: "/editor", icon:"/redakts.svg", activeIcon:"/activeRedakts.svg" },  
    { name: "Нууцлалын бодлого", path: "/privacy", icon:"/nuuts.svg", activeIcon:"/activeNuuts.svg" },
    { name: "Холбоо барих", path: "/contact", icon:"/call.svg", activeIcon:"/activeCall.svg" },
  ];

  return (
    <>
      <div className='flex justify-center items-center w-full h-20 sm:hidden mulish'>
        <div className={`h-10 w-9/10 rounded-xl flex-row items-center justify-between flex px-6 z-10 bg-gradient-to-r from-0% from-[#1E3083] to-100% to-[#7209B7]`}>
          <img 
            src="/menu.svg" 
            alt="menu" 
            className='scale-150 cursor-pointer' 
            onClick={() => setIsSidebarOpen(true)}
          />
          <Link to={'/'} className="">
            <img src="/fullLogoWhite.svg" alt="logo" className='h-12 scale-50' />
          </Link>
          <img src="/searchWhite.svg" alt="search" className='scale-75'/>
        </div>
      </div>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-3/4 bg-white z-50 shadow-lg overflow-y-auto"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <img src="/fullLogo.svg" alt="logo" className='h-8' />
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Main Navigation */}
                <div className="mb-6">
                  <h2 className="text-sm font-semibold text-black mb-3 px-2">Үндсэн</h2>
                  <nav className="flex flex-col space-y-2">
                    {t.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center px-2 py-2 rounded-md transition-colors duration-200 ${
                          location.pathname === item.path 
                            ? 'bg-[#5E30D0]/[0.16] text-[#5E30D0]' 
                            : 'text-[#171717] hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setIsSidebarOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img 
                          src={location.pathname === item.path ? item.activeIcon : item.icon} 
                          alt={item.name} 
                          className="mr-3"
                        />
                        <span className='font-semibold'>{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Secondary Navigation */}
                <div>
                  <h2 className="text-sm font-semibold text-black mb-3 px-2">Бусад</h2>
                  <nav className="flex flex-col space-y-2">
                    {navItems2.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center px-2 py-2 rounded-md transition-colors duration-200 ${
                          location.pathname === item.path 
                            ? 'bg-[#5E30D0]/[0.16] text-[#5E30D0]' 
                            : 'text-[#171717] hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setIsSidebarOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img 
                          src={location.pathname === item.path ? item.activeIcon : item.icon} 
                          alt={item.name} 
                          className="mr-3"
                        />
                        <span className='font-semibold'>{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default PhoneHeader