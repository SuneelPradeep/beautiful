import React, { useState } from 'react'
import SinglePost from './SinglePost';



const PostInfo = () => {
    
    const [selectedNavItem, setSelectedNavItem] = useState('posts');

    const handleNavItemClick = (navItem) => {
      setSelectedNavItem(navItem);
    };
  return (

    <div className="flex flex-col w-3/4 border-b-2 mb-4 mt-2 bg-white border border-white p-4 rounded-md shadow-md">
    <nav className="flex mb-4 justify-evenly items-center">
      <p onClick={()=> handleNavItemClick('about')} href="/about"  className={`text-gray-500 mr-4  ${selectedNavItem==='about' ? 'border-b-4 border-blue-400' : ''} `}>About</p>
      <p  onClick={()=> handleNavItemClick('skills')}href="/skills"  className={`text-gray-500 mr-4  ${selectedNavItem==='skills' ?  'border-b-4 border-blue-400' : ''} `}>Skills & Certificates</p>
      <p  onClick={()=> handleNavItemClick('posts')}href="/posts" className={`text-gray-500 mr-4  ${selectedNavItem==='posts' ?  'border-b-4 border-blue-400' : ''} `} >Posts</p>
      <p  onClick={()=> handleNavItemClick('spaces')}href="/spaces" className={`text-gray-500 mr-4  ${selectedNavItem==='spaces' ? 'border-b-4 border-blue-400' : ''} `}>Spaces</p>
    </nav>
  <hr className='mb-2' style={{height:'1rem',lineHeight:'2rem'}} />
  <SinglePost name="Karim Saif" description="What is the reason guys, yesterday I uploaded same type of content and they approved it and today I tried to upload they say we no longer accept this" 
  time={14} postpic="coding.jpg" commentsList={true} avatar="someguy.jpg" community="Figma" likecount="1.9k" commentcount={45} />


  <SinglePost name="Karim Saif"  time={20} likecount="5.3k" commentcount={5} community="Figma" avatar="someguy.jpg" description="Need a project that earns me money .I am a developer with around 13years of experience.And recently I was laid off and it feels challenging to me and I have lots of time to focus on .In my free time I read books, plants vegetables and still feels boring "  />
</div>
  )
}

export default PostInfo