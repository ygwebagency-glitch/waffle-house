import React from 'react'

const MenuSection = () => {
  return (
    <>
    <div className='w-full h-150'>
    <div className='w-full h-70 overflow-hidden relative '>
    <div>
    <img className='object-cover relative w-full h-full' src="/imgi_48_breakfast-favs-bg@2x.webp" alt="" />
    <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 ml-50 -translate-y-1/2'><h1 className='text-amber-50  hover:text-bold  hover:shadow-5xl text-4xl font-bold '>BREAKFAST FAVOURITE</h1></div>
      <div className=' bg-yellow-400 absolute top-5/6 left-1/2 -translate-x-1/4 -translate-y-1/2'><button className='w-60 h-15 font-bold hover:bg-black  hover:text-white duration-700 font-sans'>ALL DAY , EVERY DAY</button></div>
    </div>
    </div>
     <div className='w-full mt-3 h-70 overflow-hidden relative '><div><img className='object-cover w-full h-full' src="/imgi_49_lunch-dinner-favs-bg@2x.webp" alt="" />
     <div className='absolute  top-1/2 left-1/2 -translate-x-1/4  -translate-y-1/2'><h1 className='text-amber-50 font-bold hover:text-bold hover:text-white text-4xl'>LUNCH AND DINNER FAVOURITES</h1></div>
      <div className=' bg-yellow-400 absolute top-5/6 left-1/2 -translate-x-1/4 -translate-y-1/2'><button className='w-60 h-15 font-bold hover:bg-black hover:text-white duration-700 font-sans'>SMOOTHER YOUR HUNGER</button></div>
     </div>
     </div>
    </div>
    
    </>
  )
}

export default MenuSection;