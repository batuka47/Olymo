import { useState, useRef, useEffect } from 'react';
import Card from '../components/card';
import BigBanner from '../components/bigBanner';
import Advertisement from '../components/advertisement';
import CategoryCard from '../components/categoryCard';
import DailyCartoon from '../components/dailyCartoon';
import {news, dailyCartoon, advertisement} from '../Data'

function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

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
    <div className="min-h-screen mt-32 mulish flex flex-col items-center justify-center">

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
      <h1 className="mt-20 font-bold text-3xl yeseva">Олимпиад</h1>
      <p className="mb-16 font-light text-xl mulish">Салбаруудын гол олимпиадууд</p>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onDragStart={(e) => e.preventDefault()}
        className={`w-full overflow-x-auto scrollbar-hide px-10 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      >
        <div className="flex flex-row gap-10 justify-start items-start min-w-max">
          {news.filter((data) => data.mainCategory === "education" && data.category.includes("feature")).reverse().map((data) => (
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
      <h1 className="mt-20 mb-16 font-bold text-3xl yeseva">Мэдүүштэй</h1>
      <div className="px-10 w-full flex flex-row gap-10 justify-start items-start">
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
      <div className="px-10 py-30 w-full flex flex-row justify-around items-start">
        {['sport', 'technology', 'science', 'events'].map(category => {
          const lastNews = news
            .filter(data => data.category.includes(category))
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
      <h1 className="mt-20 mb-16 font-bold text-3xl yeseva">Бүх мэдээ</h1>
      <div className="px-10 flex-wrap w-full flex flex-row gap-10 justify-start items-start">
        {news.filter((data) => data.mainCategory === "education")
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
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
          />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center gap-5 w-full px-10 mt-4">
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

export default Home;
