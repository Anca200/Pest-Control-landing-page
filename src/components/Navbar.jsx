import React, {useState} from 'react';
import { MdPestControl } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    {/*for nav menu*/}
    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
  return (
 <>
 <nav className='flex justify-between w-full h-[80px] items-center text-center text-[#333333] p-[1rem] text-[1.1rem] font-heroFont max-lg:p-0 max-lg:text-[1rem]'>
    <div>
     <h2 className='text-[1.2rem] flex items-center'> <MdPestControl className='text-green-900' size={30}/> Pest <span className='text-green-900 font-extrabold text-[1.3rem]'>Control</span></h2>
    </div>
    <div  className={
          nav
            ? 'ease-in duration-300 fixed text-gray-200 left-0 top-0 w-full h-auto bg-[#113D3C] px-4 py-7 z-10 '
            : 'max-lg:hidden'}> 
    <ul className={nav ? "flex  flex-col gap-[20px] cursor-pointer text-[1.2rem] font-bold " : "flex  gap-5 group  font-bold text-[1.2rem] max-lg:hidden"}>
     <a href="#about"><li>About</li></a>
       <a href="#services"><li>Services</li></a>
       <a href="#pricing"><li>Pricing</li></a>
       <a href="#faq"><li>FAQ</li></a>
    </ul>
    </div>
    <div>
        <a href="#contact">
        <button className='bg-[#FF6F61] rounded-[10px] p-[10px] text-[white] font-bold flex gap-[10px] items-center'>
        <FaPhoneAlt className="text-[#fff]"/>Call Us
        </button>
        </a>
    </div>
        {/*nav menu*/}
        <button onClick={handleNav} className=" hidden max-lg:block z-10 mr-[20px]">
        <FaBars className='text-[#FF6F61] ' size={30}/>
    </button>
 </nav>
 </>
  )
}

export default Navbar