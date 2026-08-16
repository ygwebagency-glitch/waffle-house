import React from 'react'
import { useState } from 'react'

const slides=[
    {id:1 , title:"Blurberry Waffle",      image:"/imgi_20_all-star.webp"},
    {id:2 , title:"All-Star special",      image:"/imgi_21_simply-resize_Page_1.webp"},
    {id:3 , title:"Simply Beverages",      image:"/imgi_19_blueberrywaffleresize-8.webp"},
    {id:4 , title:"Try our Pecan Waffle",  image:"/imgi_18_pecanwaffle@2x.webp"}
    ]

 const Slider=()=>{
    const[current,setCurrent]=useState(0);

    const prevSlide=()=>{
        setCurrent((prev)=>(prev===0 ? slides.length-1: prev -1 ))
    }

    const nextSlide=()=>{
        setCurrent((prev)=>(prev===slides.length-1 ? 0: prev +1 ))
    }

    return(
      <>
      <div className='w-full h-auto object-cover  flex justify-center '
      style={{background:"url('/subway-tile-background-white-seamless-patter-kitchen-backsplash-bathroom-wall-shower_926199-3741952.avif')"}}
      >
        <div className='max-w-5xl w-full relative z-0  mx-auto rounded-lg  h-130 overflow-hidden'>
        <div className='relative w-full h-full flex justify-center items-center'>


      {slides.map((slide,index)=>{
       const isCenter=index === current;
       const isLeft =index === (current === 0 ? slides.length - 1 : current - 1);
       const isRight = index === (current === slides.length - 1 ? 0 : current + 1);
       
      let 
      style="transition-all absolute duration-500 rounded-lg shadow-lg ease-in-out "
      if(isCenter){
        style+="z-50 scale-100 translate-x-0"
      }
      else if(isLeft){
      style+="z-20 scale-90 -translate-x-32 opacity-80"
      }
    else if(isRight){
        style+="z-20 scale-90 translate-x-32 opacity-80"
    }else{
        style+="hidden";
    }

    return(
        <div className={style} key={slide.id} >
         <img src={slide.image} alt={slide.title} 
         className='w-120 h-90 object-cover rounded-lg '
         />
         {index===current && (
          <div className='w-full absolute bottom-0 text-black font-bold py-2 rounded-b-lg bg-yellow-400 text-center '>{slide.title}</div>
         )}
        </div>
        ) 
    })} </div> 

    <button
     onClick={prevSlide}
    className='absolute -translate-y-1/2 text-black text-xl p-3 bg-yellow-400 top-1/2 left-4 rounded-full hover:text-white hover:bg-black transition-transform ease-in-out duration-300 '
    >&lt;
    </button>

    <button 
    onClick={nextSlide}
    className=' absolute rounded-full hover:text-white hover:bg-black transition-transform ease-in-out duration-300  -translate-y-1/2 right-4  text-black text-xl p-3 bg-yellow-400 top-1/2 '
    >&gt;
    </button>
    
        </div>
      </div>  
     </>
    )




 }   

export default Slider;