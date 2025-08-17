import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { FaChevronRight,FaChevronLeft  } from "react-icons/fa";

const Slider = () => {

    const [movieList,setMovieList] = useState([]);
    const elementRef = useRef();
    const screenWidth = window.innerWidth;


    const sliderRight = (element)=>{
        element.scrollLeft+=screenWidth-123
    }
    const sliderLeft = (element)=>{
        element.scrollLeft-=screenWidth-123
    }

    useEffect(() => {
        getTrendingMovies();

      return () => {     
      }
    }, [])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp =>{
            //console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
    
  return (
    <div>
        <FaChevronLeft className='hidden md:block text-[30px] absolute mx-8 mt-[150px]' onClick={()=>sliderLeft(elementRef.current)} />
        <FaChevronRight className='hidden md:block text-[30px] absolute mx-8 mt-[150px] right-0' onClick={()=>sliderRight(elementRef.current)} />
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {movieList.map((item,index)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full md:h-[310px] object-cover object-center mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out' alt="" />
        ))}
    </div>


    </div>
    
  )
}

export default Slider