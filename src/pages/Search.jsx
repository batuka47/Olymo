<<<<<<< HEAD
function Search() {
  return(
<>
  <div>

  </div>
</>
)
}
=======
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../components/card';
import { news } from '../Data';
import { motion } from 'framer-motion';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
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
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Get search query from URL parameters
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = news.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.sDescription.toLowerCase().includes(query.toLowerCase()) ||
      item.mainCategory.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setCurrentPage(0); // Reset to first page when new search is performed
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      // Update URL with search query
      const newUrl = `/search?q=${encodeURIComponent(query)}`;
      window.history.pushState({}, '', newUrl);
      performSearch(query);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      // Update URL with search query
      const newUrl = `/search?q=${encodeURIComponent(query)}`;
      window.history.pushState({}, '', newUrl);
      performSearch(query);
    } else {
      setSearchResults([]);
    }
  };

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const scrollToTop = (duration = 500) => {
    const start = window.scrollY;
    const target = 0;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      window.scrollTo(0, start + (target - start) * ease(progress));
      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="min-h-screen sm:mt-32 mulish flex flex-col items-center justify-start">
      <motion.div 
        className="left-0 w-full sm:hidden bg-white border-y border-gray-200"
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

      {/* Search Section */}
      <div className="w-full px-4 sm:px-10 mt-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Хайлт хийх..."
              className="w-full px-6 py-4 text-lg border-2 border-black rounded-full focus:outline-none focus:border-[#1E3083] transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="w-full px-4 sm:px-10 mt-8">
          <h1 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold yeseva mb-10">
            Хайлтын үр дүн: {searchResults.length}
          </h1>
          
          {searchResults.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {searchResults
                  .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                  .map((item) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.sDescription}
                      img={item.img1}
                      path={`/${item.mainCategory}/${item.path}`}
                      author={item.author}
                      date={item.date}
                    />
                  ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-5 w-full mt-8 mb-10">
                  <button
                    className="rounded-full px-4 py-2"
                    onClick={() => {
                      setCurrentPage(prev => Math.max(prev - 1, 0));
                      scrollToTop();
                    }}
                    disabled={currentPage === 0}
                  >
                    <img src="/arrowD.svg" alt="Previous" className='rotate-90' />
                  </button>
                  
                  {currentPage > 1 && (
                    <div className="rounded-full px-4 py-2 hover:bg-gray-200">...</div>
                  )}
                  
                  {currentPage > 0 && (
                    <div 
                      className="rounded-full px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setCurrentPage(currentPage - 1);
                        scrollToTop();
                      }}
                    >
                      {currentPage}
                    </div>
                  )}
                  
                  <div className="rounded-full bg-gray-300 px-4 py-2">
                    {currentPage + 1}
                  </div>
                  
                  {currentPage < totalPages - 1 && (
                    <div 
                      className="rounded-full px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                        scrollToTop();
                      }}
                    >
                      {currentPage + 2}
                    </div>
                  )}
                  
                  {currentPage < totalPages - 2 && (
                    <div className="rounded-full px-4 py-2 hover:bg-gray-200">...</div>
                  )}
                  
                  <button
                    className="rounded-full px-4 py-2"
                    onClick={() => {
                      setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
                      scrollToTop();
                    }}
                    disabled={currentPage >= totalPages - 1}
                  >
                    <img src="/arrowD.svg" alt="Next" className='-rotate-90' />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl text-gray-600">Хайлтад тохирох мэдээлэл олдсонгүй.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

>>>>>>> b2310b8d435b8efc65ef9b7643fd39be9bba643b
export default Search;
