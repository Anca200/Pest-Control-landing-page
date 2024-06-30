import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from "../components/About";
import Services from '../components/Services';
import Contact from "../components/contact";
import Faq from "../components/Faq";
import Footer from '../components/Footer';
import Price from "../components/Price";
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
 <>
 <Navbar/>
 <Hero/>
 <About/>
 <Services/>
 <Contact/>
 <Price/>
 <Faq/>
 <Testimonials/>
 <Footer/>
 </>
  )
}

export default Home