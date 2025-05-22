import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../Data';

function EventTemplate() {
  const { mainCategory, name } = useParams(); // Extract route parameters

  // Find the event item that matches the mainCategory and name
  const eventItem = events.find(item => item.mainCategory.includes(mainCategory) && item.path === name);

  return (
    <div className="min-h-screen sm:mt-32 mulish flex flex-col items-center justify-center">
      {eventItem ? (
        <div className="w-full max-w-2xl p-4 flex flex-col items-center justify-center">
          <h2 className="sm:text-2xl text-lg mb-3 font-extrabold default-purple-text w-2/3 yeseva text-center">{eventItem.title}</h2>
          <div>
          <p className='underline font-bold'>{eventItem.author}</p>
          <p className='text-sm'>{eventItem.date}</p>
          </div>
          <img src={eventItem.img1} alt={eventItem.title} className="mt-10 mb-5 w-full rounded-2xl h-auto" />
          <div className='flex flex-col gap-2 w-full'>
            <div className='rounded-3xl w-fit capitalize font-semibold bg-gray-200 px-2 py-1 text-sm'>{eventItem.mainCategory}</div>
            <p className='capitalize text-sm flex flex-row gap-2'> <img src="/organizer.svg" alt="organizer" className='w-5 h-5' />{eventItem.organizer}</p>
            <p className='capitalize text-sm flex flex-row gap-2'> <img src="/calendar.svg" alt="calendar" className='w-5 h-5' />{eventItem.time}</p>
            <p className='capitalize text-sm flex flex-row gap-2'> <img src="/location.svg" alt="location" className='w-5 h-5' />{eventItem.location}</p>
            <p className='capitalize text-sm flex flex-row gap-2'> <img src="/ticket.svg" alt="ticket" className='w-5 h-5' />{eventItem.price}</p>
            <p className='capitalize text-sm flex flex-row gap-2'> <img src="/info.svg" alt="info" className='w-5 h-5' />{eventItem.contact}</p>
          </div>
          <p className='text-gray-500 mt-5'>{eventItem.description}</p>
          {eventItem.img2 && (
            <img src={eventItem.img2} alt={eventItem.title} className="my-10 w-full rounded-2xl h-auto" />
          )}
          {eventItem.description2 && (
            <p className='text-gray-500 mb-32'>{eventItem.description2}</p>
          )}
        </div>
      ) : (
        <p>Event not found.</p>
      )}
    </div>
  );
}

export default EventTemplate;
