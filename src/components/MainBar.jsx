import React, {useState,useRef} from 'react';
import { FaBell } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { FaDropbox } from "react-icons/fa6";
import { FaSlackHash } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import ProfileInfo from './ProfileInfo';
import PostInfo from './PostInfo';

const Mainbar = () => {

 
  return (
    <div className="w-5/6 p-2 ">
      <div className='flex flex-row items-center justify-end gap-6 bg-white p-1 border-white-300 shadow-md '>
        <span className='flex gap-2 border-white-300'>
          <CiSearch size={24} color='black' className='items-center justify-center mt-2 border-white '/>
          <input className='p-2 outline-none rounded-md' placeholder='Search' /> </span>
      <FaRegBell size={26} className=' border-2 border-gray-200 m- text-violet-400' />
      <MdOutlineEmail size={26}  className=' border-2 border-gray-200 text-violet-400' />
      <img src='randomgirl.png' className='w-10 h-10 rounded-full' />
      </div>
      <div className="mt-4 relative">
        <img src='bluebg.png' className='w-full h-40' />
        <img src='randomgirl.png'  className='w-40 h-40 rounded-full absolute top-20 left-10' />
          
        <div className='flex flex-row gap-8 '>
        
         <ProfileInfo />
         <PostInfo />
       
        </div>
        </div>
    </div>
  );
};

export default Mainbar;


