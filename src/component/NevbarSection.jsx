import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import FoodDropdown from "../component/FoodDropdown";
import ShopDropdown from './ShopDropdown';
import MoreDropdown from './MoreDropdown';

function NevbarSection(){
    const [activeDropdown,setActiveDropdown] = useState(null);
  
  return (
    <>
      {/* Top announcement bar */}
      <div className='w-full h-10 bg-black flex justify-center items-center fixed top-0 left-0 z-50'>
        <div className='text-yellow-400 font-sans-serif'>
          <h4>Good Food Fast.®</h4>
        </div>
        <div className='text-white ml-4'>
          <h6>
            Join Our Regulars Club and Get a Free Order of Hashbrowns! Sign{' '}
            <Link to="/signup" className='underline hover:text-yellow-400'>
              HERE.
            </Link>
          </h6>
        </div>
      </div>

     
      <nav className='w-full h-28 flex items-center justify-between fixed top-10 left-0 z-50 bg-white shadow-md px-6'>
        
        <div className='flex items-center h-25'>
          <img src="/waffle-house-logo.svg" alt="Logo" />
        </div>

       
        <div className='flex items-center gap-x-10 flex-wrap'>
            <Link to="/ ">
            <div className='w-auto h-auto  '>
           <div className='w-40 h-auto space-x-1  flex justify-center items-center'><i className="fa-solid fa-location-dot text-xl text-yellow-400"></i><h1 className='text-black font-bold hover:underline hover:opacity-60 duration-300'>FIND A STORE</h1> </div>
            
          </div></Link>

       <FoodDropdown
       activeDropdown={activeDropdown}
       setActiveDropdown={setActiveDropdown}
       />
        <ShopDropdown
        activeDropdown={activeDropdown}
       setActiveDropdown={setActiveDropdown}
        />
        <MoreDropdown
        activeDropdown={activeDropdown}
       setActiveDropdown={setActiveDropdown}
        />
        </div>
      </nav>
    </>
  )
}

export default NevbarSection
