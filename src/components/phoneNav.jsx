import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function PhoneNav({ isSidebarOpen }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isVisible, setIsVisible] = useState(true);
  const [topPosition, setTopPosition] = useState(0);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const isHomePage = location.pathname === "/" || location.pathname === "";

  const navItems = [
    { name: "Онцлох", path: "/" },
    { name: "Боловсрол", path: "/education" },
    { name: "Олимпиад", path: "/olympiad" },
    { name: "Дэлхийд", path: "/world" },
    { name: "Спорт", path: "/sports" },
    { name: "Технологи", path: "/technology" },
    { name: "Шинжлэх ухаан", path: "/science" },
    { name: "Эвентүүд", path: "/events" },
    { name: "Бидний тухай", path: "/about" },
  ];

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Don't handle scroll if sidebar is open
      if (isSidebarOpen) {
        setIsVisible(false);
        return;
      }

      const currentScrollY = window.scrollY;
      const maxScroll = isHomePage ? 230 : 0;
      const minScroll = 0;
      
      // For home page, don't show nav until 230px scroll
      if (isHomePage && currentScrollY < 300) {
        setTopPosition(-100); // Hide nav above viewport
        setIsVisible(false);
        return;
      }
      // For non-home pages, don't show nav until 100px scroll
      if (!isHomePage && currentScrollY < 80) {
        setTopPosition(-100); // Hide nav above viewport
        setIsVisible(false);
        return;
      }
      // Calculate new top position
      const newTop = Math.max(minScroll, maxScroll - currentScrollY);
      setTopPosition(newTop);
      
      // Handle visibility based on scroll position
      if (currentScrollY > (isHomePage ? 750 : 500)) {
        // After 750px, show/hide based on scroll direction
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else if (currentScrollY >= (isHomePage ? 230 : 50)) {
        // Between 230px/50px and 750px, always visible
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isSidebarOpen]);

  return (
    <motion.div 
      ref={navRef}
      className="fixed left-0 z-50 w-full sm:hidden bg-white shadow-lg border-t border-gray-200"
      style={{ top: `${topPosition}px` }}
      animate={{ y: isVisible && !isSidebarOpen ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex items-center px-2 py-2 overflow-x-auto scrollbar-hide whitespace-nowrap gap-2'>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col items-center px-2 py-1 hover:bg-gray-100 rounded-md transition-colors duration-200 ${
              activeTab === item.path 
                ? 'text-[#1E3083]' 
                : 'text-gray-600'
            }`}
            onClick={() => {
              setActiveTab(item.path);
              window.scrollTo(0, 0);
            }}
          >
            <span className='text-md font-semibold text-center whitespace-nowrap'>{item.name}</span>
            {activeTab === item.path && (
              <div className="h-0.5 w-full bg-[#1E3083] mt-1" />
            )}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default PhoneNav