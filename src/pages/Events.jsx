import { useState, useRef, useEffect } from 'react';
import DailyCartoon from '../components/dailyCartoon';
import EventCard from '../components/eventCard';
import Advertisement from '../components/advertisement';
import {dailyCartoon, advertisement, events} from '../Data'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Events() {
  const [selected, setSelected] = useState('featured');
  const navRef = useRef(null);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [users, setUsers] = useState([]);

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
  const FetchUsers = () => {
    fetch('http://localhost:8080/events/data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log("Received users data:", json);
        setUsers(json);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        // Set empty array to avoid undefined errors
        setUsers([]);
      });
  };
  
  useEffect(() => {
    FetchUsers();
  }, []);
   console.log(users)
   const events = users
  return (
    <div className="min-h-screen sm:mt-32 mulish flex flex-col items-center justify-center">
      <motion.div 
      ref={navRef}
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

        <h1 className=" mt-8 font-bold text-2xl sm:text-4xl yeseva">Эвентүүд</h1>

        <div className='w-full py-4 sm:px-24 px-6 flex flex-row gap-5'>
          
          <div 
            className={`w-24 h-7 ${selected === 'featured' ? 'default-black-bg default-white-text' : 'default-white-bg default-black-text'} drop-shadow text-lg cursor-pointer drop-shadow-gray-500  rounded-2xl text-center`}
            onClick={() => setSelected('featured')}
          >
            Онцлох
          </div>
          <div 
            className={`w-24 h-7 ${selected === 'all' ? 'default-black-bg default-white-text' : 'default-white-bg default-black-text'} drop-shadow text-lg cursor-pointer drop-shadow-gray-500 rounded-2xl text-center`}
            onClick={() => setSelected('all')}
          >
            Бүгд
          </div>
        </div>
        <div className="w-full flex flex-col px-4 items-center sm:gap-5">
        {events
          .filter(data => selected === 'all' || data.category.includes("feature"))
          .map((data) => (
            <EventCard
              key={data.id}
              id={data.id}
              mainCategory={data.mainCategory}
              author={data.author}
              location={data.location}
              title={data.title}
              date={data.date}
              description={data.sDescription}
              img={data.img1}
              path={`/events/${data.mainCategory}/${data.path}`}
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
        {/* Daily cartoon */}
      {dailyCartoon.map((data) => (
        <DailyCartoon 
          key={data.id}
          img={data.img}
        />
      ))}
      {/* Advertisement */}
      {advertisement.length > 0 && (
        <Advertisement
          key={advertisement[0].id}
          id={advertisement[0].id}
          img={advertisement[0].img}
          link={advertisement[0].link}
        />
      )}
    </div>
  );
}

export default Events;
