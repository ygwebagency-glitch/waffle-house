import React from 'react'
import FooterSection from './FooterSection'

const Cateringbutton = () => {
  return (
   <>

   <div className='w-full h-auto overflow-hidden pt-38'>
    <img className='w-full h-full object-cover' src="/imgi_36_default.webp" alt="" />
   </div>

    <div className='w-full flex justify-center h-auto '>
      <div className='w-230 h-auto  space-y-10 pt-15'>

        <h1 className='font-bold  text-2xl font-sans  tracking-wide'>WAFFLE HOUSE ONLINE CATERING COMING SOON....!</h1>

        <h3 className='text-gray-700'>Something Delicious is Cooking! 🍽️ Online Catering Coming Soon</h3>

        <h1 className='text-2xl font-bold font-sans tracking-wide'>MAKE YOUR NEXT EVENT A MEMORABLE ONE!</h1>

       <div className='w-full h-auto flex flex-wrap space-y-5 text-sm text-gray-700'><h3>The Waffle House Catering Team can Scatter, Smother & Cover® your school function, birthday party, wedding, corporate gathering or any other event you can dream up!</h3>

        <h3>We have a variety of options available for you to get a real Waffle House Experience!  These could include food items delivered directly to you; on-site food stations that serve waffles, hashbrowns and/or other delicious items; or even a visit by the Waffle House food truck.  We are happy to work with you to deliver a unique experience for your guests.  Capabilities and menus may vary by market.</h3>
        
        </div> 

      <div className='w-full flex justify-center h-auto '>
        <div className='w-0 h-0 border-r-8 border-t-8 border-t-transparent border-r-amber-200'></div>
        <div className='w-0 h-0 border-l-8 border-t-8 border-t-transparent border-l-amber-200'></div>      </div>
      </div>

      </div>
    
    <div className='w-full flex h-auto justify-center '>

          <div className='w-230 h-auto mt-0 bg-amber-200 p-10'>

            <h1 className='text-xl font-bold font-sans  tracking-widest pl-19'>CATERING REQUEST FORM</h1>

            <div className='w-full h-auto flex items-center gap-x-10 mt-10 justify-center'>
              <input 
              type="text"
              placeholder='*First Name'
              className='bg-yellow-100 h-10 p-4 border-8  border-t-8  border-t-gray-500  border-b-gray-500 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />

               <input 
              type="text"
              placeholder='*Last Name'
              className='bg-yellow-100 h-10 p-4 border-8  border-t-8  border-t-gray-500    border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />
            </div>

            <div className='w-full h-auto flex items-center gap-x-10 mt-10 justify-center'>
              <input 
              type="text"
              placeholder='*Phone Number'
              className='bg-yellow-100 h-10 p-4 border-8  border-t-8  border-t-gray-500  border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />

               <input 
              type="text"
              placeholder='*Email Address'
              className='bg-yellow-100 h-10 p-4 border-8 border-t-8  border-t-gray-500     border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />
            </div>

            <div className='w-full h-auto flex items-center gap-x-10 mt-10 justify-center'>
              <input 
              type="text"
              placeholder='*Address Line 1'
              className='bg-yellow-100 h-10 p-4 border-8 border-t-8  border-t-gray-500  border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />

               <input 
              type="text"
              placeholder='*Address Line 2'
              className='bg-yellow-100 h-10 p-4 border-8  border-t-8  border-t-gray-500    border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />
            </div>

            <div className='w-full h-auto flex items-center gap-x-10 mt-10 justify-center'>
              <input 
              type="text"
              placeholder='*City'
              className='bg-yellow-100 h-10 p-4 border-8 border-t-8  border-t-gray-500  border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />

               <input 
              type="text"
              placeholder='*State'
              className='bg-yellow-100 h-10 p-4 border-8  border-t-8  border-t-gray-500    border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />
            </div>

            <div className='w-full h-auto flex items-center gap-x-10 mt-10 justify-center'>
              <input 
              type="text"
              placeholder='*City'
              className='bg-yellow-100 h-10 p-4 border-8 border-t-8  border-t-gray-500  border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />

               <input 
              type="text"
              placeholder='*State'
              className='bg-yellow-100 h-10 p-4 border-8  border-t-8  border-t-gray-500    border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />
            </div>


              <div className='w-full h-auto flex items-center gap-x-10 mt-10 justify-center'>
              <input 
              type="text"
              placeholder='*Zip Code'
              className='bg-yellow-100 h-10 p-4 border-8 border-t-8  border-t-gray-500  border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />

               <input 
              type="text"
              placeholder='Event Description'
              className='bg-yellow-100 h-10 p-4 border-8 border-t-8  border-t-gray-500     border-b-gray-600 hover:bg-white hover:text-black placeholder:text-black  w-80'
               />
            </div>
            <div className='w-full h-auto flex items-center   mt-10 justify-center'>
              <button className='bg-black w-30 font-bold font-sans text-sm tracking-wider h-10 rounded-4xl hover:text-black hover:bg-white text-white'>CONTACT US</button>
            </div>


          </div>
    </div>

    <div className='mt-10'><FooterSection/></div>
   </>

  )
}

export default Cateringbutton