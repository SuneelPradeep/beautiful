import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import Reply from './Reply';
import WriteComment from './WriteComment';

const SinglePost = ({name,commentsList, description, time ,avatar,postpic,community,likecount,commentcount}) => {
  return (
    <div >
  <div className="flex items-center mb-4">
    <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
    <div>
      <p className="font-bold text-start">{name}</p>
      <p className="text-gray-500 text-xs">{time} mins ago on <span className='font-semibold'>{community} Community </span></p>
    </div>
  </div>
  <div className="mb-4">
    <p className="text-gray-800 text-sm font-heavy text-start">
   {description}
    </p>
    {postpic && <img src={postpic} alt="Code Example" className="w-full h-48 object-cover mt-4" /> }
  </div>


  <div className="flex items-center mb-4 text-gray-500 gap-8">
    <span className='flex gap-2 flex-row items-center' ><AiOutlineLike className='text-violet-400' size={20} /> {likecount} </span>
    <span className='flex gap-2 flex-row items-center'><MdOutlineComment  size={20} /> {commentcount} </span>
    <BsSend size={20}/>
   
  </div>
  <hr />
  <WriteComment />
  {commentsList &&(
    <>
 <Reply type='reply' name="Lina Chan" avatar="somegirl.jpg" likecount={5} replycount={1} comment="I loved Northern Ireland and spent some of the very memorable days" />
 <Reply type='extrareply' name='Monica Xavier' avatar="somegirl2.jpg"  comment={"I agree with this"
 }/>
  
  <button className="text-gray-500">Load more comments</button>
 </>
  )}
 

 
  </div>
  )
}

export default SinglePost