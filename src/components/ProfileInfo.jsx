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

const ProfileInfo = () => {

 const [isChecked, setChecked] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);
  
    const handleSliderChange = (e) => {
      setSliderValue(e.target.value);
    };
    const handleToggle = () => {
      setChecked(!isChecked);
    };
    const fileInputRef = useRef(null);
  
    const handleFileClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
    };
      // const colors = ['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f'];
    
  return (
    <div className='flex flex-col w-1/4 mt-0 bg-white border border-white-300 px-2  shadow-md'> 
            <div className='mt-24 text-center justify-center items-center mb-4'>
             <p> Arya Maximus</p>
             <p className='text-gray-400 pt-1'> UI/UX Developer </p>
             <span className='flex flex-row gap-2 text-center pt-1 '><MdGroups size={28} /> 21 followers <p> 43 following </p> </span>
            </div>
            <div className='flex flex-row gap-2'>
             <span className='flex flex-row gap-1'> <p className='text-sm whitespace-no-wrap font-semibold'>Make my profile visible to employers </p>
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div className={`w-10 h-6 ${isChecked ? 'bg-violet-400' : 'bg-gray-300'} rounded-full shadow-inner`}>
        <div
          className={`w-6 h-6 bg-white rounded-full shadow toggle__dot transform ${
            isChecked ? 'translate-x-4' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </label></span>
    </div>
            <p className='mt-2 mb-2 text-xs text-ellipsis text-gray-400 text-start '> Your profile and career goals will appear when employers search our database for candidates</p>
           <span className='flex flex-row gap-1 justify-between'> 
           <p className='text-sm whitespace-no-wrap font-semibold'>Online Links </p>
           <CiCirclePlus size={24} className='text-violet-500' />
            </span>
            <p className='mt-2 mb-2 text-xs text-ellipsis text-gray-400 text-start'> Add your online portfolio links to increase your profile strength </p>
           <div>
           <div className="relative bg-gray-100 p-4 gap-4 rounded-md shadow-md flex items-center justify-center cursor-pointer">
      <FaDropbox size={20} color='blue' />
       <BiLogoNetlify size={20} color='blue' />
       <FaSlackHash  size={20} color='blue'/>
     

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      </div>
    <div>
     <div className="bg-violet-100 mt-8 p-8 rounded-md relative">
      <div className="flex items-center mb-4">
       <span className='flex flex-row whitespace-nowrap'> <h2 className="text-sm font-bold mr-2">Wheel of Opportunities</h2>
       <CiCircleInfo size={20} color='blue' />
       </span>
        
      </div>

      <div className="relative w-40 h-40 mx-auto">
       
        <div className="w-40 h-40 flex items-center justify-center bg-white rounded-full border-2 border-blue-500">
          <div className="w-36 h-36 flex items-center justify-center border-2 border-blue-200 rounded-full p-4">
          
          </div>
        </div>

       
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-2xl font-bold text-blue-400">350</h1>
          <p className="text-sm font-semibold whitespace-nowrap">Sphere Rating</p>
        </div>
      </div> 
    </div>
    </div>

    <div>
    <div className=" p-8 rounded-md">
      <h3 className="text-lg font-bold mb-4">Your Ranking</h3>

      
      <div className="flex items-center">
        <div className="relative w-full">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="slider-input w-full"
          />
     
        </div>
      </div>
      <div className="mt-4">
        <p style={{marginLeft:'-1rem'}} className=" font-bold text-sm whitespace-nowrap">Hurray! You are in the top <span className='text-blue-400 text-lg ml-2'>{sliderValue}%</span></p>
      </div>
    </div>
    </div>
           </div>
            </div>
  )
}

export default ProfileInfo