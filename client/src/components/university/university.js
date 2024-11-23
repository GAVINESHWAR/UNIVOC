import React from "react";
import university from '../../images/niilm uni.png';

const University = () => {
    return (
        <div className="container text-center px-4">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-8">
                In Collaboration With
            </h1>
            <img 
                src={university} 
                alt="University" 
                className="mx-auto my-4" 
                style={{ width: '80%' }} 
            />
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4">
                NIILM UNIVERSITY
            </h1>

            {/* Button below the heading */}
            <a href="/about" className="block w-max mx-auto">
                <button className="border-2 border-blue-500 text-blue-500 bg-blue-100 py-2 px-6 rounded-full text-lg font-medium shadow-sm hover:bg-blue-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    About
                </button>
            </a>

            
        </div>
    );
};

export default University;
