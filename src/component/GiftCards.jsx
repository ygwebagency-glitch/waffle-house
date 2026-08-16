import React from 'react'
import FooterSection from './FooterSection'

const GiftCards = () => {
  return (
    <>

    <div className='w-full h-auto mt-38 relative '>
        <img src="/gift-card-hero-desktop@2x.jpg" alt="" />
       <img className='absolute w-90   top-0 left-0' src="/imgi_43_title-overlay-bg@2x.png" alt="" />
       <h1 className='absolute text-black text-3xl tracking-wide font-bold font-serif top-8 left-8'>GIFT CARDS</h1>
    </div>
      
      <div className='w-full h-auto flex justify-center pt-15 flex-col items-center'>
          
          <div className='w-240 h-auto gap-y-10 flex flex-wrap '>
             <h1 className='text-2xl tracking-wider font-bold'>THE PERFECT GIFT FOR ANY OCCASION</h1>
             <h3 className='text-gray-700 text-sm tracking-tight'>A gift card from Waffle House is the perfect way to say, “Thank You”, “Congratulations”, “I Love You” and so much more.  Order one today and make the Waffle House Regular in your life happy.</h3>
          </div>
          
          <div className='w-240 h-auto mt-10 flex justify-end relative   flex-col '>

            <img src="/imgi_14_gift-card-block-bg2@2x.jpg" alt="" />

            <div className='w-130 absolute top-0 right-0  border-4 border-t-0  border-l-0 border-r-0 border-b-white h-35 flex items-center space-x-7 '>
             <div className='w-15 h-15 border-2 border-black flex justify-center cursor-pointer items-center rounded-full '><i class="fa-solid fa-2xl fa-dollar-sign "></i></div>
               <h1 className='text-2xl font-bold font-serif hover:underline transition-opacity hover:opacity-80  cursor-pointer'>BUY GIFT CARDS</h1>
            </div>

             <div className='w-130 absolute top-40 right-0  h-35 flex items-center   space-x-7  border-4 border-t-0 border-l-0 border-r-0 border-b-white'>
             <div className='w-15 h-15 border-2 border-black flex justify-center  cursor-pointer items-center rounded-full '><i class="fa-solid fa-check fa-2xl  "></i></div>
               <h1 className='text-2xl font-bold font-serif hover:underline transition-opacity hover:opacity-80  cursor-pointer'>BUY GIFT CARDS</h1>
            </div>

            <div className='w-130 absolute top-80 right-0   h-35 flex items-center  space-x-7 border-4 border-t-0 border-l-0 border-r-0 border-b-white '>
             <div className='w-15 h-15 border-2 border-black flex justify-center cursor-pointer items-center rounded-full '><i class="fa-solid fa-plus fa-2xl"></i></div>
               <h1 className='text-2xl font-bold font-serif hover:underline transition-opacity hover:opacity-80  cursor-pointer'>BUY GIFT CARDS</h1>
            </div>

             <div className='w-130 absolute top-115 right-0   h-35 flex items-center  space-x-7 '>
             <div className='w-15 h-15 border-2 border-black flex justify-center cursor-pointer items-center rounded-full '> <i className="fa-solid fa-magnifying-glass text-black text-2xl"></i></div>
               <h1 className='text-2xl font-bold font-serif hover:underline transition-opacity hover:opacity-80  cursor-pointer'>BUY GIFT CARDS</h1>
            </div>

           
          </div>
          <div className='w-220 h-20  flex gap-x-15 pt-8 items-center'>

           <h1 className='font-serif tracking-wider font-extrabold  '>CONTACT ABOUT GIFY CARDS:</h1>

           <div className='w-auto h-auto flex items-center gap-x-3 '>
            <div className='w-10 h-10 rounded-full border-2 border-red-700  flex items-center justify-center flex-row'>
                <i class="fa-solid fa-phone text-red-700"></i>
                </div>
                <h4>1-866-204-5393</h4>
        </div>

        
           <div className='w-auto h-auto flex items-center gap-x-3 '>
            <div className='w-10 h-10 rounded-full border-2 border-red-700 flex items-center justify-center flex-row'>
                <i class="fa-solid fa-envelope text-red-700"></i>

                </div>
                <h4>EMAIL</h4>
        </div>

        
           <div className='w-auto h-auto flex items-center gap-x-3 '>
            <div className='w-10 h-10 rounded-full border-2 border-red-700   flex items-center justify-center flex-row'>
                <i class="fa-solid fa-question text-red-700"></i>
                </div>
                <h4>FAQ'S</h4>
        </div>

        </div>

      </div>

      <div className='pt-20'><FooterSection/></div>

    </>
  )
}

export default GiftCards