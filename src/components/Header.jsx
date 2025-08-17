import React from 'react'
import logo from "./../assets/logo.png"
import { FaHome,FaSearch,FaPlus,FaRegStar,FaPlayCircle,FaTv, FaStar} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import MenuItems from './MenuItems';
import { useState } from 'react';

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    // <FaHome />
    //     <FaSearch />
    //     <FaPlus/>
    //     <FaRegStar/>
    //     <FaPlayCircle/>
    //     <FaTv/>
    const menu = [
        {
        name:"Home",
        icon: FaHome
        },
        {
        name:"Search",
        icon: FaSearch
        },
        {
        name:"Watchlist",
        icon: FaPlus
        },
        {
        name:"Originals",
        icon: FaStar
        },
        {
        name:"Movies",
        icon: FaPlayCircle
        },
        {
        name:"Series",
        icon: FaTv
        },
]
   

  return (
    <div className='flex p-5 items-center justify-between w-full'>
        <div className='items-center hidden md:flex gap-3 md:gap-8 text-[21px]'>

            <img src={logo} alt="" className='cursor-pointer w-[80px] object-cover md:w-[115px] mr-4 md:mr-15 relative bottom-2' />
            {menu.map((item) => (
            <MenuItems  name={item.name} Icon={item.icon} />
        ))}
        </div>
        {/* mobile menu */}
        <div className='items-center flex md:hidden gap-3 md:gap-8 text-[21px]'>

            <img src={logo} alt="" className='cursor-pointer w-[80px] object-cover md:w-[115px] mr-4 md:mr-15 relative bottom-2' />
            {menu.map((item,index) => index<3&& (
            <MenuItems   Icon={item.icon} />
            ))}
            <div>
                <BsThreeDotsVertical className='cursor-pointer' onClick={() => setToggleMenu(!toggleMenu)}/>

                {toggleMenu?
                <div className='absolute mt-2 border-gray-500 bg-[#121212] border-1 p-2'>
                    {menu.map((item,index) => index>2&& (
                <MenuItems   Icon={item.icon} name={item.name} />
                ))}
                </div> : null}

                
            </div>
        </div>

        
        <div>
             <img className='w-[40px] rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VbvTvQFYrD7AYI3IKB8rdP-vvYm2LkBl-w&s" alt="" />

        </div>
        
        
    </div>
  )
}

export default Header