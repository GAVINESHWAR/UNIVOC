import { faBell, faEnvelope, faPhoneAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-[#4f8729] to-[#3b6d21] text-white py-2 w-full z-10 shadow-lg overflow-hidden flex justify-center items-center">
        <div className="whitespace-nowrap flex items-center space-x-8 px-2 animate-scroll gap-5">
          <span className="flex items-center space-x-2 text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-300" />
            <span>1800-XXXX-XXXX</span>
          </span>
          <span className="flex items-center space-x-2 text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-300" />
            <span>info@Univoc.com</span>
          </span>
          <span className="flex items-center space-x-2 text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faTags} className="text-yellow-300" />
            <span>Exclusive Discounts Available Now!</span>
          </span>
          <span className="flex items-center space-x-2 text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
            <FontAwesomeIcon icon={faBell} className="text-yellow-300" />
            <span>Sign Up for Latest Updates</span>
          </span>
        </div>
      </div>

      {/* Navbar section */}
      <div className="p-2 mb-2 flex justify-between items-center max-w-full transition-all ease-in-out bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-md">
        {/* Logo */}
        <div className="text-lg font-bold">
          <img src={logo} alt="Univoc Logo" className="h-12 w-auto mx-3 transition-transform duration-300 transform hover:scale-105" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="space-x-6 font-semibold mx-3 hidden md:flex items-center text-black">
          <ul className="flex space-x-6">
            <li>
              <NavLink to='/contact' className="transition-all duration-300 ease-in-out text-gray-800 bg-transparent border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 py-2 px-4 rounded">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className="transition-all duration-300 ease-in-out text-gray-800 bg-transparent border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 py-2 px-4 rounded">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' className="transition-all duration-300 ease-in-out text-gray-800 bg-transparent border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 py-2 px-4 rounded">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to='/services' className="transition-all duration-300 ease-in-out text-gray-800 bg-transparent border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 py-2 px-4 rounded">
                Services
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none transition-transform transform hover:scale-110" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
