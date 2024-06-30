import React from 'react';
import contactImg from "../assets/contact.png";
import { FaPhoneAlt } from "react-icons/fa";

const contact = () => {
  return (
  <div 
  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
  className='bg-[#113D3C] w-[80%] h-[150px] m-auto rounded-[20px] mt-[250px] relative max-lg:w-full max-lg:h-auto max-lg:p-[10px] ' id="contact">
  <img src={contactImg} className='absolute  left-[-50px] top-[-50px] w-[150px] max-lg:relative max-lg:m-auto max-lg:left-0'/>
  <div className='flex justify-center gap-[20px] mt-[100px]  h-full items-center font-heroFont max-lg:flex-col max-lg:mt-0 '>
  <p className='text-white text-center text-[2rem] font-bold'>Give Us A Call:</p>
  <p className='text-white text-[2rem]'>(123)456-789 </p> <FaPhoneAlt className='text-green-700' size={40}/>
  </div>
  </div>
  )
}

export default contact