import React from 'react';
import { MdPestControl } from "react-icons/md";
import footerImg from "../assets/footerImg.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { TbBackground } from 'react-icons/tb';


const Footer = () => {
  return (
<>
<footer className='w-full h-[350px]  text-white mt-[200px] relative '>
<div className="w-full h-full relative  bg-footerImage bg-fixed bg-no-repeat bg-cover">

<div className='absolute w-full h-[350px] bg-black/50' ></div>

      <div className='absolute w-full top-[20%] p-4 md:p-8  '>
      <h2 className='text-[2rem] flex items-center'> <MdPestControl className='text-green-900' size={40}/> Pest <span className='text-green-900 font-extrabold text-[2.3rem]'>Control</span></h2>
      <div className='flex'>
      <p className='text-white text-[2rem]'>(123)456-789 </p> <FaPhoneAlt className='text-green-700' size={40}/>
      </div>
    

      </div>
</div>
<h3 className='text-white absolute right-0 bottom-0 max-lg:right-[20px]'> &copy; 2024 All Rights Reserved</h3>
</footer>
</>
  )
}

export default Footer