import React from 'react'
import FooterSection from './FooterSection';

const Breakfastbutton = () => {
  return (
    <>
    <div className='w-full h-auto flex flex-col items-center mt-55'>
      <div className='w-230 h-auto flex flex-col space-y-9'>
      <h1 className='text-3xl text-black font-bold font-serif tracking-wider'>BREAKFAST NEUTITIONALS</h1>
      <h3 className='text-gray-800 text-sm font-serif'>World-Famous Waffles. All-Star Special™. Toddle House®️ Omelets. Hashbrown Bowls. It’s not a menu; it’s a road map to happiness 24/7.</h3>
    </div>
    </div>
    <div className='w-full h-auto flex mt-6 flex-col items-center'>
    <div className='w-230 h-auto'>
        <img src="imgi_13_BREAKFAST_HEADER_2000x786.jpg" alt="" />
    </div>
    <div className='w-full h-15 flex justify-center  '>
     <div className='w-230 h-12 bg-yellow-400flex bg-yellow-400 flex justify-center items-center'><h1 className='text-black text-medium font-bold'>ALL STAR SPECIAL : THE GREATEST OF ALL TIME</h1></div> 
    </div>
    </div>
    <div className='w-full h-auto  flex justify-center mt-10'>
      <div className='w-237 h-auto flex space-x-6 justify-center'>
        <div className='w-110 h-auto relative flex flex-col  space-y-18 '>

          <div className='w-full h-auto relative  hover:opacity-80 group cursor-pointer overflow-hidden'> 
          <img  src="/imgi_14_all-star-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg font-extrabold font-serif'>ALL_STARS SPECIAL TM</h1></div>
         </div>
        <div className='w-full h-auto relative  hover:opacity-80 group cursor-pointer overflow-hidden'> 
          <img src="/imgi_17_hashbrown-bowls-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg font-extrabold font-serif'>BREAKFAST HASHBROWN BOWLS</h1></div>
          </div> 

           <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden '>
          <img src="/imgi_19_omelets-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110 ' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 h-auto flex justify-center p-3 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-40 font-extrabold text-lg font-serif '>TOODLE HOUSE OMELETS®</h1></div>
          </div>  

          <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_21_biscuits-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45  duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg  font-extrabold font-serif'>BUSCUITS</h1></div>
          </div>  

          <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_23_hashbrowns-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110 ' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-30 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-20 text-lg font-extrabold font-serif'>HASHBROWNS</h1></div> 
          </div> 
          
         
        </div>

         <div className='w-110 h-auto relative  flex flex-col space-y-18 '>

         <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'> 
          <img  src="/imgi_16_egg-sorting@2x.jpg" alt="" />
          <img className='absolute  top-0 left-0  bottom-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110 ' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center  p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg font-extrabold font-serif'>EGGS BREAKFASTS</h1></div> 
         </div>

        <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'> 
          <img src="/imgi_18_waffles-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45  duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg font-extrabold font-serif'>WAFFLES</h1></div>
          </div> 

           <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_20_breakfast-sandwiches-and-melts-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110 ' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 h-auto flex justify-center p-3  absolute top-0 left-0 flex-wrap '><h1 className='text-black w-40 font-extrabold text-lg font-serif '>BREAKFAST SANDWITCHES & TEXAS MELTS</h1></div>
          </div>  

          <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_22_sides-sorting@2x (1).jpg" alt="" />
          <img className='absolute top-0 left-0 w-45  duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg  font-extrabold font-serif'>SIDES</h1></div>
          </div> 

          <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_24_beverages-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45  duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-30 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-20 text-lg font-extrabold font-serif'>BRVERAGES</h1></div> 
          </div> 

          </div>
        
      </div>
    </div>
    <div className='mt-15'><FooterSection/></div>
    </>
  )
}

export default Breakfastbutton;