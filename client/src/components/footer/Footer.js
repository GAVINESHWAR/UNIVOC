import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import icons

const Footer = () => {
    return (
        
        <footer className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-3 px-2">

            <div className="container mx-auto flex flex-wrap justify-between items-start">
                {/* Logo and Description */}
                <div className="w-1/5 md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
                    <img src={logo} alt="Univoc Logo" className="mx-auto md:mx-0 w-24 mb-2" />
                    <p className="text-black font-semibold">Univoc  
                        <br/> Empowering Solutions for Tomorrow</p>
                </div>
                
                {/* Navigation Links */}
                <div className="w-1/5 md:w-1/5 mb-6 md:mb-0">
                    <h4 className="font-semibold mb-2 text-black">Quick Links</h4>
                    <ul>
                        <li><a href="/about" className="text-black hover:text-blue-400">About Us</a></li>
                        <li><a href="/services" className="text-black hover:text-blue-400">Services</a></li>
                        <li><a href="/blog" className="text-black hover:text-blue-400">Blog</a></li>
                        <li><a href="/contact" className="text-black hover:text-blue-400">Contact</a></li>
                        <li><a href="/careers" className="text-black hover:text-blue-400">Careers</a></li>
                    </ul>
                </div>
                
                {/* Contact Info */}
                <div className="w-1/5 md:w-1/5 mb-6 md:mb-0">
                    <h4 className="text-black font-semibold mb-2">Contact Us</h4>
                    <p className="text-black"><FontAwesomeIcon icon="phone-alt" className="mr-2" /> +123 456 7890</p>
                    <p className="text-black"><FontAwesomeIcon icon="envelope" className="mr-2" /> univoctech@gmail.com</p>
                    <p className="text-black"><FontAwesomeIcon icon="map-marker-alt" className="mr-2" /> Noida, Delhi, India</p>
                </div>
                
                {/* Social Media Links */}
                <div className="w-1/5 md:w-1/5 mb-6 md:mb-0">
                    <h4 className="text-black font-semibold mb-2">Connect with Us</h4>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-black hover:text-blue-400 text-2xl">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com" className="text-black hover:text-blue-400 text-2xl">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://linkedin.com" className="text-black hover:text-blue-400 text-2xl">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://instagram.com" className="text-black hover:text-blue-400 text-2xl">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                {/* Our Team Section */}
                <div className="w-1/5 md:w-1/5 mb-6 md:mb-0">
                    <h4 className="text-black font-semibold mb-2">Our Team</h4>
                    <p className="text-black">Meet the dedicated team behind Univoc’s success. <a href="/team" className="text-blue-700 hover:text-white"><br/>Learn more</a></p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-blue-800 py-1 mt-2 text-center text-blue-200">
                <p>&copy; 2024 Univoc. All Rights Reserved | <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a> | <a href="/terms" className="hover:text-blue-400">Terms of Service</a></p>
            </div>
        </footer>
    );
};

export default Footer;
