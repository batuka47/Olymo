import { Link } from 'react-router-dom'
function BigBanner(props) {
  // Determine the classes based on the theme
  const bgClass = props.theme === 'dark' ? 'sm:bg-black' : 'sm:bg-white';
  const textClass = props.theme === 'dark' ? 'sm:text-white' : 'sm:text-black';
  const borderColor = props.theme === 'dark' ? 'white' : 'black';

  return (
    <div key={props.id} className='md:h-[550px] 2xl:h-[800px] mulish w-9/10 flex flex-col-reverse md:flex-row items-center justify-center sm:border-0 border-y-[1px] border-gray-200'>
        <div className={`sm:w-1/2 w-full ${bgClass} h-full flex justify-center items-center`}>
            <Link to={props.path} className='w-full h-full flex flex-col sm:justify-center sm:items-center' onClick={() => window.scrollTo(0, 0)}>
                <h1 className={`font-semibold mt-2 2xl:text-2xl text-base sm:text-center uppercase yeseva  hidden sm:block ${textClass}`}>{props.category}</h1>
                <h1 className={`font-bold sm:text-2xl 2xl:text-4xl text-xl w-full sm:w-10/12 yeseva mt-2 sm:text-center ${textClass}`}>{props.title}</h1>
                <p className={`font-thin w-full sm:w-2/3 text-sm 2xl:text-lg my-2 sm:text-center ${textClass}`}>{props.description}</p>
                <p className={`font-semibold text-sm 2xl:text-lg mb-2 sm:text-center hidden sm:block ${textClass}`}>By: {props.author}</p>
                <div className='flex flex-row text-2xl 2xl:text-5xl gap-2'>
                    <div className={`h-8 w-32 2xl:h-12 2xl:w-48 2xl:text-base text-xs hidden sm:flex justify-center ${textClass} items-center rounded-4xl border-2 border-solid border-${borderColor}`}>Дэлгэрэнгүй үзэх</div>
                    <img src={props.theme === 'dark' ? "/arrowWhite.svg" : "/arrowBlack.svg"} alt="" className='hidden sm:block'/>
                </div>
                <div className='sm:hidden flex justify-between items-center'>
                <p className={`font-semibold text-sm mb-2 sm:text-center ${textClass}`}>By: {props.author}</p>   
                <p className={`font-semibold capitalize text-sm sm:text-center ${textClass}`}>{props.category}</p>
                </div>
            </Link>
        </div>
        <Link to={props.path} className='sm:w-1/2 w-full sm:h-full' onClick={() => window.scrollTo(0, 0)}>
            <div className='w-full sm:h-full'>
                <img src={props.img} alt={props.title} className='object-cover w-full h-[250px] sm:h-full'/>
            </div>
        </Link>
    </div>
  )
}
export default BigBanner