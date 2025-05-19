import { useState, useRef, useEffect } from 'react';
import Card from '../components/card';
import BigBanner from '../components/bigBanner';
import Advertisement from '../components/advertisement';
import CategoryCard from '../components/categoryCard';
import DailyCartoon from '../components/dailyCartoon';

function Technology() {
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const containerRef = useRef(null);

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

  const news = [
    { id: 1, path: "Lorem", category: "feature", title: "Lorem ipsum dolor sit amet, consecto adipiscing eli", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 2, path: "Lorem", category: "feature", title: "Lorem ipsum dolor sit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 3, path: "Lorem", category: "feature", title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 4, path: "Lorem", category: "feature", title: "Lorem ipsum dolor sit amet, consecto adipiscing eli", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 5, path: "Lorem", category: "olympiod", title: "Lorem ipsum dolor sit amet, consecto adipiscing eli", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 6, path: "Lorem", category: "olympiod", title: "Lorem ipsum dolor sit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 7, path: "Lorem", category: "olympiod", title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 8, path: "Lorem", category: "olympiod", title: "Lorem ipsum dolor sit amet, consecto adipiscing eli", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 9, path: "Lorem", category: "olympiod", title: "Lorem ipsum dolor sit amet, consecto adipiscing eli", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 10, path: "Lorem", category: "olympiod", title: "Lorem ipsum dolor sit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 11, path: "Lorem", category: "olympiod", title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/placeHolder.svg", author: "n.Someone" },
    { id: 12, path: "Lorem", category: "olympiod", title: "Lorem ipsum dolor sit amet, consecto adipiscing eli", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img: "/placeHolder.svg", author: "n.Someone" },
  ];

  const bigBanner = [
    {
      id: 1,
      path: "Lorem",
      category: "feature",
      title: "Lorem ipsum dolor sit amet, consecto adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      theme:"dark",
      img: "/placeHolder.svg",
      author: "B.batenkh"
    },
    {
      id: 2,
      path: "Lorem",
      category: "feature",
      title: "Lorem ipsum dolor sit amet, consecto adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      theme: "ligth",
      img: "/placeHolder.svg",
      author: "B.batenkh"
    },
    {
      id: 3,
      path: "Lorem",
      category: "feature",
      title: "Lorem ipsum dolor sit amet, consecto adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      theme:"dark",
      img: "/placeHolder.svg",
      author: "B.batenkh"
    },
  ];

  const advertisement = [
    {
      id: 1,
      link: "Lorem",
      img: "/advertisement.svg",
    },
    {
      id: 2,
      link: "Lorem",
      img: "/advertisement.svg",
    },
    {
      id: 3,
      link: "Lorem",
      img: "/advertisement.svg",
    },
    {
      id: 4,
      link: "Lorem",
      img: "/advertisement.svg",
    },
  ];
  const categoryCard = [
    {
      id: 1,
      category: "спорт",
      path:"Lorem",
      title:"Lorem ipsum dolor sit amet consectetur dilicit",
      author:"n.Someone",
      img: "/placeHolder.svg",
    },
    {
      id: 2,
      category: "технологи",
      path:"Lorem",
      title:"Lorem ipsum dolor sit amet consectetur dilicit",
      author:"n.Someone",
      img: "/placeHolder.svg",
    },
    {
      id: 3,
      category: "шинжлэх ухаан",
      path:"Lorem",
      title:"Lorem ipsum dolor sit amet consectetur dilicit",
      author:"n.Someone",
      img: "/placeHolder.svg",
    },
    {
      id: 4,
      category: "эвентүүд",
      path:"Lorem",
      title:"Lorem ipsum dolor sit amet consectetur dilicit",
      author:"n.Someone",
      img: "/placeHolder.svg",
    },
  ];
  const dailyCartoon = [
    {
      id: 1,
      img: "/dailyCartoon.svg",
    }
  ];
  return (
    <div className="min-h-screen mulish flex flex-col items-center justify-center">

      {/* Feature News Section */}
      <h1 className="mt-40 mb-16 font-bold text-3xl yeseva">Онцлох мэдээ</h1>
      <div className="px-10 w-full flex flex-row justify-around items-start">
        {news.filter((data) => data.category === "feature").map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            img={data.img}
            path={`/feature/${data.path}`}
            author={data.author}
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
      {bigBanner.length > 0 && (
        <BigBanner
          key={bigBanner[0].id}
          id={bigBanner[0].id}
          img={bigBanner[0].img}
          title={bigBanner[0].title}
          description={bigBanner[0].description}
          path={`/${bigBanner[0].category}/${bigBanner[0].path}`}
          author={bigBanner[0].author}
          category={bigBanner[0].category}
          theme={bigBanner[0].theme}
        />
      )}

      {/* Olympiad Section */}
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
          {news.filter((data) => data.category === "olympiod").map((data) => (
            <Card
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
              img={data.img}
              path={`/feature/${data.path}`}
              author={data.author}
            />
          ))}
        </div>
      </div>

      {/* Advertisement Again */}
      {advertisement.length > 1 && (
        <Advertisement
          key={advertisement[1].id}
          id={advertisement[1].id}
          img={advertisement[1].img}
          link={advertisement[1].link}
        />
      )}

      {/* Big Banner Again */}
      {bigBanner.length > 1 && (
        <BigBanner
          key={bigBanner[1].id}
          id={bigBanner[1].id}
          img={bigBanner[1].img}
          title={bigBanner[1].title}
          description={bigBanner[1].description}
          path={`/${bigBanner[1].category}/${bigBanner[1].path}`}
          author={bigBanner[1].author}
          category={bigBanner[1].category}
          theme={bigBanner[1].theme}
        />
      )}

      {/* News Section */}
      <h1 className="mt-20 mb-16 font-bold text-3xl yeseva">Мэдүүштэй</h1>
      <div className="px-10 w-full flex flex-row gap-10 justify-start items-start">
        {news.filter((data) => data.category === "feature").map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            img={data.img}
            path={`/feature/${data.path}`}
            author={data.author}
          />
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
      {bigBanner.length > 2 && (
        <BigBanner
          key={bigBanner[2].id}
          id={bigBanner[2].id}
          img={bigBanner[2].img}
          title={bigBanner[2].title}
          description={bigBanner[2].description}
          path={`/${bigBanner[2].category}/${bigBanner[2].path}`}
          author={bigBanner[2].author}
          category={bigBanner[2].category}
          theme={bigBanner[2].theme}
        />
      )}
      <div className="px-10 py-30 w-full flex flex-row justify-around items-start">
        {categoryCard.map((data) => (
          <CategoryCard
            key={data.id}
            id={data.id}
            title={data.title}
            category={data.category}
            img={data.img}
            path={`/${data.category}/${data.path}`}
            author={data.author}
          />
        ))}
      </div>
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

export default Technology;
