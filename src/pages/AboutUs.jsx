import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const MAX_VISIBILITY = 3;

const Card = ({ title, content, isActive, image }) => (
  <div 
    className={`w-[90vw] h-[60vw] max-w-[35rem] max-h-[25rem] p-4 rounded-2xl flex flex-col justify-end items-start text-white shadow-xl transition-all duration-300 relative`}
    style={{
      backgroundImage: `url('${image}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: isActive ? 'none' : 'blur(2px)'
    }}
  >
    {!isActive && (
      <div className="absolute inset-0 bg-black/70 rounded-2xl" />
    )}
    <div className="relative z-10">
      <h2 className="text-2xl sm:text-3xl 2xl:text-5xl   font-bold mb-4">{title}</h2>
      <p className="text-sm sm:text-lg leading-relaxed">{content}</p>
    </div>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className="relative w-[90vw] h-[60vw] max-w-[35rem] max-h-[25rem] perspective-500 transform-style-3d">
      {active > 0 && (
        <button
          className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 text-white text-2xl  sm:text-5xl z-50 cursor-pointer select-none bg-transparent border-none"
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => {
        const isVisible = Math.abs(active - i) < MAX_VISIBILITY;
        const isActive = i === active;
        
        return (
          <div
            className="absolute w-full h-full transition-all duration-300 ease-out"
            style={{
              '--active': isActive ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              transform: `
                rotateY(calc(var(--offset) * 50deg))
                scaleY(calc(1 + var(--abs-offset) * -0.4))
                translateZ(calc(var(--abs-offset) * -30rem))
                translateX(calc(var(--direction) * -5rem))
              `,
              pointerEvents: isActive ? 'auto' : 'none',
              display: isVisible ? 'block' : 'none',
              zIndex: isActive ? 30 : 20 - Math.abs(active - i)
            }}
          >
            {React.cloneElement(child, { isActive })}
          </div>
        );
      })}
      {active < count - 1 && (
        <button
          className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 text-white text-2xl sm:text-5xl z-50 cursor-pointer select-none bg-transparent border-none"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const AboutUs = () => {
  const aboutCards = [
    {
      title: "Одоо",
      content: "Вебсайт хэлбэрээр хэрэглэгчдийн дунд тархах, олимпиадын тухай бүхий л мэдээ мэдээллүүдийг агуулсан итгэлт сайт болох.",
      image: "/slide1.jpg"
    },
    {
      title: "Жилийн дараа",
      content: "Хэрэглэгчид өөрсдийн бүртгэлээ үүсгэж, өөрсдийн нэр дор олимпиадууд оруулах. Аппликэйшн маягаар нэвтрэх.",
      image: "/slide2.jpg"
    },
    {
      title: "Ирээдүйд",
      content: "Вебсайт болон аппликейшн хэлбэрээр үйл ажиллагаагаа өргөжүүлж, гадаад дотоодын байгууллагуудтай хамтарч ажиллах.",
      image: "/slide3.jpg"
    }
  ];
  const nameCards = [
    {
      title: "Л. Сарангэрэл",
      content: "Санаачлагч",
      image: "/saraa.jpg"
    },
    {
      title: "Б. Бат-Эрдэнэ",
      content: "Front-End хөгжүүлэгч",
      image: "/batuka.jpg"
    },
    {
      title: "Э.Эмматөгөлдөр",
      content: "Медиа, Контент координатор",
      image: "/emma.jpg"
    },
    {
      title: "Х. Төгөлдөр",
      content: "Back-End хөгжүүлэгч",
      image: "/tuguu.jpg"
    },
    {
      title: "Б. Бат-Энх",
      content: "UI/UX Дизайнер",
      image: "/batenh.jpg"
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4">
      <div className="w-full flex flex-col items-center justify-center max-w-7xl">
        <h1 className="sm:text-4xl text-2xl yeseva font-bold mb-4 sm:mt-32">Бидний Тухай</h1>
        <p className="sm:text-lg text-sm mb-8 text-center sm:w-2/3 w-full">Таны боловсролын мэдээний шинэ шийдлийн 
        платформыг үндэслэгчид бөгөөд гүйцэтгэгчдийн хамт олон.</p>
        <h1 className="sm:text-4xl text-2xl yeseva font-bold mb-4 mt-8">Үндэслэл</h1>
        <div className="app">
          <Carousel>
            {aboutCards.map((card, i) => (
              <Card key={i} title={card.title} content={card.content} image={card.image} />
            ))}
          </Carousel>
        </div>
        <div className="mt-16">
          <div className="flex flex-row items-end gap-8 mb-8">
            <img src="/left.svg" alt="left" className="w-1/2 sm:-ml-5 -mb-10" />
            <div className="w-1/2 flex flex-col items-center">
              <h1 className=" yeseva text-lg font-bold mb-4 text-center">Our Vision</h1>
              <p className="sm:text-base text-[10px] text-center sm:w-1/2">Боловсролтой холбогдолтой бүхий л гадаад дотоодын мэдээ мэдээллийг хэрэглэгчиддээ олгох. Хамгийн өргөн хэрэглээний сайт болох хараатай.</p>
            </div>
          </div>
          <div className="flex flex-row items-end gap-8">
            <div className="w-1/2 flex flex-col items-center">
              <h1 className="yeseva text-lg font-bold mb-4 text-center">Our Mission</h1>
              <p className="sm:text-base text-[10px] text-center sm:w-1/2">ЕБС төдийгүй, Их Сургуулиудын оюутан залуусын дунд зохиогдох уралдаан тэмцээн болон олимпиадуудын мэдээ мэдээллийн хомсдолыг арилгах; түргэн шуурхай, тодорхой байдлаар олимпиадын зарыг хүргэх.</p>
            </div>
            <img src="/rigth.svg" alt="rigth" className="w-1/2 sm:-mr-5 -mb-10" />
          </div>
        </div>
        <h1 className="sm:text-4xl text-2xl font-bold yeseva mt-16 mb-8">Манай хамт олон</h1>
        <div className='w-full flex-wrap flex justify-center'>
          {nameCards.map((card, i) => (
            <div key={i} className='sm:w-72 w-24 sm:mx-10 mx-4 my-4 text-center'>
              <img src={card.image} alt={card.title} className='sm:w-72 sm:h-72 w-24 h-24 object-cover  ' />
              <h2 className='font-bold yeseva sm:text-xl text-xs'>{card.title}</h2>
              <p className='sm:text-base text-[10px]'>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
