import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../components/card';
import BigBanner from '../components/bigBanner';
import Advertisement from '../components/advertisement';
import CategoryCard from '../components/categoryCard';
import DailyCartoon from '../components/dailyCartoon';
import {news, dailyCartoon, advertisement} from '../Data'
import { motion } from 'framer-motion'

function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const containerRef = useRef(null);
  const navRef = useRef(null);
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

  
  
  return (
    <div className="min-h-screen w-full mulish flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="bg-[url('/welcome.svg')] bg-cover h-[230px] bg-center sm:h-screen w-full px-10">
        <h1 className="default-white-text sm:-mt-14 -mt-4 sm:text-5xl text-2xl  yeseva w-3/4 h-full flex justify-center items-center">
          Таны боловсролын <br /> мэдээллийн шинэ <br /> шийдэл
        </h1>
      </div>
      <motion.div 
      ref={navRef}
      className="left-0 w-full sm:hidden bg-white mt-4 border-y border-gray-200"
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


      {/* Feature News Section */}
      <h1 className="sm:mt-40 mt-6 sm:mb-16 mb-6 text-2xl font-bold sm:text-3xl yeseva">Онцлох мэдээ</h1>
      <div className="sm:px-10 px-4 w-full flex sm:gap-10 sm:flex-row flex-col justify-start items-start">
        {news.filter((data) => data.category.includes("feature")).reverse().slice(-4).map((data) => (
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
      {news.length > 0 && (
        (() => {
          // Filter for featured big banners
          const featuredBanners = news.filter(banner => banner.category.includes("feature"));
          // Shuffle the featured banners
          const shuffledBanners = featuredBanners.sort(() => Math.random() - 0.5);
          return shuffledBanners.length > 0 ? (
            <BigBanner
              key={shuffledBanners[0].id}
              id={shuffledBanners[0].id}
              img={shuffledBanners[0].img1}
              title={shuffledBanners[0].title}
              description={shuffledBanners[0].sDescription}
              path={`/${shuffledBanners[0].mainCategory}/${shuffledBanners[0].path}`}
              author={shuffledBanners[0].author}
              category={shuffledBanners[0].mainCategory}
              date={shuffledBanners[0].date}
              theme="dark"
            />
          ) : null;
        })()
      )}

      {/* Olympiad Section */}
      <h1 className="sm:mt-20 mt-8 font-bold text-2xl sm:text-3xl yeseva">Олимпиад</h1>
      <p className="sm:mb-16 mb-6 font-light text-xl mulish">Салбаруудын гол олимпиадууд</p>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onDragStart={(e) => e.preventDefault()}
        className={`w-full sm:overflow-x-auto scrollbar-hide px-4 sm:px-10 sm:${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      >
        <div className="flex sm:flex-row flex-col sm:gap-10 justify-start items-start w-full sm:min-w-max">
          {news.filter((data) => data.category.includes("olympiad")).reverse().slice(0, window.innerWidth < 640 ? 6 : news.length).map((data) => (
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
      {advertisement.length > 1 && (
        <Advertisement
          key={advertisement[1].id}
          id={advertisement[1].id}
          img={advertisement[1].img}
          link={advertisement[1].link}
        />
      )}

      {/* Big Banner */}
      {news.length > 1 && (
        (() => {
          // Filter for featured big banners
          const featuredBanners = news.filter(banner => banner.category.includes("feature"));
          // Shuffle the featured banners
          const shuffledBanners = featuredBanners.sort(() => Math.random() - 0.5);
          return shuffledBanners.length > 0 ? (
            <BigBanner
              key={shuffledBanners[0].id}
              id={shuffledBanners[0].id}
              img={shuffledBanners[0].img1}
              title={shuffledBanners[0].title}
              description={shuffledBanners[0].sDescription}
              path={`/${shuffledBanners[0].mainCategory}/${shuffledBanners[0].path}`}
              author={shuffledBanners[0].author}
              category={shuffledBanners[0].mainCategory}
              theme="ligth"
            />
          ) : null;
        })()
      )}

      {/* Meduushtei Section */}
      <h1 className="mt-20 mb-6 font-bold text-3xl yeseva hidden sm:block">Мэдүүштэй</h1>
      <div className="px-10 w-full flex-row  gap-10 justify-start items-start hidden sm:flex">
        {news.filter((data) => data.category.includes("meduushtei")).reverse().slice(-4).map((data) => (
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
      <div className='px-6 py-2 w-9/10 mt-10 rounded-2xl sm:hidden block border-[1px] border-solid border-gray-300'>
        <h1 className='text-xl w-full mb-4 border-gray-200 pb-4 border-b-[1px]'>Мэдүүштэй</h1>
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
      {advertisement.length > 2 && (
        <Advertisement
          key={advertisement[2].id}
          id={advertisement[2].id}
          img={advertisement[2].img}
          link={advertisement[2].link}
        />
      )}

      {/* Big Banner */}
      {news.length > 2 && (
        (() => {
          // Filter for featured big banners
          const featuredBanners = news.filter(banner => banner.category.includes("feature"));
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

      {/* Daily cartoon */}
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

export default Home;
