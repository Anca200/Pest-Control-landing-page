import React from 'react';
import person_1 from "../assets/person_1.jpg"
import person_2 from "../assets/person_2.jpg"


const Testimonials = () => {
  return (
<> <h2 className=' text-center mt-[100px] mb-[100px] text-[#333333] text-[3rem] font-bold font-heroFont'>What Our <span className='text-green-900'>Clients</span> Say</h2>
<div
data-aos="fade-up" 
className='text-center items-center w-full h-auto flex justify-center max-lg:flex-col text-[#333333] font-heroFont'>
    <div className='grid grid-cols-3 gap-x-[50px] max-lg:grid-cols-1 max-lg:gap-y-[80px]'>
        <div className='w-[350px] h-[500px] shadow-lg rounded-[20px] flex flex-col items-center text-center relative'>
         <div className='w-[100px] h-[100px] rounded-[50px] absolute top-[-50px]'>
         <img src={person_1} className='rounded-[50px] border-2 border-green-600'/>
         </div>
         <h2 className='font-bold text-[1.2rem] mt-[60px]'>Sarah M.</h2>
         <p className='p-[20px] leading-7'>I was having a major issue with ants and spiders in my home, and it seemed like no matter what I tried, they kept coming back. I decided to give [Pest Control Company] a try, and I'm so glad I did! Their technician was thorough, professional, and incredibly knowledgeable. Within a week, my pest problem was under control, and I haven't seen a single ant or spider since. The quarterly follow-ups give me peace of mind knowing my home is protected year-round. Highly recommend!</p>
        </div>

        <div className='w-[350px] h-[500px] shadow-lg rounded-[20px] flex flex-col items-center text-center relative '>
        <div className='w-[100px] h-[100px] rounded-[50px] absolute mt-[-50px]'> 
        <img src={person_2} className='rounded-[50px] border-2 border-green-600'/>
         </div>
         <h2 className='font-bold text-[1.2rem] mt-[60px]'>John L.</h2>
         <p className='p-[20px] leading-7 '>After moving into a new house, we discovered a serious termite problem that was causing damage to our property. [Pest Control Company] came to our rescue with their Premium Plan. They handled the termite issue efficiently and also took care of a bed bug infestation we didn't even know we had. Their team is professional, prompt, and extremely thorough. The monthly follow-ups and free emergency visits make it worth every penny. Our home is now pest-free, and we couldn't be happier!</p>
     </div>


<div className='w-[350px] h-[500px] shadow-lg rounded-[20px] flex flex-col items-center text-center relative'>
<div className='w-[100px] h-[100px] rounded-[50px] absolute mt-[-50px]'>
<img src={person_1} className='rounded-[50px] object-cover w-[200px] border-2 border-green-600'/>
         </div>
         <h2 className='font-bold text-[1.2rem] mt-[60px]'>Emily R</h2>
         <p className='p-[20px] leading-7'>I initially signed up for the Basic Plan to keep my home free of common pests like ants and small rodents. The service was fantastic from the start. The technician was friendly and explained everything in detail, ensuring I understood the process. Since starting the service, I haven't had any pest issues, and I feel much more comfortable in my home. It's affordable and effective, and the peace of mind it brings is priceless. Thank you, [Pest Control Company]!</p>
</div>
    </div>
</div>
</>
  )
}

export default Testimonials