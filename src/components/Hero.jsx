import React,{useEffect} from 'react';
import hero_img from "../assets/hero_img.png";
import AOS from "aos";
import "aos/dist/aos.css"


const Hero = () => {



  return (
   <>
   <div 
        data-aos="fade-right"
         data-aos-duration="1000"
  
   className='w-[90%] h-[90vh] bg-[#113D3C] m-auto rounded-[20px] overflow-auto max-lg:w-full max-lg:bg-white '>

    <div className='w-[90%] h-[90%] bg-white m-auto mt-[40px] rounded-[20px] relative overflow-hidden text-[#333333] font-heroFont ' >
          <div className='w-[500px] h-auto mt-[50px] ml-[50px] max-lg:w-full max-lg:m-0  items-center text-center'>
            <h1 className='text-[3rem] font-bold mb-[20px]'>Your First Line of Defense Against Pests</h1>
            <p className='text-[1.1rem] leading-7'>At Guardian Pest Solutions, we provide fast, effective, and eco-friendly pest control services to protect your home and business.Our certified experts use the latest techniques to ensure your space is pest-free, giving you peace of mind and a healthier environment. Trust Guardian Pest Solutions for reliable results and exceptional customer care</p>
           <a href="#services"><button className='bg-[#FF6F61] rounded-[10px] p-[10px] text-[white] font-bold ml-[160px] mt-[50px] w-[150px] max-lg:mt-[20px] max-lg:ml-0'>What We Offer</button></a>
          </div>

            {/* left side*/}

            <div className='w-[500px] h-[95%] bg-[#113D3C] absolute right-[10px] top-[14px] rounded-[20px] max-sm:hidden max-lg:w-full max-lg:top-[500px] max-lg:h-screen'>
                <img 
                 className='absolute right-[200px] drop-shadow-lg w-[490px]'
                src={hero_img} alt="pest control technicians"/>

            </div>
    </div>

   </div>
   </>
  )
}

export default Hero