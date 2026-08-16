import React from 'react'
import FooterSection from './FooterSection';

const Lunchbutton = () => {
  return (
    <>
    <div className='w-full h-auto flex flex-col items-center mt-55'>
      <div className='w-230 h-auto flex flex-col space-y-9'>
      <h1 className='text-3xl text-black font-bold font-serif tracking-wider'>LUNCH AND DINNER FAVOURITES</h1>
      <h3 className='text-gray-800 text-sm font-serif'>Quality, variety and cooked to your specification.  That’s our recipe for a great lunch or dinner, served up any time you like.</h3>
    </div>
    </div>
    <div className='w-full h-auto flex mt-6 flex-col items-center'>
    <div className='w-230 h-auto'>
        <img src="/imgi_13_LUNCH&DINNER_HEADER_2000x786.jpg" alt="" />
    </div>
    <div className='w-full h-15 flex justify-center  '>
     <div className='w-230 h-12 bg-yellow-400flex bg-yellow-400 flex justify-center items-center'><h1 className='text-black text-medium font-bold'>GRAB A BITE! 100% ANGUS BEEF: BACON ANGUS CHEESEBURGER DELUXE</h1></div> 
    </div>
    </div>
    <div className='w-full h-auto  flex justify-center mt-10'>
      <div className='w-237 h-auto flex space-x-6 justify-center'>
        <div className='w-110 h-auto relative flex flex-col  space-y-18 '>

          <div className='w-full h-auto relative border-2 border-black hover:opacity-80 group cursor-pointer overflow-hidden'> 
          <img  src="/imgi_14_angus-burgers-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg font-extrabold font-serif'>ANGUS BURGERS</h1></div>
         </div>
        <div className='w-full h-auto relative  hover:opacity-80 group cursor-pointer overflow-hidden'> 
          <img src="/imgi_17_classic-dinners-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg font-extrabold font-serif'>CLASSIC DINNERS</h1></div>
          </div> 

           <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden '>
          <img src="/imgi_19_lunch-dinner-hashbrown-bowls-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110 ' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 h-auto flex justify-center p-3 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-40 font-extrabold text-lg font-serif '>LUNCH/DINNER HASHBROWN BOWLS</h1></div>
          </div>  

          <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_21_dinner-sides-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45  duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg  font-extrabold font-serif'>HASHBROWNS</h1></div>
          </div>  

          <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_23_dinner-beverages-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110 ' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-30 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-20 text-lg font-extrabold font-serif'>BEWERAGES</h1></div> 
          </div> 
          
         
        </div>

         <div className='w-110 h-auto relative  flex flex-col space-y-18 '>

         <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'> 
          <img  src="/imgi_16_texas-melts-sorting@2x.jpg" alt="" />
          <img className='absolute  top-0 left-0  bottom-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110 ' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center  p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg font-extrabold font-serif'>TEGAS MELTS</h1></div> 
         </div>

        <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'> 
          <img src="/imgi_18_sandwiches-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45  duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg font-extrabold font-serif'>SANDWICHES</h1></div>
          </div> 

           <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_22_sides-sorting@2x (1).jpg" alt="" />
          <img className='absolute top-0 left-0 w-45 duration-700 ease-in-out transition-all group-hover:scale-x-110 ' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 h-auto flex justify-center p-3  absolute top-0 left-0 flex-wrap '><h1 className='text-black w-40 font-extrabold text-lg font-serif '>SIDES</h1></div>
          </div>  

          <div className='w-full h-auto relative hover:opacity-80 group cursor-pointer overflow-hidden'>
          <img src="/imgi_22_pies-sorting@2x.jpg" alt="" />
          <img className='absolute top-0 left-0 w-45  duration-700 ease-in-out transition-all group-hover:scale-x-110' src="/imgi_15_menu-cat-bg@2x.png" alt="" /> 
         <div className='w-45 flex justify-center p-8 absolute top-0 left-0 flex-wrap '><h1 className='text-black w-30 text-lg  font-extrabold font-serif'>PIES</h1></div>
          </div> 

          </div>
        
      </div>
    </div>
    <div className='mt-15'><FooterSection/></div>
    </>
  )
}

export default Lunchbutton;