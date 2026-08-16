import React from 'react'
import FooterSection from './FooterSection'

const Marshandisebutton = () => {
  return (
   <>
   <div className='w-full h-auto relative mt-38'>
     <img src="/imgi_21_merchandise-hero-desktop@2x.webp" alt="" />
     <img className='absolute top-0 left-0 w-90' src="/imgi_43_title-overlay-bg@2x.webp" alt="" />
     <h1 className='absolute top-8 left-9 text-3xl font-bold'>MARSHANDISE</h1>
   </div>

   <div className='w-full h-auto  flex justify-center'>
    <div className='w-250 space-y-7 h-auto mt-15'>
        <h1 className='text-xl font-bold tracking-widest'>GET SCATTERED,SHMOTERED & COVERED® IN THE LATESTWAFFLE HOUSE GEAR</h1>
        <h3 className='font-sans text-sm text-gray-600'>Show your Waffle Nation pride.  Waffle House t-shirts, hats and totes, OH MY!  Get fresh and fly with the latest Waffle House apparel.</h3>
    </div>
   </div>

   <div className='w-full h-auto flex items-center flex-col mt-10'
   style={{background:"url('/pngtree-simple-white-brick-wall-image_16754964.jpg')"}}
   >

    <div className='w-250 h-auto flex items-center gap-x-12 mt-10 '>

      <div className='w-auto h-auto  group  flex items-center relative flex-col justify-center gap-y-5'>
       <img className='object-cover border-4 border-blue-400  rounded-full transition-transform duration-700 ease-in-out hover:-translate-y-1' src="/imgi_14_seasonal-merchandise@2x1-150x150.webp" alt="" />
       <img className='group-hover:bg-red-700 ease-in-out transition-all inset-0 ' src="/imgi_28_merch-btn@2x.webp" alt="" />
       <h1 className='absolute top-48 font-bold text-xl left-19   transition-all ease-in-out duration-300'>SEASONAL</h1>
      </div>

      <div className='w-auto h-auto group flex items-center relative flex-col justify-center gap-y-5'>
       <img className='object-cover  border-4 border-blue-400 w-40  rounded-full transition-transform duration-700 ease-in-out hover:-translate-y-1' src="/imgi_15_FoodItems_WebsiteThumbnail.webp" alt="" />
       <img className="group-hover:bg-red-700 ease-in-out transition-all inset-0" src="/imgi_28_merch-btn@2x.webp" alt="" />
       <h1 className='absolute top-48 font-bold text-xl left-19  transition-all ease-in-out duration-300'>FOOD ITEMS</h1>
      </div>

      <div className='w-auto h-auto  group flex items-center relative flex-col justify-center gap-y-5'>
       <img className='object-cover border-4 border-blue-400  rounded-full transition-transform duration-700 ease-in-out hover:-translate-y-1' src="/imgi_16_adult-apparel@2x1-150x150.webp" alt="" />
       <img className="group-hover:bg-red-700 ease-in-out transition-all inset-0" src="/imgi_28_merch-btn@2x.webp" alt="" />
       <h1 className='absolute top-48 font-bold text-xl left-19  transition-all ease-in-out duration-300'>ADDULT APPAREL</h1>
      </div>
      
        
    </div>


    <div className='w-250 h-auto  flex justify-start gap-x-12 mt-10 '>

      <div className='w-auto h-auto  group  flex items-center relative flex-col justify-center gap-y-5'>
       <img className='object-cover border-4 border-blue-400  rounded-full transition-transform duration-700 ease-in-out hover:-translate-y-1' src="/imgi_17_youth-apparel@2x1-150x150.webp" alt="" />
       <img  className="group-hover:bg-red-700 ease-in-out transition-all inset-0" src="/imgi_28_merch-btn@2x.webp" alt="" />
       <h1 className='absolute top-48 font-bold text-xl left-19  transition-all ease-in-out duration-300'>YOUTH APPAREL</h1>
      </div>

      <div className='w-auto h-auto  group  flex items-center relative flex-col justify-center gap-y-5'>
       <img className='object-cover border-4 border-blue-400  rounded-full transition-transform duration-700 ease-in-out hover:-translate-y-1' src="/imgi_18_headwear@2x1-150x150.webp" alt="" />
       <img  className="group-hover:bg-red-700 ease-in-out transition-all inset-0" src="/imgi_28_merch-btn@2x.webp" alt="" />
       <h1 className='absolute top-48 font-bold text-xl left-19  transition-all ease-in-out duration-300'>HEADWEAR</h1>
      </div>

      <div className='w-auto h-auto  group  flex items-center relative flex-col justify-center gap-y-5'>
       <img className='object-cover border-4 border-blue-400  rounded-full transition-transform duration-700 ease-in-out hover:-translate-y-1' src="/imgi_19_accessories@2x1-150x150.webp" alt="" />
       <img className="group-hover:bg-red-700 ease-in-out transition-all inset-0" src="/imgi_28_merch-btn@2x.webp" alt="" />
       <h1 className='absolute top-48 font-bold text-xl left-19 transition-all ease-in-out duration-300'>ACCESSORIES</h1>
      </div>
      
        
    </div>
   </div>

   <div className='w-full h-auto flex justify-center mt-20 '>
     <div className='w-190  flex p-5 items-center space-x-10'>

        <h1 className='font-bold font-serif text-lg tracking-wide '>CONTACT ABOUT MARCHANDISE:</h1>

        <div className='w-auto h-auto flex items-center gap-x-3 group cursor-pointer'>
            <div className='w-9 h-9 rounded-full border-2 border-red-700 group-hover:border-blue-500  flex items-center justify-center flex-row'>
                <i class="fa-solid fa-phone text-red-700 group-hover:text-blue-500 "></i>
                </div>
                <h4 className='hover:opacity-80 cursor-pointer'>1-866-204-5393</h4>
        </div>

         <div className='w-auto h-auto flex items-center gap-x-3 group cursor-pointer'>
            <div className='w-9 h-9 rounded-full border-2 border-red-700 group-hover:border-blue-500 flex items-center justify-center flex-row'>
                <i class="fa-solid fa-envelope text-red-700 group-hover:text-blue-500 "></i>

                </div>
                <h4 className='hover:opacity-80 cursor-pointer'>EMAIL</h4>
        </div>
     </div>
   </div>

   <div className='mt-10'><FooterSection/></div>
   </>
  )
}

export default Marshandisebutton