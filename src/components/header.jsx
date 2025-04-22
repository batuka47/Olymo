import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function Header() {
  const navItems = [
    { name: "Онцлох", path: "/" },
    { name: "Боловсрол", path: "/education" },
    { name: "Олимпиад", path: "/olympics" },
    { name: "Дэлхийд", path: "/world" },
    { name: "Спорт", path: "/sports" },
    { name: "Технологи", path: "/technology" },
    { name: "Шинжлэх ухаан", path: "/science" },
    { name: "Эвентүүд", path: "/events" },
    { name: "Бидний тухай", path: "/about" },
  ];

  const location = useLocation();
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const tabRefs = useRef([]);
  const timeoutRef = useRef(null);
  const lastScrollY = useRef(0);
  const showTimerRef = useRef(null);

  useEffect(() => {
    const selectedIndex = navItems.findIndex(item => item.path === location.pathname);
    
    if (selectedIndex !== -1 && tabRefs.current[selectedIndex]) {
      setIndicatorWidth(tabRefs.current[selectedIndex].offsetWidth);
      setIndicatorPosition(tabRefs.current[selectedIndex].offsetLeft);
    } else if (location.pathname === "/" || location.pathname === "") {
      setIndicatorWidth(tabRefs.current[0]?.offsetWidth || 0);
      setIndicatorPosition(tabRefs.current[0]?.offsetLeft || 0);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (location.pathname === "/" || location.pathname === "") {
        if (window.scrollY > window.innerHeight) {
          if (!navVisible) {
            setNavVisible(true);
            if (showTimerRef.current) {
              clearTimeout(showTimerRef.current);
            }
            showTimerRef.current = setTimeout(() => {
              setNavVisible(true);
            }, 1000);
          }

          if (window.scrollY > lastScrollY.current) {
            if (showTimerRef.current) {
              clearTimeout(showTimerRef.current);
            }
            setNavVisible(false);
          } else {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setNavVisible(false);
            }, 3000);
          }
        } else {
          setNavVisible(false);
        }
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current);
      }
    };
  }, [location.pathname, navVisible]);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "") {
      setIndicatorWidth(tabRefs.current[0]?.offsetWidth || 0);
      setIndicatorPosition(tabRefs.current[0]?.offsetLeft || 0);
      setNavVisible(false);
    }
  }, []);

  const logoSrc = (location.pathname === "/" || location.pathname === "") && scrollY < window.innerHeight ? "/fullLogoWhite.svg" : "/fullLogo.svg";
  const searchIconSrc = (location.pathname === "/" || location.pathname === "") && scrollY < window.innerHeight ? "/searchWhite.svg" : "/search.svg";

  return (
    <motion.div
      className={`h-20 w-full fixed top-0 left-0 flex flex-col px-10 z-10 transition-transform duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-2/3 w-full flex flex-row relative items-center justify-end gap-5">
        <Link to={'/'} className="mx-auto">
            <img src={logoSrc} alt="logo" className='h-14' />
        </Link>
        <button className='default-purple w-24 h-7 absolute right-12 default-white-text flex justify-center items-center rounded-sm'>Нэвтрэх</button>
        <img src={searchIconSrc} alt="search" className='absolute right-0' />
      </div>
      <motion.nav
        className={`relative flex justify-center space-x-4 mt-2`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: navVisible ? 1 : 0, y: navVisible ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <div className="relative" key={index} ref={el => tabRefs.current[index] = el}>
            <Link
              to={item.path}
              className="text-gray-700 transition-all duration-300"
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
      </motion.nav>
    </motion.div>
  )
}

export default Header