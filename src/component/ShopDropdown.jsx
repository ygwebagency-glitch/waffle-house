import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ShopDropdown({activeDropdown,setActiveDropdown}) {
  const toogleDown=(shop)=>{
    if(activeDropdown===shop){
        setActiveDropdown(null)
    }
    else{
        setActiveDropdown(shop)
    }
  }
  return (
    <div className="relative">

      <button
        onClick={() => setActiveDropdown(activeDropdown==='shop'? null: 'shop')}
        className="flex items-center  space-x-1 text-black hover:opacity-80 font-bold hover:underline focus:outline-none"
      >
        SHOP
      </button>

 
      {activeDropdown==='shop' && (
        <div className="absolute -left-55  mt-11 flex bg-white gap-x-13  border-gray-200 shadow-lg  flex-row  z-40 w-90 h-auto">
          <div className="w-full border-2 flex justify-center p-3 gap-x-5">

          <div className="flex justify-center flex-col gap-y-5 items-center">

            <div className="w-full rounded-full border-4 border-yellow-300 overflow-hidden">
              <img className="w-30 transition-transform cursor-pointer duration-700 hover:scale-110 object-cover ease-in-out" src="/imgi_6_merchandise-nav-img@2x.png" alt="" />
              </div>
             <Link to="/gifts-cards" onClick={()=> setActiveDropdown(null)}><h1 className="text-sm  font-medium hover:underline tracking-tight hover:opacity-80  text-black">GIFTS CARDS</h1></Link> 
              </div>
          <div className="flex justify-center h-auto w-auto flex-col gap-y-5 items-center">
            
            <div className="w-full h-auto rounded-full border-4 border-yellow-300 overflow-hidden">
              <img className="w-30 transition-transform cursor-pointer duration-700  hover:scale-110" src="/imgi_7_regulars-nav-img@2x.png" alt="" />
              </div>
             <Link to="/marshandise" onClick={()=> setActiveDropdown(null)}><h1 className="text-sm tracking-tight font-medium  hover:opacity-80 hover:underline inline-block cursor-pointer text-black">MERCHENDISE</h1></Link> 
              </div>
          </div>
        </div>
      )}
      {activeDropdown && (
        <div className="z-30 inset-0 fixed" 
        onClick={()=> setActiveDropdown(null)}
        ></div>
      )}
    </div>
   
  );
}
