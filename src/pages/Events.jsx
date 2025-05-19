import { useState, useRef, useEffect } from 'react';
import DailyCartoon from '../components/dailyCartoon';
import EventCard from '../components/eventCard';
import Advertisement from '../components/advertisement';
import {dailyCartoon, advertisement, events} from '../Data'

function Events() {
  const [selected, setSelected] = useState('featured');

  return (
    <div className="min-h-screen mt-32 mulish flex flex-col items-center justify-center">
        <h1 className='yeseva text-bold text-4xl text-center'>Lorem ipsum dolor sit amet</h1>
        <h1 className='yeseva text-bold text-4xl text-center'>Lorem ipsum</h1>
        <div className='w-full py-4 px-24 flex flex-row gap-5'>
          
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
        <div className="w-full flex flex-col items-center gap-5">
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
              description={data.description}
              img={data.img}
              path={`/events/${data.path}`}
            />
          ))}
      </div>
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
