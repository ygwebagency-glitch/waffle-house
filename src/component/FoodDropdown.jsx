import React, { useState } from "react";
import Breakfastbutton from "./Breakfastbutton";
import { Link } from "react-router-dom";


export default function FoodDropdown({activeDropdown,setActiveDropdown}) {
  const toogleDown=(Food)=>{
    if (activeDropdown===(Food))
       { setActiveDropdown(null) }
   else
    { setActiveDropdown(Food)}
  }
  return (
    <div className="relative">

      <button
        onClick={() => setActiveDropdown(activeDropdown==='Food'? null:'Food')}
        className="flex items-center  space-x-1 text-black hover:opacity-80 font-bold hover:underline focus:outline-none"
      >
        FOOD
      </button>

 
      {activeDropdown==='Food' && (
        <div className="absolute -left-115 border-2 mt-11 flex bg-white gap-x-10 p-5  border-gray-200 shadow-lg  flex-row  z-50 w-190 h-auto">
          
        <div className="flex flex-col  items-center  gap-y-5 w-120 ">
          <div className="w-30 flex justify-center overflow-hidden border-4 border-yellow-300 rounded-full">
            <img
              src="/brkfst-favs-nav-img@2x.webp"
              alt="Breakfast"
              className="w-30 h-30 object-cover transition-transform  cursor-pointer duration-700 hover:scale-110  ease-in-out "
            />
        </div>
        <div className="w-full flex  justify-center">
         <Link to="/breakfast-neutritional" onClick={()=>setActiveDropdown(null)}><h1 className="font-medium w-50 hover:opacity-80 hover:underline text-sm">BREAKFAST NEUTRITIONALS</h1></Link> 
            </div> 
        </div>

        <div className="flex flex-col w-120 items-center gap-y-5 ">
           <div className="w-30 flex justify-center overflow-hidden border-4 border-yellow-300 rounded-full ">
             <img
              src="/lunch-dinner-favs-nav-img@2x.webp"
              alt="Lunch & Dinner"
              className="w-30 h-30 transition-transform cursor-pointer duration-700 hover:scale-110 object-cover ease-in-out "
            />
            </div>
            <div className="flex w-full justify-center ">
           <Link to="/lunch-and-dinner-neutritionals" onClick={()=>setActiveDropdown(null)}> <h1 className=" font-medium w-55 hover:opacity-80 hover:underline text-sm">LUNCH & DINNER NUTRITIONALS</h1></Link>
           </div> 
        </div>


         <div className="flex flex-col gap-y-7 w-50 p-4 text-white  ">
           <div className="flex flex-wrap items-center w-full">
           <div><span className="text-xl ">👨‍🍳</span></div> 
            <div>
              
            <Link to="/catering" onClick={()=> setActiveDropdown(null)}> <h1 className="font-medium flex flex-wrap text-black hover:opacity-80 hover:underline text-sm">CATERING</h1></Link> </div>
            </div>   
           <div className="flex  w-50 justify-center  items-center">
            <div className="w-full"><span className="text-xl w-full">🛎️</span></div>
            <div className=" w-470 ">
            <Link to="/beyond-the-menu" onClick={()=> setActiveDropdown(null)}><h1 className="font-medium  text-black hover:opacity-80 hover:underline text-sm">BEYOND THE MENU</h1></Link> 
              </div>
            </div>   
           <div className="flex flex-wrap w-full items-center">
            <div className="ml-2"><i class="fa-solid  fa-heart text-yellow-400 text-xl"></i></div>
             
           <div > <h1 className=" ml-1 font-medium  text-black hover:opacity-80 hover:underline text-sm">FULL NUTRITIONAL</h1></div>
            </div>   
          </div>

        </div>
      )}
    { activeDropdown &&(
      <div className="z-40 fixed inset-0 " 
      onClick={()=> setActiveDropdown(null)}
      ></div>
    )}
      </div>
        );
      }
    
  

