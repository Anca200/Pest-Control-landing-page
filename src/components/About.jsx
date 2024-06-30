import React, { useEffect } from 'react';
import { FaLeaf } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"


const About = () => {
  useEffect(() => {
     AOS.init({duration: 2000})
  },[])

  return (
  <>
  <div className='w-full h-auto overflow-hidden mt-[200px] font-heroFont max-lg:mt-0' id="about">
  <h2 className='text-center  text-[3rem] font-bold text-[#333333] mb-[50px] '>Why <span className='text-green-900 font-extrabold'>Choose</span> Us?</h2>

    <div className='w-[90%] h-[500px] relative bg-[#113D3C] m-auto rounded-[20px] max-lg:w-full max-sm:h-[110vh] max-lg:h-[55vh]'>

        <div className='absolute w-full top-[20%] p-4 flex gap-[20px] text-center justify-around  max-lg:flex-col max-lg:top-0'>
       <div 
       data-aos="fade-up"
       className='text-[#333333]   bg-white rounded-[20px] p-[10px] w-[550px] max-lg:w-full max-lg:h-auto'>
       <h2  className='text-[1.5rem]  mb-[10px] text-green-800 font-extrabold'>Our Mission</h2>
        <p className='leading-7'>At Guardian Pest Solutions, our mission is to protect your home and business from unwanted pests, ensuring a safe and comfortable environment for you and your loved ones. With over 20 years of experience in the pest control industry, our team of certified professionals is dedicated to delivering effective and eco-friendly pest management solutions tailored to your specific needs.</p>
        <FaLeaf className='m-auto mt-[10px] text-green-700' size={40}/>
       </div>
       <div 
        data-aos="fade-up"
       className='text-[#333333]   bg-white rounded-[20px] p-[10px] w-[550px] max-lg:w-full max-lg:h-auto'>
       <h2 className='text-[1.5rem] font-extrabold mb-[10px] text-green-800'>We Work For You</h2>
        <p className='leading-8'>Customer satisfaction is our top priority. We pride ourselves on our prompt response times, thorough inspections, and transparent communication. From the initial consultation to the completion of our services, we work closely with you to address your concerns and ensure your complete satisfaction.</p>
        <FaHome  className='m-auto mt-[20px]  text-green-700' size={40} />
       </div>
      
    </div>

</div>
  </div>
  </>
  )
}

export default About