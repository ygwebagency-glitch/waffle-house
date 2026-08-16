import React from 'react'

function MoreDropdown({activeDropdown,setActiveDropdown}){
    const toogleDown = (more) => {
        if(activeDropdown === more){
            setActiveDropdown(null)
        }
        else{
            setActiveDropdown(more)
        }
    }

    return(
        <div className='relative inline-block'>
         
         <button
            onClick={() =>
                setActiveDropdown(activeDropdown==='more' ? null : 'more')
            }
            className='space-x-1 relative hover:opacity-80 font-bold z-50 flex items-center hover:underline text-gray-900 focus:outline-none gap-x-3'
         >
            <h1>MORE</h1>
            <img className='bg-yellow-400 rounded-xl' width="50" height="50" src="https://img.icons8.com/ios/50/menu-squared-2.png" alt="menu-squared-2"/>
         </button>

         {/* Dropdown */}
         <div className={`absolute -right-10  -translate-y-10 transform transition-transform ease-in-out duration-700  w-90 bg-white z-40 shadow-lg ${activeDropdown==='more'? 'translate-x-0 ':'translate-x-full '}`}>
              
              <div className='w-full bg-yellow-400 h-27'></div>
              <div className='w-full h-full flex '>
                <div className='h-full w-1/2 flex flex-col items-center pl-2'>

                    <div className='flex justify-center mt-2  items-center   flex-col  space-y-2 font-medium '>
                        <div className='overflow-hidden rounded-full border-yellow-400 border-4'><img className='w-25  rounded-full  duration-300 cursor-pointer transition-transform ease-in-out hover:scale-110' src="/imgi_7_regulars-nav-img@2x.png" alt="" /></div>
                        <h1 className='text-sm w-22 hover:underline duration-300 hover:opacity-80'>OUR STORY</h1>

                    </div>
                    <div className='flex justify-center flex-col items-center space-y-2 mt-6 font-medium'>
                       <div className='overflow-hidden rounded-full border-yellow-400 border-4 '> <img className='w-25  rounded-full   duration-300 cursor-pointer transition-transform ease-in-out hover:scale-110' src="/imgi_9_our-story-nav-img@2x.png" alt="" /></div> 
                        <h1 className='text-sm w-22 hover:underline duration-300 hover:opacity-80'>OUR STORY</h1>
                    </div>
                    <div className='flex justify-center rounded-full flex-col items-center space-y-2 mt-6 font-medium'>
                      <div className='overflow-hidden rounded-full border-yellow-400  border-4'> <img className='w-25 rounded-full  duration-300 cursor-pointer transition-transform ease-in-out hover:scale-110' src="/imgi_11_waffle-museum-nav-img@2x.png" alt="" /></div>  
                        <h1 className='text-sm w-17 hover:underline duration-300 hover:opacity-80'>MUSEUM</h1>
                    </div>
                </div>
                
                <div className='h-full w-1/2 flex flex-col mt-2  items-center pr-2'>
                    <div className='flex justify-center  flex-col items-center space-y-2  font-medium'>
                        <div className='overflow-hidden rounded-full border-yellow-400  border-4'><img className='w-25  rounded-full   duration-300 cursor-pointer transition-transform ease-in-out hover:scale-110' src="/imgi_8_news-room-nav-img@2x.png" alt="" /></div> 
                        <h1 className='text-sm w-22 hover:underline duration-300 hover:opacity-80 '>NEWSROOM</h1>
                    </div>
                    <div className='flex justify-center flex-col items-center space-y-2 mt-6 font-medium'>
                        <div className='overflow-hidden rounded-full border-yellow-400  border-4'><img className='w-25  rounded-full  duration-300 cursor-pointer transition-transform ease-in-out hover:scale-110' src="/imgi_10_giving-back-nav-img@2x.png" alt="" /></div> 
                        <h1 className='text-sm w-22 hover:underline duration-300 hover:opacity-80'>GIVING BACK</h1>
                    </div>
                    <div className='flex justify-center flex-col  items-center space-y-2   mt-6 font-medium '>
                        <div className='overflow-hidden rounded-full border-yellow-400  w-27 h-27  border-4'> <img className='w-full h-full  rounded-full object-cover   duration-300 cursor-pointer transition-transform ease-in-out hover:scale-110' src="/imgi_50_jukebox-desktop@2x.jpg" alt="" /></div> 
                        <h1 className='text-sm w-13 hover:underline duration-300 hover:opacity-80'>MUSIC</h1>
                    </div>

                </div>

              </div>
         </div>

         {/* Overlay */}
         {activeDropdown && (
            <div 
                className='fixed inset-0 z-10 '
                onClick={()=> setActiveDropdown(null)}
            ></div>
         )}

        </div>
    )
}

export default MoreDropdown;
