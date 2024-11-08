import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-blue-600 text-white py-2 w-full z-20 flex overflow-hidden">
        <div className="whitespace-nowrap animate-scroll flex items-center space-x-16 px-4">
          <span className="mr-4 px-3 hover:text-yellow-300 transition cursor-pointer">1800-XXXX-XXXX</span>
          <span className='px-3 hover:text-yellow-300 transition cursor-pointer'>info@Univoc.com</span>
          <span className='px-3 hover:text-yellow-300 transition cursor-pointer'>Exclusive Discounts Available Now!</span>
          <span className='px-3 hover:text-yellow-300 transition cursor-pointer'>Sign Up for Latest Updates</span>
        </div>
      </div>

      {/* Navbar section*/}
      <div className="bg-blue-900 text-white p-3 flex justify-between items-center mt-13 ">
        <div className="text-lg font-bold">
          <img src={logo} alt="Univoc Logo" className="h-14 w-auto" /> 
        </div>

        <div className="space-x-4">
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#register" className="hover:underline">Register</a>
          <a href="#services" className="hover:underline">Services</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
