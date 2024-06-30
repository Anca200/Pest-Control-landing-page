import React from 'react';
import ants from "../assets/ants.png";
import flyers from "../assets/flyers.png";
import gardenPests from "../assets/gardenPests.png";
import roaches from "../assets/roaches.png";
import rodents from "../assets/rodents.png";
import spiders from "../assets/spiders.png";

const Services = () => {
  return (
   <>
   
   <div className='mt-[100px] items-center text-center font-heroFont' id="services">
    
   <h2 className='font-bold text-[3rem] mb-[100px] text-[#333333]'>What We <span className='text-green-900 font-extrabold'>Offer</span></h2>
    <div className='grid grid-cols-3 gap-y-[100px] max-lg:grid-cols-2 '>

   {/*Item 1*/}
   <div 
   data-aos="flip-right"
     data-aos-duration="1000"
   className='flex flex-col items-center'>
    <div className='w-[100px] h-[100px] rounded-[50%]  overflow-hidden text-center border-2 border-green-700 hover:bg-green-900/30 cursor-pointer hover:scale-110 hover:duration-700 duration-700 mb-[10px]'>
    <img src={rodents} alt="rodent"/>
    </div>
    <p className='text-[#333333] text-[1.3rem] font-bold'>Rodents  <span className="text-green-900">Control</span></p>
    </div>

   {/*Item 2*/}
   <div 
   data-aos="flip-right"
     data-aos-duration="1000"
   className='flex flex-col items-center'>
    <div className='w-[100px] h-[100px] rounded-[50%] overflow-hidden text-center border-2 border-green-700 hover:bg-green-900/30 cursor-pointer  hover:scale-110 hover:duration-700 duration-700 mb-[10px]'>
    <img src={spiders} alt="spider"/>
</div>
<p className='text-[#333333] text-[1.3rem] font-bold'>Spider <span className="text-green-900">Control</span></p>
</div>

    {/*Item 3*/}
    <div
    data-aos="flip-right"
     data-aos-duration="1000"
    className='flex flex-col items-center'>
<div className='w-[100px] h-[100px] rounded-[50%]  overflow-hidden text-center border-2 border-green-700 hover:bg-green-900/30 cursor-pointer  hover:scale-110 hover:duration-700 duration-700 mb-[10px]'>
    <img src={roaches}/>
</div>
<p className='text-[#333333] text-[1.3rem] font-bold'>Roaches <span className="text-green-900">Control</span></p>
</div>

   {/*Item 4*/}
   <div 
   data-aos="flip-right"
     data-aos-duration="1000"
   className='flex flex-col items-center'>
<div className='w-[100px] h-[100px] rounded-[50%] overflow-hidden text-center border-2 border-green-700 hover:bg-green-900/30 cursor-pointer  hover:scale-110 hover:duration-700 duration-700 mb-[10px]'>
    <img src={ants}/>
</div>
<p className='text-[#333333] text-[1.3rem] font-bold'>Ants <span className="text-green-900">Control</span></p>
</div>

   {/*Item 5*/}
   <div
   data-aos="flip-right"
     data-aos-duration="1000"
   className='flex flex-col items-center'>
<div className='w-[100px] h-[100px] rounded-[50%] overflow-hidden text-center border-2 border-green-700 hover:bg-green-900/30 cursor-pointer  hover:scale-110 hover:duration-700 duration-700 mb-[10px]'>
    <img src={gardenPests}/>
</div>
<p className='text-[#333333] text-[1.3rem] font-bold'>Garden Pests <span className="text-green-900">Control</span></p>
</div>

   {/*Item 6*/}
   <div 
   data-aos="flip-right"
     data-aos-duration="1000"
   className='flex flex-col items-center'>
<div className='w-[100px] h-[100px] rounded-[50%] overflow-hidden text-center border-2 border-green-700 hover:bg-green-900/30 cursor-pointer  hover:scale-110 hover:duration-700 duration-700 mb-[10px]'>
     <img src={flyers}/>
     </div>
     <p className='text-[#333333] text-[1.3rem] font-bold'>Flyers <span className="text-green-900">Control</span></p>
</div>



    </div>
   </div>
   </>
  )
}

export default Services