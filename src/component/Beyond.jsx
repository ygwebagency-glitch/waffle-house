import React from 'react'
import Beyondmenu from '../Pages/Beyondmenu'
import FooterSection from './FooterSection'
const Beyond = () => {
  return (
    <>
    <div className='w-full h-auto mt-38 relative'>
      <img className='' src="/imgi_36_product-stories-hero-desktop@2x.webp" alt="" />
      <img className='top-0 w-110 h-21 transform transition-transform scale-x-110 left-0 absolute' src="/imgi_43_title-overlay-bg@2x.webp" alt="" />
      <h1 className='absolute top-9 left-7 font-bold text-4xl font-sans'>BEYOND THE MENU</h1>
    </div>
    <div className='w-full h-auto  flex justify-center mt-16'>
           <div className='w-270 h-auto  space-y-12'>
            <h1 className='font-bold text-2xl font-serif text-black tracking-wider'>DID YOU KNOW?</h1>
            <h4 className='text-gray-800'>If you laid all of the Smithfield Bacon that Waffle House® serves in a year, end-to-end, it would wrap all the way around the equator!  That’s over 25,000 miles of a Bacon Belt!!  If you could stack all of the Sausage Patties that Waffle House® serves in one day on top of each other, it would be nearly twice the size of the World’s Tallest Building, Burj Khalifa in Dubai or four times the size of the Empire State Building!  Now that’s a tall order!  If you poured all of the cups of Coffee that Waffle House® serves in one year, it would be enough to fill nearly 8 Olympic swimming pools!</h4>
            <h1 className='font-bold text-2xl font-serif tracking-widest'>EACH YEAR WE SERVE</h1>
            <div className='w-full flex gap-x-5'>

               <div className=' w-40 h-60 bg-yellow-400 flex space-y-3 justify-center flex-col items-center'>
                <img  className="w-10" src="/imgi_14_bacon-icon.svg" alt="" />
                <h1 className='font-bold text-4xl font-serif'>85</h1>
                <h1 className='font-bold text-lg'>MILLIONS</h1>
                <h1 className='text-sm font-bold font-serif text-gray-900'>Stripes of Bacons</h1>
               </div>

               <div className=' w-40 bg-yellow-400 h-60 flex space-y-3 justify-center flex-col items-center'>
                <img  className="w-10" src="/imgi_15_hashbrown-icon (1).svg" alt="" />
                <h1 className='font-bold text-4xl font-serif'>153</h1>
                <h1 className='font-bold text-lg'>MILLIONS</h1>
                <h1 className='text-sm font-bold  text-gray-900'>HashBrowns Orders</h1>
               </div>

               <div className=' w-40 bg-yellow-400 h-60 flex space-y-3 justify-center flex-col items-center'>
                <img  className="w-10" src="/imgi_16_waffle-icon.svg" alt="" />
                <h1 className='font-bold text-4xl font-serif'>124</h1>
                <h1 className='font-bold text-lg'>MILLIONS</h1>
                <h1 className='text-sm font-bold  text-gray-900'>Waffles</h1>
               </div>

               <div className=' w-40 bg-yellow-400 h-60 flex space-y-3 justify-center flex-col items-center'>
                <img  className="w-10" src="/imgi_17_coffee-icon.svg" alt="" />
                <h1 className='font-bold text-4xl font-serif'>58</h1>
                <h1 className='font-bold text-lg'>MILLIONS</h1>
                <h1 className='text-sm font-bold  text-gray-900'>Cup of Coffee</h1>
               </div>

               <div className='bg-yellow-400 w-40 h-60 flex space-y-3 justify-center flex-col items-center'>
                <img  className="w-10" src="/imgi_18_egg-icon.svg" alt="" />
                <h1 className='font-bold text-4xl font-serif'>272</h1>
                <h1 className='font-bold text-lg'>MILLIONS</h1>
                <h1 className='text-sm font-bold  text-gray-900'>Eggs</h1>
               </div>

               <div className='bg-yellow-400 w-40 h-60 flex space-y-3 justify-center flex-col items-center'>
                <img  className="w-10" src="/imgi_19_chicken-breast-icon.svg" alt="" />
                <h1 className='font-bold text-4xl font-serif'>10</h1>
                <h1 className='font-bold text-lg'>MILLIONS</h1>
                <h1 className='text-sm font-bold text-gray-900'>Chicken Breasts</h1>
               </div>
               
            </div>
            <div className=' w-full h-auto mt-5  '>
              <h1 className='text-2xl tracking-tight font-bold text-black'>SINCE 1955 , WE HAVE SERVED:</h1>

              <div className='w-full h-auto  flex flex-col  mt-7 gap-y-10'>
                      
                <div className='w-full bg-yellow-400 h-17 flex  '>   
                <div className='w-17 h-full bg-red-700 flex justify-center items-center'>
                 <img src="/egg-icon-white.svg" alt="" />
                </div>
                <div className=' w-250 h-full flex justify-end gap-x-5 items-center'>
                  <h1 className='text-xl font-bold '>4,913,840,337</h1> 
                  <h1 className='font-bold text-xl mr-3'>EGGS</h1>
                </div>
                <div className='w-20 h-full bg-gray-300 '></div>
                </div> 


                 <div className='w-full h-20  flex'>
                <div className='w-17 h-full bg-red-700 flex justify-center items-center'>
                 <img src="/hashbrown-icon-white.svg" alt="" />
                </div>
                <div className='bg-yellow-400 w-210 h-full flex justify-end gap-x-5 items-center'>
                  <h1 className='text-xl font-bold '>2,776,178,937</h1> 
                  <h1 className='font-bold text-xl mr-3'>HASHBROWN OREDRS</h1>
                </div>
                <div className='w-50 h-full bg-gray-300 '></div>
                </div>


                   
                  <div className='w-full h-20 flex '> 
                <div className='w-17 h-full bg-red-700 flex justify-center items-center'>
                 <img src="/waffle-icon-white.svg" alt="" />
                </div>
                <div className='bg-yellow-400 w-190 h-full flex justify-end gap-x-5 items-center'>
                  <h1 className='text-xl font-bold '>2,238,450,584</h1> 
                  <h1 className='font-bold text-xl mr-3'>WAFFLES</h1>
                </div>
                <div className='w-70 h-full bg-gray-300 '></div>
                </div> 


                    <div className='w-full h-20 flex '>
                <div className='w-17 h-full bg-red-700 flex justify-center items-center'>
                 <img src="/bacon-icon-white.svg" alt="" />
                </div>
                <div className='bg-yellow-400 w-170 h-full flex justify-end gap-x-5 items-center'>
                  <h1 className='text-xl font-bold '>1,538,153,195</h1> 
                  <h1 className='font-bold text-xl mr-3'>BACON STRIPS</h1>
                </div>
                <div className='w-90 h-full bg-gray-300 '></div>
                </div>


                 <div className='w-full h-20 flex '>
                <div className='w-17 h-full bg-red-700 flex justify-center items-center'>
                 <img src="/grits-icon-white.svg" alt="" />
                </div>
                <div className='bg-yellow-400 w-150 h-full flex justify-end gap-x-5 items-center'>
                  <h1 className='text-xl font-bold '>1,450,616,021</h1> 
                  <h1 className='font-bold text-xl mr-3'>ORDERS OF GIFTS</h1>
                </div>
                <div className='w-110 h-full bg-gray-300 '></div>
                </div>


                 <div className='w-full h-20 flex '>
                <div className='w-17 h-full bg-red-700 flex justify-center items-center'>
                 <img src="/coffee-icon-white.svg" alt="" />
                </div>
                <div className='bg-yellow-400 w-140 h-full flex justify-end gap-x-5 items-center'>
                  <h1 className='text-xl font-bold '>1,050,446,084</h1> 
                  <h1 className='font-bold text-xl mr-3'>CUPS OF COFFEE</h1>
                </div>
                <div className='w-120 h-full bg-gray-300 '></div>
                </div>


                 <div className='w-full h-20 flex '>
                <div className='w-17 h-full bg-red-700 flex justify-center items-center'>
                 <img src="/chicken-breast-icon-white.svg" alt="" />
                </div>
                <div className='bg-yellow-400 w-130 h-full flex justify-end gap-x-5 items-center'>
                  <h1 className='text-xl font-bold '>187,579,658</h1> 
                  <h1 className='font-bold text-xl mr-3'>CHICKEN BREASTS</h1>
                </div>
                <div className='w-130 h-full bg-gray-300 '></div>
                </div>

              </div>
            </div>
           </div>
    </div>

    <div className='w-full bg-blue-300 mt-15 h-25 flex justify-center items-center'>
      <h1 className='font-bold text-3xl font-sans tracking-widest text-neutral-900'>BEYOND THE MENU</h1>
      </div>

      <div className='w-full h-auto gap-y-40 flex justify-center items-center mt-8 flex-col '>
        <div className='w-260  h-auto flex mt-7 border-2 border-b-gray-800 border-x-0 p-8 '>


         <div className='border-4 rounded-full w-90 border-yellow-400 overflow-hidden'>
          <img className='w-40 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 rounded-full' src="/imgi_27_waffle-thumbnail.webp" alt="" />
          </div> 

         <div className='pl-4 space-y-4'>
          <h1 className='text-black font-bold text-xl font-sans tracking-wide'>WAFFLE HOUSE WAFFLES</h1>
          <h3 className='text-black text-sm font-normal '>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright, Carl Hilmar Guenther […]</h3>
          <h3 className='font-sans pl-3 hover:opacity-80 hover:underline font-bold '>READ MORE</h3>
         </div>

        </div>

        <div className='w-260  h-auto flex border-2 border-b-gray-800 border-x-0 p-8'>


         <div className='border-4 rounded-full w-90 border-yellow-400 overflow-hidden'>
          <img className='w-40 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 rounded-full' src="/imgi_28_Thumbnail.webp" alt="" />
          </div> 

         <div className='pl-4 space-y-4'>
          <h1 className='text-black font-bold text-xl font-sans tracking-wide'>WAFFLE HOUSE & SIMPLY BEVERAGES</h1>
          <h3 className='text-black text-sm font-normal '>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright, Carl Hilmar Guenther […]</h3>
          <h3 className='font-sans pl-3 hover:opacity-80 hover:underline font-bold '>READ MORE</h3>
         </div>

        </div>
        
        <div className='w-260  h-auto flex border-2 border-b-gray-800 border-x-0 p-8'>


         <div className='border-4  rounded-full w-90 h-auto border-yellow-400 overflow-hidden'>
          <img className='w-full cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 h-full object-cover  rounded-full' src="/imgi_21_dinner-sides-sorting@2x.webp" alt="" />
          </div> 

         <div className='pl-4 space-y-4 '>
          <h1 className='text-black font-bold text-xl font-sans tracking-wide'>WAFFLE HOUSE HASHBROWNS</h1>
          <h3 className='text-black text-sm font-normal '>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright, Carl Hilmar Guenther […]</h3>
          <h3 className='font-sans pl-3 hover:opacity-80 hover:underline font-bold '>READ MORE</h3>
         </div>

        </div>
         



         <div className='w-260  h-auto flex border-2 border-b-gray-800 border-x-0 p-8'>


         <div className='border-4 rounded-full w-90 border-yellow-400 overflow-hidden'>
          <img className='w-40 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 rounded-full' src="/imgi_30_eggs2.webp" alt="" />
          </div> 

         <div className='pl-4 space-y-4'>
          <h1 className='text-black font-bold text-xl font-sans tracking-wide'>WAFFLE HOUSE EGGS</h1>
          <h3 className='text-black text-sm font-normal '>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright, Carl Hilmar Guenther […]</h3>
          <h3 className='font-sans pl-3 hover:opacity-80 hover:underline font-bold '>READ MORE</h3>
         </div>

        </div>


         <div className='w-260  h-auto flex border-2 border-b-gray-800 border-x-0 p-8'>


         <div className='border-4 rounded-full w-90 h-auto border-yellow-400 overflow-hidden'>
          <img className='w-full cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 h-full object-cover rounded-full ' src="/milk-post-header@2x.webp" alt="" />
          </div> 

         <div className='pl-4 space-y-4'>
          <h1 className='text-black font-bold text-xl font-sans tracking-wide'>WAFFLE HOUSE DAIRY</h1>
          <h3 className='text-black text-sm font-normal '>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright, Carl Hilmar Guenther […]</h3>
          <h3 className='font-sans pl-3 hover:opacity-80 hover:underline font-bold '>READ MORE</h3>
         </div>

        </div>
        


         <div className='w-260  h-auto flex border-2 border-b-gray-800 border-x-0 p-8'>


         <div className='border-4 rounded-full w-90 bg-amber-900 border-yellow-400 overflow-hidden'>
          <img className='w-40 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 rounded-full' src="/imgi_32_coffee.webp" alt="" />
          </div> 

         <div className='pl-4 space-y-4'>
          <h1 className='text-black font-bold text-xl font-sans tracking-wide'>WAFFLE HOUSE COFFEE</h1>
          <h3 className='text-black text-sm font-normal '>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright, Carl Hilmar Guenther […]</h3>
          <h3 className='font-sans pl-3 hover:opacity-80 hover:underline font-bold '>READ MORE</h3>
         </div>

        </div>
        


         <div className='w-260  h-auto flex border-2 border-b-gray-800 border-x-0 p-8'>


         <div className='border-4 rounded-full w-90 border-yellow-400 overflow-hidden'>
          <img className='w-40 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 rounded-full' src="/imgi_33_thumbnail.webp" alt="" />
          </div> 

         <div className='pl-4 space-y-4'>
          <h1 className='text-black font-bold text-xl font-sans tracking-wide'>WAFFLE HOUSE & COCA-COLA® </h1>
          <h3 className='text-black text-sm font-normal '>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright, Carl Hilmar Guenther […]</h3>
          <h3 className='font-sans pl-3 hover:opacity-80 hover:underline font-bold '>READ MORE</h3>
         </div>

        </div>
        


         <div className='w-260  h-auto flex border-2 border-b-gray-800 border-x-0 p-8'>


         <div className='border-4 rounded-full w-90 border-yellow-400 overflow-hidden'>
          <img className='w-40 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300  rounded-full' src="/imgi_34_chickenthumb.webp" alt="" />
          </div> 

         <div className='pl-4 space-y-4'>
          <h1 className='text-black font-bold text-xl font-sans tracking-wide'>WAFFLE CHICKEN</h1>
          <h3 className='text-black text-sm font-normal '>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright, Carl Hilmar Guenther […]</h3>
          <h3 className='font-sans pl-3 hover:opacity-80 hover:underline font-bold '>READ MORE</h3>
         </div>

        </div>
        
      </div>
     <div className='mt-25'><FooterSection /></div> 
    </>
  )
}

export default Beyond