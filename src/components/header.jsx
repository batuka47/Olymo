import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function Header() {
  const navItems = [
    { name: "Онцлох", path: "/featured" },
    { name: "Боловсрол", path: "/education" },
    { name: "Олимпиад", path: "/olympics" },
    { name: "Дэлхийд", path: "/world" },
    { name: "Спорт", path: "/sports" },
    { name: "Технологи", path: "/technology" },
    { name: "Шинжлэх ухаан", path: "/science" },
    { name: "Эвентүүд", path: "/events" },
    { name: "Бидний тухай", path: "/about" },
    { name: "Түгээмэл асуултууд", path: "/faq" }
  ];

  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const tabRefs = useRef([]);
  const [scrollY, setScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    setSelectedTab(location.pathname);
  }, [location]);

  useEffect(() => {
    const selectedIndex = navItems.findIndex(item => item.path === selectedTab);
    if (tabRefs.current[selectedIndex]) {
      setIndicatorWidth(tabRefs.current[selectedIndex].offsetWidth);
      setIndicatorPosition(tabRefs.current[selectedIndex].offsetLeft);
    }
  }, [selectedTab]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Show the nav only if scrolled past 100vh
      setIsNavVisible(scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <motion.div
      className={`h-20 w-full fixed top-0 left-0 flex flex-col px-10 z-10 ${isNavVisible ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isNavVisible ? 1 : 0 }} // Fade in/out based on visibility
      transition={{ duration: 0.3 }}
    >
      <div className="h-2/3 w-full flex flex-row relative items-center justify-end gap-5">
        <Link to={'/'} className="mx-auto">
            <img src="/fullLogo.svg" alt="logo" className='h-14' />
        </Link>
        <button className='default-purple w-24 h-7 absolute right-12 default-white-text flex justify-center items-center rounded-sm'>Нэвтрэх</button>
        <img src="/search.svg" alt="search" className='absolute right-0' />
      </div>
      <nav className="relative flex justify-center space-x-4 mt-2">
        {navItems.map((item, index) => (
          <div className="relative" key={index} ref={el => tabRefs.current[index] = el}>
            <Link
              to={item.path}
              className={`text-gray-700 transition-all duration-300`}
              onClick={() => setSelectedTab(item.path)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.name}
            </Link>
          </div>
        ))}
        <motion.span
          className="absolute left-0 bottom-[-2px] h-[2px] bg-black"
          initial={{ width: 0, x: 0 }}
          animate={{ width: indicatorWidth, x: indicatorPosition }}
          transition={{ duration: 0.3, ease: "linear" }}
        />
      </nav>
    </motion.div>
  )
}

export default Header