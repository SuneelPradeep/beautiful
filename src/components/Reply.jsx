import React from 'react'

const Reply = ({type,avatar,name, comment, likecount, replycount}) => {
  return (
    <div className={`flex items-center  ${type==="reply" ? 'mb-2' : 'ml-10 '}`}>
    {avatar && <img src={avatar} alt="Kashish Ray Avatar" className="w-8 h-8 rounded-full mr-2 mb-8" /> }
    <div className='text-start'>
      <p className="font-bold text-blue-400"> {name} </p>
      <p className="text-gray-800 text-sm"> {comment} </p>
      <div className="flex items-center mb-4 text-gray-500 gap-4">
    {type==='reply' && (
    <>
    <span className=' items-center' >Like </span> 
    <span className=' items-center' > {likecount} </span>
    <span className=' items-center'>Reply </span>
     <span className=' items-center'> {replycount} reply </span>
     </>)}
   </div>
    </div>
   
  </div>
  )
}

export default Reply