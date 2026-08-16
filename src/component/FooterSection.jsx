import React from "react";

const FooterSection = () => {
  return (
    <footer className="w-full">
      <div className="w-full h-7 bg-yellow-400 flex items-center">
        <div
          className="w-full h-6"
          style={{
            backgroundImage: "url('/imgi_53_diamond-border.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

     <div className="w-full h-30 flex justify-center gap-x-30 items-center pt-5">
      <div className="w-370  py-4 flex flex-col justify-center ml-5 gap-2">
        <div className="flex flex-wrap  gap-2 text-black text-sm font-medium">
          <a href="#" className="hover:underline">PRIVACY NOTICE</a>
          <span>|</span>
          <a href="#" className="hover:underline">CONTACT</a>
          <span>|</span>
          <a href="#" className="hover:underline">FAQ</a>
          <span>|</span>
          <a href="#" className="hover:underline">SURPLUS PROPERTIES</a>
          <span>|</span>
          <a href="#" className="hover:underline">WEBSITE ACCESSIBILITY</a>
          <span>|</span>
          <a href="#" className="hover:underline">ASSOCIATE LOGIN</a>
        </div>

        <div className="text-xs text-gray-600 mt-2">
          &copy; 2026 Your Company. All rights reserved.
        </div>
        </div>
         <div className="w-250 h-full flex items-center  "><div className="flex  h-20 w-full justify-center items-center gap-x-17">
          <i className="fa-brands fa-2x fa-facebook-f hover:text-gray-800 cursor-pointer"></i>
          <i className="fa-brands fa-2x fa-x-twitter hover:text-gray-800 cursor-pointer"></i>
          <i className="fa-brands font-bold fa-2x fa-instagram hover:text-gray-800 cursor-pointer"></i>
          <i className="fa-brands fa-2x fa-tiktok hover:text-gray-800 cursor-pointer"></i>
          </div>
          </div>
      </div>
    </footer>
  );
};

export default FooterSection;
