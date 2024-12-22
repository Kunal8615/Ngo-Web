import React from 'react';
import HoriCard from '../component/Header/horiCard.jsx';
import logo from "../images/logo.png";
import Nsif from "../component/nsif.jsx";

function About() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-800">
        {/* Horizontal Card */}
        <div className="w-full md:w-2/3">
          <HoriCard />
        </div>
        
        {/* Logo Section */}
        <div className="flex justify-center items-center w-full md:w-1/3 h-72">
          <img 
            src={logo} 
            alt="Logo" 
            className="object-contain w-40 md:w-72 h-40 md:h-72"
          />
        </div>
      </div>

      {/* NSIF Section */}
      <div className="p-4">
        <Nsif />
      </div>
    </>
  );
}

export default About;
