import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";

const WriteComment = () => {
  return (
    <div>
         <span className='flex gap-2 border-white-300 mt-2 items-center mb-2'>
          <img src="randomgirl.png" className='w-10 h-10 rounded-full ' />
          <input className='w-full p-2 outline-none rounded-md' placeholder='write a comment' /> 
          <span className='justify-end mr-6 gap-4 flex'><MdOutlineEmojiEmotions size={20} className='text-gray-500' /> <RiGalleryLine size={20}   className='text-gray-500'/></span>
          </span> 
    </div>
  )
}

export default WriteComment