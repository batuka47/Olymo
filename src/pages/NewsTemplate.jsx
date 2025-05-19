import { useState, useRef, useEffect } from 'react';
import DailyCartoon from '../components/dailyCartoon';
import EventCard from '../components/eventCard';
import Advertisement from '../components/advertisement';
import { useParams } from 'react-router-dom';
import { news } from '../Data';

function NewsTemplate() {
  const { mainCategory, name } = useParams(); // Extract route parameters

  // Find the news item that matches the mainCategory and name
  const newsItem = news.find(item => item.mainCategory.includes(mainCategory) && item.path === name);

  return (
    <div className="min-h-screen mt-32 mulish flex flex-col items-center justify-center">
      {newsItem ? (
        <div className="w-full max-w-2xl p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-3 font-extrabold default-purple-text w-2/3 yeseva text-center">{newsItem.title}</h2>
          <div>
          <p className='underline font-bold'>{newsItem.author}</p>
          <p className='text-sm'>{newsItem.date}</p>
          </div>
          <img src={newsItem.img1} alt={newsItem.title} className="my-10 w-full rounded-2xl h-auto" />
          <p className='text-gray-500'>{newsItem.description}</p>
          <img src={newsItem.img2} alt={newsItem.title} className="my-10 w-full rounded-2xl h-auto" />
          <p className='text-gray-500'>{newsItem.description2}</p>
          <div className='flex flex-row mt-10 mb-20 gap-4'>
            <p className='default-purple-text font-extrabold'>Tags:</p>
            <div className='flex flex-row gap-2 flex-wrap'>
              {newsItem.category.map((cat, index) => (
                <div key={index} className="text-black py-1 px-2 rounded-4xl bg-gray-200">{cat}</div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>News item not found.</p>
      )}
    </div>
  );
}

export default NewsTemplate;
