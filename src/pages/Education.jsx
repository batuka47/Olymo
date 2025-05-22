import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Card from '../components/card';
import BigBanner from '../components/bigBanner';
import Advertisement from '../components/advertisement';
import CategoryCard from '../components/categoryCard';
import DailyCartoon from '../components/dailyCartoon';
import {news, dailyCartoon, advertisement} from '../Data'
import { motion } from 'framer-motion'

function Education() {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const itemsPerPage = 8;
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

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
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };
    window.addEventListener('mouseup', handleMouseUpGlobal);
    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault(); // prevent image drag
    setIsDragging(true);
    startX.current = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft.current = e.currentTarget.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // control scroll speed
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollToTop = (duration = 500) => {
    const start = window.scrollY;
    const target = 3100; // Target scroll position
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Calculate progress

        // Easing function (ease-in-out)
        const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        window.scrollTo(0, start + (target - start) * ease(progress)); // Scroll to the target position

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll); // Continue the animation
        }
    };

    requestAnimationFrame(animateScroll); // Start the animation
  };

  const totalPages = Math.ceil(news.filter(data => data.mainCategory === "education").length / itemsPerPage);

  return (
    <div className="min-h-screen sm:mt-32 mulish flex flex-col items-center justify-center">
      <motion.div 
      ref={navRef}
      className="left-0 w-full sm:hidden bg-white  border-y border-gray-200"
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
      <h1 className=" block sm:hidden font-bold text-2xl yeseva">Онцлох мэдээ</h1>
      <p className="block mb-8 sm:hidden font-light text-xl mulish">Боловсролын салбарын гол мэдээнүүд</p>
      {/* Big Banner */}
      {news.length > 0 && (
        (() => {
          // Filter for featured big banners
          const featuredBanners = news.filter(banner => banner.category.includes("feature") && banner.mainCategory == "education");
          // Shuffle the featured banners
          const shuffledBanners = featuredBanners.sort(() => Math.random() - 0.5);
          return shuffledBanners.length > 0 ? (
            <BigBanner
              key={shuffledBanners[0].id}
              id={shuffledBanners[0].id}
              img={shuffledBanners[0].img2}
              title={shuffledBanners[0].title}
              description={shuffledBanners[0].sDescription}
              path={`/${shuffledBanners[0].mainCategory}/${shuffledBanners[0].path}`}
              author={shuffledBanners[0].author}
              category={shuffledBanners[0].mainCategory}
              theme="dark"
            />
          ) : null;
        })()
      )}


      {/* Feature Education Section */}
      <h1 className="sm:mt-20 mt-8 hidden sm:block font-bold text-3xl yeseva">Онцлох мэдээ</h1>
      <p className="sm:mb-16 mb-6 hidden sm:block font-light text-xl mulish">Боловсролын салбарын гол мэдээнүүд</p>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onDragStart={(e) => e.preventDefault()}
        className={`w-full sm:overflow-x-auto scrollbar-hide px-4 sm:px-10 sm:${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      >
        <div className="flex sm:flex-row flex-col sm:gap-10 justify-start items-start sm:w-full sm:min-w-max">
          {news.filter((data) => data.mainCategory === "education" && data.category.includes("feature")).reverse().slice(0, windowWidth < 640 ? 6 : news.length).map((data) => (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.sDescription}
              img={data.img1}
              path={`/${data.mainCategory}/${data.path}`}
              author={data.author}
              date={data.date}
            />
          ))}
        </div>
      </div>
      

      {/* Advertisement */}
      {advertisement.length > 0 && (
        <Advertisement
          key={advertisement[0].id}
          id={advertisement[0].id}
          img={advertisement[0].img}
          link={advertisement[0].link}
        />
      )}


      {/* Big Banner */}
      {news.length > 1 && (
        (() => {
          // Filter for featured big banners
          const featuredBanners = news.filter(banner => banner.category.includes("feature") && banner.mainCategory == "education");
          // Shuffle the featured banners
          const shuffledBanners = featuredBanners.sort(() => Math.random() - 0.5);
          return shuffledBanners.length > 1 ? (
            <BigBanner
              key={shuffledBanners[1].id}
              id={shuffledBanners[1].id}
              img={shuffledBanners[1].img1}
              title={shuffledBanners[1].title}
              description={shuffledBanners[1].sDescription}
              path={`/${shuffledBanners[1].mainCategory}/${shuffledBanners[1].path}`}
              author={shuffledBanners[1].author}
              category={shuffledBanners[1].mainCategory}
              theme="ligth"
            />
          ) : null;
        })()
      )}

      {/* Meduushtei Section */}
      <h1 className="mt-20 mb-6 font-bold text-3xl yeseva hidden sm:block">Мэдүүштэй</h1>
      <div className="px-10 w-full flex-row  gap-10 justify-start items-start hidden sm:flex">
        {news.filter((data) => data.category.includes("meduushtei") && data.mainCategory === "education").reverse().slice(-4).map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.sDescription}
            img={data.img1}
            path={`/${data.mainCategory}/${data.path}`}
            author={data.author}
          />
        ))}
      </div>
      <div className='px-6 py-2 w-9/10 mt-10 mulish rounded-2xl sm:hidden block border-[1px] border-solid border-gray-300'>
        <h1 className='text-xl w-full mb-4 yeseva border-gray-200 pb-4 border-b-[1px]'>Мэдүүштэй</h1>
        {news.filter((data) => data.category.includes("meduushtei")).reverse().slice(0, 4).map((data) => (
          <div key={data.id} className='mb-4 last:mb-0 border-b-[1px] border-gray-200 pb-4 last:border-b-0'>
            <Link to={`/${data.mainCategory}/${data.path}`}>
              <p className='text-gray-800 mb-2'>{data.title}</p>
              <p className='text-sm text-gray-500'>{data.date}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Advertisement */}
      {advertisement.length > 1 && (
        <Advertisement
          key={advertisement[1].id}
          id={advertisement[1].id}
          img={advertisement[1].img}
          link={advertisement[1].link}
        />
      )}



      {/* Category Card */}
      <div className="sm:px-10 sm:py-30 w-full py-10 flex flex-col sm:flex-row justify-around gap-5 items-center">
        {['sport', 'technology', 'science', 'events'].map(category => {
          const lastNews = news
            .filter(data => data.mainCategory==(category))
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date
            .slice(0, 1); // Get the most recent item

          return lastNews.length > 0 ? (
            <CategoryCard
              key={lastNews[0].id}
              id={lastNews[0].id}
              title={lastNews[0].title}
              category={lastNews[0].mainCategory}
              img={lastNews[0].img1} // Adjust the image property as necessary
              path={`/${lastNews[0].mainCategory}/${lastNews[0].path}`}
              author={lastNews[0].author}
            />
          ) : null;
        })}
      </div>

      {/* All Section */}
      <h1 className="sm:mt-20 mt-8 mb-6 sm:mb-16 font-bold text-2xl sm:text-3xl yeseva">Бүх мэдээ</h1>
      <div className="sm:px-10 px-4 flex-wrap w-full flex flex-row sm:gap-10  justify-start items-start">
        {news.filter((data) => data.mainCategory === "education")
            .slice(currentPage * (windowWidth < 640 ? 4 : itemsPerPage), (currentPage + 1) * (windowWidth < 640 ? 4 : itemsPerPage))
            .reverse()
            .map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.sDescription}
            img={data.img1}
            path={`/${data.mainCategory}/${data.path}`}
            author={data.author}
            date={data.date}
          />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center gap-5 w-full px-10 mt-4 mb-10">
        <button
          className="rounded-full px-4 py-2"
          onClick={() => { 
            setCurrentPage(prev => Math.max(prev - 1, 0)); 
            scrollToTop(); // Scroll to top on page change
          }}
          disabled={currentPage === 0}
        >
          <img src="/arrowD.svg" alt="Previous" className='rotate-90' />
        </button>
        {currentPage > 1 && (
          <div className="rounded-full px-4 py-2 hover:bg-gray-200">...</div>
        )}
        {currentPage > totalPages - 1 && (
          <div className="rounded-full px-4 py-2">{currentPage - 1}</div>
        )}
        {currentPage > 0 && (
          <div className="rounded-full px-4 py-2">{currentPage}</div>
        )}
        <div className="rounded-full bg-gray-300 px-4 py-2">{currentPage + 1}</div>
        {currentPage < totalPages - 1 && (
          <div className="rounded-full px-4 py-2">{currentPage + 2}</div>
        )}
        {currentPage < 1 && (
          <div className="rounded-full px-4 py-2">{currentPage + 3}</div>
        )}
        {currentPage < totalPages - 2 && (
          <div className="rounded-full px-4 py-2">...</div>
        )}
        <button
          className="rounded-full px-4 py-2"
          onClick={() => { 
            setCurrentPage(prev => Math.min(prev + 1, totalPages - 1)); 
            scrollToTop(); // Scroll to top on page change
          }}
          disabled={currentPage >= totalPages}
        >
          <img src="/arrowD.svg" alt="next" className='-rotate-90' />
        </button>
      </div>
     
      {/* Daily Cartoon */}
      {dailyCartoon.map((data) => (
        <DailyCartoon 
          key={data.id}
          img={data.img}
        />
      ))}

      {/* Advertisement */}
      {advertisement.length > 3 && (
        <Advertisement
          key={advertisement[3].id}
          id={advertisement[3].id}
          img={advertisement[3].img}
          link={advertisement[3].link}
        />
      )}
    </div>
  );
}

export default Education;
