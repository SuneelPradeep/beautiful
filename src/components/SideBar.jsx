import React from 'react';
import { BiSolidHome } from "react-icons/bi";
import { FaToolbox } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdDataExploration } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-1/6 p-4 bg-white border border-white-300 shadow-md" >
      <div className="mb-8 flex flex-row gap-2 text-center  items-center justify-center">
        <img src="./sephora.png" alt='logo' className='w-10 h-10' />
        <p className="text-xl font-bold mb-4">Spehre </p>
        <hr />
      </div>
      <div className="mb-8 ">
      <div className='flex flex-col items-start mx-4 gap-2 justify-start'>
        <span className='flex flex-row gap-4 items-center'> <BiSolidHome className='text-violet-400' />Home</span>
         
          <span className='flex flex-row gap-4 items-center'><FaToolbox className='text-violet-400'  />Job Invites</span>
          <span className='flex flex-row gap-4 items-center'><IoAnalytics className='text-violet-400'  />Analytics</span>
          <span className='flex flex-row gap-4 items-center'><FaUser  className='text-violet-400' />My Profile</span>
          <span className='flex flex-row gap-4 items-center'><MdDataExploration className='text-violet-400'  />Explore</span>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="text-lg font-bold mb-2 mt-2  items-start text-start mx-4">Communities Feed</h2>
        <div className='flex flex-col items-start gap-3 text-start '>
          <span className='flex flex-row gap-4 items-center'><img src='uidesigner.png' className='w-10 h-10 rounded-full'/><p>Indonesia UI Designer</p></span>
          <span className='flex flex-row gap-4 items-center'> <img src='uxresearch.jpg'  className='w-10 h-10 rounded-full'/><p>Indonesia UX Research</p></span>
          <span className='flex flex-row gap-4 items-center'> <img src='club.png' className='w-10 h-10 rounded-full' /> <p>Prototyping Club</p></span>
          <span className='flex flex-row gap-4 items-center'><img src='user.png' className='w-10 h-10 rounded-full'  /> <p>Indonesia UI Designer</p></span>
          <span className='flex flex-row gap-4 items-center '> <p className='ml-10 items-center text-center text-violet-400'>Show 5 more </p><FaChevronRight className='text-violet-400' /></span>
        
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
